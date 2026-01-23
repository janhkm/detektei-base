"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

const faqs = [
  {
    question: "Was kostet eine Detektei?",
    answer:
      "Die Kosten für eine Detektei variieren je nach Auftragsart und -umfang. Stundensätze liegen typischerweise zwischen 50-150€. Bei Observationen sollten Sie mit Tageskosten von 800-1.500€ rechnen. Wir erstellen Ihnen vorab einen transparenten Kostenvoranschlag.",
  },
  {
    question: "Sind die Beweise einer Detektei vor Gericht verwertbar?",
    answer:
      "Ja, professionell gesicherte Beweise sind vor Gericht verwertbar, sofern sie legal beschafft wurden. Das gilt für Observationsberichte, Fotos aus dem öffentlichen Raum und Zeugenaussagen. Unsere Detektive sind geschult, Beweise gerichtsfest zu dokumentieren.",
  },
  {
    question: "Wie läuft eine Ermittlung ab?",
    answer:
      "Nach einer kostenlosen Erstberatung analysieren wir Ihren Fall und erstellen einen Ermittlungsplan. Nach Auftragserteilung beginnen unsere Detektive mit der Arbeit. Sie erhalten regelmäßige Updates und am Ende einen detaillierten Abschlussbericht.",
  },
  {
    question: "Wie diskret arbeitet eine Detektei?",
    answer:
      "Diskretion ist das Fundament unserer Arbeit. Alle Informationen werden streng vertraulich behandelt. Unsere Detektive arbeiten unauffällig und sind auf verdeckte Ermittlungen spezialisiert. Ihre Identität und der Auftrag bleiben stets geschützt.",
  },
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer:
      "Wir sind deutschlandweit im Einsatz und können bei Bedarf auch internationale Ermittlungen durchführen. Durch unser Netzwerk aus erfahrenen Detektiven können wir schnell in jeder Region aktiv werden.",
  },
  {
    question: "Wie schnell kann eine Ermittlung beginnen?",
    answer:
      "In dringenden Fällen können wir innerhalb von 24 Stunden mit den Ermittlungen starten. In der Regel beginnen wir innerhalb weniger Tage nach Auftragserteilung. Kontaktieren Sie uns für eine schnelle Erstberatung.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-primary-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">
            Häufige Fragen
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-primary-900">
            FAQ – Ihre Fragen, unsere Antworten
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-primary-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold text-primary-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={clsx(
                    "h-5 w-5 text-primary-500 flex-shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-5 pb-5 text-primary-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Questions CTA */}
        <div className="text-center mt-10">
          <p className="text-primary-600 mb-4">
            Haben Sie weitere Fragen? Wir beraten Sie gerne persönlich.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-primary-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-800 transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
