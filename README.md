# Detektei Website

SEO- & UX-dominante Ermittlungs-Plattform für eine professionelle Detektei.

## Tech Stack

- **Framework:** Next.js 16 (App Router, SSG)
- **Styling:** Tailwind CSS v4
- **Content:** MDX
- **Icons:** Lucide React
- **Sprache:** TypeScript

## Erste Schritte

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Für Produktion bauen
npm run build

# Produktionsserver starten
npm start
```

## Projektstruktur

```
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React Komponenten
│   │   ├── layout/       # Header, Footer
│   │   └── home/         # Startseiten-Sektionen
│   ├── lib/              # Utilities
│   └── data/             # Daten (Standorte, etc.)
├── content/              # MDX Inhalte
│   └── blog/             # Blog-Artikel
├── public/               # Statische Assets
│   └── images/           # Bilder
└── prd/                  # Produktanforderungen
```

## Verfügbare Scripts

- `npm run dev` - Startet den Entwicklungsserver
- `npm run build` - Baut die Anwendung für Produktion
- `npm start` - Startet den Produktionsserver
- `npm run lint` - Führt ESLint aus
