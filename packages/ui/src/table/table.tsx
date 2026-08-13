import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type TableRowState = 'default' | 'hover' | 'selected' | 'disabled';
export interface TableRowData { name: string; size: string; modified: string }
export interface TableProps {
  rows: Array<TableRowData & { state?: TableRowState }>;
  actionIcon: ReactNode;
  onAction?: (row: TableRowData) => void;
  className?: string;
}

const grid = 'grid grid-cols-[minmax(100px,1fr)_70px_82px_34px]';

export interface TableHeaderProps { labels?: [string, string, string]; className?: string }

export function TableHeader({ labels = ['Name', 'Size', 'Modified'], className }: TableHeaderProps) {
  return (
    <div className={cn(grid, 'h-[26px] rounded-t-[4px] border-[0.5px] border-black/10 bg-[rgb(var(--color-gray-50))] font-[Inter] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-800))]', className)}>
      <div className="flex min-w-0 items-center px-2 py-1">{labels[0]}</div>
      <div className="flex items-center justify-end px-2 py-1">{labels[1]}</div>
      <div className="flex items-center px-2 py-1">{labels[2]}</div>
      <div />
    </div>
  );
}

export interface TableRowProps extends TableRowData {
  state?: TableRowState;
  actionIcon?: ReactNode;
  onAction?: () => void;
  last?: boolean;
  standalone?: boolean;
  className?: string;
}

export function TableRow({ name, size, modified, state = 'default', actionIcon, onAction, last = false, standalone = false, className }: TableRowProps) {
  const disabled = state === 'disabled';
  return (
    <div
      data-state={state}
      className={cn(
        grid,
        'h-[26px] border-[0.5px] border-t-0 border-black/10 font-[Inter] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))] hover:bg-[rgb(var(--color-gray-75))]',
        standalone && 'rounded-[4px] border-t-[0.5px]',
        last && !standalone && 'rounded-b-[4px]',
        (state === 'hover' || state === 'selected') && 'bg-[rgb(var(--color-gray-75))]',
        disabled && 'pointer-events-none text-[rgb(var(--color-gray-400))]',
        className,
      )}
    >
      <div className="flex min-w-0 items-center overflow-hidden px-2 py-1"><span className="truncate">{name}</span></div>
      <div className="flex items-center justify-end px-2 py-1">{size}</div>
      <div className="flex items-center overflow-hidden px-2 py-1"><span className="truncate">{modified}</span></div>
      <div className="flex items-center justify-end overflow-visible py-0 pl-2 pr-1">
        {actionIcon != null && (
          <button
            type="button"
            disabled={disabled}
            aria-label={`Actions for ${name}`}
            onClick={onAction}
            className="flex size-[26px] items-center justify-center rounded-[4px] p-[7px] hover:bg-[rgb(var(--color-gray-50))] disabled:opacity-40 [&>img]:size-3 [&>svg]:size-3"
          >
            {actionIcon}
          </button>
        )}
      </div>
    </div>
  );
}

/** The complete Beam file/API table composition. */
export function Table({ rows, actionIcon, onAction, className }: TableProps) {
  return (
    <div className={cn('w-full font-[Inter] text-xs font-normal leading-[18px]', className)}>
      <TableHeader />
      {rows.map((row, index) => {
        return (
          <TableRow
            key={`${row.name}-${index}`}
            {...row}
            actionIcon={actionIcon}
            onAction={() => onAction?.(row)}
            last={index === rows.length - 1}
          />
        );
      })}
    </div>
  );
}

export interface TableActionProps extends ButtonHTMLAttributes<HTMLButtonElement> { icon: ReactNode }
export function TableAction({ icon, className, ...props }: TableActionProps) {
  return <button type="button" className={cn('flex size-[26px] items-center justify-center rounded-[4px] p-[7px] hover:bg-[rgb(var(--color-gray-50))] [&>img]:size-3 [&>svg]:size-3', className)} {...props}>{icon}</button>;
}
