import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type FileCardState = 'default' | 'hover' | 'pressed' | 'selected' | 'disabled';
export interface FileCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  preview: ReactNode;
  name?: string;
  visualState?: FileCardState;
}

/** Beam-App-Project grid file card, extracted from `.fileGridCard`. */
export function FileCard({ preview, name = 'document.md', visualState = 'default', disabled, className, ...props }: FileCardProps) {
  const isDisabled = disabled || visualState === 'disabled';
  return (
    <button
      {...props}
      type="button"
      disabled={isDisabled}
      data-state={visualState}
      className={cn(
        'flex h-[102px] w-[136.667px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[4px] bg-transparent p-0 font-[Inter] text-[rgb(var(--color-gray-975))] outline-none',
        'hover:bg-[rgb(var(--color-gray-50))] active:bg-[rgb(var(--color-gray-75))] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[rgb(var(--color-accent-gray-aqua-500))]',
        (visualState === 'hover' || visualState === 'selected') && 'bg-[rgb(var(--color-gray-50))]',
        visualState === 'pressed' && 'bg-[rgb(var(--color-gray-75))]',
        isDisabled && 'pointer-events-none opacity-40',
        className,
      )}
    >
      <span className="flex h-20 w-[63px] shrink-0 items-center justify-center [&>img]:h-[62px] [&>img]:w-[49.6px] [&>svg]:h-[62px] [&>svg]:w-[49.6px]">
        {preview}
      </span>
      <span className="block h-[22px] w-full shrink-0 truncate px-2 py-0.5 text-center text-xs font-normal leading-[18px]">{name}</span>
    </button>
  );
}
