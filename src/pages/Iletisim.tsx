import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSeo } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";

const formSchema = z.object({
  name: z.string().min(2, { message: "Ad en az 2 karakter olmalıdır." }),
  phone: z.string().min(10, { message: "Geçerli bir telefon numarası girin." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi girin." }),
  subject: z.string().min(3, { message: "Konu en az 3 karakter olmalıdır." }),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter olmalıdır." }),
});

type FormValues = z.infer<typeof formSchema>;

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Adres",
    lines: ["Büyük Toygar Han, Hacı Bayram,", "Alsancak Sk. D:1/64, 06050", "Altındağ/Ankara"],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["0544 498 62 08"],
  },
  {
    icon: Mail,
    title: "E-posta",
    lines: ["sponsorhanim@gmail.com"],
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    lines: ["Pazartesi - Cumartesi", "09:00 - 18:00"],
  },
];

export default function Iletisim() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useSeo({
    title: "İletişim",
    description: "Sponsor Hanım Turizm iletişim bilgileri. Turlarımız hakkında bilgi almak ve rezervasyon yapmak için bize ulaşın. Ankara - 0544 498 62 08",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSending(true);
    try {
      await api.sendContactMessage(values);
      setIsSuccess(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error('Mesaj gönderilemedi:', err);
      alert('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-primary/5 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Her Zaman Yanınızdayız
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-muted-foreground text-lg">
              Turlarımız hakkında bilgi almak, rezervasyon yapmak veya herhangi bir sorunuz için
              bize ulaşabilirsiniz.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              İletişim Bilgileri
            </h2>

            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0 h-fit">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://wa.me/905444986208?text=Merhaba%2C%20turlar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl p-5 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <div>
                  <div className="font-semibold">WhatsApp ile Yazın</div>
                  <div className="text-sm text-white/90">Hızlı yanıt için WhatsApp'tan ulaşın</div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* İletişim Formu */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Mesajınız Gönderildi
                </h2>
                <p className="text-muted-foreground max-w-md">
                  En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                  Yeni Mesaj Gönder
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 md:p-10">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Mesaj Gönderin
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Formu doldurun, size en kısa sürede dönüş yapalım.
                    </p>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Adınız Soyadınız</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ahmet Yılmaz" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Telefon</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                                      +90
                                    </span>
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
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
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

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Konu</FormLabel>
                              <FormControl>
                                <Input placeholder="Tur hakkında bilgi almak istiyorum" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mesajınız</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Mesajınızı buraya yazın..."
                                  className="min-h-[150px] resize-y"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" disabled={isSending} className="w-full md:w-auto font-serif text-lg px-10">
                          {isSending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                          {isSending ? "Gönderiliyor..." : "Gönder"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            Bizi Ziyaret Edin
          </h2>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-[400px]">
            <iframe
              title="Sponsor Hanım Turizm Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.8!2d32.8553!3d39.9417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU2JzMwLjEiTiAzMsKwNTEnMTkuMSJF!5e0!3m2!1str!2str!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
