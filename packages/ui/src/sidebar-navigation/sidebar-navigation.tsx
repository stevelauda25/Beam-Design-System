import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "../lib/cn.js"

export interface SidebarNavigationProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean
  header?: ReactNode
  actions?: ReactNode
  footer?: ReactNode
  children?: ReactNode
}

/** Organism: application sidebar shell composed from navigation atoms and molecules. */
export function SidebarNavigation({
  collapsed = false,
  header,
  actions,
  footer,
  children,
  className,
  ...props
}: SidebarNavigationProps) {
  return (
    <aside
      className={cn(
        "flex box-border h-full shrink-0 flex-col justify-between overflow-hidden border-r-[0.5px] border-[rgb(var(--color-alpha-black-10)/0.1)] bg-[rgb(var(--color-gray-00))] px-2 py-3 font-sans transition-[width] duration-200",
        collapsed ? "w-[43px]" : "w-[216px]",
        className,
      )}
      {...props}
    >
      <div className="flex min-h-0 flex-col gap-2">
        {header}
        {actions && <div className="flex flex-col gap-1">{actions}</div>}
        <nav className="flex min-h-0 flex-col gap-1 overflow-y-auto" aria-label="Application navigation">
          {children}
        </nav>
      </div>
      {footer && <div className="flex flex-col gap-1 pt-2">{footer}</div>}
    </aside>
  )
}
