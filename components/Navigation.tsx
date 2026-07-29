"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "AI Planner",
    href: "/ai-planner",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3"
          aria-label="El Salvador Hidden home"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-lg font-bold text-white"
          >
            ES
          </span>

          <div>
            <p className="text-base font-bold tracking-tight text-gray-950">
              El Salvador Hidden
            </p>
            <p className="hidden text-xs text-gray-500 sm:block">
              Discover beyond the expected
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold transition ${
                  active
                    ? "text-emerald-700"
                    : "text-gray-700 hover:text-emerald-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-700 transition hover:border-emerald-700 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-white px-6 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationLinks.map((link) => {
              const active = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-4 py-3 text-base font-semibold transition ${
                    active
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-gray-700 hover:bg-gray-50 hover:text-emerald-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}