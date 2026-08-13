import { useState, type ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type SelectState = 'default' | 'hover' | 'focused' | 'open' | 'selected' | 'disabled';
export interface SelectOption { value: string; label: string }
export interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  visualState?: SelectState;
  chevron: ReactNode;
  selectedIndicator?: ReactNode;
  className?: string;
  'aria-label'?: string;
}

/** Beam-App-Project select trigger and listbox, extracted from `.apiSelect`. */
export function Select({ options, placeholder = 'Select', value, onChange, visualState = 'default', chevron, selectedIndicator, className, 'aria-label': ariaLabel }: SelectProps) {
  const [internalValue, setInternalValue] = useState(value ?? '');
  const [internalOpen, setInternalOpen] = useState(false);
  const selectedValue = value ?? internalValue;
  const selected = options.find((option) => option.value === selectedValue);
  const disabled = visualState === 'disabled';
  const open = !disabled && (visualState === 'open' || internalOpen);

  const choose = (next: string) => {
    if (value == null) setInternalValue(next);
    onChange?.(next);
    setInternalOpen(false);
  };

  return (
    <div className={cn('relative w-[132px] font-[Inter] text-xs font-normal leading-[18px]', className)}>
      <button
        type="button"
        disabled={disabled}
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setInternalOpen((current) => !current)}
        className={cn(
          'flex h-[26px] w-full items-center justify-between gap-2 overflow-hidden rounded-[4px] border-[0.5px] border-black/20 bg-white px-2 py-1 text-left text-[rgb(var(--color-gray-975))]',
          'shadow-[0_0.5px_1px_-1px_rgba(0,0,0,0.1),inset_0_0.5px_0.5px_rgba(255,255,255,0.25),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]',
          visualState === 'hover' && 'bg-[rgb(var(--color-gray-50))]',
          visualState === 'focused' && 'outline outline-1 outline-offset-1 outline-[rgb(var(--color-accent-gray-aqua-500))]',
          disabled && 'cursor-default border-black/10 bg-[rgb(var(--color-gray-50))] text-[rgb(var(--color-gray-400))] shadow-none',
        )}
      >
        <span className={cn('min-w-0 flex-1 truncate', !selected && 'text-[rgb(var(--color-gray-600))]')}>
          {selected?.label ?? placeholder}
        </span>
        <span className={cn('flex size-3 shrink-0 items-center justify-center [&>img]:size-3 [&>svg]:size-3', open && 'rotate-180')}>
          {chevron}
        </span>
      </button>
      {open && (
        <div role="listbox" className="absolute left-0 top-[30px] z-40 flex w-full flex-col overflow-hidden rounded-[6px] border-[0.5px] border-white/50 bg-[rgb(var(--color-gray-800))] p-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_-4px_rgba(0,0,0,0.08),0_6px_12px_-6px_rgba(0,0,0,0.06),0_8px_16px_-6px_rgba(0,0,0,0.04),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]">
          {options.map((option) => {
            const isSelected = option.value === selectedValue;
            return (
              <button
                type="button"
                role="option"
                aria-selected={isSelected}
                key={option.value}
                onClick={() => choose(option.value)}
                className={cn('flex h-6 w-full items-center justify-between gap-1 rounded-[4px] border-[0.5px] border-transparent p-1 text-left text-white hover:border-white/10 hover:bg-white/10', isSelected && 'border-white/10 bg-white/10')}
              >
                <span className="min-w-0 flex-1 truncate">{option.label}</span>
                {isSelected && <span className="flex size-3 items-center justify-center [&>img]:size-3 [&>svg]:size-3">{selectedIndicator}</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
