type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  /** "compact" = amblem + wordmark (header), "full" = tam logo görseli (footer/hero) */
  size?: "compact" | "full";
};

/**
 * DINConnect logo
 * - compact: altın D|C amblemi (kaynak torcu + köprü + dünya) + "DINConnect" wordmark
 * - full:    sloganlı tam logo görseli
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

  // Header: altın amblem + wordmark
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/dinconnect-emblem.png"
        alt="DINConnect"
        className={`h-9 md:h-11 w-auto object-contain ${variant === "light" ? "rounded-md bg-white/95 px-1.5 py-1" : ""}`}
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
