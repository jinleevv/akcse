type ComingSoonProps = {
  title: string;
  description: string;
};

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-orange-50/50 px-6 py-14 text-center sm:py-20">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700">
        Coming soon
      </p>
      <h3 className="text-2xl font-semibold tracking-tight text-gray-800">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-600">{description}</p>
    </div>
  );
}
