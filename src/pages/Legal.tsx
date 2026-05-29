import { Container, Section } from "../components/ui/Layout";
import { useT } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

const COMPANY = "DINConnect";
const RESPONSIBLE = "Hamdi Güncavdi";
const ADDRESS_LINE_1 = "c/o Hasi Elektronic";
const ADDRESS_LINE_2 = "Grabenstraße 18";
const ADDRESS_LINE_3 = "71665 Vaihingen an der Enz";
const ADDRESS_COUNTRY_TR = "Almanya";
const ADDRESS_COUNTRY_DE = "Deutschland";
const EMAIL = "h.guencavdi@hasi-elektronic.de";
const PHONE = "+49 160 1236060";

export function Impressum() {
  const { t, lang } = useT();
  useSeo({
    title: `${t.legal.impressum.title} — DINConnect`,
    description: "Impressum / Yasal bilgiler",
  });

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-16 md:py-20">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">
            {t.legal.impressum.title}
          </h1>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto prose-section">
          <h2 className="font-display font-bold text-2xl text-navy mb-4">
            {t.legal.impressum.angabenTitle}
          </h2>
          <address className="not-italic text-anthracite leading-relaxed mb-8">
            {COMPANY} <br />
            {ADDRESS_LINE_1} <br />
            {ADDRESS_LINE_2} <br />
            {ADDRESS_LINE_3} <br />
            {t.ui.countryGermany}
          </address>

          <h2 className="font-display font-bold text-2xl text-navy mb-4">
            {t.legal.impressum.contactTitle}
          </h2>
          <p className="text-anthracite leading-relaxed mb-8">
            {t.contact.form.phone}: {PHONE} <br />
            E-Mail:{" "}
            <a href={`mailto:${EMAIL}`} className="text-gold-600 hover:underline">
              {EMAIL}
            </a>
          </p>

          <h2 className="font-display font-bold text-2xl text-navy mb-4">
            {t.legal.impressum.responsibleTitle}
          </h2>
          <p className="text-anthracite leading-relaxed mb-8">
            {RESPONSIBLE} <br />
            {ADDRESS_LINE_2}, {ADDRESS_LINE_3}
          </p>

          <h2 className="font-display font-bold text-2xl text-navy mb-4">
            {t.legal.impressum.disclaimerTitle}
          </h2>
          <p className="text-anthracite/85 leading-relaxed text-sm">
            {t.legal.impressum.disclaimer}
          </p>
        </div>
      </Section>
    </>
  );
}

export function Datenschutz() {
  const { t } = useT();
  useSeo({
    title: `${t.legal.datenschutz.title} — DINConnect`,
    description: t.legal.datenschutz.intro,
  });

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-16 md:py-20">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">
            {t.legal.datenschutz.title}
          </h1>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-anthracite/85 leading-relaxed mb-10">
            {t.legal.datenschutz.intro}
          </p>

          {t.legal.datenschutz.sections.map((s, i) => (
            <div key={i} className="mb-8">
              <h2 className="font-display font-bold text-xl md:text-2xl text-navy mb-3">
                {s.title}
              </h2>
              <p className="text-anthracite/85 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <p className="text-sm text-anthracite/60 mt-12 pt-6 border-t border-navy-100">
            {t.legal.datenschutz.lastUpdated}
          </p>
        </div>
      </Section>
    </>
  );
}
