type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 lg:mb-14 ${alignClass}`}>
      {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
      <h2 className="relative heading-accent inline-block text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 text-[#002D62]">
        {title}
      </h2>
      {description && (
        <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed mt-6">
          {description}
        </p>
      )}
    </div>
  );
}
