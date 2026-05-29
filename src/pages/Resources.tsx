import { ArrowUpRight, FileText, Download } from "lucide-react";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { LeadMagnetForm } from "../components/Forms";
import { useT } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

export function Resources() {
  const { t, lang } = useT();
  useSeo({
    title: `${t.resources.title} — DINConnect`,
    description: t.resources.subtitle,
  });

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              {t.resources.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed">
              {t.resources.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Lead magnet block */}
      <Section className="bg-offwhite">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow>{t.leadMagnet.eyebrow}</SectionEyebrow>
            <SectionTitle>{t.leadMagnet.title}</SectionTitle>
            <p className="mt-5 text-anthracite/80 leading-relaxed">
              {t.leadMagnet.description}
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-anthracite/70">
              <Download className="h-4 w-4 text-gold" />
              <span>{t.ui.pdfMeta}</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-7 md:p-8 border-2 border-navy-100">
            <LeadMagnetForm />
          </div>
        </div>
      </Section>

      {/* Blog placeholder */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-10">
          <SectionEyebrow>
            {t.ui.blog}
          </SectionEyebrow>
          <SectionTitle>{t.resources.blogTitle}</SectionTitle>
        </div>

        <div className="bg-offwhite border-2 border-dashed border-navy-100 rounded-2xl p-12 text-center">
          <FileText className="h-12 w-12 text-gold mx-auto mb-4" />
          <h3 className="font-display font-bold text-xl text-navy mb-2">
            {t.resources.comingSoon}
          </h3>
          <p className="text-anthracite/70 max-w-md mx-auto leading-relaxed">
            {t.resources.comingSoonDesc}
          </p>
        </div>
      </Section>

      {/* Useful links */}
      <Section className="bg-offwhite">
        <div className="max-w-3xl mb-10">
          <SectionEyebrow>
            {t.ui.links}
          </SectionEyebrow>
          <SectionTitle>{t.resources.linksTitle}</SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {t.resources.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 border-2 border-navy-100 hover:border-gold transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-navy mb-1.5">
                    {link.name}
                  </h3>
                  <p className="text-anthracite/75 text-sm leading-relaxed">
                    {link.desc}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gold-500 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
