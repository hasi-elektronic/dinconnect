import { useLocation } from "wouter";
import { useT, translatePath, type Lang } from "../i18n/useTranslation";

export function LanguageSwitcher({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const { lang } = useT();
  const [location, navigate] = useLocation();

  const switchTo = (target: Lang) => {
    if (target === lang) return;
    const newPath = translatePath(location, target);
    navigate(newPath);
  };

  const baseClass =
    variant === "dark" ? "text-navy" : "text-white";
  const inactiveClass = variant === "dark" ? "text-navy/50" : "text-white/60";
  const dividerClass = variant === "dark" ? "text-navy/30" : "text-white/40";

  return (
    <div className={`flex items-center gap-1.5 text-sm font-semibold ${baseClass}`}>
      <button
        type="button"
        onClick={() => switchTo("tr")}
        className={`px-2 py-1 rounded transition-colors hover:text-gold-400 ${
          lang === "tr" ? "" : inactiveClass
        }`}
        aria-label="Türkçe"
        aria-current={lang === "tr"}
      >
        TR
      </button>
      <span className={dividerClass} aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => switchTo("de")}
        className={`px-2 py-1 rounded transition-colors hover:text-gold-400 ${
          lang === "de" ? "" : inactiveClass
        }`}
        aria-label="Deutsch"
        aria-current={lang === "de"}
      >
        DE
      </button>
    </div>
  );
}
