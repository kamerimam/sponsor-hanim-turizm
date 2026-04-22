import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useSeo } from "@/hooks/use-seo";
import { useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, CreditCard, Building, Wallet, CalendarClock, Loader2, BedDouble } from "lucide-react";
import { api, getTours, type Tour, type TourDate } from "@/lib/api";

const travelerSchema = z.object({
  firstName: z.string().min(2, { message: "Ad en az 2 karakter olmalıdır." }),
  lastName: z.string().min(2, { message: "Soyad en az 2 karakter olmalıdır." }),
  tcId: z.string().length(11, { message: "TC Kimlik No 11 haneli olmalıdır." }),
  birthDate: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: "Doğum tarihi GG/AA/YYYY formatında olmalıdır." }),
  phone: z.string().min(10, { message: "Geçerli bir telefon numarası girin." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi girin." }),
});

const capitalizeFirst = (s: string) => (s.length > 0 ? s.charAt(0).toLocaleUpperCase("tr-TR") + s.slice(1) : s);

const formSchema = z.object({
  tourId: z.string().min(1, { message: "Lütfen bir tur seçin." }),
  tourDateId: z.string().optional(),
  travelerCount: z.string().min(1, { message: "Kişi sayısı seçilmelidir." }),
  roomType: z.enum(["double", "single"]),
  travelers: z.array(travelerSchema).min(1),
  paymentPlan: z.enum(["full", "deposit"], { required_error: "Ödeme planı seçin." }),
  paymentMethod: z.enum(["credit_card", "bank_transfer"], { required_error: "Ödeme yöntemi seçin." }),

  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvv: z.string().optional(),

  agreements: z.object({
    onBilgilendirme: z.boolean().default(false).refine((val) => val === true, {
      message: "Ön Bilgilendirme Formunu kabul etmelisiniz.",
    }),
    paketTur: z.boolean().default(false).refine((val) => val === true, {
      message: "Paket Tur Sözleşmesini kabul etmelisiniz.",
    }),
    kvkk: z.boolean().default(false).refine((val) => val === true, {
      message: "KVKK Açık Rıza Beyanını kabul etmelisiniz.",
    }),
    ticariIletisim: z.boolean().default(false).optional(),
  }),
});

const SINGLE_SUPPLEMENT_DEFAULT = 200;

function currencySymbol(c: string | undefined): string {
  if (c === "TRY") return "₺";
  if (c === "EUR") return "€";
  return "$";
}

function formatAmount(amount: number, currency: string | undefined): string {
  const sym = currencySymbol(currency);
  return `${amount.toLocaleString("tr-TR")} ${sym}`;
}

export default function Odeme() {
  useSeo({
    title: "Rezervasyon & Ödeme",
    description: "Sponsor Hanım Turizm online rezervasyon ve ödeme sayfası. Tur seçiminizi yapın, güvenli ödeme ile yerinizi ayırtın.",
    noIndex: true,
  });

  const [, setLocation] = useLocation();
  const [tours, setTours] = useState<Tour[]>([]);
  const [toursLoading, setToursLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    paymentPlan: string;
    payableNow: number;
    remainingAmount: number;
    bookingNumber: string;
    currency: string;
  } | null>(null);

  const searchParams = new URLSearchParams(window.location.search);
  const defaultTourId = searchParams.get("tour") || "";
  const defaultDateId = searchParams.get("date") || "";

  const emptyTraveler = { firstName: "", lastName: "", tcId: "", birthDate: "", phone: "", email: "" };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tourId: defaultTourId,
      tourDateId: defaultDateId,
      travelerCount: "1",
      roomType: "double",
      travelers: [emptyTraveler],
      paymentPlan: "full",
      paymentMethod: "credit_card",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
      agreements: {
        onBilgilendirme: false,
        paketTur: false,
        kvkk: false,
        ticariIletisim: false,
      },
    },
  });

  const { fields, replace } = useFieldArray({ control: form.control, name: "travelers" });

  const watchPaymentMethod = form.watch("paymentMethod");
  const watchPaymentPlan = form.watch("paymentPlan");
  const watchTourId = form.watch("tourId");
  const watchTourDateId = form.watch("tourDateId");
  const watchTravelerCount = form.watch("travelerCount");
  const watchRoomType = form.watch("roomType");

  useEffect(() => {
    getTours().then((data) => {
      setTours(data);
      setToursLoading(false);
    });
  }, []);

  useEffect(() => {
    const count = parseInt(watchTravelerCount || "1");
    const current = form.getValues("travelers");
    if (count === current.length) return;
    const updated = Array.from({ length: count }, (_, i) => current[i] || { ...emptyTraveler });
    replace(updated);
  }, [watchTravelerCount]);

  // Tur değişince ilk tarihe sıfırla (URL ile gelen date varsa onu koru)
  useEffect(() => {
    if (toursLoading) return;
    const tour = tours.find((t) => String(t.id) === watchTourId);
    if (!tour) return;
    const dates = tour.dates ?? [];
    if (dates.length === 0) {
      form.setValue("tourDateId", "");
      return;
    }
    const currentDateId = form.getValues("tourDateId");
    const exists = dates.some((d) => String(d.id) === currentDateId);
    if (!exists) {
      form.setValue("tourDateId", String(dates[0].id));
    }
  }, [watchTourId, toursLoading, tours]);

  const selectedTour = useMemo(
    () => tours.find((t) => String(t.id) === watchTourId),
    [tours, watchTourId],
  );

  const selectedDate: TourDate | undefined = useMemo(() => {
    if (!selectedTour?.dates) return undefined;
    return selectedTour.dates.find((d) => String(d.id) === watchTourDateId);
  }, [selectedTour, watchTourDateId]);

  const unitPrice = selectedDate ? Number(selectedDate.price) : 0;
  const currency = selectedDate?.currency || "USD";
  const supplement = selectedTour?.single_supplement
    ? Number(selectedTour.single_supplement)
    : SINGLE_SUPPLEMENT_DEFAULT;
  const travelerCountNum = parseInt(watchTravelerCount || "1");
  const singleExtra = watchRoomType === "single" ? supplement * travelerCountNum : 0;
  const totalPrice = unitPrice * travelerCountNum + singleExtra;
  const payableNow = watchPaymentPlan === "deposit" ? Math.round(totalPrice * 0.5) : totalPrice;
  const remainingAmount = watchPaymentPlan === "deposit" ? totalPrice - payableNow : 0;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const dateLabel = selectedDate?.date_text || selectedDate?.start_date || "—";
      const roomLabel = values.roomType === "single"
        ? `Tek kişilik oda (+${supplement} ${currencySymbol(currency)} / kişi)`
        : "2 kişilik standart oda";
      const specialRequests = [
        `Tur: ${selectedTour?.title || values.tourId}`,
        `Tarih: ${dateLabel}`,
        `Oda: ${roomLabel}`,
        `Odeme plani: ${values.paymentPlan === "deposit" ? "Kapora (%50)" : "Tam odeme"}`,
        `Toplam: ${totalPrice} ${currency} | Simdi: ${payableNow} ${currency} | Kalan: ${remainingAmount} ${currency}`,
      ].join("\n");

      const travelersIso = values.travelers.map((t) => {
        const m = t.birthDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        return m ? { ...t, birthDate: `${m[3]}-${m[2]}-${m[1]}` } : t;
      });

      const result = await api.createBooking({
        tourId: values.tourId,
        travelerCount: parseInt(values.travelerCount),
        travelers: travelersIso,
        paymentPlan: values.paymentPlan,
        paymentMethod: values.paymentMethod,
        specialRequests,
      });

      setSuccessData({
        paymentPlan: values.paymentPlan,
        payableNow,
        remainingAmount,
        bookingNumber: result.booking.booking_number,
        currency,
      });
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Rezervasyon olusturulamadi.";
      setSubmitError(msg);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex-1 flex items-center justify-center py-24 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full text-center space-y-6"
        >
          <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-foreground">Rezervasyonunuz Alındı</h2>
          <p className="text-muted-foreground">
            Tebrikler! Kutsal yolculuğunuz için ilk adımı attınız. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
          {successData?.bookingNumber && (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Rezervasyon Numaranız</p>
              <p className="font-mono font-bold text-lg text-primary">{successData.bookingNumber}</p>
            </div>
          )}
          {successData?.paymentPlan === "deposit" && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm text-left space-y-1">
              <p className="font-medium text-foreground">Ödeme Planınız: Kapora (%50)</p>
              <p className="text-muted-foreground">Kapora tutarı: <span className="font-semibold text-primary">{formatAmount(successData.payableNow, successData.currency)}</span></p>
              <p className="text-muted-foreground">Tur günü ödenecek: <span className="font-semibold text-foreground">{formatAmount(successData.remainingAmount, successData.currency)}</span></p>
            </div>
          )}
          <Button
            className="w-full mt-8"
            onClick={() => setLocation("/")}
          >
            Ana Sayfaya Dön
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-muted/30 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Rezervasyon & Ödeme</h1>
          <p className="text-muted-foreground">Lütfen yolcu ve ödeme bilgilerinizi eksiksiz doldurun.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-8">
              {/* Traveler Info */}
              {fields.map((item, index) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="font-serif">
                      {fields.length > 1 ? `${index + 1}. Yolcu Bilgileri` : "Yolcu Bilgileri"}
                    </CardTitle>
                    <CardDescription>
                      {fields.length > 1
                        ? `${index + 1}. yolcunun kimlik bilgileri.`
                        : "Seyahat edecek kişinin kimlik bilgileri."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`travelers.${index}.firstName`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Adınız</FormLabel>
                            <FormControl>
                              <Input placeholder="Ahmet" {...field} onChange={(e) => field.onChange(capitalizeFirst(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`travelers.${index}.lastName`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Soyadınız</FormLabel>
                            <FormControl>
                              <Input placeholder="Yılmaz" {...field} onChange={(e) => field.onChange(capitalizeFirst(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`travelers.${index}.tcId`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>TC Kimlik No</FormLabel>
                            <FormControl>
                              <Input placeholder="11 haneli TC no" maxLength={11} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`travelers.${index}.birthDate`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Doğum Tarihi</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="GG/AA/YYYY"
                                inputMode="numeric"
                                maxLength={10}
                                {...field}
                                onChange={(e) => {
                                  const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
                                  let formatted = digits;
                                  if (digits.length >= 5) {
                                    formatted = digits.slice(0, 2) + "/" + digits.slice(2, 4) + "/" + digits.slice(4);
                                  } else if (digits.length >= 3) {
                                    formatted = digits.slice(0, 2) + "/" + digits.slice(2);
                                  }
                                  field.onChange(formatted);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`travelers.${index}.phone`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">+90</span>
                                <Input
                                  className="pl-12"
                                  placeholder="5XX XXX XX XX"
                                  {...field}
                                  value={field.value.replace(/^\+90\s?/, "")}
                                  onChange={(e) => {
                                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                                    field.onChange(digits ? `+90 ${digits}` : "");
                                  }}
                                  inputMode="numeric"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`travelers.${index}.email`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-posta</FormLabel>
                            <FormControl>
                              <Input placeholder="ornek@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Oda Tipi */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <BedDouble className="w-5 h-5 text-primary" />
                    Oda Tipi
                  </CardTitle>
                  <CardDescription>
                    {selectedTour?.room_info || "Standart konaklama veya tek kişilik oda farkı seçimi."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="roomType"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <label className="flex items-center space-x-3 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value="double" />
                              <div className="font-medium w-full">
                                <span>Standart Oda Paylaşımlı</span>
                                <p className="text-xs text-muted-foreground font-normal mt-0.5">
                                  {selectedTour?.type === "Umre" ? "4 kişilik oda" : "2 kişilik oda"} — ek ücret yok
                                </p>
                              </div>
                            </label>
                            <label className="flex items-center space-x-3 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value="single" />
                              <div className="font-medium w-full flex items-center justify-between">
                                <div>
                                  <span>Tek Kişilik Oda</span>
                                  <p className="text-xs text-muted-foreground font-normal mt-0.5">
                                    Kişi başı ek ücret
                                  </p>
                                </div>
                                <span className="text-sm font-semibold text-primary">
                                  +{supplement} {currencySymbol(currency)} / kişi
                                </span>
                              </div>
                            </label>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Payment Plan Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Ödeme Planı</CardTitle>
                  <CardDescription>Tüm turlarımızda 2 taksit imkânı sunulmaktadır.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="paymentPlan"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <label className="flex items-center space-x-3 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value="full" />
                              <div className="font-medium flex items-center gap-2 w-full">
                                <Wallet className="w-4 h-4 text-primary" />
                                <div>
                                  <span>Tek Seferde Tam Ödeme</span>
                                  <p className="text-xs text-muted-foreground font-normal mt-0.5">Toplam tutarın tamamını şimdi ödeyin.</p>
                                </div>
                              </div>
                            </label>
                            <label className="flex items-center space-x-3 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value="deposit" />
                              <div className="font-medium flex items-center gap-2 w-full">
                                <CalendarClock className="w-4 h-4 text-primary" />
                                <div>
                                  <span>2 Taksit (%50 + %50)</span>
                                  <p className="text-xs text-muted-foreground font-normal mt-0.5">Şimdi %50 ödeyin, kalan %50'yi tur günü ödeyin.</p>
                                </div>
                              </div>
                            </label>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {watchPaymentPlan === "deposit" && totalPrice > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-1"
                    >
                      <p className="text-sm font-medium text-foreground">Taksit Detayı</p>
                      <div className="text-sm text-muted-foreground space-y-0.5">
                        <p>Şimdi ödenecek (%50): <span className="font-semibold text-primary">{formatAmount(payableNow, currency)}</span></p>
                        <p>Tur günü ödenecek (%50): <span className="font-semibold text-foreground">{formatAmount(remainingAmount, currency)}</span></p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Ödeme Yöntemi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <label className="flex items-center space-x-3 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value="credit_card" />
                              <div className="font-medium flex items-center gap-2 w-full">
                                <CreditCard className="w-4 h-4 text-primary" />
                                Kredi / Banka Kartı
                              </div>
                            </label>
                            <label className="flex items-center space-x-3 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value="bank_transfer" />
                              <div className="font-medium flex items-center gap-2 w-full">
                                <Building className="w-4 h-4 text-primary" />
                                Banka Havalesi / EFT
                              </div>
                            </label>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <motion.div
                    initial={false}
                    animate={{ height: watchPaymentMethod === "credit_card" ? "auto" : 0, opacity: watchPaymentMethod === "credit_card" ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 pt-4 border-t">
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Kart Numarası</FormLabel>
                            <FormControl>
                              <Input placeholder="0000 0000 0000 0000" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="cardExpiry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Son Kullanma (AA/YY)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="AA/YY"
                                  {...field}
                                  inputMode="numeric"
                                  maxLength={5}
                                  onChange={(e) => {
                                    let digits = e.target.value.replace(/\D/g, "").slice(0, 4);
                                    if (digits.length >= 3) {
                                      digits = digits.slice(0, 2) + "/" + digits.slice(2);
                                    }
                                    field.onChange(digits);
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cardCvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input placeholder="123" maxLength={3} {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={false}
                    animate={{ height: watchPaymentMethod === "bank_transfer" ? "auto" : 0, opacity: watchPaymentMethod === "bank_transfer" ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 pt-4 space-y-2 mt-4">
                      <h4 className="font-medium text-foreground">Banka Bilgileri</h4>
                      <p className="text-sm text-muted-foreground">
                        {watchPaymentPlan === "deposit"
                          ? `Lütfen kapora tutarını (${formatAmount(payableNow, currency)}) aşağıdaki hesaba gönderin.`
                          : "Lütfen toplam tutarı aşağıdaki hesaba gönderin."}
                      </p>
                      <div className="bg-background p-3 rounded border text-sm mt-2">
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                          <span className="text-muted-foreground">Hesap Adı:</span>
                          <span className="font-medium">Sevinç Baş</span>
                          <span className="text-muted-foreground">Banka:</span>
                          <span className="font-medium">QNB Enpara</span>
                          <span className="text-muted-foreground">IBAN:</span>
                          <span className="font-medium font-mono">TR45 0015 7000 0000 0115 0921 36</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </CardContent>
              </Card>

              {/* Agreements Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Sözleşmeler ve Onaylar</CardTitle>
                  <CardDescription>Lütfen rezervasyonu tamamlamadan önce aşağıdaki sözleşmeleri okuyup onaylayın.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="agreements.onBilgilendirme"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none w-full">
                          <FormLabel className="text-sm font-medium leading-none font-normal">
                            <a href="/politikalar/on-bilgilendirme-formu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Ön Bilgilendirme Formunu</a> okudum ve kabul ediyorum.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agreements.paketTur"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none w-full">
                          <FormLabel className="text-sm font-medium leading-none font-normal">
                            <a href="/politikalar/paket-tur-sozlesmesi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Paket Tur Sözleşmesini</a> okudum ve kabul ediyorum.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agreements.kvkk"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none w-full">
                          <FormLabel className="text-sm font-medium leading-none font-normal">
                            <a href="/politikalar/kvkk-acik-riza-beyani" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">KVKK Açık Rıza Beyanını</a> okudum ve kabul ediyorum.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agreements.ticariIletisim"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none w-full">
                          <FormLabel className="text-sm font-medium leading-none font-normal">
                            <a href="/politikalar/ticari-iletisim-onay" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Ticari İletişim ve E-Bülten</a> gönderimini onaylıyorum. (İsteğe Bağlı)
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-lg border-primary/20">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <CardTitle className="font-serif">Sipariş Özeti</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <FormField
                    control={form.control}
                    name="tourId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tur Seçimi</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={toursLoading ? "Yükleniyor..." : "Tur Seçin"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tours.map(tour => (
                              <SelectItem key={tour.id} value={String(tour.id)}>{tour.title}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {selectedTour && (selectedTour.dates ?? []).length > 0 && (
                    <FormField
                      control={form.control}
                      name="tourDateId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kalkış Tarihi</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || ""}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Tarih Seçin" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {(selectedTour.dates ?? []).map((d) => (
                                <SelectItem key={d.id} value={String(d.id)}>
                                  {d.date_text || d.start_date} — {formatAmount(Number(d.price), d.currency)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="travelerCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kişi Sayısı</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="1" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num} Kişi</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tur Bedeli ({watchTravelerCount} kişi)</span>
                      <span>{selectedDate ? formatAmount(unitPrice * travelerCountNum, currency) : "—"}</span>
                    </div>
                    {watchRoomType === "single" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tek Kişilik Oda Farkı ({travelerCountNum}× {supplement})</span>
                        <span>+{formatAmount(singleExtra, currency)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Vergiler & Harçlar</span>
                      <span>Dahil</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="font-medium">Toplam Tutar</span>
                      <span className={`text-2xl font-bold ${watchPaymentPlan === "deposit" ? "text-muted-foreground line-through text-lg" : "text-primary"}`}>
                        {formatAmount(totalPrice, currency)}
                      </span>
                    </div>

                    {watchPaymentPlan === "deposit" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-2 pt-2 border-t border-dashed"
                      >
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Şimdi Ödenecek (%50)</span>
                          <span className="font-semibold text-primary">{formatAmount(payableNow, currency)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tur Günü Ödenecek (%50)</span>
                          <span className="font-semibold">{formatAmount(remainingAmount, currency)}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {submitError && (
                    <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-md p-3">
                      {submitError}
                    </div>
                  )}
                  <Button type="submit" size="lg" className="w-full font-serif text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Gönderiliyor...
                      </>
                    ) : (
                      'Rezervasyon Yap'
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    "Rezervasyon Yap" butonuna tıklayarak iptal ve iade koşullarını kabul etmiş olursunuz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
