import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react"
import { cn } from "../lib/cn.js"

export interface NavigationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  leading?: ReactNode
  trailing?: ReactNode
  active?: boolean
  collapsed?: boolean
}

/** Atom: the compact interactive row used throughout Beam application navigation. */
export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ label, leading, trailing, active = false, collapsed = false, className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      aria-current={active ? "page" : undefined}
      aria-label={collapsed ? label : props["aria-label"]}
      title={collapsed ? label : props.title}
      className={cn(
        "flex h-[26px] w-full items-center rounded px-2 py-1 font-sans text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))] outline-none transition-colors",
        collapsed ? "justify-center px-0" : "gap-1.5",
        active ? "bg-[rgb(var(--color-gray-75))]" : "hover:bg-[rgb(var(--color-gray-75))] active:bg-[rgb(var(--color-gray-100))]",
        "focus-visible:ring-1 focus-visible:ring-[rgb(var(--color-accent-gray-aqua-500))] disabled:pointer-events-none disabled:text-[rgb(var(--color-gray-400))]",
        className,
      )}
      {...props}
    >
      {leading && <span className="flex size-3 shrink-0 items-center justify-center [&>svg]:size-3">{leading}</span>}
      {!collapsed && <span className="min-w-0 flex-1 truncate text-left">{label}</span>}
      {!collapsed && trailing && <span className="flex shrink-0 items-center justify-center text-[rgb(var(--color-gray-600))]">{trailing}</span>}
    </button>
  ),
)

NavigationButton.displayName = "NavigationButton"
