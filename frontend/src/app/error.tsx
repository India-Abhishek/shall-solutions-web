"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({
  reset,
}: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center">

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          Something went wrong
        </h1>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-[#0D1B4A] px-6 py-3 text-white"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}