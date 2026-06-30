import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold">ElSalvadorHidden</h1>

      <nav className="flex gap-6 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/ai-planner">AI Planner</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
