import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@beam/ui';
import {
  routes,
  componentRoutes,
  foundationRoutes,
  resourceRoutes,
  groupMeta,
} from '../../lib/routes.js';

const STORAGE_KEY = 'beam-docs-sidebar-groups';

function readGroupState(): Record<string, boolean> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function writeGroupState(state: Record<string, boolean>) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

interface NavItemProps {
  to: string;
  label: string;
  status?: 'ready' | 'planned';
  onNavigate?: () => void;
}

function NavItem({ to, label, status, onNavigate }: NavItemProps) {
  if (status === 'planned') {
    return (
      <div
        aria-disabled="true"
        title="Coming soon"
        className="relative flex cursor-not-allowed items-center rounded px-2 py-0.5 text-xs leading-[18px] text-[#8f8f8f] opacity-50"
      >
        <span className="truncate">{label}</span>
      </div>
    );
  }

  return (
    <NavLink
      to={to}
      end
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'relative flex items-center rounded px-2 py-0.5 text-xs font-normal leading-[18px] transition-colors duration-fast ease-standard',
          isActive
            ? 'bg-[#ebebeb] text-[#0a0a0a]'
            : 'text-[#0a0a0a] hover:bg-[#ebebeb]',
        )
      }
    >
      <span className="truncate">{label}</span>
    </NavLink>
  );
}

interface GroupProps {
  id: string;
  label: string;
  children: React.ReactNode;
  indentation?: 'deep' | 'compact';
}

function Group({ id, label, children, indentation = 'compact' }: GroupProps) {
  const [open, setOpen] = useState(() => readGroupState()[id] ?? true);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    const state = readGroupState();
    state[id] = next;
    writeGroupState(state);
  };

  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={open}
        onClick={toggle}
        className="flex w-full items-center justify-between overflow-hidden rounded px-2 py-0.5 text-xs font-normal leading-[18px] text-[#0a0a0a] transition-colors duration-fast hover:bg-[#ebebeb]"
      >
        <span>{label}</span>
        <img
          src="/sidebar-chevron.svg"
          alt=""
          className={cn(
            'h-3 w-3 transition-transform duration-base ease-standard',
            open && 'rotate-180',
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-[grid-template-rows,margin] duration-base ease-standard',
          open ? 'mt-1' : 'mt-0',
        )}
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={cn(
              'ml-[9px] flex flex-col border-l-[0.5px] border-[#c2c2c2] py-0.5',
              indentation === 'deep' ? 'pl-[9px]' : 'pl-1',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const top = routes.filter((r) => r.category === 'top');

  return (
    <aside className="flex h-screen w-[216px] shrink-0 flex-col gap-2 overflow-y-auto bg-[#f5f5f5] py-3 pl-2 pr-4">
      <Link to="/" className="flex h-[26px] items-center gap-1.5 px-2 py-1" onClick={onNavigate}>
        <img src="/beam-mark.svg" alt="" className="h-3 w-3 shrink-0" />
        <span className="whitespace-nowrap text-xs leading-[18px] text-black">Beam Design System</span>
        <span className="rounded bg-[#ebebeb] px-[5px] py-[3px] font-mono text-[10px] leading-3 text-[#8f8f8f]">v0.1</span>
      </Link>

      <nav className="flex flex-col gap-1">
        {top.map((r) => (
          <NavItem
            key={r.path}
            to={r.path}
            label={r.label}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      {foundationRoutes.length > 0 && (
        <Group {...groupMeta.foundations} indentation="deep">
          {foundationRoutes.map((r) => (
            <NavItem
              key={r.path}
              to={r.path}
              label={r.label}
              onNavigate={onNavigate}
            />
          ))}
        </Group>
      )}

      {componentRoutes.length > 0 && (
        <Group {...groupMeta.components}>
          {componentRoutes.map((r) => (
            <NavItem
              key={r.path}
              to={r.path}
              label={r.label}
              status={r.status}
              onNavigate={onNavigate}
            />
          ))}
        </Group>
      )}

      {resourceRoutes.length > 0 && (
        <Group {...groupMeta.resources}>
          {resourceRoutes.map((r) => (
            <NavItem
              key={r.path}
              to={r.path}
              label={r.label}
              onNavigate={onNavigate}
            />
          ))}
        </Group>
      )}
    </aside>
  );
}
