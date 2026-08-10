import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "orange" | "blue" | "green";
};

export default function Badge({
  children,
  variant = "orange",
}: BadgeProps) {
  const variants = {
    orange: "bg-orange-100 text-orange-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}