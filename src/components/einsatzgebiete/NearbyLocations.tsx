import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Stadt, Bundesland, Landkreis } from "@/data/types";

interface NearbyLocationsProps {
  locations: Array<Stadt & { distance_km: number }>;
  bundesland: Bundesland;
  currentStadt: Stadt;
  className?: string;
}

export function NearbyLocations({
  locations,
  bundesland,
  currentStadt,
  className,
}: NearbyLocationsProps) {
  if (locations.length === 0) return null;

  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <MapPin className="h-5 w-5 text-primary-700" />
        </div>
        <div>
          <h2 className="text-xl font-display font-bold text-primary-900">
            Einsatzgebiet rund um {currentStadt.name}
          </h2>
          <p className="text-sm text-primary-500">
            Auch in diesen Städten sind wir für Sie da
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {locations.map((location) => {
          // URL-Pfad basierend auf kreisfrei oder nicht
          const href = location.is_kreisfrei
            ? `/einsatzgebiete/bundesland/${bundesland.slug}/${location.slug}`
            : `/einsatzgebiete/bundesland/${bundesland.slug}/${location.landkreis_id ? "landkreis" : ""}/${location.slug}`;

          return (
            <Link
              key={location.id}
              href={href}
              className="group flex items-center justify-between p-4 bg-white rounded-lg border border-primary-100 hover:border-primary-300 hover:shadow-sm transition-all"
            >
              <div>
                <span className="font-medium text-primary-900 group-hover:text-primary-700">
                  {location.name}
                </span>
                <span className="block text-xs text-primary-500">
                  ca. {location.distance_km} km entfernt
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-primary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
