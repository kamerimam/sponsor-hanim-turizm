import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "sh_cookie_consent"; // "accepted" | "rejected"

function applyConsent(consent: "accepted" | "rejected") {
  // Tracking script'i bilgilendir
  (window as any).SH_TRACKING_DISABLED = consent !== "accepted";

  // Google Analytics consent — reddedilirse cerez yazmasin
  const gtag = (window as any).gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", {
      ad_storage: consent === "accepted" ? "granted" : "denied",
      analytics_storage: consent === "accepted" ? "granted" : "denied",
      ad_user_data: consent === "accepted" ? "granted" : "denied",
      ad_personalization: consent === "accepted" ? "granted" : "denied",
    });
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "rejected") {
        applyConsent(stored);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handle = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    applyConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Çerez bildirimi"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200 shadow-2xl"
    >
      <div className="container mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Bu site, deneyiminizi iyileştirmek ve site trafiğini analiz etmek için çerezler kullanır.
            "Kabul Et"e tıklayarak çerez kullanımını onaylamış olursunuz. Daha fazla bilgi için{" "}
            <Link
              href="/politikalar/cerez-politikasi"
              className="text-primary underline hover:text-primary/80"
            >
              Çerez Politikası
            </Link>
            'mızı inceleyebilirsiniz.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => handle("rejected")}
            className="flex-1 md:flex-initial px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => handle("accepted")}
            className="flex-1 md:flex-initial px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm"
          >
            Kabul Et
          </button>
          <button
            type="button"
            onClick={() => handle("rejected")}
            aria-label="Kapat"
            className="hidden md:flex w-9 h-9 items-center justify-center text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
