import { MapPin, AlertTriangle, Wrench, Target } from "lucide-react";
import { Container, Section, SectionEyebrow, SectionTitle } from "../components/ui/Layout";
import { useT } from "../i18n/useTranslation";
import { useSeo } from "../lib/seo";

export function About() {
  const { t, lang } = useT();
  useSeo({
    title: `${t.about.title} — DINConnect`,
    description: t.about.subtitle,
  });

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              {t.about.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow>
            {lang === "tr" ? "Hikaye" : "Geschichte"}
          </SectionEyebrow>
          <SectionTitle className="mb-8">{t.about.story.title}</SectionTitle>
          <div className="space-y-5 text-lg text-anthracite/85 leading-relaxed">
            {t.about.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Team — with case studies */}
      <Section className="bg-offwhite">
        <div className="max-w-3xl mb-12">
          <SectionEyebrow>{t.team.eyebrow}</SectionEyebrow>
          <SectionTitle>{t.team.title}</SectionTitle>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {t.team.members.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-navy-100 overflow-hidden flex flex-col"
            >
              {/* Header: avatar + name */}
              <div className="p-7 md:p-8 pb-5">
                <div className="h-16 w-16 rounded-full bg-navy text-gold font-display font-bold text-2xl flex items-center justify-center mb-5">
                  {member.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <h3 className="font-display font-bold text-lg text-navy">{member.name}</h3>
                <div className="text-gold-500 font-semibold text-sm mt-1">{member.role}</div>
                <p className="mt-4 text-anthracite/80 text-[15px] leading-relaxed">{member.bio}</p>

                {/* Skills chips */}
                {member.skills && member.skills.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-navy-100">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-navy/50 mb-3">
                      {t.team.skillsLabel}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill, si) => (
                        <span
                          key={si}
                          className="inline-block px-2.5 py-1 bg-gold-50 border border-gold-200 text-gold-700 text-[11px] font-semibold rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Case study */}
              <div className="mt-auto p-6 md:p-7 bg-navy-50/60 border-t border-navy-100">
                <div className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-4">
                  {t.team.caseLabel}
                </div>
                <dl className="space-y-3 text-sm">
                  <CaseRow
                    icon={<MapPin className="h-3.5 w-3.5" />}
                    label={t.team.caseLabels.situation}
                    text={member.case.situation}
                  />
                  <CaseRow
                    icon={<AlertTriangle className="h-3.5 w-3.5" />}
                    label={t.team.caseLabels.problem}
                    text={member.case.problem}
                    danger
                  />
                  <CaseRow
                    icon={<Wrench className="h-3.5 w-3.5" />}
                    label={t.team.caseLabels.solution}
                    text={member.case.solution}
                  />
                  <CaseRow
                    icon={<Target className="h-3.5 w-3.5" />}
                    label={t.team.caseLabels.result}
                    text={member.case.result}
                    accent
                  />
                </dl>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer for anonymous cases */}
        <p className="mt-8 text-xs text-anthracite/55 max-w-3xl">
          {lang === "tr"
            ? "* Vaka örnekleri gerçek projelere dayanır; müşteri kimlikleri ticari gizlilik gereği anonimleştirilmiştir."
            : "* Die Fallbeispiele basieren auf realen Projekten; Kundenidentitäten wurden aus Gründen der Vertraulichkeit anonymisiert."}
        </p>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-12">
          <SectionEyebrow>
            {lang === "tr" ? "Değerlerimiz" : "Werte"}
          </SectionEyebrow>
          <SectionTitle>{t.about.values.title}</SectionTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.about.values.items.map((item, i) => (
            <div key={i}>
              <div className="font-display font-extrabold text-5xl text-gold/30 leading-none">
                0{i + 1}
              </div>
              <h3 className="mt-4 font-display font-bold text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-anthracite/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section className="bg-offwhite">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionEyebrow>
              {lang === "tr" ? "Konumlar" : "Standorte"}
            </SectionEyebrow>
            <SectionTitle>{t.about.location.title}</SectionTitle>
            <div className="mt-7 p-6 bg-navy text-white rounded-xl">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-display font-bold text-lg">
                    {lang === "tr" ? "Operasyon Merkezi" : "Operationszentrum"}
                  </div>
                  <div className="mt-1 text-white/85">
                    Vaihingen an der Enz, {lang === "tr" ? "Almanya" : "Deutschland"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl text-navy mb-5">
              {t.about.location.serviceArea}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {t.about.location.cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-navy-100"
                >
                  <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="font-semibold text-navy text-sm md:text-base">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function CaseRow({
  icon,
  label,
  text,
  danger,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  danger?: boolean;
  accent?: boolean;
}) {
  const dotClass = danger
    ? "bg-red-100 text-red-700"
    : accent
      ? "bg-gold-100 text-gold-700"
      : "bg-navy-100 text-navy-600";
  return (
    <div className="flex gap-3">
      <span
        className={`flex-shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full mt-0.5 ${dotClass}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="text-[11px] font-bold uppercase tracking-wider text-navy/60 mb-0.5">
          {label}
        </dt>
        <dd className="text-anthracite/85 leading-relaxed">{text}</dd>
      </div>
    </div>
  );
}
