type Props = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: Props) {
  return (
    <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-orange-600 font-medium">
      {children}
    </span>
  );
}