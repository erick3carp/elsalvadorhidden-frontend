import Image from "next/image";
import Link from "next/link";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import { getFeaturedDestinations } from "@/data/destinations";

const interests = [
  {
    name: "Beaches",
    description:
      "Discover Pacific beaches, peaceful coastlines, seafood, and unforgettable sunsets.",
  },
  {
    name: "Nature",
    description:
      "Explore lakes, waterfalls, forests, volcanoes, and scenic outdoor destinations.",
  },
  {
    name: "Culture",
    description:
      "Experience historic towns, local traditions, art, architecture, and community life.",
  },
  {
    name: "Adventure",
    description:
      "Find hiking, surfing, outdoor activities, and experiences beyond the typical itinerary.",
  },
];

export default function Home() {
  const featuredDestinations = getFeaturedDestinations();

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.24),transparent_45%)]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Discover El Salvador differently
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Authentic places.
              <span className="block text-emerald-300">
                Unforgettable experiences.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-50 sm:text-xl">
              Explore hidden destinations, local culture, beaches, volcanoes,
              historic towns, and authentic experiences throughout El Salvador.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations"
                className="rounded-md bg-white px-6 py-3.5 text-center font-semibold text-emerald-950 transition hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
              >
                Explore destinations
              </Link>

              <Link
                href="/about"
                className="rounded-md border border-white/40 px-6 py-3.5 text-center font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Learn about the project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              More than a travel guide
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              See the places and stories that make El Salvador special
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-8 text-gray-600">
              El Salvador Hidden is being built to help travelers move beyond
              generic recommendations. The goal is to highlight meaningful
              destinations, practical travel information, local culture, and
              places that deserve to be discovered.
            </p>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/site/home/culture.JPEG"
                alt="Ornate theater interior with painted dome, chandelier, and curved balconies"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Featured destinations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Start exploring El Salvador
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Discover a selection of places representing the country&apos;s
                nature, culture, history, and coastline.
              </p>
            </div>

            <Link
              href="/destinations"
              className="font-semibold text-emerald-700 transition hover:text-emerald-900"
            >
              View all destinations
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>

          <div className="mt-12">
            <DestinationGrid destinations={featuredDestinations} />
          </div>
        </div>
      </section>

      {/* Explore by interest */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Explore by interest
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Find experiences that match your travel style
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest) => (
              <article
                key={interest.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-950">
                  {interest.name}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {interest.description}
                </p>

                <Link
                  href="/destinations"
                  className="mt-6 inline-block font-semibold text-emerald-700 transition hover:text-emerald-900"
                >
                  Explore {interest.name.toLowerCase()}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform value */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Why El Salvador Hidden
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                Travel guidance built around authentic discovery
              </h2>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-950">
                Local perspective
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Discover destinations through a project created with a genuine
                connection to El Salvador and its culture.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-950">
                Practical information
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                Find useful details, travel tips, highlights, and inspiration
                to help you plan a better experience.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm lg:col-span-3 lg:aspect-[16/5]">
              <Image
                src="/images/site/home/flower.JPEG"
                alt="Pink flowers blooming among sunlit green foliage"
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trip planner preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-3xl bg-gray-950 px-6 py-14 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Coming later
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Build a personalized trip through El Salvador
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-300">
                The future trip planner will help travelers organize
                destinations based on their interests, available time, and
                preferred regions.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:pl-10">
              <Link
                href="/ai-planner"
                className="inline-block rounded-md bg-emerald-500 px-6 py-3.5 font-semibold text-emerald-950 transition hover:bg-emerald-400"
              >
                Preview the trip planner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Begin discovering El Salvador
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Start with our featured destinations and return as new travel
            guides, tools, and hidden experiences are added.
          </p>

          <Link
            href="/destinations"
            className="mt-8 inline-block rounded-md bg-emerald-700 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
          >
            Explore the guide
          </Link>
        </div>
      </section>
    </main>
  );
}
