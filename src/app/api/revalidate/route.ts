/**
 * On-Demand Revalidation API
 * 
 * Ermöglicht manuelles Triggern der ISR-Revalidierung für spezifische Pfade.
 * Nützlich nach Content-Updates oder Datenänderungen.
 * 
 * Usage:
 * POST /api/revalidate
 * Body: { "path": "/einsatzgebiete/bundesland/bayern/muenchen", "secret": "..." }
 */

import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Secret Token für Authentifizierung (aus Umgebungsvariable)
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, secret } = body;

    // Authentifizierung prüfen
    if (REVALIDATE_SECRET && secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { error: "Invalid secret token" },
        { status: 401 }
      );
    }

    // Revalidierung nach Pfad
    if (path) {
      revalidatePath(path);
      return NextResponse.json({
        revalidated: true,
        path,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { error: "Missing 'path' parameter" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Revalidation failed", details: String(error) },
      { status: 500 }
    );
  }
}

// GET für einfache Health-Checks
export async function GET() {
  return NextResponse.json({
    status: "ok",
    endpoint: "revalidate",
    methods: ["POST"],
    usage: "POST with { path: '/your/path', secret: '...' }",
  });
}
