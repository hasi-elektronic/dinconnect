// WhatsApp Business iletişim butonu
// Numara: +49 160 1236060 (Hamdi)

const WHATSAPP_NUMBER = "491601236060"; // wa.me formatı (+ yok, boşluk yok)

export function WhatsAppButton() {
  const message_tr = "Merhaba DINConnect ekibi, danışmanlık hakkında bilgi almak istiyorum.";
  const message_de = "Guten Tag DINConnect-Team, ich möchte Informationen zur Beratung.";
  const message_en = "Hello DINConnect team, I'd like information about your consulting services.";

  const path =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const lang = path === "/de" || path.startsWith("/de/")
    ? "de"
    : path === "/en" || path.startsWith("/en/")
      ? "en"
      : "tr";
  const message = lang === "de" ? message_de : lang === "en" ? message_en : message_tr;
  const label = lang === "de" ? "WhatsApp Kontakt" : lang === "en" ? "WhatsApp Contact" : "WhatsApp İletişim";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/15 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 md:h-8 md:w-8 text-white fill-current"
        aria-hidden="true"
      >
        <path d="M16.003 3C9.376 3 4 8.376 4 15.003c0 2.394.71 4.633 1.94 6.514L4 28l6.685-1.886a11.94 11.94 0 0 0 5.318 1.276c6.627 0 12.003-5.376 12.003-12.003C28.006 8.376 22.63 3 16.003 3zm0 21.95a9.92 9.92 0 0 1-4.93-1.29l-.353-.21-3.97 1.12 1.128-3.85-.23-.382a9.926 9.926 0 0 1-1.45-5.184c0-5.483 4.46-9.944 9.944-9.944 5.483 0 9.944 4.46 9.944 9.944 0 5.483-4.46 9.944-9.944 9.944zm5.443-7.418c-.296-.148-1.75-.864-2.02-.964-.27-.098-.467-.148-.664.148-.197.296-.762.964-.935 1.162-.173.197-.345.222-.642.074-.296-.148-1.252-.461-2.385-1.473-.882-.787-1.477-1.758-1.65-2.054-.173-.296-.018-.456.13-.604.133-.133.296-.345.444-.518.148-.173.197-.296.295-.493.099-.197.05-.37-.025-.518-.074-.148-.664-1.601-.91-2.193-.24-.576-.484-.499-.665-.508-.173-.008-.37-.01-.567-.01-.197 0-.518.074-.79.37-.27.296-1.034 1.01-1.034 2.464 0 1.453 1.058 2.857 1.205 3.054.148.197 2.082 3.18 5.046 4.46.706.305 1.256.487 1.685.624.708.225 1.353.193 1.864.117.568-.085 1.75-.715 1.996-1.405.246-.69.246-1.283.173-1.405-.074-.123-.27-.197-.567-.345z" />
      </svg>
    </a>
  );
}
