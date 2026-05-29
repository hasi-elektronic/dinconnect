import { useLocation } from "wouter";
import { useT, translatePath, type Lang } from "../i18n/useTranslation";

const LANGS: { code: Lang; label: string; aria: string }[] = [
  { code: "tr", label: "TR", aria: "Türkçe" },
  { code: "de", label: "DE", aria: "Deutsch" },
  { code: "en", label: "EN", aria: "English" },
];

export function LanguageSwitcher({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const { lang } = useT();
  const [location, navigate] = useLocation();

  const switchTo = (target: Lang) => {
    if (target === lang) return;
    navigate(translatePath(location, target));
  };

  const baseClass = variant === "dark" ? "text-navy" : "text-white";
  const inactiveClass = variant === "dark" ? "text-navy/50" : "text-white/60";
  const dividerClass = variant === "dark" ? "text-navy/30" : "text-white/40";

  return (
    <div className={`flex items-center gap-1 text-sm font-semibold ${baseClass}`}>
      {LANGS.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          {i > 0 && (
            <span className={dividerClass} aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => switchTo(l.code)}
            className={`px-1.5 py-1 rounded transition-colors hover:text-gold-400 ${
              lang === l.code ? "" : inactiveClass
            }`}
            aria-label={l.aria}
            aria-current={lang === l.code}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}
