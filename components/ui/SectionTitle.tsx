interface SectionTitleProps {
  number: string;
  title: string;
}

export default function SectionTitle({
  number,
  title,
}: SectionTitleProps) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="text-[#64ffda] text-lg font-medium">
        {number}.
      </span>

      <h2 className="text-3xl font-bold text-[#ccd6f6]">
        {title}
      </h2>

      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}