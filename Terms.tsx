import React from "react";
import { LegalPageLayout, LegalSection } from "./LegalPageLayout";

export default function Terms() {
  return (
    <LegalPageLayout
      code="R/02"
      title="Nutzungsbedingungen"
      intro="Diese Bedingungen regeln die Nutzung unserer öffentlichen Website, der Kontaktmöglichkeiten sowie der Karriere- und Bewertungsformulare."
    >
      <LegalSection id="geltung" number="01" title="Geltungsbereich">
        <p>Diese Nutzungsbedingungen gelten für die Nutzung der Website der VISION112 GmbH. Sie regeln ausschließlich den Zugang zu den öffentlichen Informationen, Kontaktmöglichkeiten, dem Karriereformular und dem Bewertungsformular.</p>
        <p>Für konkrete Sicherheits-, Reinigungs- oder sonstige Dienstleistungen gelten die jeweils individuell vereinbarten Vertragsbedingungen.</p>
      </LegalSection>

      <LegalSection id="anbieter" number="02" title="Anbieter">
        <address><strong>VISION112 GmbH</strong><br />Bocholder Str. 278<br />45356 Essen<br />Deutschland</address>
        <p>Telefon: <a href="tel:+491727351562">0172 7351562</a><br />E-Mail: <a href="mailto:Vision112.gmbh@gmx.de">Vision112.gmbh@gmx.de</a></p>
        <p>Vertreten durch die Geschäftsführung: Him Malki und Matthias Schlusemann.</p>
      </LegalSection>

      <LegalSection id="leistungen" number="03" title="Informationen und Leistungsanfragen">
        <p>Die Inhalte der Website dienen der allgemeinen Darstellung unserer Leistungen. Sie stellen kein verbindliches Angebot und keine Garantie dar. Ein Vertrag über Sicherheitsdienstleistungen, Gebäudereinigung oder andere Leistungen kommt erst durch eine ausdrückliche Auftragsbestätigung oder eine gesonderte Vereinbarung zustande.</p>
        <p>Leistungsumfang, Einsatzzeiten, Vergütung, Personalbedarf, Objektbedingungen und weitere Anforderungen werden individuell vereinbart. Eine Kontaktaufnahme über Telefon, E-Mail oder Website begründet noch keinen Anspruch auf Vertragsschluss oder Leistungserbringung.</p>
      </LegalSection>

      <LegalSection id="nutzung" number="04" title="Zulässige Nutzung">
        <p>Die Website darf nur im Rahmen der geltenden Gesetze und dieser Nutzungsbedingungen verwendet werden. Unzulässig sind insbesondere missbräuchliche, täuschende, rechtswidrige oder sicherheitsgefährdende Eingaben, automatisierte Massenabfragen, Angriffe auf technische Systeme sowie die Übermittlung von Schadsoftware oder Inhalten, die Rechte Dritter verletzen.</p>
      </LegalSection>

      <LegalSection id="karriere" number="05" title="Karriereformular">
        <p>Bewerberinnen und Bewerber müssen ihre Angaben nach bestem Wissen wahrheitsgemäß und vollständig machen. Das Absenden einer Bewerbung begründet weder einen Anspruch auf eine Rückmeldung innerhalb einer bestimmten Frist noch einen Anspruch auf ein Vorstellungsgespräch oder eine Beschäftigung.</p>
        <p>Bitte übermitteln Sie nur Informationen, die für die Bewerbung erforderlich sind. Besondere Kategorien personenbezogener Daten, vertrauliche Daten früherer Arbeitgeber oder Informationen, zu deren Weitergabe Sie nicht berechtigt sind, dürfen nicht übermittelt werden.</p>
      </LegalSection>

      <LegalSection id="bewertungen" number="06" title="Bewertungen">
        <p>Bewertungen müssen auf einer eigenen, tatsächlichen Erfahrung beruhen und sachlich formuliert sein. Unzulässig sind insbesondere erfundene Bewertungen, Beleidigungen, Drohungen, diskriminierende Inhalte, Werbung, Spam, personenbezogene Daten Dritter sowie Inhalte, die Urheber-, Marken- oder sonstige Rechte verletzen.</p>
        <p>Bewertungen werden nicht automatisch veröffentlicht. Die VISION112 GmbH darf Einsendungen prüfen, Rückfragen stellen, eine Veröffentlichung ablehnen oder veröffentlichte Inhalte entfernen, wenn rechtliche, sachliche oder qualitative Gründe dafür bestehen. Es besteht kein Anspruch auf Veröffentlichung oder dauerhafte Verfügbarkeit.</p>
      </LegalSection>

      <LegalSection id="rechte" number="07" title="Rechte an Inhalten">
        <p>Texte, Gestaltung, Logos, Bilder, Grafiken und sonstige Inhalte dieser Website sind urheber-, marken- oder kennzeichenrechtlich geschützt. Eine Vervielfältigung, Bearbeitung, Veröffentlichung, Weitergabe oder kommerzielle Nutzung ist ohne vorherige Zustimmung nicht gestattet, soweit nicht das Gesetz eine Nutzung ausdrücklich erlaubt.</p>
        <p>Mit der freiwilligen Übermittlung eines Bewertungstextes wird ein einfaches Recht zur Veröffentlichung auf eigenen Online-Angeboten nur dann eingeräumt, wenn die Veröffentlichung gesondert freigegeben wurde. Urheberpersönlichkeitsrechte bleiben unberührt.</p>
      </LegalSection>

      <LegalSection id="verfuegbarkeit" number="08" title="Verfügbarkeit und Änderungen">
        <p>Wir bemühen uns um einen sicheren und zuverlässigen Betrieb, schulden jedoch keine ununterbrochene oder fehlerfreie Verfügbarkeit. Wartung, Sicherheitsmaßnahmen, technische Störungen oder Umstände außerhalb unseres Einflussbereichs können den Zugriff vorübergehend einschränken.</p>
        <p>Wir dürfen Inhalte, Funktionen und Aufbau der Website ändern, soweit berechtigte Interessen der Nutzerinnen und Nutzer nicht unangemessen beeinträchtigt werden.</p>
      </LegalSection>

      <LegalSection id="links" number="09" title="Externe Links">
        <p>Soweit die Website auf externe Angebote verlinkt, sind deren Betreiber für die jeweiligen Inhalte und den Datenschutz verantwortlich. Wir prüfen externe Inhalte bei der erstmaligen Verlinkung im zumutbaren Umfang, übernehmen jedoch keine Verantwortung für spätere Änderungen außerhalb unseres Einflussbereichs.</p>
      </LegalSection>

      <LegalSection id="haftung" number="10" title="Haftung">
        <p>Die VISION112 GmbH haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit, für Schäden aus der Verletzung von Leben, Körper oder Gesundheit sowie in Fällen zwingender gesetzlicher Haftung.</p>
        <p>Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind Pflichten, deren Erfüllung die ordnungsgemäße Durchführung eines Vertrags erst ermöglicht und auf deren Einhaltung regelmäßig vertraut werden darf. Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen, soweit gesetzlich zulässig.</p>
        <p>Zwingende gesetzliche Verbraucherrechte bleiben unberührt.</p>
      </LegalSection>

      <LegalSection id="datenschutz" number="11" title="Datenschutz">
        <p>Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>. Die Datenschutzerklärung ist ein transparentes Informationsangebot und nicht Gegenstand einer Einwilligung in diese Nutzungsbedingungen.</p>
      </LegalSection>

      <LegalSection id="recht" number="12" title="Anwendbares Recht und Gerichtsstand">
        <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts, soweit dadurch zwingende Verbraucherschutzvorschriften des Staates, in dem eine Verbraucherin oder ein Verbraucher ihren oder seinen gewöhnlichen Aufenthalt hat, nicht eingeschränkt werden.</p>
        <p>Ist die nutzende Person Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist — soweit gesetzlich zulässig — Essen Gerichtsstand. Zwingende gesetzliche Gerichtsstände bleiben unberührt.</p>
      </LegalSection>

      <LegalSection id="schluss" number="13" title="Schlussbestimmungen">
        <p>Sollte eine Bestimmung dieser Nutzungsbedingungen ganz oder teilweise unwirksam sein oder werden, bleiben die übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.</p>
        <p>Wir können diese Nutzungsbedingungen mit Wirkung für die Zukunft anpassen, wenn sich Funktionen, rechtliche Anforderungen oder das Angebot ändern. Es gilt die jeweils auf dieser Website veröffentlichte Fassung.</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
