"use client";

import { useState, type ReactElement, type ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipSide = TooltipPlacement;
export type TooltipVariant = 'default' | 'success' | 'error';

export interface TooltipProps {
  children: ReactElement;
  body?: ReactNode;
  content?: ReactNode;
  title?: ReactNode;
  placement?: TooltipPlacement;
  side?: TooltipSide;
  variant?: TooltipVariant;
  open?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

const positions: Record<TooltipPlacement, string> = {
  top: 'bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2',
  right: 'left-[calc(100%+6px)] top-1/2 -translate-y-1/2',
  bottom: 'left-1/2 top-[calc(100%+6px)] -translate-x-1/2',
  left: 'right-[calc(100%+6px)] top-1/2 -translate-y-1/2',
};

const arrows: Record<TooltipPlacement, string> = {
  top: 'left-1/2 top-full -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent',
  right: 'right-full top-1/2 -translate-y-1/2 border-y-[6px] border-r-[6px] border-y-transparent',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-x-[6px] border-b-[6px] border-x-transparent',
  left: 'left-full top-1/2 -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent',
};

const tone = { default: '#525252', success: '#129457', error: '#7f1d2d' } as const;

export function Tooltip({ children, body, content, title, placement, side, variant = 'default', open, defaultOpen = false, className }: TooltipProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const visible = open ?? internalOpen;
  const resolvedPlacement = placement ?? side ?? 'top';
  const label = content ?? body;
  return (
    <span className="relative inline-flex" onMouseEnter={() => open === undefined && setInternalOpen(true)} onMouseLeave={() => open === undefined && setInternalOpen(false)} onFocusCapture={() => open === undefined && setInternalOpen(true)} onBlurCapture={() => open === undefined && setInternalOpen(false)}>
      {children}
      {visible && (
        <span role="tooltip" style={{ backgroundColor: tone[variant] }} className={cn("absolute z-50 block w-max rounded-[6px] px-3 py-1 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-white shadow-[0_1px_1px_rgba(0,0,0,.1),0_4px_4px_rgba(0,0,0,.08),0_6px_6px_rgba(0,0,0,.06),0_8px_8px_rgba(0,0,0,.04),inset_0_-.5px_.5px_rgba(0,0,0,.1)]", positions[resolvedPlacement], className)}>
          {title != null && <span className="mr-1">{title}</span>}{label}
          <span aria-hidden="true" style={{ color: tone[variant] }} className={cn('absolute size-0', arrows[resolvedPlacement], resolvedPlacement === 'top' && 'border-t-current', resolvedPlacement === 'right' && 'border-r-current', resolvedPlacement === 'bottom' && 'border-b-current', resolvedPlacement === 'left' && 'border-l-current')} />
        </span>
      )}
    </span>
  );
}
