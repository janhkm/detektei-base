"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navigation = {
  main: [
    { name: "Startseite", href: "/" },
    {
      name: "Leistungen",
      href: "#",
      children: [
        { name: "Privatdetektei", href: "/privatdetektei" },
        { name: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
      ],
    },
    { name: "Einsatzgebiete", href: "/einsatzgebiete" },
    { name: "Ablauf", href: "/ablauf" },
    { name: "Kosten", href: "/kosten" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ],
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50" role="banner">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Detektei Base - Zur Startseite">
            
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-primary-900 leading-tight">
                Detektei Base
              </span>
              <span className="text-xs text-primary-500 hidden sm:block">
                Detektei-Vermittlung
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.main.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button 
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors"
                    aria-expanded={openDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2 animate-scale-in">
                      <div className="bg-white rounded-lg shadow-lg ring-1 ring-black/5 py-2 min-w-[200px]" role="menu">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                            role="menuitem"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary-900 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href="tel:+4917666918653"
              className="flex items-center gap-2 text-sm font-medium text-primary-900 hover:text-primary-700 transition-colors"
              aria-label="Telefon: 0176 66918653"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>0176 66918653</span>
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-primary-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Jetzt kontaktieren
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <span className="sr-only">{mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-gray-100 animate-slide-down" role="navigation" aria-label="Mobile Navigation">
            <div className="space-y-1">
              {navigation.main.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-900"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:+4917666918653"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary-900"
                aria-label="Telefon: 0176 66918653"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>0176 66918653</span>
              </a>
              <Link
                href="/kontakt"
                className="block w-full text-center rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jetzt kontaktieren
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
