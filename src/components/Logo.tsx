type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  /** Size variant — "compact" header için sadece D|C, "full" footer için tam logo */
  size?: "compact" | "full";
};

/**
 * DINConnect logo
 * Header'da kompakt versiyon (sadece simge + DINConnect yazısı)
 * Footer'da full versiyon (slogan dahil)
 *
 * Renk: lacivert (D|C harfleri için kompakt SVG fallback) + altın detaylar
 * Asıl logo görseli: /dinconnect-logo.jpg (altın 3D, slogan dahil)
 */
export function Logo({ variant = "dark", className = "", size = "compact" }: LogoProps) {
  const textColor = variant === "dark" ? "#0A2540" : "#FFFFFF";
  const accentGold = "#D4A24C";

  if (size === "full") {
    // Footer / hero için tam logo — JPG kullan
    return (
      <img
        src="/dinconnect-logo.jpg"
        alt="DINConnect — Verbinden. Prüfen. Zertifizieren."
        className={`block w-full ${className}`}
        loading="lazy"
      />
    );
  }

  // Compact: header için minimalist SVG + wordmark
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* D|C simgesi (sade SVG, köprü pilonları altın) */}
      <svg
        viewBox="0 0 56 40"
        width="40"
        height="28"
        fill="none"
        aria-hidden="true"
      >
        {/* D harfi */}
        <path
          d="M4 6 L4 34 L14 34 C20 34 24 28 24 20 C24 12 20 6 14 6 Z"
          fill={textColor}
        />
        {/* Köprü pilonları (orta — D ile C arasında ince altın dikey çizgiler) */}
        <rect x="27" y="6" width="1.6" height="28" fill={accentGold} />
        <rect x="30" y="6" width="1.6" height="28" fill={accentGold} />
        <rect x="33" y="6" width="1.6" height="28" fill={accentGold} />
        {/* C harfi */}
        <path
          d="M52 12 C48 8 44 6 40 6 C35 6 32 12 32 20 C32 28 35 34 40 34 C44 34 48 32 52 28"
          stroke={textColor}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <span
        className="font-display font-extrabold text-xl md:text-2xl tracking-tight leading-none"
        style={{ color: textColor }}
      >
        DIN<span style={{ color: accentGold }}>Connect</span>
      </span>
    </div>
  );
}
