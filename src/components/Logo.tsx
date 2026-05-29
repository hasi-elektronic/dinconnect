type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  /** "compact" = amblem + wordmark (header/footer), "full" = tam logo (OG) */
  size?: "compact" | "full";
};

/**
 * DINConnect logo
 * - variant "dark"  → beyaz fonlu amblem (header, açık zemin)
 * - variant "light" → lacivert fonlu amblem (footer, koyu zemin)
 */
export function Logo({ variant = "dark", className = "", size = "compact" }: LogoProps) {
  const textColor = variant === "dark" ? "#0A2540" : "#FFFFFF";
  const accentGold = "#D4A24C";

  if (size === "full") {
    return (
      <img
        src="/dinconnect-logo.jpg"
        alt="DINConnect — Verbinden. Prüfen. Zertifizieren."
        className={`block w-full ${className}`}
        loading="lazy"
      />
    );
  }

  // Zemine göre doğru fon: header beyaz, footer lacivert
  const emblemSrc =
    variant === "light"
      ? "/dinconnect-emblem-navy.png"
      : "/dinconnect-emblem-white.png";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={emblemSrc}
        alt="DINConnect"
        className="h-9 md:h-11 w-auto object-contain"
      />
      <span
        className="font-display font-extrabold text-xl md:text-2xl tracking-tight leading-none"
        style={{ color: textColor }}
      >
        DIN<span style={{ color: accentGold }}>Connect</span>
      </span>
    </div>
  );
}
