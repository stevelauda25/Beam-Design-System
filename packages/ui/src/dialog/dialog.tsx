import type { ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type DialogVariant = 'standard' | 'confirmation';
export interface DialogProps {
  variant?: DialogVariant;
  title: string;
  closeIcon: ReactNode;
  primaryIcon?: ReactNode;
  primaryLabel: string;
  secondaryLabel?: string;
  children: ReactNode;
  className?: string;
}

export function Dialog({ variant = 'standard', title, closeIcon, primaryIcon, primaryLabel, secondaryLabel = 'Cancel', children, className }: DialogProps) {
  return (
    <section className={cn("flex w-[400px] max-w-full flex-col gap-3 rounded-[12px] border-[0.5px] border-black/10 bg-white px-2 pb-2 pt-3 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))] shadow-[0_8px_24px_rgba(0,0,0,0.08)]", className)}>
      <header className="flex h-[18px] items-center gap-1 px-2">
        <span className="m-0 flex-1 text-xs font-normal leading-[18px]">{title}</span>
        <button type="button" className="flex items-center gap-1.5 p-0"><span className="flex size-3 [&>img]:size-3 [&>svg]:size-3">{closeIcon}</span>Close</button>
      </header>
      {variant === 'standard' ? (
        <div className="flex flex-col gap-2 rounded-[4px] border-[0.5px] border-black/10 p-2">
          <div className="flex h-[26px] items-center justify-between gap-2">
            <span>{children}</span>
            <button type="button" className="flex h-[26px] items-center gap-1.5 rounded-[4px] bg-white px-2 py-1">
              {primaryIcon != null && <span className="flex size-3 [&>img]:size-3 [&>svg]:size-3">{primaryIcon}</span>}{primaryLabel}
            </button>
          </div>
          <div className="relative flex w-full items-center">
            <input readOnly value="Untitled item" className="h-[30px] w-full rounded-[4px] border-[0.5px] border-black/20 bg-white py-1.5 pl-2 pr-[88px] outline-none" />
            <span className="absolute right-2 text-[10px] text-[rgb(var(--color-gray-500))]">Press Enter ↵</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 rounded-[4px] border-[0.5px] border-black/10 px-2 pb-2 pt-3">
          <p className="m-0">{children}</p>
          <div className="flex justify-end gap-2">
            <button type="button" className="h-[30px] rounded-[4px] bg-[rgb(var(--color-gray-50))] px-3 py-1.5">{secondaryLabel}</button>
            <button type="button" className="h-[30px] rounded-[4px] bg-[#810718] px-3 py-1.5 text-white">{primaryLabel}</button>
          </div>
        </div>
      )}
    </section>
  );
}
