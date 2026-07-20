import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition";

  const variants = {
    primary:
      "bg-[#0D1B4A] text-white hover:opacity-90",

    secondary:
      "bg-[#F97316] text-white hover:opacity-90",

    outline:
      "border border-[#0D1B4A] text-[#0D1B4A] hover:bg-[#0D1B4A] hover:text-white",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}