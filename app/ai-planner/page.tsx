import Image from "next/image";
import Link from "next/link";

export default function AIPlanner() {
  return (
    <main className="bg-white">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
        <div className="rounded-3xl bg-emerald-950 p-8 text-white shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Coming soon
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            AI Trip Planner
          </h1>

          <p className="mt-5 text-xl font-medium text-emerald-50">
            Personalized travel planning is coming soon.
          </p>

          <p className="mt-5 max-w-xl leading-7 text-emerald-100">
            The future planner will help travelers build itineraries based on
            their interests, available time, and preferred regions.
          </p>

          <ul className="mt-8 grid gap-3 text-emerald-50 sm:grid-cols-2">
            {["Personalized recommendations", "Trip duration planning", "Interest-based itineraries"].map(
              (feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full bg-emerald-300"
                  />
                  {feature}
                </li>
              ),
            )}
          </ul>

          <Link
            href="/destinations"
            className="mt-9 inline-block rounded-md bg-white px-6 py-3.5 font-semibold text-emerald-950 transition hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
          >
            Explore destinations
          </Link>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:mt-2">
          <Image
            src="/images/site/home/binaes.JPEG"
            alt="Illuminated BINAES library and colorful San Salvador sign at night"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
