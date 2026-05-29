import { useState, type FormEvent } from "react";
import { useT } from "../i18n/useTranslation";
import { Button } from "./ui/Button";
import { Download } from "lucide-react";

// API endpoint env-aware: production'da Worker URL'i, dev'de fallback
const API_BASE =
  typeof window !== "undefined" && window.location.hostname.includes("pages.dev")
    ? "https://dinconnect-api.hguencavdi.workers.dev"
    : "https://dinconnect-api.hguencavdi.workers.dev";

const EMAIL_FALLBACK = "h.guencavdi@hasi-elektronic.de";

type Status = "idle" | "sending" | "success" | "error";

export function LeadMagnetForm() {
  const { t } = useT();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return;
    setStatus("sending");

    try {
      const res = await fetch(`${API_BASE}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "lead_magnet_pdf" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      // Worker yoksa / hata varsa mailto fallback'e geçme — kullanıcıyı yormamak için error göster
      // Ama backend henüz live değilse default success göstermek de seçenek
      // Şimdilik gerçek error: kullanıcı haberli olsun
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-gold-50 border-2 border-gold-300 rounded-xl p-6 text-anthracite">
        <p className="text-sm leading-relaxed mb-4">{t.leadMagnet.success}</p>
        <a
          href={t.leadMagnet.pdfFile}
          download
          className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors text-sm"
        >
          <Download className="h-4 w-4" />
          {t.leadMagnet.downloadCta}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3" noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.leadMagnet.emailPlaceholder}
          className="flex-1 px-4 py-3 rounded-md border-2 border-navy-100 bg-white text-anthracite placeholder:text-navy-200 focus:border-gold focus:outline-none transition-colors"
          disabled={status === "sending"}
          aria-label="E-mail"
        />
        <Button type="submit" variant="primary" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "…" : t.leadMagnet.submit}
        </Button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-700">
          {t.contact.form.error}{" "}
          <a href={`mailto:${EMAIL_FALLBACK}?subject=PDF Rehber`} className="underline">
            {EMAIL_FALLBACK}
          </a>
        </p>
      )}
      <p className="text-xs text-anthracite/60">{t.leadMagnet.consent}</p>
    </form>
  );
}

// =====================================================

export function ContactForm() {
  const { t } = useT();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", company: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-gold-50 border-2 border-gold-300 rounded-xl p-8 text-anthracite">
        <h3 className="font-display font-bold text-xl text-navy mb-2">
          ✓
        </h3>
        <p className="leading-relaxed">{t.contact.form.success}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-md border-2 border-navy-100 bg-white text-anthracite placeholder:text-navy-200 focus:border-gold focus:outline-none transition-colors";
  const labelClass = "block text-sm font-semibold text-navy mb-1.5";

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t.contact.form.name} *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            disabled={status === "sending"}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {t.contact.form.company} *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={form.company}
            onChange={handleChange}
            className={inputClass}
            disabled={status === "sending"}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            {t.contact.form.email} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            disabled={status === "sending"}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t.contact.form.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            disabled={status === "sending"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {t.contact.form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-y min-h-[120px]`}
          disabled={status === "sending"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md p-3">
          {t.contact.form.error}{" "}
          <a href={`mailto:${EMAIL_FALLBACK}`} className="underline">
            {EMAIL_FALLBACK}
          </a>
        </p>
      )}

      <p className="text-xs text-anthracite/60">{t.leadMagnet.consent}</p>

      <Button type="submit" variant="primary" size="lg" disabled={status === "sending"}>
        {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
      </Button>
    </form>
  );
}
