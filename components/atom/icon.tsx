import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon, LucideProps } from 'lucide-react-native';

const iconVariants = cva('text-current', {
  variants: {
    size: { default: 'size-4', sm: 'size-3.5', lg: 'size-5', xl: 'size-6' },
  },
  defaultVariants: { size: 'default' },
});

type IconProps = Omit<LucideProps, 'size'> & VariantProps<typeof iconVariants> & { as: LucideIcon };

export function Icon({ as: C, className, size, color, ...props }: IconProps) {
  return <C className={cn(iconVariants({ size }), className)} color={color} {...props} />;
}
