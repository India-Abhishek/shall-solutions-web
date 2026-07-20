type Props = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
      {children}
    </div>
  );
}