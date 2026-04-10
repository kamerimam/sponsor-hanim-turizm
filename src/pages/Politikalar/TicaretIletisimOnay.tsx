import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

export default function TicaretIletisimOnay() {
  useSeo({
    title: "Ticari İletişim / E-Bülten Onayı",
    description: "Sponsor Hanım Turizm'den ticari elektronik ileti (SMS, e-posta, arama) alma tercihlerinizi yönetin.",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="mb-10">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Yasal Bilgiler</span>
          <h1 className="font-serif text-4xl font-bold text-foreground mt-2 mb-4">
            Ticari İletişim / E-Bülten Onayı
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6 leading-relaxed">
          <p className="text-foreground/60 italic">
            Bu sayfa yakında güncellenecektir. İçerik için lütfen daha sonra tekrar ziyaret ediniz.
          </p>
        </div>
      </div>
    </div>
  );
}
