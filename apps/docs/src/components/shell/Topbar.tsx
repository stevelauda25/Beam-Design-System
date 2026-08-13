import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@beam/ui';

interface Props {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: Props) {
  return (
    <header className="sticky top-0 z-30 flex h-12 items-center border-b border-black/10 bg-white px-3 md:hidden">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="md:hidden"
          leftIcon={<Menu className="h-4 w-4" />}
        />
        <Link to="/" className="flex items-center gap-2">
          <img src="/beam-mark.svg" alt="" className="h-3 w-3" />
          <span className="text-xs text-[#0a0a0a]">Beam Design System</span>
          <span className="rounded bg-[#ebebeb] px-[5px] py-[3px] font-mono text-[10px] leading-3 text-[#8f8f8f]">
            v0.1
          </span>
        </Link>
      </div>
    </header>
  );
}
