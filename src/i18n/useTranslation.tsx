import { createContext, useContext, type ReactNode } from "react";
import { useLocation } from "wouter";
import { tr } from "./tr";
import { de } from "./de";
import { en } from "./en";

export type Lang = "tr" | "de" | "en";

const dictionaries = { tr, de, en } as const;

type Ctx = {
  lang: Lang;
  t: typeof tr;
};

const I18nContext = createContext<Ctx | null>(null);

/**
 * URL'den dil tespit eder.
 * `/de/...` → de, `/en/...` → en, diğer her şey → tr (default).
 */
export function detectLang(pathname: string): Lang {
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "tr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const lang = detectLang(location);
  const t = dictionaries[lang];

  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }

  return (
    <I18nContext.Provider value={{ lang, t }}>{children}</I18nContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used inside I18nProvider");
  return ctx;
}

// Tüm route eşlemeleri tek kaynak
type RouteKey =
  | "home"
  | "services"
  | "certification"
  | "drawings"
  | "representation"
  | "about"
  | "resources"
  | "contact"
  | "impressum"
  | "datenschutz";

const ROUTES: Record<RouteKey, Record<Lang, string>> = {
  home: { tr: "/", de: "/de", en: "/en" },
  services: { tr: "/hizmetler", de: "/de/leistungen", en: "/en/services" },
  certification: {
    tr: "/hizmetler/belge-yol-haritasi",
    de: "/de/leistungen/zertifizierung",
    en: "/en/services/certification",
  },
  drawings: {
    tr: "/hizmetler/teknik-resim",
    de: "/de/leistungen/zeichnungsinterpretation",
    en: "/en/services/drawing-interpretation",
  },
  representation: {
    tr: "/hizmetler/temsil",
    de: "/de/leistungen/vertretung",
    en: "/en/services/representation",
  },
  about: { tr: "/hakkimizda", de: "/de/ueber-uns", en: "/en/about" },
  resources: { tr: "/kaynaklar", de: "/de/ressourcen", en: "/en/resources" },
  contact: { tr: "/iletisim", de: "/de/kontakt", en: "/en/contact" },
  impressum: { tr: "/impressum", de: "/de/impressum", en: "/en/imprint" },
  datenschutz: { tr: "/gizlilik", de: "/de/datenschutz", en: "/en/privacy" },
};

/**
 * Mevcut path'i hedef dile çevirir (aynı sayfa, karşı dil).
 */
export function translatePath(currentPath: string, targetLang: Lang): string {
  for (const route of Object.values(ROUTES)) {
    for (const lang of ["tr", "de", "en"] as Lang[]) {
      if (currentPath === route[lang]) return route[targetLang];
    }
  }
  return ROUTES.home[targetLang];
}

/**
 * Route key'i mevcut dile çevirir. Nav linklerinde kullanılır.
 */
export function r(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}
