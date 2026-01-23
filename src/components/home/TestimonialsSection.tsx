import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Die Detektei hat mir in einer schwierigen Situation sehr geholfen. Die Ermittlungen waren diskret und professionell, und die Beweise haben vor Gericht standgehalten.",
    author: "M. Schmidt",
    role: "Privatperson",
    rating: 5,
  },
  {
    content:
      "Wir haben die Detektei für eine interne Ermittlung beauftragt. Die Ergebnisse waren detailliert und haben uns geholfen, den Betrug aufzuklären.",
    author: "K. Müller",
    role: "Geschäftsführer",
    rating: 5,
  },
  {
    content:
      "Sehr empfehlenswert! Die Beratung war ausgezeichnet und die Kosten transparent. Die Detektive haben schnell und effektiv gearbeitet.",
    author: "S. Weber",
    role: "Privatperson",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
            Kundenstimmen
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-white">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-4 text-lg text-primary-300">
            Vertrauen ist die Grundlage unserer Arbeit. Lesen Sie, was unsere
            Kunden über ihre Erfahrungen berichten.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-accent-400 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent-400 text-accent-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-200 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-primary-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-primary-400 text-sm mt-10">
          * Aus Datenschutzgründen werden nur Initialen und Berufsbezeichnungen
          genannt.
        </p>
      </div>
    </section>
  );
}
