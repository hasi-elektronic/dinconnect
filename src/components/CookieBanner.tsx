import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useT, r } from "../i18n/useTranslation";
import { Link } from "wouter";

const KEY = "dinconnect_cookie_ack_v1";

export function CookieBanner() {
  const { t, lang } = useT();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const acked = window.localStorage.getItem(KEY);
    if (!acked) {
      // Hafif gecikme — sayfa açılışında saldırgan görünmesin
      const tid = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(tid);
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(KEY, "1");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 z-40 md:left-auto md:right-8 md:bottom-8 md:max-w-sm bg-navy text-white rounded-lg shadow-xl shadow-black/30 p-5 animate-fade-up"
    >
      <button
        type="button"
        onClick={accept}
        aria-label="Close"
        className="absolute top-3 right-3 text-white/60 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
      <p className="text-sm leading-relaxed pr-6">{t.cookie.text}</p>
      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={accept}
          className="px-4 py-2 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-500 transition-colors"
        >
          {t.cookie.accept}
        </button>
        <Link
          href={r("datenschutz", lang)}
          onClick={accept}
          className="text-xs text-white/70 underline hover:text-gold-400"
        >
          {t.cookie.learnMore}
        </Link>
      </div>
    </div>
  );
}
