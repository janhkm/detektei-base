import Link from "next/link";
import { Phone, Mail, ArrowRight, Shield } from "lucide-react";

interface CTABoxProps {
  title?: string;
  description?: string;
  showPhone?: boolean;
  showEmail?: boolean;
  variant?: "default" | "dark";
}

export function CTABox({
  title = "Jetzt anrufen",
  description = "Vertraulich, unverbindlich und diskret. Schildern Sie uns Ihren Fall.",
  showPhone = true,
  showEmail = true,
  variant = "default",
}: CTABoxProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 ${
        isDark
          ? "bg-primary-900 text-white"
          : "bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            isDark ? "bg-accent-500" : "bg-primary-900"
          }`}
        >
          <Shield className={`h-6 w-6 ${isDark ? "text-primary-900" : "text-white"}`} />
        </div>
        <div>
          <h3
            className={`text-lg font-display font-bold ${
              isDark ? "text-white" : "text-primary-900"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm ${
              isDark ? "text-primary-300" : "text-primary-600"
            }`}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <Link
          href="/kontakt"
          className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all w-full ${
            isDark
              ? "bg-accent-500 text-primary-900 hover:bg-accent-400"
              : "bg-primary-900 text-white hover:bg-primary-800"
          }`}
        >
          Kontakt aufnehmen
          <ArrowRight className="h-4 w-4" />
        </Link>

        {showPhone && (
          <a
            href="tel:+4917666918653"
            className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all w-full ${
              isDark
                ? "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                : "bg-white text-primary-900 hover:bg-primary-50 border border-primary-200"
            }`}
          >
            <Phone className="h-4 w-4" />
            0176 66918653
          </a>
        )}
      </div>

      {showEmail && (
        <div className="mt-4 flex items-center gap-2 justify-center sm:justify-start">
          <Mail
            className={`h-4 w-4 ${isDark ? "text-primary-400" : "text-primary-500"}`}
          />
          <a
            href="mailto:kontakt@detektei-base.de"
            className={`text-sm hover:underline ${
              isDark ? "text-primary-300" : "text-primary-600"
            }`}
          >
            kontakt@detektei-base.de
          </a>
        </div>
      )}

      <p
        className={`mt-4 text-xs text-center sm:text-left ${
          isDark ? "text-primary-400" : "text-primary-500"
        }`}
      >
        🔒 100% diskret & vertraulich • Keine Weitergabe an Dritte
      </p>
    </div>
  );
}
