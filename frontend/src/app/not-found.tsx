import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-7xl font-bold">
          404
        </h1>

        <p className="mt-4 text-slate-500">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-[#0D1B4A] px-6 py-3 text-white"
        >
          Go Home
        </Link>

      </div>

    </main>
  );
}