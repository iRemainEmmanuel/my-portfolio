import { cn } from '@/lib/utils';

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <hr
      className={cn('border-t border-border/50 my-8', className)}
      {...props}
    />
  );
}
