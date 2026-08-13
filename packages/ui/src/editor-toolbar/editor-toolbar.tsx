import type { ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type EditorToolbarState = 'default' | 'hover' | 'pressed' | 'selected' | 'menu-open';
export interface EditorToolbarIcons {
  chevron: ReactNode; bold: ReactNode; italic: ReactNode; underline: ReactNode;
  divider: ReactNode; list: ReactNode; link: ReactNode; image: ReactNode; check: ReactNode;
}
export interface EditorToolbarProps { icons: EditorToolbarIcons; state?: EditorToolbarState; className?: string }

const surface = "bg-[rgb(var(--color-gray-800))] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_-4px_rgba(0,0,0,0.08),0_6px_12px_-6px_rgba(0,0,0,0.06),0_8px_16px_-6px_rgba(0,0,0,0.04),inset_0_0_0_0.5px_rgba(255,255,255,0.5),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]";

export function EditorToolbar({ icons, state = 'default', className }: EditorToolbarProps) {
  const active = state === 'hover' || state === 'pressed' || state === 'selected';
  return (
    <div className={cn("relative flex h-6 w-max items-center gap-1 font-['TikTok_Sans'] text-xs font-normal leading-[18px]", className)}>
      <div className={cn('relative flex h-6 items-center overflow-visible rounded-[6px] p-0.5', surface)}>
        <button className="flex h-5 w-[98px] items-center justify-between gap-1 rounded-[4px] px-1 py-0.5 text-white"><span className="w-16 text-left">Body</span><span className={cn('flex size-3 [&>img]:size-3 [&>svg]:size-3', state === 'menu-open' && 'rotate-180')}>{icons.chevron}</span></button>
        {state === 'menu-open' && (
          <div className={cn('absolute left-0 top-7 z-10 flex w-[98px] flex-col overflow-hidden rounded-[6px] border-[0.5px] border-white/50 p-0.5', surface)}>
            <div className="flex h-6 items-center justify-between rounded-[4px] p-1 text-white"><span className="w-16">Header 1</span></div>
            <div className="beam-menu-item-active flex h-6 items-center justify-between rounded-[4px] border-[0.5px] border-white/10 p-1 text-white"><span className="w-16">Body</span><span className="flex size-3 [&>img]:size-3 [&>svg]:size-3">{icons.check}</span></div>
          </div>
        )}
      </div>
      <div className={cn('relative flex h-6 items-center gap-0.5 overflow-visible rounded-[6px] p-0.5', surface)}>
        {[icons.bold, icons.italic, icons.underline].map((icon, index) => <ToolbarIcon key={index} icon={icon} active={index === 0 && active} pressed={index === 0 && state === 'pressed'} />)}
        <span className="flex h-5 w-1 [&>img]:size-full [&>svg]:size-full">{icons.divider}</span>
        <button className="flex size-5 items-center justify-center rounded-[4px] p-1"><span className="size-3 rounded-full bg-[rgb(var(--color-gray-500))] shadow-[inset_0_0_0_1.2px_rgb(var(--color-gray-975))]" /></button>
        <span className="flex h-5 w-1 [&>img]:size-full [&>svg]:size-full">{icons.divider}</span>
        <ToolbarIcon icon={<span className="flex size-3 flex-col justify-center gap-[1.2px]">{[10,7,10,7].map((w,i)=><i key={i} className="block h-px rounded bg-white" style={{width:w}} />)}</span>} />
        <ToolbarIcon icon={icons.list} active={state === 'selected'} />
        <span className="flex h-5 w-1 [&>img]:size-full [&>svg]:size-full">{icons.divider}</span>
        <ToolbarIcon icon={icons.link} />
        <ToolbarIcon icon={icons.image} />
      </div>
    </div>
  );
}

function ToolbarIcon({ icon, active = false, pressed = false }: { icon: ReactNode; active?: boolean; pressed?: boolean }) {
  return <button className={cn('flex size-5 items-center justify-center rounded-[4px] border-[0.5px] border-transparent p-1 [&>img]:size-3 [&>svg]:size-3', active && 'beam-menu-item-active border-white/10', pressed && 'beam-menu-item-pressed')}>{icon}</button>;
}
