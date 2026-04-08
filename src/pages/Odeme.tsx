import { useState, useEffect } from "react";
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
import { CheckCircle2, CreditCard, Building, Wallet, CalendarClock } from "lucide-react";

const travelerSchema = z.object({
  firstName: z.string().min(2, { message: "Ad en az 2 karakter olmalıdır." }),
  lastName: z.string().min(2, { message: "Soyad en az 2 karakter olmalıdır." }),
  tcId: z.string().length(11, { message: "TC Kimlik No 11 haneli olmalıdır." }),
  birthDate: z.string().min(1, { message: "Doğum tarihi zorunludur." }),
  phone: z.string().min(10, { message: "Geçerli bir telefon numarası girin." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi girin." }),
});

const formSchema = z.object({
  tourId: z.string().min(1, { message: "Lütfen bir tur seçin." }),
  travelerCount: z.string().min(1, { message: "Kişi sayısı seçilmelidir." }),
  travelers: z.array(travelerSchema).min(1),
  paymentPlan: z.enum(["full", "deposit"], { required_error: "Ödeme planı seçin." }),
  paymentMethod: z.enum(["credit_card", "bank_transfer"], { required_error: "Ödeme yöntemi seçin." }),

  // Credit card fields - optional based on payment method
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

const TOURS = [
  { id: "1", title: "Mısır Turu — Hurghada & Kahire", price: 800 },
  { id: "6", title: "Mısır Turu — Sharm El Şeyh & Kahire (5★)", price: 900 },
  { id: "2", title: "Umre Turu (Ekonomik)", price: 2800 },
  { id: "3", title: "Umre Turu (Premium)", price: 4500 },
  { id: "4", title: "Hac Turu 2025", price: 7500 },
  { id: "5", title: "Mısır + Umre Kombine", price: 5800 },
  { id: "7", title: "Bali & Gili Adaları Turu", price: 1650 },
];

export default function Odeme() {
  useSeo({
    title: "Rezervasyon & Ödeme",
    description: "Sponsor Hanım Turizm online rezervasyon ve ödeme sayfası. Tur seçiminizi yapın, güvenli ödeme ile yerinizi ayırtın.",
  });

  const [, setLocation] = useLocation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [successData, setSuccessData] = useState<{ paymentPlan: string; payableNow: number; remainingAmount: number } | null>(null);

  // Initialize URL search params manually since we don't have a wouter hook for it
  const searchParams = new URLSearchParams(window.location.search);
  const defaultTourId = searchParams.get("tour") || "";

  const emptyTraveler = { firstName: "", lastName: "", tcId: "", birthDate: "", phone: "", email: "" };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tourId: defaultTourId,
      travelerCount: "1",
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
  const watchTravelerCount = form.watch("travelerCount");

  useEffect(() => {
    const count = parseInt(watchTravelerCount || "1");
    const current = form.getValues("travelers");
    if (count === current.length) return;
    const updated = Array.from({ length: count }, (_, i) => current[i] || { ...emptyTraveler });
    replace(updated);
  }, [watchTravelerCount]);

  const selectedTour = TOURS.find(t => t.id === watchTourId);
  const totalPrice = selectedTour ? selectedTour.price * parseInt(watchTravelerCount || "1") : 0;
  const payableNow = watchPaymentPlan === "deposit" ? Math.round(totalPrice * 0.5) : totalPrice;
  const remainingAmount = watchPaymentPlan === "deposit" ? totalPrice - payableNow : 0;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted", values);
    setSuccessData({ paymentPlan: values.paymentPlan, payableNow, remainingAmount });
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          {successData?.paymentPlan === "deposit" && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm text-left space-y-1">
              <p className="font-medium text-foreground">Ödeme Planınız: Kapora (%50)</p>
              <p className="text-muted-foreground">Kapora tutarı: <span className="font-semibold text-primary">{successData.payableNow} USD</span></p>
              <p className="text-muted-foreground">Tur günü ödenecek: <span className="font-semibold text-foreground">{successData.remainingAmount} USD</span></p>
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
              {/* Traveler Info - one card per traveler */}
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
                              <Input placeholder="Ahmet" {...field} onChange={(e) => field.onChange(e.target.value.replace(/\b\w/g, (c) => c.toLocaleUpperCase("tr-TR")))} />
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
                              <Input placeholder="Yılmaz" {...field} onChange={(e) => field.onChange(e.target.value.replace(/\b\w/g, (c) => c.toLocaleUpperCase("tr-TR")))} />
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
                              <Input type="date" {...field} />
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

              {/* Payment Plan Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Ödeme Planı</CardTitle>
                  <CardDescription>Ödemenizi nasıl yapmak istediğinizi seçin.</CardDescription>
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
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="full" />
                              </FormControl>
                              <FormLabel className="font-medium flex items-center gap-2 cursor-pointer w-full">
                                <Wallet className="w-4 h-4 text-primary" />
                                <div>
                                  <span>Tek Seferde Tam Ödeme</span>
                                  <p className="text-xs text-muted-foreground font-normal mt-0.5">Toplam tutarın tamamını şimdi ödeyin.</p>
                                </div>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="deposit" />
                              </FormControl>
                              <FormLabel className="font-medium flex items-center gap-2 cursor-pointer w-full">
                                <CalendarClock className="w-4 h-4 text-primary" />
                                <div>
                                  <span>Kapora Ödemesi (%50)</span>
                                  <p className="text-xs text-muted-foreground font-normal mt-0.5">Şimdi %50 ödeyin, kalan %50'yi tur günü ödeyin.</p>
                                </div>
                              </FormLabel>
                            </FormItem>
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
                      <p className="text-sm font-medium text-foreground">Kapora Detayı</p>
                      <div className="text-sm text-muted-foreground space-y-0.5">
                        <p>Şimdi ödenecek: <span className="font-semibold text-primary">{payableNow} USD</span></p>
                        <p>Tur günü ödenecek: <span className="font-semibold text-foreground">{remainingAmount} USD</span></p>
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
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="credit_card" />
                              </FormControl>
                              <FormLabel className="font-medium flex items-center gap-2 cursor-pointer w-full">
                                <CreditCard className="w-4 h-4 text-primary" />
                                Kredi / Banka Kartı
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="bank_transfer" />
                              </FormControl>
                              <FormLabel className="font-medium flex items-center gap-2 cursor-pointer w-full">
                                <Building className="w-4 h-4 text-primary" />
                                Banka Havalesi / EFT
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Conditional Payment Fields */}
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
                          ? `Lütfen kapora tutarını (${payableNow} USD) aşağıdaki hesaba gönderin.`
                          : "Lütfen toplam tutarı aşağıdaki hesaba gönderin."}
                      </p>
                      <div className="bg-background p-3 rounded border text-sm mt-2">
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                          <span className="text-muted-foreground">Hesap Adı:</span>
                          <span className="font-medium">Sponsor Hanım Turizm A.Ş.</span>
                          <span className="text-muted-foreground">Banka:</span>
                          <span className="font-medium">Kuveyt Türk</span>
                          <span className="text-muted-foreground">IBAN:</span>
                          <span className="font-medium font-mono">TR12 0000 0000 0000 0000 0000 00</span>
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
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Tur Seçin" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {TOURS.map(tour => (
                              <SelectItem key={tour.id} value={tour.id}>{tour.title}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                      <span>{selectedTour ? `${selectedTour.price} USD` : "0 USD"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Vergiler & Harçlar</span>
                      <span>Dahil</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="font-medium">Toplam Tutar</span>
                      <span className={`text-2xl font-bold ${watchPaymentPlan === "deposit" ? "text-muted-foreground line-through text-lg" : "text-primary"}`}>{totalPrice} USD</span>
                    </div>

                    {watchPaymentPlan === "deposit" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-2 pt-2 border-t border-dashed"
                      >
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Şimdi Ödenecek (%50)</span>
                          <span className="font-semibold text-primary">{payableNow} USD</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tur Günü Ödenecek (%50)</span>
                          <span className="font-semibold">{remainingAmount} USD</span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full font-serif text-lg">
                    Rezervasyon Yap
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
