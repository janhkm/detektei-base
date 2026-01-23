import { NextRequest, NextResponse } from "next/server";

// Betreff-Labels für E-Mail
const subjectLabels: Record<string, string> = {
  untreue: "Untreue / Fremdgehen",
  personensuche: "Personensuche",
  sorgerecht: "Sorgerecht / Unterhalt",
  betrug: "Betrug / Diebstahl",
  mitarbeiter: "Mitarbeiterüberprüfung",
  krankfeier: "Krankfeiermissbrauch",
  wirtschaft: "Wirtschaftsermittlungen",
  sonstiges: "Sonstiges",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validierung
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    // Betreff-Label ermitteln
    const subjectLabel = subjectLabels[data.subject] || data.subject;

    // E-Mail-Inhalt erstellen
    const emailContent = `
Neue Kontaktanfrage über die Website

═══════════════════════════════════════
KONTAKTDATEN
═══════════════════════════════════════
Name:     ${data.name}
E-Mail:   ${data.email}
Telefon:  ${data.phone || "Nicht angegeben"}
Betreff:  ${subjectLabel}

═══════════════════════════════════════
NACHRICHT
═══════════════════════════════════════
${data.message}

═══════════════════════════════════════
Diese Anfrage wurde über das Kontaktformular
auf detektei-base.de gesendet.
    `.trim();

    // Prüfe ob Resend API Key vorhanden ist
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "kontakt@detektei-base.de";

    if (resendApiKey) {
      // Sende E-Mail mit Resend
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Detektei Website <noreply@detektei-base.de>",
          to: [contactEmail],
          reply_to: data.email,
          subject: `Neue Anfrage: ${subjectLabel} - ${data.name}`,
          text: emailContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Resend API Error:", errorData);
        throw new Error("E-Mail konnte nicht gesendet werden");
      }

      console.log("E-Mail erfolgreich gesendet an:", contactEmail);
    } else {
      // Development Mode: Logge die E-Mail
      console.log("═══════════════════════════════════════");
      console.log("DEVELOPMENT MODE - E-Mail würde gesendet:");
      console.log("An:", contactEmail);
      console.log("Betreff:", `Neue Anfrage: ${subjectLabel} - ${data.name}`);
      console.log("═══════════════════════════════════════");
      console.log(emailContent);
      console.log("═══════════════════════════════════════");
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Ihre Anfrage wurde erfolgreich gesendet." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Kontaktformular Fehler:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
