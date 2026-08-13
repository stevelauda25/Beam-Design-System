import type { ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type ToastVariant = 'neutral' | 'default' | 'success' | 'error' | 'warning';
export interface ToastProps {
  variant?: ToastVariant;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  icon?: ReactNode;
  loading?: boolean;
  className?: string;
}

export function Toast({ variant = 'neutral', title = 'Download complete', description = 'document.md', actionLabel = 'Try again', onAction, onDismiss, icon, className }: ToastProps) {
  const tone = variant === 'default' ? 'neutral' : variant;
  return (
    <div role={tone === 'error' ? 'alert' : 'status'} className={cn("relative grid w-[310px] grid-cols-[18px_minmax(0,1fr)] gap-1 rounded-[6px] border-[0.5px] border-white/50 p-2 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-white shadow-[0_1px_1px_rgba(0,0,0,.1),0_4px_4px_rgba(0,0,0,.08),0_6px_6px_rgba(0,0,0,.06),0_8px_8px_rgba(0,0,0,.04),inset_0_-.5px_.5px_rgba(0,0,0,.1)]", tone === 'neutral' && 'bg-[rgb(var(--color-gray-800))]', tone === 'success' && 'bg-[rgb(var(--color-bg-success))]', tone === 'error' && 'bg-[rgb(var(--color-error-800))]', tone === 'warning' && 'bg-[rgb(var(--color-bg-warning))]', className)}>
      <span className="m-[3px] flex size-3 items-center justify-center [&>img]:size-3 [&>svg]:size-3">{icon}</span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <strong className="font-normal">{title}</strong>
        <span className={cn('truncate text-[rgb(var(--color-gray-350))]', tone === 'success' && 'text-white/60', (tone === 'error' || tone === 'warning') && 'text-white/70')}>{description}</span>
        {onAction != null && <button type="button" onClick={onAction} className="mt-0.5 self-start p-0 text-white">{actionLabel}</button>}
      </div>
      {onDismiss != null && <button type="button" className="absolute inset-0 -z-10" onClick={onDismiss} aria-label="Dismiss notification" />}
    </div>
  );
}
