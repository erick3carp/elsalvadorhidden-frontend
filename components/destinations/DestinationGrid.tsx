import type { Destination } from "@/data/destinations";
import DestinationCard from "@/components/destinations/DestinationCard";

type DestinationGridProps = {
  destinations: Destination[];
  emptyMessage?: string;
};

export default function DestinationGrid({
  destinations,
  emptyMessage = "No destinations were found.",
}: DestinationGridProps) {
  if (destinations.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
        <h2 className="text-xl font-semibold text-gray-900">
          No destinations available
        </h2>

        <p className="mt-2 text-gray-600">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}
