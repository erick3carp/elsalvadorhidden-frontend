"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Destination } from "@/data/destinations";

type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/destinations/${destination.slug}`}
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
        aria-label={`View travel guide for ${destination.name}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950">
          {!imageFailed ? (
            <Image
              src={destination.heroImage}
              alt={`${destination.name}, El Salvador`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-950 px-6 text-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                  {destination.category}
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  {destination.name}
                </p>
              </div>
            </div>
          )}

          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-900 shadow-sm backdrop-blur">
            {destination.category}
          </span>
        </div>

        <div className="flex h-full flex-col p-6">
          {destination.department && (
            <p className="text-sm font-medium text-emerald-700">
              {destination.department}
            </p>
          )}

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 transition group-hover:text-emerald-800">
            {destination.name}
          </h2>

          <p className="mt-3 line-clamp-3 leading-7 text-gray-600">
            {destination.shortDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {destination.interests.slice(0, 3).map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {interest}
              </span>
            ))}
          </div>

          <p className="mt-6 font-semibold text-emerald-700">
            View destination guide
            <span
              aria-hidden="true"
              className="ml-2 inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
