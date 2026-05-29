import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { ServiceCard } from "../components/ServiceCard";
import { useT, r } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

export function Services() {
  const { t, lang } = useT();
  useSeo({
    title: `${t.nav.services} — DINConnect`,
    description: t.servicesIntro.subtitle,
  });

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <SectionEyebrow>
              <span className="text-gold-300">{t.servicesIntro.eyebrow}</span>
            </SectionEyebrow>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              {t.servicesIntro.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed">
              {t.servicesIntro.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-offwhite">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          <ServiceCard
            icon="certificate"
            title={t.services.certification.title}
            description={t.services.certification.summary}
            href={r("certification", lang)}
            cta={lang === "tr" ? "Detaylar" : "Mehr erfahren"}
          />
          <ServiceCard
            icon="drawing"
            title={t.services.drawings.title}
            description={t.services.drawings.summary}
            href={r("drawings", lang)}
            cta={lang === "tr" ? "Detaylar" : "Mehr erfahren"}
          />
          <ServiceCard
            icon="handshake"
            title={t.services.representation.title}
            description={t.services.representation.summary}
            href={r("representation", lang)}
            cta={lang === "tr" ? "Detaylar" : "Mehr erfahren"}
          />
        </div>
      </Section>

      <section className="bg-gold py-14 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy">
              {t.cta.bottom.title}
            </h2>
            <p className="mt-5 text-navy/85 text-lg leading-relaxed">
              {t.cta.bottom.subtitle}
            </p>
            <div className="mt-8">
              <Button href={r("contact", lang)} variant="secondary" size="lg">
                {t.cta.bottom.button}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
