"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

const faqs = [
  {
    question: "Was kostet die Vermittlung einer Detektei?",
    answer:
      "Die Vermittlung über Detektei Base ist für Sie komplett kostenfrei. Wir finanzieren uns über Vermittlungsprovisionen der Partner-Detekteien. Die Kosten für die eigentliche Detektiv-Dienstleistung werden direkt mit der vermittelten Detektei vereinbart.",
  },
  {
    question: "Wie finde ich eine seriöse Detektei?",
    answer:
      "Über Detektei Base werden Sie nur an geprüfte Partner-Detekteien vermittelt. Alle Partner sind IHK-zugelassen nach §34a GewO, haben eine Berufshaftpflichtversicherung und sind zur Einhaltung der DSGVO verpflichtet. So sparen Sie sich die aufwendige Recherche.",
  },
  {
    question: "Wie schnell werde ich an eine Detektei vermittelt?",
    answer:
      "In der Regel erhalten Sie innerhalb von 24 Stunden (an Werktagen) einen Rückruf von einer passenden Partner-Detektei. In dringenden Fällen ist oft eine noch schnellere Vermittlung möglich.",
  },
  {
    question: "Werden meine Daten vertraulich behandelt?",
    answer:
      "Ja, absolut. Wir behandeln alle Anfragen streng vertraulich. Ihre Daten werden nur an die eine ausgewählte Partner-Detektei weitergegeben, nicht an mehrere. Details finden Sie in unserer Datenschutzerklärung.",
  },
  {
    question: "In welchen Regionen vermitteln Sie Detekteien?",
    answer:
      "Unser Netzwerk umfasst über 50 Partner-Detekteien in ganz Deutschland. Egal ob in München, Berlin, Hamburg oder ländlichen Regionen – wir finden eine geeignete Detektei in Ihrer Nähe.",
  },
  {
    question: "Sind die Beweise einer Detektei vor Gericht verwertbar?",
    answer:
      "Ja, professionell gesicherte Beweise sind vor Gericht verwertbar, sofern sie legal beschafft wurden. Alle unsere Partner-Detekteien sind darauf spezialisiert, gerichtsfeste Dokumentationen zu erstellen.",
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
            FAQ – Ihre Fragen zur Vermittlung
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
