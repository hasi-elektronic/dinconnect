import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { CookieBanner } from "./components/CookieBanner";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { About } from "./pages/About";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";
import { Impressum, Datenschutz } from "./pages/Legal";

// Route değişiminde sayfayı en üste kaydırır
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

// 404 — basit fallback
function NotFound() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
      <div className="font-display font-extrabold text-7xl text-gold">404</div>
      <p className="mt-4 text-anthracite/80 max-w-md">
        Sayfa bulunamadı / Seite nicht gefunden
      </p>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-navy text-white rounded-md font-semibold hover:bg-navy-600"
      >
        Ana Sayfa / Startseite
      </button>
    </div>
  );
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          <Switch>
            {/* Türkçe rotalar (default) */}
            <Route path="/" component={Home} />
            <Route path="/hizmetler" component={Services} />
            <Route path="/hizmetler/belge-yol-haritasi">
              <ServiceDetail service="certification" />
            </Route>
            <Route path="/hizmetler/teknik-resim">
              <ServiceDetail service="drawings" />
            </Route>
            <Route path="/hizmetler/temsil">
              <ServiceDetail service="representation" />
            </Route>
            <Route path="/hakkimizda" component={About} />
            <Route path="/kaynaklar" component={Resources} />
            <Route path="/iletisim" component={Contact} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/gizlilik" component={Datenschutz} />

            {/* Almanca rotalar */}
            <Route path="/de" component={Home} />
            <Route path="/de/leistungen" component={Services} />
            <Route path="/de/leistungen/zertifizierung">
              <ServiceDetail service="certification" />
            </Route>
            <Route path="/de/leistungen/zeichnungsinterpretation">
              <ServiceDetail service="drawings" />
            </Route>
            <Route path="/de/leistungen/vertretung">
              <ServiceDetail service="representation" />
            </Route>
            <Route path="/de/ueber-uns" component={About} />
            <Route path="/de/ressourcen" component={Resources} />
            <Route path="/de/kontakt" component={Contact} />
            <Route path="/de/impressum" component={Impressum} />
            <Route path="/de/datenschutz" component={Datenschutz} />

            {/* İngilizce rotalar */}
            <Route path="/en" component={Home} />
            <Route path="/en/services" component={Services} />
            <Route path="/en/services/certification">
              <ServiceDetail service="certification" />
            </Route>
            <Route path="/en/services/drawing-interpretation">
              <ServiceDetail service="drawings" />
            </Route>
            <Route path="/en/services/representation">
              <ServiceDetail service="representation" />
            </Route>
            <Route path="/en/about" component={About} />
            <Route path="/en/resources" component={Resources} />
            <Route path="/en/contact" component={Contact} />
            <Route path="/en/imprint" component={Impressum} />
            <Route path="/en/privacy" component={Datenschutz} />

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </main>

        <Footer />
      </div>

      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
