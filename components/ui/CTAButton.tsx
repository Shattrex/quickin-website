import Link from 'next/link';
import { site } from '@/lib/site';

type CTAButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export default function CTAButton({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
  type = 'button',
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base px-6 py-3.5 rounded-sm transition-all duration-200';

  const variants = {
    primary:
      'bg-[#E10600] hover:bg-[#B80500] text-white shadow-md shadow-[#E10600]/20',
    secondary:
      'bg-[#002D62] hover:bg-[#001F45] text-white shadow-md shadow-[#002D62]/15',
    outline:
      'bg-white border-2 border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function OpeningUpdatesButton({
  className = '',
  variant = 'primary' as 'primary' | 'secondary' | 'outline',
  label = 'Get Opening Updates',
}: {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  label?: string;
}) {
  return (
    <CTAButton href={`#${site.openingUpdatesId}`} variant={variant} className={className}>
      {label}
    </CTAButton>
  );
}
