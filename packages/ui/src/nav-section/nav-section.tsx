import type { ReactNode } from "react"
import { cn } from "../lib/cn.js"
import { ListBase } from "../list-base/index.js"

export interface NavSectionProps {
  /** section caption, rendered uppercase. Omit for an unlabeled group. */
  label?: string
  /** the nav-items belonging to this section */
  children?: ReactNode
  className?: string
  /** optional divider treatment used by application sidebar groups */
  divided?: boolean
}

export function NavSection({ label, children, className, divided = false }: NavSectionProps) {
  return (
    <div role="group" aria-label={label} className={cn("flex flex-col gap-0.5", divided && "border-l-[0.5px] border-black/10 pl-1", className)}>
      {label != null && (
        <ListBase className="min-h-0 px-2 py-0.5 font-sans text-xs font-normal leading-[18px] text-[#525252] hover:bg-transparent cursor-default">
          {label}
        </ListBase>
      )}
      {children}
    </div>
  )
}
