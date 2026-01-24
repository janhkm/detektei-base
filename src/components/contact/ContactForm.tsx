"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { clsx } from "clsx";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  privacy?: string;
}

const subjectOptions = [
  { value: "", label: "Bitte wählen..." },
  { value: "untreue", label: "Untreue / Fremdgehen" },
  { value: "personensuche", label: "Personensuche" },
  { value: "sorgerecht", label: "Sorgerecht / Unterhalt" },
  { value: "betrug", label: "Betrug / Diebstahl" },
  { value: "mitarbeiter", label: "Mitarbeiterüberprüfung" },
  { value: "krankfeier", label: "Krankfeiermissbrauch" },
  { value: "wirtschaft", label: "Wirtschaftsermittlungen" },
  { value: "sonstiges", label: "Sonstiges" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    if (!formData.subject) {
      newErrors.subject = "Bitte wählen Sie einen Betreff";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte beschreiben Sie Ihr Anliegen";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Bitte beschreiben Sie Ihr Anliegen ausführlicher";
    }

    if (!formData.privacy) {
      newErrors.privacy = "Bitte akzeptieren Sie die Datenschutzerklärung";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Anfrage fehlgeschlagen");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateField = (name: keyof FormData, value: string | boolean) => {
    let error: string | undefined;

    switch (name) {
      case "name":
        if (typeof value === "string" && !value.trim()) {
          error = "Bitte geben Sie Ihren Namen ein";
        }
        break;
      case "email":
        if (typeof value === "string") {
          if (!value.trim()) {
            error = "Bitte geben Sie Ihre E-Mail-Adresse ein";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
          }
        }
        break;
      case "subject":
        if (typeof value === "string" && !value) {
          error = "Bitte wählen Sie einen Betreff";
        }
        break;
      case "message":
        if (typeof value === "string") {
          if (!value.trim()) {
            error = "Bitte beschreiben Sie Ihr Anliegen";
          } else if (value.trim().length < 20) {
            error = "Bitte beschreiben Sie Ihr Anliegen ausführlicher";
          }
        }
        break;
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const fieldValue = type === "checkbox" 
      ? (e.target as HTMLInputElement).checked 
      : value;
    validateField(name as keyof FormData, fieldValue);
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-primary-600 mb-6">
          Wir haben Ihre Nachricht erhalten und vermitteln Sie schnellstmöglich 
          an eine passende Partner-Detektei.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary-700 font-medium hover:text-primary-900 transition-colors"
        >
          Neue Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">
            Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder
            kontaktieren Sie uns telefonisch.
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-primary-900 mb-1.5"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={clsx(
              "w-full px-4 py-3 rounded-lg border bg-white text-primary-900 placeholder-primary-400 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
              errors.name
                ? "border-red-300 focus:ring-red-500"
                : "border-primary-200 hover:border-primary-300"
            )}
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary-900 mb-1.5"
          >
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={clsx(
              "w-full px-4 py-3 rounded-lg border bg-white text-primary-900 placeholder-primary-400 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
              errors.email
                ? "border-red-300 focus:ring-red-500"
                : "border-primary-200 hover:border-primary-300"
            )}
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-primary-900 mb-1.5"
          >
            Telefon <span className="text-primary-400">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-primary-200 bg-white text-primary-900 placeholder-primary-400 transition-colors hover:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="0123 456 789"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-primary-900 mb-1.5"
          >
            Betreff <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={clsx(
              "w-full px-4 py-3 rounded-lg border bg-white text-primary-900 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
              errors.subject
                ? "border-red-300 focus:ring-red-500"
                : "border-primary-200 hover:border-primary-300",
              !formData.subject && "text-primary-400"
            )}
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary-900 mb-1.5"
        >
          Ihre Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={5}
          className={clsx(
            "w-full px-4 py-3 rounded-lg border bg-white text-primary-900 placeholder-primary-400 transition-colors resize-none",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
            errors.message
              ? "border-red-300 focus:ring-red-500"
              : "border-primary-200 hover:border-primary-300"
          )}
          placeholder="Beschreiben Sie Ihr Anliegen so detailliert wie möglich. Alle Informationen werden streng vertraulich behandelt."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Privacy Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-primary-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="text-sm text-primary-600">
            Ich habe die{" "}
            <a
              href="/datenschutz"
              className="text-primary-700 underline hover:text-primary-900"
              target="_blank"
            >
              Datenschutzerklärung
            </a>{" "}
            gelesen und bin mit der Verarbeitung meiner Daten einverstanden.{" "}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1 text-sm text-red-600">{errors.privacy}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={clsx(
          "w-full flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-semibold transition-all",
          status === "loading"
            ? "bg-primary-400 cursor-not-allowed"
            : "bg-primary-900 hover:bg-primary-800 shadow-lg hover:shadow-xl",
          "text-white"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Wird gesendet...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Anfrage absenden</span>
          </>
        )}
      </button>

      <p className="text-xs text-primary-500 text-center">
        Mit * markierte Felder sind Pflichtfelder. Ihre Daten werden
        ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
      </p>
    </form>
  );
}
