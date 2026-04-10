import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { useSeo } from "@/hooks/use-seo";

export default function NotFound() {
  useSeo({
    title: "Sayfa Bulunamadı",
    description: "Aradığınız sayfa bulunamadı. Sponsor Hanım Turizm ana sayfasına dönerek tur seçeneklerimizi inceleyebilirsiniz.",
    noIndex: true,
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">404 — Sayfa Bulunamadı</h1>
          </div>
          <p className="mt-4 text-sm text-foreground/70">
            Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline">
            <Home className="w-4 h-4" /> Ana sayfaya dön
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
