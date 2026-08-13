import type { ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type ActivityItemState = 'default' | 'current' | 'completed';

export interface ActivityItem {
  person: string;
  action: string;
  time: string;
  detail: string;
  state?: ActivityItemState;
}

export interface ActivityProps {
  items: ActivityItem[];
  lineAsset?: ReactNode;
  className?: string;
}

export function Activity({ items, lineAsset, className }: ActivityProps) {
  return (
    <div className={cn("flex w-full flex-col font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))]", className)}>
      {items.map((item, index) => {
        const state = item.state ?? 'default';
        const hasLine = index < items.length - 1;
        return (
          <div className="grid h-[78px] grid-cols-[16px_minmax(0,1fr)] gap-1.5" key={`${item.person}-${item.time}-${index}`}>
            <div className="relative h-[78px] w-4">
              <span className={cn('absolute left-[5px] top-[10px] z-[1] size-1.5 rounded-full', state === 'completed' ? 'bg-[rgb(var(--color-gray-400))]' : 'bg-[rgb(var(--color-accent-gray-aqua-500))]')} />
              {hasLine && <span className="absolute bottom-0 left-2 top-[26px] flex w-px justify-center [&>img]:h-[52px] [&>img]:w-[0.5px] [&>svg]:h-[52px] [&>svg]:w-[0.5px]">{lineAsset ?? <i className="block h-[52px] w-[0.5px] bg-[rgb(var(--color-accent-gray-aqua-500)/.5)]" />}</span>}
            </div>
            <div className={cn('min-w-0 pt-1', state === 'completed' && 'opacity-60')}>
              <div className="flex h-[22px] items-center gap-1 whitespace-nowrap">
                <span>{item.person}</span>
                <span className="rounded-full bg-[rgb(var(--color-gray-75))] px-2 py-0.5 text-[10px] leading-[10px] text-[rgb(var(--color-gray-900))]">{item.action}</span>
                <time className="ml-auto text-[rgb(var(--color-gray-600))]">{item.time}</time>
              </div>
              <p className="m-0 whitespace-nowrap text-[rgb(var(--color-gray-500))]">{item.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
