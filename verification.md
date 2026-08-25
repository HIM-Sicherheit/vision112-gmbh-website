# Prüfergebnisse

## Desktop
Die vollständige Startseite wurde bei 1440 × 1000 Pixel geprüft. Navigation, Hero, Leistungsbereiche, Prozess, Ansprechpartner, Adresse und Footer sind lesbar und visuell konsistent. Die erste Bildgeneration für drei Servicebilder war fehlgeschlagen; alle drei Quellen wurden durch neue, funktionsfähige operative Bilder ersetzt.

## Mobil
Die vollständige Startseite wurde bei 390 × 844 Pixel geprüft. Inhalte stapeln sich korrekt, Überschriften bleiben lesbar, Sicherheits- und Reinigungsleistungen sind klar getrennt, Telefonnummern und Standortkarte bleiben zugänglich. Die mobile Navigation und der direkte Telefonlink sind vorhanden.

## Offene Firmendaten
Für eine rechtlich vollständige Veröffentlichung fehlen weiterhin eine bestätigte geschäftliche E-Mail-Adresse sowie gegebenenfalls Handelsregister-, USt-ID- und vertretungsberechtigte Angaben für Impressum und Datenschutz. Diese Angaben wurden nicht erfunden.

## Erweiterung: Karriere, Bewertung und Firmenvorstellung
Die erweiterte Seite wurde bei 1440 × 1000 Pixel und 390 × 844 Pixel vollständig geprüft. Firmenvorstellung, Karriereformular, Bewertungsformular, offizielle E-Mail-Adresse und die vier neu gebrandeten Einsatzbilder sind in beiden Layouts sichtbar und ohne horizontales Überlaufen angeordnet.

Die öffentlichen Formulare sind über typisierte tRPC-Mutationen mit der Datenbank verbunden. Vier automatisierte Tests prüfen gültige Bewerbungen, die verpflichtende Datenschutzeinwilligung und die Speicherung von Bewertungen im Status `pending`. TypeScript-Prüfung, Vitest und der Produktions-Build wurden erfolgreich ausgeführt. Bewertungen werden nicht automatisch auf der Website veröffentlicht.

## Praktische Browser-Validierung
Die Formulare wurden zusätzlich direkt in der laufenden Vorschau geprüft. Das leere Karriereformular meldete für alle acht Pflichtfelder einen ungültigen Zustand und `checkValidity()` ergab `false`; betroffen waren Name, E-Mail, Telefon, Wohnort, Bereich, Erfahrung, Nachricht und Datenschutzeinwilligung. Beim Bewertungsformular war die Senden-Schaltfläche ohne Sternauswahl deaktiviert. Nach Auswahl von fünf Sternen wurde sie aktiviert, während das Formular ohne Nachricht und Datenschutzeinwilligung weiterhin ungültig blieb. Dadurch wurde die clientseitige Pflichtfeldlogik geprüft, ohne eine erfundene Bewerbung oder Bewertung in der Datenbank anzulegen.

Die identischen React-Formulare wurden außerdem im vollständigen mobilen Layout bei 390 × 844 Pixel visuell geprüft. Beide Panels stapeln sich korrekt und alle Eingabefelder, Einwilligungen sowie Senden-Schaltflächen bleiben erreichbar.

## Rechtliche Seiten
Die Routen `/datenschutz` und `/nutzungsbedingungen` wurden als eigenständige, deutschsprachige Seiten umgesetzt. Beide Seiten verwenden die bestätigten Unternehmensdaten, verlinken aufeinander und zurück zur Startseite und sind über die rechtliche Navigation im Footer erreichbar. Die Datenschutzerklärung deckt Website-Bereitstellung, Hosting, technisch notwendige Speicherung, Telefon- und E-Mail-Kontakt, Bewerbungen, Bewertungen, Empfänger, Speicherdauer, Betroffenenrechte und die LDI NRW ab. Eine eigene Reichweitenmessung und das zuvor eingebundene Analytics-Skript wurden entfernt.

Die Seiten wurden bei 1280 × 900 Pixel und 390 × 844 Pixel vollständig geprüft. Überschriften, Inhaltsblöcke, Kontaktleiste und Footer bleiben lesbar und ohne horizontales Überlaufen. Die Formulare verlinken direkt auf die Datenschutzerklärung. Sechs automatisierte Tests in drei Testdateien, TypeScript-Prüfung und Produktions-Build wurden erfolgreich ausgeführt.

Die Navigation wurde zusätzlich praktisch in der laufenden Browser-Vorschau geprüft: Der Footer-Link von `/datenschutz` öffnete `/nutzungsbedingungen`, und die Schaltfläche „Zur Startseite“ auf der Nutzungsbedingungen-Seite führte erfolgreich zurück zu `/`. Seitentitel und URLs wechselten dabei korrekt. Die rechtlichen Links und die Datenschutzhinweise der Formulare sind in der gerenderten Startseite vorhanden.
