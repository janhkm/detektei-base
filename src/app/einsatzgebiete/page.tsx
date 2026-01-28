import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Building2, Map } from "lucide-react";
import { bundeslaender } from "@/data/bundeslaender";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Einsatzgebiete | Detektei Base deutschlandweit",
  description:
    "Detektei Base – deutschlandweit tätig. Professionelle Ermittlungen in allen 16 Bundesländern. Zusätzlich mit geprüften Partnern.",
};

export default function EinsatzgebietePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Einsatzgebiete", href: "/einsatzgebiete" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Map className="h-4 w-4 text-accent-400" />
              <span>Deutschlandweit im Einsatz</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Detektei Base – deutschlandweit
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Detektei Base ist deutschlandweit tätig. Wählen Sie Ihr Bundesland – 
              wir führen professionelle Ermittlungen durch und arbeiten zusätzlich 
              mit geprüften Partnern in allen Regionen zusammen.
            </p>
          </div>
        </div>
      </section>

      {/* Bundesländer Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {bundeslaender
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((bundesland) => (
                <Link
                  key={bundesland.id}
                  href={`/einsatzgebiete/bundesland/${bundesland.slug}`}
                  className="group p-5 bg-primary-50/50 rounded-xl border border-primary-100 hover:border-primary-300 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <h2 className="font-display font-bold text-primary-900 group-hover:text-primary-700">
                      {bundesland.name}
                    </h2>
                    <ArrowRight className="h-5 w-5 text-primary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-primary-500">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>Hauptstadt: {bundesland.capital}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
            Deutschlandweit tätig, professionelle Ermittlungen
          </h2>
          <p className="text-primary-600 leading-relaxed max-w-2xl mx-auto">
            Detektei Base ist in ganz Deutschland tätig. Mit unserer Erfahrung und 
            zusätzlichen geprüften Partnern bieten wir schnelle und professionelle 
            Ermittlungen – ob in Großstädten oder ländlichen Regionen.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-white rounded-lg border border-primary-200">
              <span className="text-2xl font-bold text-primary-900">16</span>
              <span className="text-sm text-primary-500 ml-2">Bundesländer</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-primary-200">
              <span className="text-2xl font-bold text-primary-900">400+</span>
              <span className="text-sm text-primary-500 ml-2">Landkreise</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-primary-200">
              <span className="text-2xl font-bold text-primary-900">2.000+</span>
              <span className="text-sm text-primary-500 ml-2">Städte</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
