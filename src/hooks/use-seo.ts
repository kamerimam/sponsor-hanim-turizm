import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description: string;
  /** Sayfa yolu (örn: "/turlar/umre-premium"). Verilmezse window.location.pathname kullanılır. */
  path?: string;
  /** Sosyal paylaşımlarda görünecek görsel. Mutlak URL veya "/" ile başlayan yol. */
  image?: string;
  /** Arama motorları için anahtar kelimeler (opsiyonel — Google artık kullanmıyor ama Yandex/Bing hâlâ bakıyor). */
  keywords?: string;
  /** JSON-LD structured data objesi — Google'ın rich result için okuduğu şema. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** "noindex" için true — admin/ödeme gibi arama motorunda çıkmaması gereken sayfalarda. */
  noIndex?: boolean;
}

const SITE_URL = "https://sponsorhanimtravel.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

function upsertMeta(selector: string, attr: "name" | "property", attrValue: string, content: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, path, image, keywords, jsonLd, noIndex }: SeoOptions) {
  useEffect(() => {
    const suffix = " | Sponsor Hanım Turizm";
    const fullTitle = title.includes("Sponsor Hanım") ? title : title + suffix;
    document.title = fullTitle;

    const currentPath = path || window.location.pathname;
    const canonical = SITE_URL + (currentPath === "/" ? "" : currentPath);
    const ogImage = image
      ? (image.startsWith("http") ? image : SITE_URL + image)
      : DEFAULT_IMAGE;

    // Temel
    upsertMeta('meta[name="description"]', "name", "description", description);
    if (keywords) upsertMeta('meta[name="keywords"]', "name", "keywords", keywords);
    upsertMeta('meta[name="robots"]', "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Open Graph
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    upsertMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", "tr_TR");
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", "Sponsor Hanım Turizm");

    // Twitter
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    // Canonical
    upsertLink("canonical", canonical);

    // JSON-LD (structured data)
    // Her sayfa kendi script'ini yonetir — eski olani temizle, yenisini ekle
    const existing = document.getElementById("sh-jsonld-dynamic");
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "sh-jsonld-dynamic";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, keywords, jsonLd, noIndex]);
}
