import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { ContactForm } from "../components/Forms";
import { useT } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

const WHATSAPP_URL = "https://wa.me/491601236060";
const EMAIL = "h.guencavdi@hasi-elektronic.de";

export function Contact() {
  const { t, lang } = useT();
  useSeo({
    title: `${t.contact.title} — DINConnect`,
    description: t.contact.subtitle,
  });

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              {t.contact.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <SectionEyebrow>
              {lang === "tr" ? "Form" : "Formular"}
            </SectionEyebrow>
            <SectionTitle className="mb-8">
              {lang === "tr"
                ? "Ön görüşme talebinizi bırakın"
                : "Erstgespräch anfragen"}
            </SectionTitle>
            <ContactForm />
          </div>

          {/* Direct contact */}
          <div className="lg:col-span-5">
            <div className="bg-navy text-white rounded-2xl p-7 md:p-8">
              <h3 className="font-display font-bold text-xl mb-6">
                {t.contact.direct.title}
              </h3>

              <div className="space-y-5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/60 mb-1">
                      {t.contact.direct.whatsapp}
                    </div>
                    <div className="font-semibold group-hover:text-gold-400 transition-colors">
                      +49 160 1236060
                    </div>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-white/60 mb-1">
                      {t.contact.direct.email}
                    </div>
                    <div className="font-semibold group-hover:text-gold-400 transition-colors break-all">
                      {EMAIL}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/60 mb-1">
                      {t.contact.direct.office}
                    </div>
                    <div className="font-semibold">{t.contact.direct.officeAddress}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service area */}
      <Section className="bg-offwhite">
        <div className="max-w-3xl mb-10">
          <SectionEyebrow>
            {lang === "tr" ? "Türkiye" : "Türkei"}
          </SectionEyebrow>
          <SectionTitle>{t.contact.serviceArea.title}</SectionTitle>
          <p className="mt-5 text-anthracite/80 leading-relaxed">
            {t.contact.serviceArea.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {t.about.location.cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-navy-100"
            >
              <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
              <span className="font-semibold text-navy text-sm">{city}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
