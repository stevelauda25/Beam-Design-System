import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn.js';

export type InputState = 'default' | 'focused' | 'filled' | 'disabled' | 'error';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  leading?: ReactNode;
  trailing?: ReactNode;
  visualState?: InputState;
  containerClassName?: string;
  /** Compatibility aliases retained for existing consumers. */
  error?: boolean;
  size?: 'sm' | 'md';
  prefix?: ReactNode;
  suffix?: ReactNode;
  fieldClassName?: string;
}

/**
 * The complete Beam-App-Project input, extracted from `.searchButton`.
 * It keeps the real 26px geometry, leading icon, value/placeholder and
 * trailing shortcut/action in one reusable structure.
 */
export function TextInput({
  leading,
  trailing,
  visualState = 'default',
  error = false,
  disabled,
  containerClassName,
  className,
  value,
  defaultValue,
  placeholder,
  size: _size,
  prefix: _prefix,
  suffix: _suffix,
  fieldClassName: _fieldClassName,
  ...props
}: TextInputProps) {
  const state: InputState = error ? 'error' : disabled ? 'disabled' : visualState;
  const isDisabled = state === 'disabled';
  const shownValue = state === 'filled' && value == null && defaultValue == null ? 'Input value' : value;

  return (
    <label
      data-state={state}
      className={cn(
        'flex h-[26px] w-full items-center overflow-hidden rounded-[4px] border-[0.5px] border-black/20 bg-white px-2 py-1 font-[Inter] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))]',
        'shadow-[0_0.5px_1px_-1px_rgba(0,0,0,0.1),inset_0_0.5px_0.5px_rgba(255,255,255,0.25),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]',
        state === 'focused' && 'border-[rgb(var(--color-accent-gray-aqua-500))] ring-1 ring-[rgb(var(--color-accent-gray-aqua-500)/0.15)]',
        state === 'error' && 'border-[rgb(var(--color-error-500))] ring-1 ring-[rgb(var(--color-error-500)/0.12)]',
        isDisabled && 'border-black/10 bg-[rgb(var(--color-gray-50))] text-[rgb(var(--color-gray-400))] shadow-none',
        containerClassName,
      )}
    >
      {leading != null && (
        <span className="flex size-3 shrink-0 items-center justify-center text-current [&>img]:size-3 [&>svg]:size-3">
          {leading}
        </span>
      )}
      <input
        {...props}
        value={shownValue}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={isDisabled}
        readOnly={state === 'filled' || props.readOnly}
        className={cn(
          'h-[18px] min-w-0 flex-1 border-0 bg-transparent px-1.5 py-0 leading-[18px] text-[rgb(var(--color-gray-975))] outline-none placeholder:text-[rgb(var(--color-gray-600))] placeholder:opacity-100',
          isDisabled && 'text-[rgb(var(--color-gray-400))] placeholder:text-[rgb(var(--color-gray-400))]',
          className,
        )}
      />
      {trailing != null && (
        <span className="flex size-3 shrink-0 items-center justify-center text-current [&>img]:size-3 [&>svg]:size-3">
          {trailing}
        </span>
      )}
    </label>
  );
}

export type InputProps = TextInputProps;
export const Input = TextInput;
