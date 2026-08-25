/**
 * Design reminder: this page reads like an Einsatzbriefing—strong asymmetry,
 * black/white fields, restrained signal red, sharp service codes, and no fake proof points.
 */
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  DoorOpen,
  Flame,
  Hammer,
  Layers3,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { trpc } from "@/lib/trpc";

const LOGO = "/manus-storage/vision112-logo_b9651c98.png";
const HERO = "/manus-storage/vision112-hero-full-logo_f9fbe5cd.png";
const SECURITY_IMAGE = "/manus-storage/vision112-security-uniform_36186417.png";
const CLEANING_IMAGE = "/manus-storage/vision112-cleaning-uniform_f753b745.png";
const COORDINATION_IMAGE = "/manus-storage/vision112-coordination-uniform_4f7f2ffa.png";
const COMPANY_EMAIL = "Vision112.gmbh@gmx.de";

const securityServices = [
  { icon: Building2, title: "Objektschutz", text: "Präsenz und Kontrollgänge für Gewerbeobjekte, Anlagen und Immobilien." },
  { icon: Hammer, title: "Baustellenbewachung", text: "Kontrollierte Zugänge und verlässliche Bewachung sensibler Baustellenbereiche." },
  { icon: CalendarCheck2, title: "Veranstaltungsschutz", text: "Geordnete Abläufe, Einlasskontrollen und sichtbare Präsenz bei Veranstaltungen." },
  { icon: Route, title: "Revier- & Streifendienst", text: "Planbare Kontrollfahrten und dokumentierte Prüfungen an Ihren Standorten." },
  { icon: Flame, title: "Brandwache", text: "Aufmerksame Brandwachen für Baustellen, Objekte und besondere Einsatzlagen." },
  { icon: DoorOpen, title: "Empfangs- & Pfortendienst", text: "Professioneller Empfang, Besuchermanagement und geregelte Zutrittskontrolle." },
];

const cleaningServices = [
  { icon: BriefcaseBusiness, title: "Büroreinigung", text: "Saubere Arbeitsplätze und gepflegte Gemeinschaftsflächen nach abgestimmtem Plan." },
  { icon: Sparkles, title: "Unterhaltsreinigung", text: "Regelmäßige Reinigung für dauerhaft gepflegte gewerbliche Räume." },
  { icon: Layers3, title: "Treppenhausreinigung", text: "Zuverlässige Pflege von Eingängen, Treppen, Handläufen und Verkehrsflächen." },
  { icon: Building2, title: "Glasreinigung", text: "Klare Glasflächen, Rahmen und Eingangsbereiche für einen professionellen Eindruck." },
  { icon: Hammer, title: "Bauendreinigung", text: "Gründliche Reinigung nach Bau-, Umbau- oder Renovierungsarbeiten." },
  { icon: ClipboardCheck, title: "Sonderreinigung", text: "Individuell geplante Intensivleistungen für besondere Flächen und Anforderungen." },
];

const contacts = [
  { name: "Him Malki", role: "Inhaber & Geschäftsführer", phone: "0172 7351562", href: "+491727351562" },
  { name: "Matthias Schlusemann", role: "Geschäftsführer", phone: "0162 1012692", href: "+491621012692" },
  { name: "Mohamad Ahmad", role: "Betriebsleiter", phone: "0160 8380624", href: "+491608380624" },
  { name: "Miran Mahma", role: "Einsatzleiter", phone: "0157 77774205", href: "+4915777774205" },
];

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="brand-link" aria-label="VISION112 GmbH – Startseite">
      <img className={compact ? "brand-logo brand-logo--compact" : "brand-logo"} src={LOGO} alt="VISION112 GmbH" />
    </a>
  );
}

function SectionEyebrow({ code, children, light = false }: { code: string; children: ReactNode; light?: boolean }) {
  return (
    <div className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
      <span>{code}</span>
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [rating, setRating] = useState(0);
  const careerMutation = trpc.careers.submit.useMutation();
  const feedbackMutation = trpc.feedback.submit.useMutation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const submitCareer = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    careerMutation.mutate({
      fullName: String(data.get("fullName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      city: String(data.get("city") ?? ""),
      position: String(data.get("position") ?? "other") as "security" | "cleaning" | "operations" | "other",
      experience: String(data.get("experience") ?? ""),
      message: String(data.get("message") ?? ""),
      privacyConsent: true,
    }, { onSuccess: () => form.reset() });
  };

  const submitFeedback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rating < 1) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    feedbackMutation.mutate({
      name: String(data.get("name") ?? "") || undefined,
      email: String(data.get("email") ?? ""),
      rating,
      message: String(data.get("message") ?? ""),
      privacyConsent: true,
    }, { onSuccess: () => { form.reset(); setRating(0); } });
  };

  return (
    <div id="top" className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="nav-wrap">
          <BrandLogo />
          <div className="nav-status" aria-label="Standort Essen"><span /> Essen</div>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#sicherheit">Sicherheit</a>
            <a href="#reinigung">Gebäudereinigung</a>
            <a href="#firmenvorstellung">Unternehmen</a>
            <a href="#mitmachen">Karriere</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a className="header-call" href="tel:+491727351562">
            <Phone size={17} aria-hidden="true" />
            <span>Direkt anrufen</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`mobile-panel ${menuOpen ? "mobile-panel--open" : ""}`}>
          {[
            ["Leistungen", "#leistungen"],
            ["Sicherheit", "#sicherheit"],
            ["Gebäudereinigung", "#reinigung"],
            ["Firmenvorstellung", "#firmenvorstellung"],
            ["Karriere & Bewertung", "#mitmachen"],
            ["Kontakt", "#kontakt"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}<ChevronRight size={18} /></a>
          ))}
          <a className="mobile-call" href="tel:+491727351562" onClick={closeMenu}>
            <Phone size={18} /> 0172 7351562
          </a>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={HERO} alt="Sicherheitsmitarbeiter und Reinigungskraft in einem modernen Gewerbeobjekt" />
          <div className="hero-overlay" />
          <div className="hero-frame" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy reveal">
              <div className="status-pill"><span /> Sicherheits- & Gebäudeservice</div>
              <h1 id="hero-title">Sicherheit,<br />die vor Ort <em>beginnt.</em></h1>
              <p>VISION112 GmbH verbindet professionelle Sicherheitsdienstleistungen mit zuverlässiger Gebäudereinigung – klar geplant, persönlich erreichbar und konsequent umgesetzt.</p>
              <div className="hero-actions">
                <a className="button button--red" href="tel:+491727351562">
                  Einsatz anfragen <ArrowUpRight size={19} />
                </a>
                <a className="text-link text-link--light" href="#leistungen">
                  Leistungen ansehen <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">112</div>
        </section>

        <section className="trust-strip" aria-label="Unternehmensmerkmale">
          <div className="container trust-grid">
            <div><MapPin size={20} /><span><small>Standort</small>Essen</span></div>
            <div><UserCheck size={20} /><span><small>Kommunikation</small>Direkte Ansprechpartner</span></div>
            <div><ShieldCheck size={20} /><span><small>Leistung</small>Sicherheit & Service</span></div>
            <div><ClipboardCheck size={20} /><span><small>Planung</small>Objektbezogene Konzepte</span></div>
          </div>
        </section>

        <section id="leistungen" className="services-overview section-pad">
          <div className="container">
            <div className="section-heading">
              <SectionEyebrow code="01">Unsere Leistungen</SectionEyebrow>
              <h2>Zwei Bereiche.<br /><span>Ein verlässlicher Partner.</span></h2>
              <p>Vom kontrollierten Zugang bis zum gepflegten Arbeitsplatz: Wir bündeln Sicherheits- und Gebäudedienstleistungen in klaren, abgestimmten Abläufen.</p>
            </div>
            <div className="service-rails">
              <a className="service-rail service-rail--dark" href="#sicherheit">
                <div className="service-rail__code">S/01</div>
                <div>
                  <ShieldCheck size={34} />
                  <h3>Sicherheitsdienst</h3>
                  <p>Aufmerksame Präsenz für Menschen, Objekte und Veranstaltungen.</p>
                </div>
                <ArrowUpRight size={24} />
              </a>
              <a className="service-rail service-rail--light" href="#reinigung">
                <div className="service-rail__code">G/02</div>
                <div>
                  <Sparkles size={34} />
                  <h3>Gebäudereinigung</h3>
                  <p>Gepflegte Räume durch strukturierte, bedarfsgerechte Reinigung.</p>
                </div>
                <ArrowUpRight size={24} />
              </a>
            </div>
          </div>
        </section>

        <section id="sicherheit" className="discipline discipline--dark section-pad">
          <div className="container discipline-layout">
            <div className="discipline-image-wrap">
              <img src={SECURITY_IMAGE} alt="Sicherheitsmitarbeiter bei einem Kontrollgang" />
              <div className="image-tag"><span>01</span> Sicherheitsdienst</div>
            </div>
            <div className="discipline-content">
              <SectionEyebrow code="02" light>Sicherheitsdienst</SectionEyebrow>
              <h2>Präsenz schafft<br /><span>Sicherheit.</span></h2>
              <p className="discipline-intro">Unsere Sicherheitsleistungen werden objektbezogen geplant und mit klaren Zuständigkeiten umgesetzt.</p>
              <div className="service-list">
                {securityServices.map(({ icon: Icon, title, text }, index) => (
                  <article key={title} className="service-item">
                    <div className="service-icon"><Icon size={21} /></div>
                    <div><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reinigung" className="discipline discipline--light section-pad">
          <div className="container discipline-layout discipline-layout--reverse">
            <div className="discipline-image-wrap discipline-image-wrap--light">
              <img src={CLEANING_IMAGE} alt="Fachkraft bei der professionellen Gebäudereinigung" />
              <div className="image-tag"><span>02</span> Gebäudereinigung</div>
            </div>
            <div className="discipline-content">
              <SectionEyebrow code="03">Gebäudereinigung</SectionEyebrow>
              <h2>Sauberkeit mit<br /><span>System.</span></h2>
              <p className="discipline-intro">Von der regelmäßigen Unterhaltsreinigung bis zur gezielten Sonderleistung: Wir richten Umfang und Rhythmus am Objekt aus.</p>
              <div className="service-list service-list--light">
                {cleaningServices.map(({ icon: Icon, title, text }, index) => (
                  <article key={title} className="service-item">
                    <div className="service-icon"><Icon size={21} /></div>
                    <div><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="firmenvorstellung" className="company-intro section-pad">
          <div className="container company-intro__grid">
            <div>
              <SectionEyebrow code="04">Firmenvorstellung</SectionEyebrow>
              <h2>VISION112.<br /><span>Verantwortung vor Ort.</span></h2>
            </div>
            <div className="company-intro__copy">
              <p className="company-intro__lead">Die VISION112 GmbH ist ein Dienstleistungsunternehmen aus Essen für Sicherheitsdienste und professionelle Gebäudereinigung.</p>
              <p>Wir verbinden aufmerksame Präsenz, klare Zuständigkeiten und direkte Kommunikation mit objektbezogenen Abläufen. Jede Anfrage wird persönlich aufgenommen und passend zum Einsatzort, Zeitrahmen und gewünschten Leistungsumfang geplant.</p>
              <div className="company-values">
                <div><ShieldCheck size={23} /><span><strong>Sicherheit</strong>Planbare Präsenz und geregelte Kontrollen.</span></div>
                <div><Sparkles size={23} /><span><strong>Sauberkeit</strong>Bedarfsgerechte Pflege gewerblicher Objekte.</span></div>
                <div><Users size={23} /><span><strong>Erreichbarkeit</strong>Feste Ansprechpartner für kurze Wege.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="ablauf" className="process section-pad">
          <div className="container process-grid">
            <div className="process-copy">
              <SectionEyebrow code="05">Unser Vorgehen</SectionEyebrow>
              <h2>Klare Abläufe.<br /><span>Klare Verantwortung.</span></h2>
              <p>Gute Dienstleistung beginnt mit Zuhören. Wir klären den Bedarf, definieren Zuständigkeiten und koordinieren die Umsetzung mit festen Ansprechpartnern.</p>
              <div className="steps">
                {[
                  ["01", "Bedarf klären", "Objekt, Einsatzrahmen und gewünschte Leistungen gemeinsam erfassen."],
                  ["02", "Einsatz planen", "Aufgaben, Zeiten, Ansprechpartner und Kontrollwege verbindlich strukturieren."],
                  ["03", "Leistung umsetzen", "Den vereinbarten Service koordiniert durchführen und transparent begleiten."],
                ].map(([number, title, text]) => (
                  <div className="step" key={number}>
                    <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="process-visual">
              <img src={COORDINATION_IMAGE} alt="Koordination von Sicherheits- und Gebäudedienstleistungen" />
              <div className="process-card">
                <Check size={20} />
                <p><strong>Direkte Abstimmung</strong><span>Vier feste Ansprechpartner für Ihre Anfrage.</span></p>
              </div>
            </div>
          </div>
        </section>

        <section id="mitmachen" className="participation section-pad">
          <div className="container">
            <div className="section-heading participation-heading">
              <SectionEyebrow code="06">Karriere & Bewertung</SectionEyebrow>
              <h2>Mit uns arbeiten.<br /><span>Erfahrung teilen.</span></h2>
              <p>Bewerben Sie sich direkt bei VISION112 oder senden Sie uns eine ehrliche Bewertung. Eingaben werden vertraulich verarbeitet und Bewertungen vor einer möglichen Veröffentlichung geprüft.</p>
            </div>
            <div className="form-panels">
              <article className="form-panel form-panel--career">
                <div className="form-panel__head"><BriefcaseBusiness size={28} /><div><span>K/01</span><h3>Jetzt bewerben</h3></div></div>
                <p>Sie möchten im Sicherheitsdienst, in der Gebäudereinigung oder in der Einsatzorganisation arbeiten? Senden Sie uns Ihre Kurzbewerbung.</p>
                <form onSubmit={submitCareer} className="submission-form">
                  <div className="form-grid">
                    <label><span>Vor- und Nachname *</span><input name="fullName" autoComplete="name" required minLength={2} /></label>
                    <label><span>E-Mail *</span><input name="email" type="email" autoComplete="email" required /></label>
                    <label><span>Telefon *</span><input name="phone" type="tel" autoComplete="tel" required minLength={6} /></label>
                    <label><span>Wohnort *</span><input name="city" autoComplete="address-level2" required minLength={2} /></label>
                    <label><span>Gewünschter Bereich *</span><select name="position" required defaultValue=""><option value="" disabled>Bitte auswählen</option><option value="security">Sicherheitsdienst</option><option value="cleaning">Gebäudereinigung</option><option value="operations">Einsatzorganisation</option><option value="other">Sonstiger Bereich</option></select></label>
                    <label><span>Berufserfahrung *</span><select name="experience" required defaultValue=""><option value="" disabled>Bitte auswählen</option><option value="Keine / Quereinstieg">Keine / Quereinstieg</option><option value="Unter 1 Jahr">Unter 1 Jahr</option><option value="1–3 Jahre">1–3 Jahre</option><option value="Mehr als 3 Jahre">Mehr als 3 Jahre</option></select></label>
                  </div>
                  <label><span>Kurze Nachricht *</span><textarea name="message" rows={5} required minLength={10} placeholder="Erzählen Sie uns kurz von Ihrer Erfahrung und Verfügbarkeit." /></label>
                  <label className="consent"><input name="privacyConsent" type="checkbox" required /><span>Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und bestätige die Übermittlung meiner Angaben zur Bearbeitung meiner Bewerbung. *</span></label>
                  <button className="form-submit" type="submit" disabled={careerMutation.isPending}>{careerMutation.isPending ? <Loader2 className="spin" size={18} /> : <Send size={18} />}{careerMutation.isPending ? "Wird gesendet …" : "Bewerbung senden"}</button>
                  {careerMutation.isSuccess && <p className="form-message form-message--success"><CheckCircle2 size={18} /> Vielen Dank. Ihre Bewerbung wurde übermittelt.</p>}
                  {careerMutation.isError && <p className="form-message form-message--error">Die Bewerbung konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an {COMPANY_EMAIL}.</p>}
                </form>
              </article>

              <article className="form-panel form-panel--feedback">
                <div className="form-panel__head"><Star size={28} /><div><span>B/02</span><h3>Bewertung abgeben</h3></div></div>
                <p>Ihre Rückmeldung hilft uns, Leistungen und Abläufe weiterzuentwickeln. Es werden keine erfundenen Bewertungen angezeigt.</p>
                <form onSubmit={submitFeedback} className="submission-form">
                  <fieldset className="rating-field"><legend>Ihre Bewertung *</legend><div className="rating-buttons" role="radiogroup" aria-label="Bewertung von eins bis fünf Sternen">{[1,2,3,4,5].map((value) => <button key={value} type="button" role="radio" aria-checked={rating === value} aria-label={`${value} von 5 Sternen`} className={rating >= value ? "is-active" : ""} onClick={() => setRating(value)}><Star size={27} fill="currentColor" /></button>)}</div>{rating === 0 && <small>Bitte wählen Sie 1 bis 5 Sterne.</small>}</fieldset>
                  <label><span>Name (optional)</span><input name="name" autoComplete="name" /></label>
                  <label><span>E-Mail (optional, wird nicht veröffentlicht)</span><input name="email" type="email" autoComplete="email" /></label>
                  <label><span>Ihre Rückmeldung *</span><textarea name="message" rows={6} required minLength={5} placeholder="Wie haben Sie unsere Leistung erlebt?" /></label>
                  <label className="consent"><input name="privacyConsent" type="checkbox" required /><span>Ich stimme der Verarbeitung meiner Angaben zur Prüfung dieser Bewertung zu. Hinweise finden Sie in der <a href="/datenschutz">Datenschutzerklärung</a>. *</span></label>
                  <p className="moderation-note">Hinweis: Bewertungen werden nicht automatisch veröffentlicht, sondern zunächst intern geprüft.</p>
                  <button className="form-submit form-submit--dark" type="submit" disabled={feedbackMutation.isPending || rating === 0}>{feedbackMutation.isPending ? <Loader2 className="spin" size={18} /> : <Send size={18} />}{feedbackMutation.isPending ? "Wird gesendet …" : "Bewertung senden"}</button>
                  {feedbackMutation.isSuccess && <p className="form-message form-message--success"><CheckCircle2 size={18} /> Vielen Dank. Ihre Bewertung wurde zur Prüfung eingereicht.</p>}
                  {feedbackMutation.isError && <p className="form-message form-message--error">Die Bewertung konnte nicht gesendet werden. Bitte versuchen Sie es erneut.</p>}
                </form>
              </article>
            </div>
          </div>
        </section>

        <section id="kontakt" className="contact-section section-pad">
          <div className="container">
            <div className="contact-heading">
              <SectionEyebrow code="07" light>Direkter Kontakt</SectionEyebrow>
              <h2>Ihr Anliegen.<br /><span>Unser nächster Einsatz.</span></h2>
              <p>Rufen Sie den passenden Ansprechpartner direkt an. Wir klären Ihren Bedarf persönlich.</p>
            </div>
            <div className="contact-grid">
              {contacts.map((contact, index) => (
                <a className="contact-card" key={contact.phone} href={`tel:${contact.href}`}>
                  <span className="contact-number">0{index + 1}</span>
                  <div className="contact-icon"><Phone size={21} /></div>
                  <div><h3>{contact.name}</h3><p>{contact.role}</p><strong>{contact.phone}</strong></div>
                  <ArrowUpRight size={20} className="contact-arrow" />
                </a>
              ))}
            </div>
            <a
              className="address-card"
              href="https://www.google.com/maps/search/?api=1&query=Bocholder+Str.+278%2C+45356+Essen"
              target="_blank"
              rel="noreferrer"
            >
              <div className="address-icon"><MapPin size={27} /></div>
              <div><small>Unser Standort</small><strong>Bocholder Str. 278</strong><span>45356 Essen</span></div>
              <div className="address-link">Route öffnen <ArrowUpRight size={18} /></div>
            </a>
            <a className="address-card email-card" href={`mailto:${COMPANY_EMAIL}`}>
              <div className="address-icon"><Mail size={27} /></div>
              <div><small>Geschäftliche E-Mail</small><strong>{COMPANY_EMAIL}</strong><span>Für Anfragen, Bewerbungen und Unterlagen</span></div>
              <div className="address-link">E-Mail schreiben <ArrowUpRight size={18} /></div>
            </a>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta__inner">
            <div>
              <span>VISION112 GMBH</span>
              <h2>Bereit, wenn<br />Sie uns brauchen.</h2>
            </div>
            <a className="button button--white" href="tel:+491727351562">
              <Phone size={18} /> 0172 7351562
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand"><BrandLogo compact /><p>Sicherheitsdienst & Gebäudereinigung.</p></div>
          <div><small>Navigation</small><a href="#leistungen">Leistungen</a><a href="#firmenvorstellung">Firmenvorstellung</a><a href="#mitmachen">Karriere & Bewertung</a><a href="#kontakt">Kontakt</a></div>
          <div><small>Standort</small><p>Bocholder Str. 278<br />45356 Essen</p></div>
          <div><small>Direktkontakt</small><a href="tel:+491727351562">0172 7351562</a><a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a><p>Him Malki<br />Inhaber & Geschäftsführer</p></div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} VISION112 GmbH</span>
          <nav className="footer-legal" aria-label="Rechtliche Navigation"><a href="/datenschutz">Datenschutz</a><a href="/nutzungsbedingungen">Nutzungsbedingungen</a></nav>
        </div>
      </footer>
    </div>
  );
}
