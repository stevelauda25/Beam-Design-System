import type { ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type SharePopoverState = 'closed' | 'open' | 'hovered' | 'selected';
export interface SharePopoverProps {
  state?: SharePopoverState;
  pointer: ReactNode;
  documentIcon: ReactNode;
  peopleIcon: ReactNode;
  avatar: ReactNode;
  footerIcon: ReactNode;
  fileName?: string;
  className?: string;
}

export function SharePopover({ state = 'open', pointer, documentIcon, peopleIcon, avatar, footerIcon, fileName = 'document.md', className }: SharePopoverProps) {
  if (state === 'closed') return <div className="font-['TikTok_Sans'] text-xs leading-[18px] text-[rgb(var(--color-gray-600))]">Share popover closed</div>;
  const emphasized = state === 'hovered' || state === 'selected';
  return (
    <section className={cn("relative flex w-[350px] flex-col pt-2 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]", className)}>
      <span className="absolute left-[223px] top-0 z-10 block h-[8.5px] w-[17px] [&>img]:size-full [&>svg]:size-full">{pointer}</span>
      <div className="relative flex flex-col rounded-[6px] bg-[rgb(var(--color-gray-800))] px-2 py-3 shadow-[inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-2 overflow-hidden px-2 pb-3">
          <div className="flex w-full items-start justify-between gap-2">
            <div className="flex h-[18px] min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap"><span>People with access on</span><span className="flex size-3 [&>img]:size-3 [&>svg]:size-3">{documentIcon}</span><span className="truncate">{fileName}</span></div>
            <div className="flex h-[18px] items-center gap-0.5"><span className="flex size-3 [&>img]:size-3 [&>svg]:size-3">{peopleIcon}</span><span>1</span></div>
          </div>
          <div className={cn('flex h-[22px] items-center justify-between rounded-[4px] px-0 py-0.5', emphasized && 'beam-menu-item-active px-1')}>
            <div className="flex items-center gap-1.5"><span className="flex size-[18px] overflow-hidden rounded-full [&>img]:size-full">{avatar}</span><span>James T.</span><span className="rounded-full bg-[rgb(var(--color-gray-700))] px-1.5 py-1 text-[10px] leading-[10px]">Member</span></div>
            <span className="text-white/50">Remove</span>
          </div>
        </div>
        <div className="flex h-[27px] items-end justify-between border-t-[0.5px] border-white/10 px-2 pt-2">
          <span className="flex h-[18px] items-center gap-1.5">All people with access can edit<span className="flex size-3 [&>img]:size-3 [&>svg]:size-3">{footerIcon}</span></span>
          <span className="flex h-[18px] min-w-[72px] items-center gap-1.5"><span className="flex size-3 [&>img]:size-3 [&>svg]:size-3">{footerIcon}</span>{state === 'selected' ? 'Link-copied' : 'Copy-link'}</span>
        </div>
      </div>
    </section>
  );
}
