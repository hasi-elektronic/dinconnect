import { Link } from "wouter";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { useT, r } from "../i18n/useTranslation";

const WHATSAPP_URL = "https://wa.me/491601236060";
const EMAIL = "h.guencavdi@hasi-elektronic.de";

export function Footer() {
  const { t, lang } = useT();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-container px-5 md:px-8 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 text-white/80 leading-relaxed max-w-md">
              {t.footer.tagline}
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/85 hover:text-gold-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                WhatsApp +49 160 1236060
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-white/85 hover:text-gold-400 transition-colors break-all"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-3 text-white/85">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                Vaihingen an der Enz, {t.ui.countryGermany}
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-gold-400 uppercase text-xs tracking-widest mb-4">
              {t.footer.columns.services}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={r("certification", lang)} className="text-white/80 hover:text-white transition-colors">
                  {t.footer.services.certification}
                </Link>
              </li>
              <li>
                <Link href={r("drawings", lang)} className="text-white/80 hover:text-white transition-colors">
                  {t.footer.services.drawings}
                </Link>
              </li>
              <li>
                <Link href={r("representation", lang)} className="text-white/80 hover:text-white transition-colors">
                  {t.footer.services.representation}
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-gold-400 uppercase text-xs tracking-widest mb-4">
              {t.footer.columns.company}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={r("about", lang)} className="text-white/80 hover:text-white transition-colors">
                  {t.footer.company.about}
                </Link>
              </li>
              <li>
                <Link href={r("resources", lang)} className="text-white/80 hover:text-white transition-colors">
                  {t.footer.company.resources}
                </Link>
              </li>
              <li>
                <Link href={r("contact", lang)} className="text-white/80 hover:text-white transition-colors">
                  {t.footer.company.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-gold-400 uppercase text-xs tracking-widest mb-4">
              {t.footer.columns.legal}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={r("impressum", lang)} className="text-white/80 hover:text-white transition-colors">
                  {t.footer.legal.impressum}
                </Link>
              </li>
              <li>
                <Link href={r("datenschutz", lang)} className="text-white/80 hover:text-white transition-colors">
                  {t.footer.legal.datenschutz}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60">{t.footer.copyright}</p>
          <p className="text-xs text-white/50">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
