import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDestinationBySlug,
  getPublishedDestinations,
} from "@/data/destinations";

type DestinationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPublishedDestinations().map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: destination.name,
    description: destination.description,
    alternates: {
      canonical: `/destinations/${destination.slug}`,
    },
    openGraph: {
      title: `${destination.name} | El Salvador Hidden`,
      description: destination.description,
      type: "article",
      url: `/destinations/${destination.slug}`,
    },
  };
}

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const locationLabel = destination.municipality
    ? `${destination.municipality}, ${destination.department}`
    : destination.department;

  return (
    <main>
      {/* Hero */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/destinations"
            className="inline-flex items-center text-sm font-semibold text-emerald-300 transition hover:text-white"
          >
            <span aria-hidden="true" className="mr-2">
              ←
            </span>
            All destinations
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {destination.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {destination.name}
            </h1>

            <p className="mt-5 text-lg font-medium text-emerald-100">
              {locationLabel}
            </p>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-emerald-50">
              {destination.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {destination.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-emerald-300/40 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-50"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
          <div className="flex min-h-80 items-center justify-center rounded-3xl bg-emerald-900 px-6 text-center text-white sm:min-h-96">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Destination photography
              </p>

              <p className="mt-4 text-3xl font-bold">
                {destination.name}
              </p>

              <p className="mt-3 text-emerald-100">
                A featured photograph will be added here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.5fr_0.5fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Destination overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
              Why visit {destination.name}?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              {destination.description}
            </p>
          </div>

          <aside className="rounded-2xl bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-gray-950">
              At a glance
            </h2>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Department
                </dt>
                <dd className="mt-1 text-gray-800">
                  {destination.department}
                </dd>
              </div>

              {destination.municipality && (
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    Municipality
                  </dt>
                  <dd className="mt-1 text-gray-800">
                    {destination.municipality}
                  </dd>
                </div>
              )}

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Category
                </dt>
                <dd className="mt-1 text-gray-800">
                  {destination.category}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Best time to visit
                </dt>
                <dd className="mt-1 text-gray-800">
                  {destination.bestTimeToVisit}
                </dd>
              </div>

              {destination.estimatedVisitDuration && (
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    Suggested duration
                  </dt>
                  <dd className="mt-1 text-gray-800">
                    {destination.estimatedVisitDuration}
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Highlights
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
            What makes this destination special
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destination.highlights.map((highlight, index) => (
              <article
                key={highlight}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 text-lg font-semibold leading-7 text-gray-950">
                  {highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Travel tips */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Before you go
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
              Practical travel tips
            </h2>
          </div>

          <ul className="mt-10 grid gap-5 lg:grid-cols-2">
            {destination.travelTips.map((tip) => (
              <li
                key={tip}
                className="flex gap-4 rounded-2xl border border-gray-200 p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800"
                >
                  ✓
                </span>

                <p className="leading-7 text-gray-700">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Coordinates */}
      {destination.coordinates && (
        <section className="bg-emerald-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm lg:flex lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Location
                </p>

                <h2 className="mt-3 text-2xl font-bold text-gray-950">
                  Find {destination.name}
                </h2>

                <p className="mt-3 text-gray-600">
                  Coordinates: {destination.coordinates.latitude},{" "}
                  {destination.coordinates.longitude}
                </p>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${destination.coordinates.latitude},${destination.coordinates.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-md bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800 lg:mt-0"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Final navigation */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            Continue exploring El Salvador
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Browse more destinations and discover new places for your future
            trip.
          </p>

          <Link
            href="/destinations"
            className="mt-8 inline-block rounded-md bg-emerald-700 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
          >
            View all destinations
          </Link>
        </div>
      </section>
    </main>
  );
}