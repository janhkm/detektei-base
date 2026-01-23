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
          return (
            <div
              key={service.id}
              className="flex items-start gap-4 p-4 bg-white rounded-lg border border-primary-100 hover:border-primary-200 transition-colors"
            >
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-primary-900">{service.name}</h4>
                <p className="text-sm text-primary-600 mt-0.5">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
