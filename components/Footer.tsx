import Link from "next/link";

const exploreLinks = [
  { name: "Destinations", href: "/destinations" },
  { name: "AI Planner", href: "/ai-planner" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const resourceItems = [
  "Privacy Policy — Coming soon",
  "Terms of Use — Coming soon",
  "Travel Blog — Coming soon",
];

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-bold"
              >
                ES
              </span>

              <span className="text-lg font-bold">
                El Salvador Hidden
              </span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-emerald-100">
              Discover authentic destinations, local culture, nature, beaches,
              and unforgettable experiences throughout El Salvador.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Explore
            </h2>

            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald-100 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Resources
            </h2>

            <ul className="mt-5 space-y-3">
  {resourceItems.map((item) => (
    <li key={item} className="text-emerald-200">
      {item}
    </li>
  ))}
</ul>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-sm text-emerald-200">
            © {new Date().getFullYear()} El Salvador Hidden. All rights reserved.
          </p>

          <p className="mt-3 text-sm text-emerald-200 md:mt-0">
            Built with Next.js and Microsoft Azure.
          </p>
        </div>
      </div>
    </footer>
  );
}