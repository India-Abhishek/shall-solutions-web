import Link from "next/link";
import {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Reusable Button
|--------------------------------------------------------------------------
| Supports:
| - Link
| - Normal Button
| - Submit Button
| - Disabled State
| - Future Loading State
|--------------------------------------------------------------------------
*/

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;

    href?: string;

    variant?:
      | "primary"
      | "secondary"
      | "outline";

    className?: string;
  };

export default function Button({
  children,
  href,

  variant = "primary",

  className = "",

  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition duration-300 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#0D1B4A] text-white hover:bg-[#16285f]",

    secondary:
      "bg-[#F97316] text-white hover:bg-[#ea6a16]",

    outline:
      "border border-[#0D1B4A] text-[#0D1B4A] hover:bg-[#0D1B4A] hover:text-white",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          base,
          variants[variant],
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={cn(
        base,
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}