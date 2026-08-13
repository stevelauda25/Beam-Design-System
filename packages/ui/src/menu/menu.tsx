import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type MenuItemState = 'default' | 'hover' | 'pressed' | 'selected' | 'disabled';
export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  indicator?: ReactNode;
  visualState?: MenuItemState;
}

export function MenuItem({ icon, indicator, visualState = 'default', disabled, children, className, ...props }: MenuItemProps) {
  const isDisabled = disabled || visualState === 'disabled';
  return (
    <button
      {...props}
      type="button"
      disabled={isDisabled}
      data-menu-item
      className={cn(
        "flex h-[26px] w-[116px] items-center gap-1 rounded-[4px] border-[0.5px] border-transparent px-1.5 py-1 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-white",
        'beam-menu-item hover:border-white/10 hover:border-l-transparent',
        (visualState === 'hover' || visualState === 'selected') && 'beam-menu-item-active border-white/10 border-l-transparent',
        visualState === 'pressed' && 'beam-menu-item-pressed border-white/10 border-l-transparent',
        isDisabled && 'pointer-events-none text-white/40',
        className,
      )}
    >
      <span className="flex size-3 shrink-0 items-center justify-center [&>img]:size-3 [&>svg]:size-3">{icon}</span>
      <span className="min-w-0 flex-1 truncate text-left">{children}</span>
      {visualState === 'selected' && indicator != null && (
        <span className="flex size-3 shrink-0 items-center justify-center [&>img]:size-3 [&>svg]:size-3">{indicator}</span>
      )}
    </button>
  );
}

export type MenuType = 'single' | 'group';

export function Menu({ children, type = 'single', className }: { children: ReactNode; type?: MenuType; className?: string }) {
  return (
    <div
      data-menu-type={type}
      className={cn(
        "inline-flex flex-col overflow-hidden rounded-[6px] border-[0.5px] border-white/50 bg-[rgb(var(--color-gray-800))] p-0.5 font-['TikTok_Sans'] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_-4px_rgba(0,0,0,0.08),0_6px_12px_-6px_rgba(0,0,0,0.06),0_8px_16px_-6px_rgba(0,0,0,0.04),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]",
        type === 'single' ? 'w-[120px]' : 'w-[151px] gap-1 [&_[data-menu-item]]:h-[22px] [&_[data-menu-item]]:w-full',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MenuGroup({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="flex w-full flex-col">
      {label != null && (
        <div className="flex h-[22px] w-full items-center rounded-[4px] border-[0.5px] border-transparent px-1.5 py-1 text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-200))]">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
