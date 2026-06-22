export default function Footer() {
  return (
    <footer className="bg-[#0D1B4A] text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="font-bold text-xl">
          SHALL SOLUTIONS
        </h3>

        <p className="mt-2">
          Smart Solutions for Better Living
        </p>

        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} SHALL SOLUTIONS
        </p>
      </div>
    </footer>
  );
}