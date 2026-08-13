import { Link } from 'react-router-dom';
import { cn } from '@beam/ui';
import type { RouteEntry } from '../../lib/routes.js';
import { canonicalExamples } from './canonical-examples.js';

interface Props {
  entry: RouteEntry;
}

export function ComponentTile({ entry }: Props) {
  const isReady = entry.status === 'ready';
  const Example = canonicalExamples[entry.path];

  return (
    <div
      className={cn(
        'component-tile group flex h-[186px] flex-col overflow-hidden rounded-[4px] border-[0.5px] border-black/10 bg-white',
      )}
    >
      <Link
        to={entry.path}
        className="flex h-[26px] shrink-0 items-center justify-between px-2 py-1 text-[#0a0a0a]"
      >
        <span
          className={cn(
            'text-xs font-normal leading-[18px]',
            isReady ? 'text-[#0a0a0a]' : 'text-[#8f8f8f]',
          )}
        >
          {entry.label}
        </span>
        {!isReady && (
          <span className="text-[10px] uppercase tracking-wider text-muted">
            Coming soon
          </span>
        )}
      </Link>
      <div
        className={cn(
          'flex flex-1 items-center justify-center px-6',
          !isReady && 'opacity-40',
        )}
      >
        {isReady && Example && <Example />}
        {isReady && !Example && <span className="text-xs text-[#8f8f8f]">Preview unavailable</span>}
        {!isReady && <span className="text-xs text-[#8f8f8f]">—</span>}
      </div>
    </div>
  );
}
