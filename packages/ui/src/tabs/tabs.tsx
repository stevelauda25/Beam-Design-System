import type { ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type TabsValue = 'list' | 'grid';

export interface TabsProps {
  value?: TabsValue;
  onValueChange?: (value: TabsValue) => void;
  listIcon: ReactNode;
  gridIcon: ReactNode;
  className?: string;
}

export interface TabProps {
  selected?: boolean;
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Tab({ selected = false, icon, children, onClick, className }: TabProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      onClick={onClick}
      className={cn(
        'relative flex h-[22px] items-center justify-center gap-1.5 rounded-[4px] border-[0.5px] border-transparent px-2 py-0.5 font-normal text-[rgb(var(--color-gray-500))]',
        selected && 'border-black/10 bg-white text-[rgb(var(--color-gray-975))] shadow-[inset_0_0_0_0.2px_rgba(0,0,0,0.15),inset_0_0.5px_0.5px_rgba(255,255,255,0.6),inset_0_-0.5px_0.5px_rgba(0,0,0,0.5)]',
        className,
      )}
    >
      <span className="flex size-3 shrink-0 [&>img]:size-3 [&>svg]:size-3">{icon}</span>
      <span>{children}</span>
    </button>
  );
}

export function Tabs({ value = 'grid', onValueChange, listIcon, gridIcon, className }: TabsProps) {
  const items: Array<{ value: TabsValue; label: string; icon: ReactNode }> = [
    { value: 'list', label: 'List', icon: listIcon },
    { value: 'grid', label: 'Grid', icon: gridIcon },
  ];

  return (
    <div
      role="tablist"
      aria-label="View"
      className={cn(
        'relative flex w-fit items-center overflow-hidden rounded-[6px] border-[0.5px] border-black/10 bg-[rgb(var(--color-gray-50))] p-0.5 font-sans text-xs font-normal leading-[18px] shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.6)]',
        className,
      )}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <Tab
            key={item.value}
            selected={active}
            icon={item.icon}
            onClick={() => onValueChange?.(item.value)}
          >
            {item.label}
          </Tab>
        );
      })}
    </div>
  );
}
