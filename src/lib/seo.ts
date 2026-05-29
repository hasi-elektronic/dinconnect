import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
};

/**
 * Lightweight client-side SEO: title + meta description günceller.
 * Crawler'lar Cloudflare Pages için JS execute eder (Googlebot ✓).
 * Statik HTML için ileride pre-render eklenebilir.
 */
export function useSeo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    // Open Graph
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    const htmlLang = document.documentElement.lang;
    const ogLocale =
      htmlLang === "de" ? "de_DE" : htmlLang === "en" ? "en_US" : "tr_TR";
    setMeta("og:locale", ogLocale);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description]);
}

function setMeta(property: string, content: string) {
  const isOg = property.startsWith("og:");
  const selector = isOg
    ? `meta[property="${property}"]`
    : `meta[name="${property}"]`;
  let m = document.querySelector(selector);
  if (!m) {
    m = document.createElement("meta");
    if (isOg) m.setAttribute("property", property);
    else m.setAttribute("name", property);
    document.head.appendChild(m);
  }
  m.setAttribute("content", content);
}
