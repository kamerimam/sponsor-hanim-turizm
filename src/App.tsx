import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/CookieBanner";
import { Spinner } from "@/components/ui/spinner";

// Lazy-loaded pages — each becomes its own JS chunk
const Home = lazy(() => import("@/pages/Home"));
const Turlar = lazy(() => import("@/pages/Turlar"));
const Odeme = lazy(() => import("@/pages/Odeme"));
const MisirHurghadaKahire = lazy(() => import("@/pages/TurDetay/MisirHurghadaKahire"));
const MisirSharmKahire = lazy(() => import("@/pages/TurDetay/MisirSharmKahire"));
const BaliGiliAdalari = lazy(() => import("@/pages/TurDetay/BaliGiliAdalari"));
const HacTuru2025 = lazy(() => import("@/pages/TurDetay/HacTuru2025"));
const UmrePremium = lazy(() => import("@/pages/TurDetay/UmrePremium"));
const MisirUmreKombine = lazy(() => import("@/pages/TurDetay/MisirUmreKombine"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogDetay = lazy(() => import("@/pages/BlogDetay"));
const Iletisim = lazy(() => import("@/pages/Iletisim"));
const KvkkAydinlatmaMetni = lazy(() => import("@/pages/Politikalar/KvkkAydinlatmaMetni"));
const KvkkAcikRizaBeyan = lazy(() => import("@/pages/Politikalar/KvkkAcikRizaBeyan"));
const CerezPolitikasi = lazy(() => import("@/pages/Politikalar/CerezPolitikasi"));
const IptalIadePolitikasi = lazy(() => import("@/pages/Politikalar/IptalIadePolitikasi"));
const VizeBilgilendirme = lazy(() => import("@/pages/Politikalar/VizeBilgilendirme"));
const KullanimKosullari = lazy(() => import("@/pages/Politikalar/KullanimKosullari"));
const OnBilgilendirmeFormu = lazy(() => import("@/pages/Politikalar/OnBilgilendirmeFormu"));
const TicaretIletisimOnay = lazy(() => import("@/pages/Politikalar/TicaretIletisimOnay"));
const PaketTurSozlesmesi = lazy(() => import("@/pages/Politikalar/PaketTurSozlesmesi"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="flex-1 flex items-center justify-center py-24">
      <Spinner className="w-8 h-8 text-primary" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/turlar" component={Turlar} />
        <Route path="/turlar/misir-hurghada-kahire" component={MisirHurghadaKahire} />
        <Route path="/turlar/misir-sharm-kahire" component={MisirSharmKahire} />
        <Route path="/turlar/bali-gili-adalari" component={BaliGiliAdalari} />
        <Route path="/turlar/hac-turu-2025" component={HacTuru2025} />
        <Route path="/turlar/umre-premium" component={UmrePremium} />
        <Route path="/turlar/misir-umre-kombine" component={MisirUmreKombine} />
        <Route path="/odeme" component={Odeme} />
        <Route path="/politikalar/kvkk-aydinlatma-metni" component={KvkkAydinlatmaMetni} />
        <Route path="/politikalar/kvkk-acik-riza-beyani" component={KvkkAcikRizaBeyan} />
        <Route path="/politikalar/cerez-politikasi" component={CerezPolitikasi} />
        <Route path="/politikalar/iptal-iade-politikasi" component={IptalIadePolitikasi} />
        <Route path="/politikalar/vize-bilgilendirme" component={VizeBilgilendirme} />
        <Route path="/politikalar/kullanim-kosullari" component={KullanimKosullari} />
        <Route path="/politikalar/on-bilgilendirme-formu" component={OnBilgilendirmeFormu} />
        <Route path="/politikalar/ticari-iletisim-onay" component={TicaretIletisimOnay} />
        <Route path="/politikalar/paket-tur-sozlesmesi" component={PaketTurSozlesmesi} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogDetay} />
        <Route path="/iletisim" component={Iletisim} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-primary/20">
            <Navbar />
            <main className="flex-1 flex flex-col">
              <Router />
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieBanner />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
