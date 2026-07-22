import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <section className="max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          404 Error
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          This destination could not be found
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          The page may have moved, the link may be incorrect, or this hidden
          place has not been added to our guide yet.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-md bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Return home
          </Link>

          <Link
            href="/destinations"
            className="rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Explore destinations
          </Link>
        </div>
      </section>
    </main>
  );
}
