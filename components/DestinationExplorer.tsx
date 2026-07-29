"use client";

import { useMemo, useState } from "react";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import type {
  Destination,
  DestinationCategory,
} from "@/data/destinations";

type DestinationExplorerProps = {
  destinations: Destination[];
};

export default function DestinationExplorer({
  destinations,
}: DestinationExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const categories = useMemo(() => {
    return Array.from(
      new Set(destinations.map((destination) => destination.category)),
    ).sort();
  }, [destinations]);

  const departments = useMemo(() => {
    return Array.from(
      new Set(destinations.map((destination) => destination.department)),
    ).sort();
  }, [destinations]);

  const filteredDestinations = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        destination.name.toLowerCase().includes(normalizedSearch) ||
        destination.department.toLowerCase().includes(normalizedSearch) ||
        destination.municipality
          ?.toLowerCase()
          .includes(normalizedSearch) ||
        destination.category.toLowerCase().includes(normalizedSearch) ||
        destination.interests.some((interest) =>
          interest.toLowerCase().includes(normalizedSearch),
        ) ||
        destination.shortDescription
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "All" ||
        destination.category === selectedCategory;

      const matchesDepartment =
        selectedDepartment === "All" ||
        destination.department === selectedDepartment;

      return matchesSearch && matchesCategory && matchesDepartment;
    });
  }, [
    destinations,
    searchQuery,
    selectedCategory,
    selectedDepartment,
  ]);

  const filtersAreActive =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All" ||
    selectedDepartment !== "All";

  function resetFilters() {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDepartment("All");
  }

  return (
    <section aria-labelledby="destination-search-heading">
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Find your next destination
          </p>

          <h2
            id="destination-search-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-gray-950"
          >
            Search and filter destinations
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Search by destination, department, municipality, category, or
            travel interest.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <label
              htmlFor="destination-search"
              className="block text-sm font-semibold text-gray-900"
            >
              Search
            </label>

            <input
              id="destination-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Try volcano, beach, hiking..."
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
            />
          </div>

          <div>
            <label
              htmlFor="category-filter"
              className="block text-sm font-semibold text-gray-900"
            >
              Category
            </label>

            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(
                  event.target.value as DestinationCategory | "All",
                )
              }
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
            >
              <option value="All">All categories</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="department-filter"
              className="block text-sm font-semibold text-gray-900"
            >
              Department
            </label>

            <select
              id="department-filter"
              value={selectedDepartment}
              onChange={(event) =>
                setSelectedDepartment(event.target.value)
              }
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
            >
              <option value="All">All departments</option>

              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="text-sm font-medium text-gray-600"
            aria-live="polite"
          >
            Showing {filteredDestinations.length} of {destinations.length}{" "}
            {destinations.length === 1 ? "destination" : "destinations"}
          </p>

          {filtersAreActive && (
            <button
              type="button"
              onClick={resetFilters}
              className="self-start text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 sm:self-auto"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      <div className="mt-12">
        {filteredDestinations.length > 0 ? (
          <DestinationGrid destinations={filteredDestinations} />
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
            <h3 className="text-2xl font-bold text-gray-950">
              No destinations found
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
              Try a different search term or clear your selected filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-7 rounded-md bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}