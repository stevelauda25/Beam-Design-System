import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type ButtonState = 'default' | 'hover' | 'pressed' | 'disabled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  /** Forces a state for design-system comparison. Normal usage can omit it. */
  visualState?: ButtonState;
  /** Kept for compatibility; Beam-App-Project uses one visual button type. */
  variant?: string;
  /** Kept for compatibility; Beam-App-Project uses one 26px size. */
  size?: string;
  loading?: boolean;
}

/**
 * Beam-App-Project button.
 * Extracted from `.plainButton` / `.createApiKey`: 26px high, 4px × 8px
 * padding, 6px gap, 12px icon, 12px/18px TikTok Sans, and 4px radius.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { leftIcon, visualState = 'default', variant: _variant, size: _size, loading: _loading, disabled, className, children, type = 'button', ...props },
  ref,
) {
  const isDisabled = disabled || visualState === 'disabled';
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      disabled={isDisabled}
      data-state={visualState}
      className={cn(
        "inline-flex h-[26px] items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-[4px] px-2 py-1 text-left font-['Inter'] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))] outline-none",
        'hover:bg-[rgb(var(--color-gray-50))] active:bg-[rgb(var(--color-gray-75))]',
        'focus-visible:ring-1 focus-visible:ring-[rgb(var(--color-accent-gray-aqua-500))]',
        'disabled:pointer-events-none disabled:text-[rgb(var(--color-gray-400))]',
        visualState === 'hover' && 'bg-[rgb(var(--color-gray-50))]',
        visualState === 'pressed' && 'bg-[rgb(var(--color-gray-75))]',
        className,
      )}
    >
      {leftIcon && <span className="flex size-3 shrink-0 items-center justify-center [&>img]:size-3 [&>svg]:size-3">{leftIcon}</span>}
      <span>{children}</span>
    </button>
  );
});

Button.displayName = 'Button';
