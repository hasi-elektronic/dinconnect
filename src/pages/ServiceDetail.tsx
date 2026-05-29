import { ArrowRight, Check } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { Accordion } from "../components/ui/Accordion";
import { useT, r } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

type ServiceKey = "certification" | "drawings" | "representation";

export function ServiceDetail({ service }: { service: ServiceKey }) {
  const { t, lang } = useT();
  const s = t.services[service];

  // SEO per service
  const seoTitle = `${s.title} — DINConnect`;
  useSeo({ title: seoTitle, description: s.summary });

  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
            <defs>
              <pattern id="lines" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M0 25 L50 25" stroke="#F4A024" strokeWidth="1" />
                <path d="M25 0 L25 50" stroke="#F4A024" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#lines)" />
          </svg>
        </div>
        <Container className="relative py-20 md:py-28">
          <div className="max-w-4xl">
            <SectionEyebrow>
              <span className="text-gold-300">{t.nav.services}</span>
            </SectionEyebrow>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              {s.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">
              {s.description}
            </p>
          </div>
        </Container>
      </section>

      {/* FOR WHOM */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>
              {t.ui.targetGroup}
            </SectionEyebrow>
            <SectionTitle>{s.forWhom.title}</SectionTitle>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {s.forWhom.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-anthracite/90 leading-relaxed">
                  <span className="flex-shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy mt-0.5">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PROCESS TIMELINE */}
      <Section className="bg-offwhite">
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionEyebrow>
            {t.ui.process}
          </SectionEyebrow>
          <SectionTitle>{s.process.title}</SectionTitle>
        </div>

        <div className="grid lg:grid-cols-5 gap-5 lg:gap-3">
          {s.process.steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white border-2 border-navy-100 rounded-xl p-5 h-full hover:border-gold transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold font-display font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="h-px flex-1 bg-navy-100" />
                </div>
                <h3 className="font-display font-bold text-base md:text-lg text-navy leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-anthracite/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {/* Connector arrow (desktop only) */}
              {i < s.process.steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute top-1/2 -right-1.5 transform -translate-y-1/2 z-10 text-gold"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <SectionTitle>{s.faq.title}</SectionTitle>
          </div>
          <Accordion items={s.faq.items} />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gold py-14 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy leading-tight">
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
