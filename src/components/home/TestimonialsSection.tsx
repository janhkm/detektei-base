import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Ich wusste nicht, wo ich anfangen sollte. Detektei Base hat mich innerhalb eines Tages an eine passende Detektei in meiner Region vermittelt. Das erste Gespräch hat mir sehr geholfen, meinen Fall einzuordnen.",
    author: "M. Schmidt",
    role: "Privatperson",
    rating: 5,
  },
  {
    content:
      "Als Unternehmer brauchte ich schnell einen erfahrenen Wirtschaftsdetektiv. Über Detektei Base wurde mir innerhalb von 24 Stunden ein spezialisierter Partner vermittelt, der genau zu unserem Fall passte.",
    author: "K. Müller",
    role: "Geschäftsführer",
    rating: 5,
  },
  {
    content:
      "Die Beratung war ehrlich und unverbindlich. Man hat mir erklärt, welche Art von Detektei ich brauche und mich dann an einen geprüften Partner weitergeleitet. So stelle ich mir guten Service vor.",
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
            Erfahrungen
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-white">
            So bewerten uns unsere Kunden
          </h2>
          <p className="mt-4 text-lg text-primary-300">
            Wir vermitteln Sie an die passende Detektei – schnell, diskret und 
            unverbindlich. Lesen Sie, wie andere unseren Service erlebt haben.
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
