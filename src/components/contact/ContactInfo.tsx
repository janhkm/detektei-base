import { Phone, Mail, MapPin, Clock, Shield, MessageCircle } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Direct Contact Card */}
      <div className="bg-primary-900 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-display font-bold mb-4">
          Direkt Kontakt aufnehmen
        </h3>
        <p className="text-primary-200 text-sm mb-6">
          Sie möchten lieber direkt sprechen? Rufen Sie uns an oder
          schreiben Sie uns eine E-Mail – wir helfen Ihnen schnell weiter.
        </p>

        <div className="space-y-4">
          <a
            href="tel:+4917666918653"
            className="flex items-center gap-4 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary-900" />
            </div>
            <div>
              <p className="font-semibold">0176 66918653</p>
              <p className="text-xs text-primary-300">Jetzt anrufen</p>
            </div>
          </a>

          <a
            href="mailto:kontakt@detektei-base.de"
            className="flex items-center gap-4 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">kontakt@detektei-base.de</p>
              <p className="text-xs text-primary-300">E-Mail schreiben</p>
            </div>
          </a>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <Clock className="h-5 w-5 text-primary-700" />
          </div>
          <h3 className="font-display font-bold text-primary-900">
            Erreichbarkeit
          </h3>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-primary-600">Montag - Freitag</span>
            <span className="font-medium text-primary-900">08:00 - 20:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary-600">Samstag</span>
            <span className="font-medium text-primary-900">09:00 - 16:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary-600">Sonntag</span>
            <span className="font-medium text-primary-500">Geschlossen</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-primary-200">
          <p className="text-xs text-primary-500">
            <strong>Hinweis:</strong> Außerhalb der Geschäftszeiten können Sie 
            uns eine Nachricht auf dem Anrufbeantworter hinterlassen oder eine 
            E-Mail senden. Wir melden uns schnellstmöglich zurück.
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <MapPin className="h-5 w-5 text-primary-700" />
          </div>
          <h3 className="font-display font-bold text-primary-900">
            Einsatzgebiete
          </h3>
        </div>

        <p className="text-sm text-primary-600">
          Wir sind <strong>deutschlandweit</strong> tätig. Zusätzlich arbeiten wir mit 
          geprüften Partnern in allen Regionen zusammen.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Bayern",
            "NRW",
            "Baden-Württemberg",
            "Hessen",
            "Berlin",
            "Hamburg",
          ].map((region) => (
            <span
              key={region}
              className="px-3 py-1 bg-white rounded-full text-xs font-medium text-primary-700 border border-primary-200"
            >
              {region}
            </span>
          ))}
          <span className="px-3 py-1 bg-primary-200 rounded-full text-xs font-medium text-primary-700">
            + alle Bundesländer
          </span>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white rounded-2xl p-6 border border-primary-100">
        <h3 className="font-display font-bold text-primary-900 mb-4">
          Das garantieren wir
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-accent-600" />
            <span className="text-sm text-primary-700">
              Professionelle Ermittlungen
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-accent-600" />
            <span className="text-sm text-primary-700">
              Zusätzlich geprüfte Partner
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-accent-600" />
            <span className="text-sm text-primary-700">
              100% Diskretion garantiert
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-accent-600" />
            <span className="text-sm text-primary-700">
              DSGVO-konforme Datenverarbeitung
            </span>
          </div>
        </div>
      </div>

      {/* Alternative Contact */}
      <div className="text-center p-4 bg-accent-50 rounded-xl border border-accent-200">
        <MessageCircle className="h-6 w-6 text-accent-600 mx-auto mb-2" />
        <p className="text-sm text-primary-700">
          <strong>Lieber anonym bleiben?</strong>
          <br />
          <span className="text-primary-500">
            Rufen Sie uns einfach an – Sie müssen sich nicht vorstellen.
          </span>
        </p>
      </div>
    </div>
  );
}
