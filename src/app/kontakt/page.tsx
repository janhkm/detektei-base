import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Phone, Shield, Lock, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | Kostenlose Beratung",
  description:
    "Finden Sie die passende Detektei für Ihren Fall. Kostenlose und unverbindliche Beratung. Wir vermitteln Sie an geprüfte Partner-Detekteien.",
};

const trustItems = [
  {
    icon: Shield,
    title: "100% Vertraulich",
    description: "Alle Anfragen werden streng vertraulich behandelt",
  },
  {
    icon: Lock,
    title: "DSGVO-konform",
    description: "Ihre Daten sind bei uns sicher",
  },
  {
    icon: Clock,
    title: "Schnelle Vermittlung",
    description: "Passende Partner-Detektei innerhalb von 24h",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Phone className="h-4 w-4 text-accent-400" />
              <span>Kostenlose Erstberatung</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Sprechen Sie mit uns über Ihren Fall
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Schildern Sie uns Ihre Situation – wir vermitteln Sie an die 
              passende Partner-Detektei aus unserem Netzwerk. Kostenlos und unverbindlich.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-primary-50 border-b border-primary-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 justify-center sm:justify-start"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <item.icon className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-primary-900 text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-primary-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-primary-100 p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Vermittlungsanfrage senden
                </h2>
                <p className="text-primary-600 mb-8">
                  Schildern Sie Ihren Fall – wir finden die passende 
                  Partner-Detektei für Sie.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
            Häufige Fragen zur Kontaktaufnahme
          </h2>
          <div className="mt-8 space-y-6 text-left">
            <div className="bg-white rounded-xl p-6 border border-primary-100">
              <h3 className="font-semibold text-primary-900 mb-2">
                Ist die Vermittlung wirklich kostenlos?
              </h3>
              <p className="text-primary-600 text-sm">
                Ja, die Vermittlung über Detektei Base ist völlig kostenlos und 
                unverbindlich. Wir finden die passende Partner-Detektei für Ihren 
                Fall – Sie zahlen nur die Detektei direkt.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-primary-100">
              <h3 className="font-semibold text-primary-900 mb-2">
                Wie schnell werde ich vermittelt?
              </h3>
              <p className="text-primary-600 text-sm">
                In der Regel meldet sich eine passende Partner-Detektei innerhalb 
                von 24 Stunden bei Ihnen. In dringenden Fällen erreichen Sie uns 
                auch telefonisch.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-primary-100">
              <h3 className="font-semibold text-primary-900 mb-2">
                Werden meine Daten vertraulich behandelt?
              </h3>
              <p className="text-primary-600 text-sm">
                Absolut. Ihre Daten werden nur an die eine ausgewählte Partner-Detektei 
                weitergegeben. Wir arbeiten DSGVO-konform – Details finden Sie in 
                unserer Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
