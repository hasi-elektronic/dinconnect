import { Link } from "wouter";
import { ArrowRight, FileCheck, Compass, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: "certificate" | "drawing" | "handshake";
  title: string;
  description: string;
  href: string;
  cta: string;
};

const iconMap: Record<ServiceCardProps["icon"], LucideIcon> = {
  certificate: FileCheck,
  drawing: Compass,
  handshake: Handshake,
};

export function ServiceCard({
  icon,
  title,
  description,
  href,
  cta,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <Link
      href={href}
      className="group relative flex flex-col bg-white border-2 border-navy-100 rounded-2xl p-7 md:p-8 hover:border-gold hover:shadow-lg hover:shadow-navy-100/50 transition-all duration-300"
    >
      {/* Icon */}
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-anthracite/80 leading-relaxed text-[15px] flex-1">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-2 text-gold-500 font-semibold text-sm">
        {cta}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
