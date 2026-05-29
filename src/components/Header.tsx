import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./ui/Button";
import { useT, r } from "../i18n/useTranslation";

export function Header() {
  const { t, lang } = useT();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const nav = [
    { label: t.nav.home, href: r("home", lang) },
    { label: t.nav.services, href: r("services", lang) },
    { label: t.nav.about, href: r("about", lang) },
    { label: t.nav.resources, href: r("resources", lang) },
    { label: t.nav.contact, href: r("contact", lang) },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-navy-100">
      <div className="mx-auto w-full max-w-container px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={r("home", lang)} onClick={closeMenu} aria-label="DINConnect">
            <Logo variant="dark" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-navy hover:text-gold-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher variant="dark" />
            <Button href={r("contact", lang)} variant="primary" size="md">
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-navy"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-6 border-t border-navy-100 pt-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-3 py-3 text-base font-medium text-navy hover:bg-navy-50 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex items-center justify-between gap-3 px-3">
              <LanguageSwitcher variant="dark" />
              <Button href={r("contact", lang)} variant="primary" size="md" className="flex-1 justify-center">
                {t.nav.cta}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
