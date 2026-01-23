📄 PRD v1.1
SEO- & UX-dominante Ermittlungs-Plattform (Detektei)

Version: 1.1
Status: Verbindlich
Änderung ggü. v1.0: Einführung der >10.000-Einwohner-Regel für Stadt-/Gemeindeseiten + Sitemap- & Build-Logik

1. Ziel & Vision
1.1 Produktziel

Aufbau einer marktführenden, skalierbaren Ermittlungs-Website, die:

organisch für relevante Detektei-, Privatdetektiv- und Wirtschaftsdetektiv-Keywords dominiert

eine rechtlich saubere, vertrauenswürdige und moderne Alternative zu bestehenden SEO-Lead-Seiten darstellt

eine klare, hierarchische Standortstruktur nutzt (Bundesland → Landkreis → Stadt)

bewusst Qualität vor Quantität priorisiert (keine Thin-Content-Städte)

1.2 Vision

Die professionellste und strukturell sauberste Ermittlungs-Plattform Deutschlands –
SEO-dominant, UX-geführt, juristisch klar, langfristig skalierbar.

2. Zielgruppen
2.1 Privatkunden

Untreue / Fremdgehen

Unterhalts- & Sorgerechtsbetrug

Vermisste Personen

Stalking & Mobbing

Betrug / Scamming

2.2 Geschäftskunden

Mitarbeiterbetrug

Krankfeier-Missbrauch

Versicherungsbetrug

Wettbewerbsverstöße

Wirtschaftskriminalität & Industriespionage

3. Kern-USPs

Strukturierter Ermittlungsprozess

Gerichtsfeste Beweisdokumentation

Transparente Kostenlogik

Rechtliche Klarheit & DSGVO-Konformität

Moderne, ruhige, seriöse UX

Keine Fake-Standorte, keine erfundenen Orts-Storys

4. Informationsarchitektur (IA)
4.1 Hauptnavigation
- Privatdetektei
- Wirtschaftsdetektei
- Einsatzgebiete
- Ablauf
- Kosten
- Rechtliches
- Über uns
- Kontakt

4.2 Einsatzgebiete – verbindliche Struktur

Hierarchie:

Einsatzgebiete
└─ Bundesland
   ├─ Landkreis
   │  └─ Stadt / Gemeinde (>10.000 Einwohner)
   └─ Kreisfreie Stadt (>10.000 Einwohner)

5. Standort-Regel (neu & verbindlich)
5.1 Veröffentlichungsregel

Stadt-/Gemeindeseiten werden ausschließlich für Orte mit mehr als 10.000 Einwohnern erstellt.

5.2 Begründung

Vermeidung von Thin Content

bessere Content-Qualität

effizientere SEO-Pflege

Fokus auf relevante Suchnachfrage

5.3 Kleinere Orte (<10.000 Einwohner)

keine eigene URL

werden:

textlich auf Landkreis-Seiten erwähnt

als „Einsatz auch in kleineren Gemeinden möglich“ kommuniziert

Einsätze sind möglich, aber nicht SEO-seitig als Doorway Pages abgebildet

6. URL-Schema (verbindlich)
6.1 Bundesland
/einsatzgebiete/bundesland/<bundesland-slug>/

6.2 Landkreis
/einsatzgebiete/bundesland/<bundesland>/<landkreis-slug>/

6.3 Stadt (im Landkreis, >10.000 EW)
/einsatzgebiete/bundesland/<bundesland>/<landkreis>/<stadt-slug>/

6.4 Kreisfreie Stadt (>10.000 EW)
/einsatzgebiete/bundesland/<bundesland>/<kreisfreie-stadt-slug>/

7. Slug- & Naming-Regeln

lowercase

keine Sonderzeichen

Bindestriche statt Leerzeichen

Umlaute:

ä → ae

ö → oe

ü → ue

ß → ss

Beispiele:

Name	Slug
Landkreis München	landkreis-muenchen
Garching bei München	garching
Düsseldorf	duesseldorf
8. Seiten-Templates & Content-Tiefe
8.1 Bundesland-Seite

Umfang: 600–1200 Wörter

Inhalt:

Ermittlungen im Bundesland

Übersicht Landkreise & kreisfreie Städte

typische Fallarten

Recht & Zuständigkeit

FAQ

8.2 Landkreis-Seite

Umfang: 800–1500 Wörter

Inhalt:

Tätigkeit im Landkreis

Liste der >10.000-Einwohner-Städte (verlinkt)

Hinweis auf Einsätze in kleineren Gemeinden (ohne Links)

Anfahrts- & Einsatzlogik

FAQ

8.3 Stadt-Seite (>10.000 EW)

Umfang: 900–1800 Wörter

Inhalt:

„Detektei in <Stadt>“

Privat- & Wirtschaftsleistungen (modular)

Ablaufgrafik

Beweisverwertbarkeit

lokale FAQs

CTA

9. SEO-Hard-Requirements
9.1 On-Page

exakt 1 H1

logische H2/H3-Struktur

semantische Keyword-Abdeckung

FAQ-Schema (JSON-LD)

Breadcrumb-Schema

saubere Canonicals

9.2 Interne Verlinkung

Bundesland → Landkreise & kreisfreie Städte

Landkreis → Städte >10k

Stadt → nahegelegene Städte >10k (max. 6–10)

Rückverlinkung zur Hierarchie

10. Sitemap-Strategie (v1.1)
10.1 Enthaltene URLs

✅ Bundesländer
✅ Landkreise
✅ Kreisfreie Städte
✅ Städte/Gemeinden >10.000 Einwohner

10.2 Ausgeschlossen

❌ Gemeinden ≤10.000 Einwohner
❌ Filter- oder Suchparameter

10.3 Logik

automatische Generierung

lastmod automatisiert

Priorisierung:

Stadt > Landkreis > Bundesland

optional Sitemap-Index bei >5.000 URLs

11. Technische Umsetzung (MVP-fähig)
11.1 Stack (empfohlen)

Next.js (App Router, SSG)

MDX für statische Seiten

JSON/TS Dataset für Standorte

Programmatic SEO

automatische Sitemap & Breadcrumbs

11.2 Standort-Datenmodell (Minimal)

State

id

name

slug

District

id

name

slug

state_id

City

id

name

slug

population

district_id (nullable)

is_district_free_city (boolean)

Build-Regel:
City-Routen nur generieren, wenn population > 10000

12. Recht & Compliance

DSGVO-konforme Kontaktformulare

klare Abgrenzung zulässiger Ermittlungen

transparente Hinweise zur Beweisverwertbarkeit

keine irreführende Standortdarstellung

13. KPIs

Top-10 Rankings für:

„Detektei + Stadt (>10k)“

„Privatdetektiv + Problem“

„Wirtschaftsdetektei + Thema“

Conversion-Rate Kontakt: >3–5 %

organischer Traffic (MoM)

Verweildauer & Scrolltiefe