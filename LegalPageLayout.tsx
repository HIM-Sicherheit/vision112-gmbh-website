import React, { useEffect, type ReactNode } from "react";
import { ArrowLeft, Mail, Phone, ShieldCheck } from "lucide-react";

const LOGO = "/manus-storage/vision112-logo_b9651c98.png";

type LegalPageLayoutProps = {
  code: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPageLayout({ code, title, intro, children }: LegalPageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = `${title} | VISION112 GmbH`;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return (
    <div className="legal-shell">
      <header className="legal-header">
        <div className="container legal-header__inner">
          <a href="/" className="legal-logo" aria-label="Zur Startseite der VISION112 GmbH">
            <img src={LOGO} alt="VISION112 GmbH" />
          </a>
          <a className="legal-back" href="/">
            <ArrowLeft size={18} /> Zur Startseite
          </a>
        </div>
      </header>

      <main>
        <section className="legal-hero">
          <div className="container legal-hero__grid">
            <div className="legal-code"><span>{code}</span> Rechtliche Informationen</div>
            <div>
              <p className="legal-kicker">VISION112 GmbH</p>
              <h1>{title}</h1>
              <p className="legal-intro">{intro}</p>
              <p className="legal-date">Stand: August 2026</p>
            </div>
          </div>
        </section>

        <section className="legal-content-wrap">
          <div className="container legal-content-grid">
            <aside className="legal-aside">
              <div className="legal-aside__mark"><ShieldCheck size={25} /></div>
              <p><strong>Verantwortlicher</strong>VISION112 GmbH<br />Bocholder Str. 278<br />45356 Essen</p>
              <a href="tel:+491727351562"><Phone size={16} />0172 7351562</a>
              <a href="mailto:Vision112.gmbh@gmx.de"><Mail size={16} />Vision112.gmbh@gmx.de</a>
            </aside>
            <article className="legal-document">{children}</article>
          </div>
        </section>
      </main>

      <footer className="legal-footer">
        <div className="container legal-footer__inner">
          <span>© {new Date().getFullYear()} VISION112 GmbH</span>
          <nav aria-label="Rechtliche Navigation">
            <a href="/datenschutz">Datenschutz</a>
            <a href="/nutzungsbedingungen">Nutzungsbedingungen</a>
            <a href="/">Startseite</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="legal-section">
      <div className="legal-section__title"><span>{number}</span><h2>{title}</h2></div>
      <div className="legal-section__body">{children}</div>
    </section>
  );
}
