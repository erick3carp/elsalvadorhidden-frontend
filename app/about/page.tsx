import Image from "next/image";

export default function About() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          About the platform
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          About El Salvador Hidden
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
          <p>
            El Salvador Hidden was created to showcase the beauty, culture, and
            hidden gems of El Salvador. Our mission is to help travelers
            discover authentic experiences, from breathtaking landscapes to
            local traditions and unforgettable adventures.
          </p>

          <p>
            Whether you are exploring beaches, volcanoes, waterfalls, or
            historic towns, our platform guides you through meaningful
            destinations and provides AI-powered tools to help you plan your
            perfect trip.
          </p>

          <p>
            The goal is to go beyond the typical travel guide by highlighting
            places, stories, and experiences that help visitors understand the
            country in a more authentic way.
          </p>
        </div>

        <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-3xl shadow-lg sm:aspect-[16/9]">
          <Image
            src="/images/site/about/tree-rooftop.jpg"
            alt="Large flowering tree above rustic tile-roofed homes in the Salvadoran countryside"
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
