import { Link } from "wouter";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { ServiceCard } from "../components/ServiceCard";
import { LeadMagnetForm } from "../components/Forms";
import { useT, r } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

export function Home() {
  const { t, lang } = useT();
  useSeo({ title: t.meta.title, description: t.meta.description });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Geometric background pattern — köprü kafes referansı */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
            <defs>
              <pattern id="bridge-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 40 L80 40 M40 0 L40 80 M0 0 L80 80 M80 0 L0 80" stroke="#D4A24C" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#bridge-grid)" />
          </svg>
        </div>

        {/* Gold accent line bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

        <Container className="relative py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold-300 font-semibold text-xs uppercase tracking-widest">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Slogan */}
            <div className="mb-6 font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-gold tracking-wide">
              {t.hero.slogan}
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href={r("contact", lang)} variant="primary" size="lg">
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Link
                href={r("services", lang)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-md hover:border-white hover:bg-white/5 transition-colors"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-navy-900 text-white border-t border-white/5">
        <Container className="py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.trust.items.map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display font-extrabold text-3xl md:text-4xl text-gold">
                  {item.value}
                </div>
                <div className="mt-2 text-xs md:text-sm text-white/70 leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FOUR PILLARS — Brand kompetenzen (logodaki 4 ikon) */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionEyebrow>{t.pillars.eyebrow}</SectionEyebrow>
          <SectionTitle>{t.pillars.title}</SectionTitle>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {t.pillars.items.map((p, i) => (
            <div
              key={p.key}
              className="relative bg-offwhite border border-navy-100 rounded-2xl p-6 hover:border-gold transition-colors"
            >
              {/* Numbered badge */}
              <div className="absolute -top-3 left-6 font-display font-extrabold text-sm bg-navy text-gold px-3 py-1 rounded-md">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-display font-bold text-lg md:text-xl text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-anthracite/80 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-offwhite">
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionEyebrow>{t.servicesIntro.eyebrow}</SectionEyebrow>
          <SectionTitle>{t.servicesIntro.title}</SectionTitle>
          <p className="mt-5 text-lg text-anthracite/80 leading-relaxed">
            {t.servicesIntro.subtitle}
          </p>
        </div>

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

      {/* WHY US */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionEyebrow>{t.whyUs.eyebrow}</SectionEyebrow>
          <SectionTitle>{t.whyUs.title}</SectionTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.whyUs.items.map((item, i) => (
            <div key={i} className="relative">
              <div className="font-display font-extrabold text-5xl md:text-6xl text-gold/30 leading-none">
                0{i + 1}
              </div>
              <h3 className="mt-4 font-display font-bold text-xl md:text-2xl text-navy leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-anthracite/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <Section className="bg-offwhite">
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionEyebrow>{t.team.eyebrow}</SectionEyebrow>
          <SectionTitle>{t.team.title}</SectionTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.team.members.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 md:p-8 border border-navy-100">
              {/* Placeholder avatar — gerçek fotoğraf gelene kadar baş harfler */}
              <div className="h-16 w-16 rounded-full bg-navy text-gold font-display font-bold text-2xl flex items-center justify-center mb-5">
                {member.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </div>
              <h3 className="font-display font-bold text-lg text-navy">
                {member.name}
              </h3>
              <div className="text-gold-500 font-semibold text-sm mt-1">
                {member.role}
              </div>
              <p className="mt-4 text-anthracite/80 text-[15px] leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* LEAD MAGNET */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionEyebrow>{t.leadMagnet.eyebrow}</SectionEyebrow>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
                {t.leadMagnet.title}
              </h2>
              <p className="mt-6 text-lg text-white/85 leading-relaxed">
                {t.leadMagnet.description}
              </p>

              <div className="mt-7 space-y-3">
                {[
                  lang === "tr" ? "Almanya'daki uzun yıllık saha ve kalite tecrübemizin özeti" : "Langjährige Praxis aus der deutschen Fertigung zusammengefasst",
                  lang === "tr" ? "10 kritik soru + 10 doğrulanmış cevap" : "10 kritische Fragen + 10 belastbare Antworten",
                  lang === "tr" ? "Anında PDF, e-posta listesinden istediğinde çık" : "Sofort als PDF, jederzeit abbestellbar",
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/85">
                    <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 md:p-8 shadow-2xl">
              <h3 className="font-display font-bold text-xl text-navy mb-2">
                {lang === "tr" ? "Hemen indir" : "Jetzt herunterladen"}
              </h3>
              <p className="text-sm text-anthracite/70 mb-5">
                {lang === "tr"
                  ? "E-posta adresinizi bırakın, PDF'i hemen gönderelim."
                  : "Lassen Sie Ihre E-Mail da, wir senden die PDF sofort."}
              </p>
              <LeadMagnetForm />
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICE AREA MAP-LIKE */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow>
              {lang === "tr" ? "Türkiye geneli" : "Türkeiweit"}
            </SectionEyebrow>
            <SectionTitle>
              {lang === "tr"
                ? "Hizmet bölgelerimiz Türkiye'nin sanayi merkezlerini kapsar"
                : "Unsere Servicegebiete decken die türkischen Industriezentren ab"}
            </SectionTitle>
            <p className="mt-5 text-anthracite/80 leading-relaxed">
              {lang === "tr"
                ? "Vaihingen ofisimizden uçakla 4 saatlik mesafede tüm büyük metal ve makine imalatı OSB'lerine ulaşıyoruz. Yerinde değerlendirme, fabrika ziyareti ve audit hazırlığı için sahaya geliyoruz."
                : "Von unserem Standort in Vaihingen aus erreichen wir alle wichtigen Industrie- und Maschinenbauzonen der Türkei in 4 Flugstunden. Wir kommen vor Ort für Bewertungen, Werksbesuche und Audit-Vorbereitungen."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {t.about.location.cities.map((city, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-offwhite rounded-lg border border-navy-100">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="font-semibold text-navy text-sm md:text-base">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-gold py-14 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
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
