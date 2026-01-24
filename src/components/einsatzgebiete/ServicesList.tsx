import Link from "next/link";
import {
  Heart,
  Wallet,
  Search,
  Users,
  ShieldAlert,
  UserCheck,
  Thermometer,
  PackageX,
  Scale,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { PRIVAT_SERVICES, WIRTSCHAFT_SERVICES, ServiceCategory } from "@/data/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Wallet,
  Search,
  Users,
  ShieldAlert,
  UserCheck,
  Thermometer,
  PackageX,
  Scale,
  AlertTriangle,
};

// Mapping von Service-IDs zu Detail-Seiten
const serviceLinks: Record<string, string> = {
  // Privatdetektei
  untreue: "/privatdetektei/untreue",
  personensuche: "/privatdetektei/personensuche",
  sorgerecht: "/privatdetektei/sorgerecht",
  stalking: "/privatdetektei/stalking",
  observation: "/privatdetektei/observation",
  betrug_privat: "/privatdetektei/betrug",
  // Wirtschaftsdetektei
  mitarbeiter: "/wirtschaftsdetektei/mitarbeiterpruefung",
  krankfeier: "/wirtschaftsdetektei/krankfeier",
  wettbewerb: "/wirtschaftsdetektei/wettbewerb",
  betrug: "/wirtschaftsdetektei/betrug",
  versicherungsbetrug: "/wirtschaftsdetektei/versicherungsbetrug",
  industriespionage: "/wirtschaftsdetektei/industriespionage",
};

interface ServicesListProps {
  type: "privat" | "wirtschaft";
  stadtName?: string;
  className?: string;
}

export function ServicesList({ type, stadtName, className }: ServicesListProps) {
  const services = type === "privat" ? PRIVAT_SERVICES : WIRTSCHAFT_SERVICES;
  const title =
    type === "privat"
      ? `Privatermittlungen${stadtName ? ` in ${stadtName}` : ""}`
      : `Wirtschaftsermittlungen${stadtName ? ` in ${stadtName}` : ""}`;

  return (
    <div className={className}>
      <h3 className="text-lg font-display font-bold text-primary-900 mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || ShieldAlert;
          const href = serviceLinks[service.id];
          
          const content = (
            <>
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                <Icon className="h-5 w-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-primary-900 group-hover:text-primary-700 transition-colors">
                  {service.name}
                </h4>
                <p className="text-sm text-primary-600 mt-0.5">
                  {service.description}
                </p>
              </div>
              {href && (
                <ArrowRight className="h-4 w-4 text-primary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0 self-center" />
              )}
            </>
          );
          
          if (href) {
            return (
              <Link
                key={service.id}
                href={href}
                className="group flex items-start gap-4 p-4 bg-white rounded-lg border border-primary-100 hover:border-primary-300 hover:shadow-sm transition-all"
              >
                {content}
              </Link>
            );
          }
          
          return (
            <div
              key={service.id}
              className="group flex items-start gap-4 p-4 bg-white rounded-lg border border-primary-100"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
