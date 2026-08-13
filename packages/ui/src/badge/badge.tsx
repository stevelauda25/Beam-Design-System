import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'purple';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  /** Compatibility props retained while the catalog uses one structure. */
  size?: 'sm' | 'md';
  dot?: boolean;
  icon?: ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-[rgb(var(--color-gray-75))] text-[rgb(var(--color-gray-900))]',
  accent: 'bg-[rgb(var(--color-accent-gray-aqua-25))] text-[rgb(var(--color-accent-gray-aqua-600))]',
  success: 'bg-[rgb(var(--color-success-25))] text-[rgb(var(--color-success-600))]',
  warning: 'bg-[rgb(var(--color-warning-25))] text-[rgb(var(--color-warning-600))]',
  error: 'bg-[rgb(var(--color-error-25))] text-[rgb(var(--color-error-700))]',
  info: 'bg-[rgb(var(--color-info-25))] text-[rgb(var(--color-info-600))]',
  purple: 'bg-[#f7f1ff] text-[#7635d9]',
};

/** One Beam badge structure; only its semantic color variant changes. */
export function Badge({ variant = 'neutral', size: _size, dot, icon, children, className, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        'inline-flex h-[18px] items-center gap-1 whitespace-nowrap rounded-full py-1 pl-1.5 pr-2 font-[Inter] text-[10px] font-normal leading-[10px]',
        variants[variant],
        className,
      )}
    >
      {icon != null && <span className="flex shrink-0 items-center">{icon}</span>}
      {dot && <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  );
}
