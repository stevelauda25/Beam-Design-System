import type { TableHTMLAttributes } from 'react';
import { cn } from '@beam/ui';

interface PropsTableProps extends TableHTMLAttributes<HTMLTableElement> {
  compact?: boolean;
}

export function PropsTable({
  className,
  children,
  compact = false,
  ...rest
}: PropsTableProps) {
  return (
    <div className={cn(compact ? 'mt-1 mb-0' : 'my-6', 'overflow-x-auto p-0 outline-none')}>
      <table
        className={cn(
          'w-full border-collapse text-left text-sm',
          compact && '!m-0 table-fixed',
          '[&_th]:bg-[#f5f5f5] [&_th]:px-2 [&_th]:py-1 [&_th]:font-[Inter] [&_th]:text-xs [&_th]:font-normal [&_th]:leading-[18px] [&_th]:text-[#525252]',
          compact && '[&_th]:w-1/4',
          '[&_td]:border-t [&_td]:border-black/10 [&_td]:px-4 [&_td]:py-2 [&_td]:text-subtle',
          '[&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[12px]',
          className,
        )}
        {...rest}
      >
        {children}
      </table>
    </div>
  );
}
