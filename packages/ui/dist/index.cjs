"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AccountSwitcher: () => AccountSwitcher,
  Activity: () => Activity,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Breadcrumb: () => Breadcrumb,
  Button: () => Button,
  Dialog: () => Dialog,
  Dropdown: () => Dropdown,
  EditorToolbar: () => EditorToolbar,
  EmptyState: () => EmptyState,
  FileCard: () => FileCard,
  FileList: () => FileList,
  Input: () => Input,
  KpiCard: () => KpiCard,
  Legend: () => Legend,
  ListBase: () => ListBase,
  LoadingSpinner: () => LoadingSpinner,
  Menu: () => Menu,
  MenuGroup: () => MenuGroup,
  MenuItem: () => MenuItem,
  NavSection: () => NavSection,
  NavigationButton: () => NavigationButton,
  SearchField: () => SearchField,
  SegmentedButton: () => SegmentedButton,
  Select: () => Select,
  Separator: () => Separator,
  SharePopover: () => SharePopover,
  SidebarNavigation: () => SidebarNavigation,
  Tab: () => Tab,
  Table: () => Table,
  TableAction: () => TableAction,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TextArea: () => TextArea,
  TextField: () => TextField,
  TextInput: () => TextInput,
  Textarea: () => Textarea,
  Toast: () => Toast,
  Tooltip: () => Tooltip,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// src/button/button.tsx
var import_react = require("react");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/button/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(function Button2({ leftIcon, visualState = "default", variant: _variant, size: _size, loading: _loading, disabled, className, children, type = "button", ...props }, ref) {
  const isDisabled = disabled || visualState === "disabled";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      ...props,
      ref,
      type,
      disabled: isDisabled,
      "data-state": visualState,
      className: cn(
        "inline-flex h-[26px] items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-[4px] px-2 py-1 text-left font-['Inter'] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))] outline-none",
        "hover:bg-[rgb(var(--color-gray-50))] active:bg-[rgb(var(--color-gray-75))]",
        "focus-visible:ring-1 focus-visible:ring-[rgb(var(--color-accent-gray-aqua-500))]",
        "disabled:pointer-events-none disabled:text-[rgb(var(--color-gray-400))]",
        visualState === "hover" && "bg-[rgb(var(--color-gray-50))]",
        visualState === "pressed" && "bg-[rgb(var(--color-gray-75))]",
        className
      ),
      children: [
        leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex size-3 shrink-0 items-center justify-center [&>img]:size-3 [&>svg]:size-3", children: leftIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })
      ]
    }
  );
});
Button.displayName = "Button";

// src/badge/badge.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var variants = {
  neutral: "bg-[rgb(var(--color-gray-75))] text-[rgb(var(--color-gray-900))]",
  accent: "bg-[rgb(var(--color-accent-gray-aqua-25))] text-[rgb(var(--color-accent-gray-aqua-600))]",
  success: "bg-[rgb(var(--color-success-25))] text-[rgb(var(--color-success-600))]",
  warning: "bg-[rgb(var(--color-warning-25))] text-[rgb(var(--color-warning-600))]",
  error: "bg-[rgb(var(--color-error-25))] text-[rgb(var(--color-error-700))]",
  info: "bg-[rgb(var(--color-info-25))] text-[rgb(var(--color-info-600))]",
  purple: "bg-[#f7f1ff] text-[#7635d9]"
};
function Badge({ variant = "neutral", size: _size, dot, icon, children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "span",
    {
      ...props,
      className: cn(
        "inline-flex h-[18px] items-center gap-1 whitespace-nowrap rounded-full py-1 pl-1.5 pr-2 font-[Inter] text-[10px] font-normal leading-[10px]",
        variants[variant],
        className
      ),
      children: [
        icon != null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "flex shrink-0 items-center", children: icon }),
        dot && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-current", "aria-hidden": true }),
        children
      ]
    }
  );
}

// src/text-input/text-input.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function TextInput({
  leading,
  trailing,
  visualState = "default",
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
}) {
  const state = error ? "error" : disabled ? "disabled" : visualState;
  const isDisabled = state === "disabled";
  const shownValue = state === "filled" && value == null && defaultValue == null ? "Input value" : value;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "label",
    {
      "data-state": state,
      className: cn(
        "flex h-[26px] w-full items-center overflow-hidden rounded-[4px] border-[0.5px] border-black/20 bg-white px-2 py-1 font-[Inter] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))]",
        "shadow-[0_0.5px_1px_-1px_rgba(0,0,0,0.1),inset_0_0.5px_0.5px_rgba(255,255,255,0.25),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]",
        state === "focused" && "border-[rgb(var(--color-accent-gray-aqua-500))] ring-1 ring-[rgb(var(--color-accent-gray-aqua-500)/0.15)]",
        state === "error" && "border-[rgb(var(--color-error-500))] ring-1 ring-[rgb(var(--color-error-500)/0.12)]",
        isDisabled && "border-black/10 bg-[rgb(var(--color-gray-50))] text-[rgb(var(--color-gray-400))] shadow-none",
        containerClassName
      ),
      children: [
        leading != null && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "flex size-3 shrink-0 items-center justify-center text-current [&>img]:size-3 [&>svg]:size-3", children: leading }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            ...props,
            value: shownValue,
            defaultValue,
            placeholder,
            disabled: isDisabled,
            readOnly: state === "filled" || props.readOnly,
            className: cn(
              "h-[18px] min-w-0 flex-1 border-0 bg-transparent px-1.5 py-0 leading-[18px] text-[rgb(var(--color-gray-975))] outline-none placeholder:text-[rgb(var(--color-gray-600))] placeholder:opacity-100",
              isDisabled && "text-[rgb(var(--color-gray-400))] placeholder:text-[rgb(var(--color-gray-400))]",
              className
            )
          }
        ),
        trailing != null && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "flex size-3 shrink-0 items-center justify-center text-current [&>img]:size-3 [&>svg]:size-3", children: trailing })
      ]
    }
  );
}
var Input = TextInput;

// src/text-area/text-area.tsx
var import_react2 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Textarea = (0, import_react2.forwardRef)(
  ({
    size = "md",
    error = false,
    disabled,
    maxLength = 250,
    value,
    defaultValue,
    onChange,
    className,
    containerClassName,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = (0, import_react2.useState)(String(defaultValue ?? ""));
    const currentValue = value === void 0 ? internalValue : String(value);
    const counterId = (0, import_react2.useId)();
    const containerPad = size === "sm" ? "px-2 py-2" : "p-3";
    const inputText = size === "sm" ? "text-[12px] leading-[16px]" : "text-sm leading-5";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: cn(
          "flex min-h-[136px] w-full flex-col rounded-[6px] border-[0.5px] bg-[#F5F5F5] transition-shadow focus-within:border-black focus-within:shadow-[0_0_0_3px_rgba(0,0,0,0.1)]",
          containerPad,
          error ? "border-red-500" : "border-black/10",
          disabled && "border-black/10 bg-[#EBEBEB] focus-within:shadow-none",
          containerClassName
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "textarea",
            {
              ...props,
              ref,
              disabled,
              maxLength,
              value,
              defaultValue: value === void 0 ? defaultValue : void 0,
              "aria-invalid": error || void 0,
              "aria-describedby": [props["aria-describedby"], counterId].filter(Boolean).join(" "),
              onChange: (event) => {
                if (value === void 0) setInternalValue(event.target.value);
                onChange?.(event);
              },
              className: cn(
                "min-h-24 flex-1 resize-none bg-transparent text-[#525252] outline-none placeholder:text-[#8F8F8F]",
                inputText,
                disabled && "text-[#8F8F8F] placeholder:text-[#8F8F8F]",
                className
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "span",
            {
              id: counterId,
              className: cn("text-right text-xs leading-3 text-[#8F8F8F] tabular-nums", disabled && "text-[#CCCCCC]"),
              children: [
                currentValue.length,
                "/",
                maxLength
              ]
            }
          )
        ]
      }
    );
  }
);
Textarea.displayName = "Textarea";
var TextArea = Textarea;

// src/list-base/list-base.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var listBase = (0, import_class_variance_authority.cva)(
  "flex min-h-6 items-center gap-2 rounded-sm select-none",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-xs leading-4 [&_svg]:size-3",
        md: "px-3 py-2 text-sm leading-5 [&_svg]:size-3.5"
      },
      state: {
        default: "text-[#525252] hover:bg-[#F5F5F5]",
        hover: "text-[#525252] bg-[#F5F5F5]",
        selected: "text-[#525252] bg-[#F5F5F5]",
        disabled: "text-[#A3A3A3] cursor-not-allowed"
      },
      tone: {
        default: "",
        // danger colours are applied per-state below: each destructive state
        // needs its own text + fill from the red (danger) ramp, which overrides
        // the neutral state colours via tailwind-merge (compounds come last).
        danger: ""
      }
    },
    compoundVariants: [
      { tone: "danger", state: "default", class: "text-red-500 hover:bg-red-25" },
      { tone: "danger", state: "hover", class: "text-red-500 bg-red-25" },
      { tone: "danger", state: "selected", class: "text-red-500 bg-red-50" },
      { tone: "danger", state: "disabled", class: "text-red-200" }
    ],
    defaultVariants: { size: "sm", state: "default", tone: "default" }
  }
);
function ListBase({
  size,
  leading,
  trailing,
  children,
  state,
  tone: tone2,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: cn(listBase({ size, state, tone: tone2 }), className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
      leading != null && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "flex shrink-0 items-center", children: leading }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "truncate", children })
    ] }),
    trailing != null && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "flex shrink-0 items-center", children: trailing })
  ] });
}

// src/separator/separator.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Separator({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      role: "separator",
      "aria-orientation": "horizontal",
      className: cn("flex h-3 items-center px-2", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "h-[0.5px] w-full bg-black/10" })
    }
  );
}

// src/loading-spinner/loading-spinner.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var sizes = {
  xs: "h-3 w-3",
  s: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8"
};
var filledThickness = { xs: 3, s: 4, md: 5, lg: 6, xl: 7 };
var strokeThickness = { xs: 1.4, s: 1.7, md: 2, lg: 2.4, xl: 3 };
function LoadingSpinner({
  size = "md",
  variant = "filled",
  label = "Loading",
  className
}) {
  const isStroke = variant === "stroke" || variant === "dot";
  const thickness = (isStroke ? strokeThickness : filledThickness)[size];
  const track = isStroke ? "transparent" : "rgba(0,0,0,0.10)";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { role: "status", "aria-label": label, className: cn("inline-flex", className), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "span",
    {
      "aria-hidden": "true",
      className: cn("animate-spin rounded-full motion-reduce:animate-none", sizes[size]),
      style: {
        background: `conic-gradient(from 15deg, #26201C 0deg 255deg, ${track} 255deg 360deg)`,
        maskImage: `radial-gradient(farthest-side, transparent calc(100% - ${thickness}px), #000 calc(100% - ${thickness}px))`,
        WebkitMaskImage: `radial-gradient(farthest-side, transparent calc(100% - ${thickness}px), #000 calc(100% - ${thickness}px))`
      }
    }
  ) });
}

// src/tooltip/tooltip.tsx
var import_react3 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var positions = {
  top: "bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2",
  right: "left-[calc(100%+6px)] top-1/2 -translate-y-1/2",
  bottom: "left-1/2 top-[calc(100%+6px)] -translate-x-1/2",
  left: "right-[calc(100%+6px)] top-1/2 -translate-y-1/2"
};
var arrows = {
  top: "left-1/2 top-full -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-y-[6px] border-r-[6px] border-y-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-x-[6px] border-b-[6px] border-x-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent"
};
var tone = { default: "#525252", success: "#129457", error: "#7f1d2d" };
function Tooltip({ children, body, content, title, placement, side, variant = "default", open, defaultOpen = false, className }) {
  const [internalOpen, setInternalOpen] = (0, import_react3.useState)(defaultOpen);
  const visible = open ?? internalOpen;
  const resolvedPlacement = placement ?? side ?? "top";
  const label = content ?? body;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "relative inline-flex", onMouseEnter: () => open === void 0 && setInternalOpen(true), onMouseLeave: () => open === void 0 && setInternalOpen(false), onFocusCapture: () => open === void 0 && setInternalOpen(true), onBlurCapture: () => open === void 0 && setInternalOpen(false), children: [
    children,
    visible && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { role: "tooltip", style: { backgroundColor: tone[variant] }, className: cn("absolute z-50 block w-max rounded-[6px] px-3 py-1 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-white shadow-[0_1px_1px_rgba(0,0,0,.1),0_4px_4px_rgba(0,0,0,.08),0_6px_6px_rgba(0,0,0,.06),0_8px_8px_rgba(0,0,0,.04),inset_0_-.5px_.5px_rgba(0,0,0,.1)]", positions[resolvedPlacement], className), children: [
      title != null && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "mr-1", children: title }),
      label,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "aria-hidden": "true", style: { color: tone[variant] }, className: cn("absolute size-0", arrows[resolvedPlacement], resolvedPlacement === "top" && "border-t-current", resolvedPlacement === "right" && "border-r-current", resolvedPlacement === "bottom" && "border-b-current", resolvedPlacement === "left" && "border-l-current") })
    ] })
  ] });
}

// src/avatar/avatar.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Avatar({ src, alt, size = 24, fallback, className }) {
  const rem = (px) => `${px / 16}rem`;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "span",
    {
      className: cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-neutral-200 font-medium leading-none text-neutral-700 uppercase select-none",
        className
      ),
      style: { width: rem(size), height: rem(size), fontSize: rem(Math.round(size * 0.42)) },
      "aria-label": src ? void 0 : alt,
      children: src ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src, alt, className: "h-full w-full object-cover" }) : fallback
    }
  );
}

// src/segmented-button/segmented-button.tsx
var import_react4 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var SIZE = {
  medium: {
    button: "gap-2 rounded-[6px] py-2 text-[14px] leading-[20px]",
    hugPx: "px-3",
    indicator: "rounded-[6px]",
    badge: "size-5 text-[12px]",
    sep: "h-5"
  },
  small: {
    button: "gap-2 rounded-[4px] py-1 text-[12px] leading-[14px]",
    hugPx: "px-2",
    indicator: "rounded-[4px]",
    badge: "size-[14px] text-[10px]",
    // measured for the small size: keeps the button at 22px
    sep: "h-4"
  }
};
var ACTIVE_INDICATOR_SHADOW = "shadow-[0_4px_8px_-4px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.15),0_1px_2px_-1px_rgba(0,0,0,0.2),inset_0_0_0_0.5px_rgba(0,0,0,0.1),inset_0_-0.5px_0.5px_0_rgba(0,0,0,0.1),inset_0_0.5px_1px_0_rgba(255,255,255,0.25)]";
function CountBadge({ count, selected, cls }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "span",
    {
      className: cn(
        "flex shrink-0 items-center justify-center rounded-full font-normal leading-none tabular-nums",
        cls,
        selected ? "bg-white/20 text-white" : "bg-black/5 text-[#8f8f8f] group-hover:bg-black/10 group-hover:text-black"
      ),
      children: count
    }
  );
}
function SegmentedButton({
  options,
  value,
  onChange,
  size = "small",
  fill = false,
  dividers = true,
  className
}) {
  const s = SIZE[size];
  const rootRef = (0, import_react4.useRef)(null);
  const buttonRefs = (0, import_react4.useRef)([]);
  const [pill, setPill] = (0, import_react4.useState)(null);
  const selectedIndex = options.findIndex((o) => o.value === value);
  (0, import_react4.useLayoutEffect)(() => {
    const root = rootRef.current;
    const active = buttonRefs.current[selectedIndex];
    if (!root || !active) return;
    const update = () => {
      setPill({
        left: active.offsetLeft,
        width: active.offsetWidth,
        height: active.offsetHeight
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(root);
    observer.observe(active);
    return () => observer.disconnect();
  }, [selectedIndex, options.length]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      ref: rootRef,
      role: "tablist",
      className: cn(
        "relative items-center gap-[2px] rounded-[6px] border-[0.5px] border-black/10 bg-[#f5f5f5] p-[1.5px]",
        fill ? "flex w-full" : "inline-flex",
        className
      ),
      children: [
        pill && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "span",
          {
            "aria-hidden": "true",
            className: cn(
              "pointer-events-none absolute top-1/2 left-0 bg-[#3d3d3d] will-change-transform motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-[cubic-bezier(0.455,0.03,0.515,0.955)] motion-reduce:transition-none",
              ACTIVE_INDICATOR_SHADOW,
              s.indicator
            ),
            style: {
              width: pill.width,
              height: pill.height,
              transform: `translate(${pill.left}px, -50%)`
            }
          }
        ),
        options.map((option, i) => {
          const selected = option.value === value;
          return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react4.Fragment, { children: [
            i > 0 && dividers && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { "aria-hidden": "true", className: cn("relative z-10 w-0 shrink-0 border-l border-black/10", s.sep) }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
              "button",
              {
                ref: (el) => {
                  buttonRefs.current[i] = el;
                },
                type: "button",
                role: "tab",
                "aria-selected": selected,
                onClick: () => onChange(option.value),
                className: cn(
                  "group relative z-10 flex cursor-pointer items-center justify-center font-normal outline-none focus-visible:ring-2 focus-visible:ring-black/25 motion-safe:transition-colors",
                  s.button,
                  fill ? "min-w-0 flex-1 basis-0 px-0" : cn("shrink-0", s.hugPx),
                  selected ? "text-white" : "text-[#525252] hover:bg-black/5"
                ),
                children: [
                  option.label,
                  option.count != null && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CountBadge, { count: option.count, selected, cls: s.badge })
                ]
              }
            )
          ] }, option.value);
        })
      ]
    }
  );
}

// src/nav-section/nav-section.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function NavSection({ label, children, className, divided = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { role: "group", "aria-label": label, className: cn("flex flex-col gap-0.5", divided && "border-l-[0.5px] border-black/10 pl-1", className), children: [
    label != null && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ListBase, { className: "min-h-0 px-2 py-0.5 font-sans text-xs font-normal leading-[18px] text-[#525252] hover:bg-transparent cursor-default", children: label }),
    children
  ] });
}

// src/navigation-button/navigation-button.tsx
var import_react5 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var NavigationButton = (0, import_react5.forwardRef)(
  ({ label, leading, trailing, active = false, collapsed = false, className, type = "button", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "button",
    {
      ref,
      type,
      "aria-current": active ? "page" : void 0,
      "aria-label": collapsed ? label : props["aria-label"],
      title: collapsed ? label : props.title,
      className: cn(
        "flex h-[26px] w-full items-center rounded px-2 py-1 font-sans text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))] outline-none transition-colors",
        collapsed ? "justify-center px-0" : "gap-1.5",
        active ? "bg-[rgb(var(--color-gray-75))]" : "hover:bg-[rgb(var(--color-gray-75))] active:bg-[rgb(var(--color-gray-100))]",
        "focus-visible:ring-1 focus-visible:ring-[rgb(var(--color-accent-gray-aqua-500))] disabled:pointer-events-none disabled:text-[rgb(var(--color-gray-400))]",
        className
      ),
      ...props,
      children: [
        leading && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "flex size-3 shrink-0 items-center justify-center [&>svg]:size-3", children: leading }),
        !collapsed && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "min-w-0 flex-1 truncate text-left", children: label }),
        !collapsed && trailing && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "flex shrink-0 items-center justify-center text-[rgb(var(--color-gray-600))]", children: trailing })
      ]
    }
  )
);
NavigationButton.displayName = "NavigationButton";

// src/sidebar-navigation/sidebar-navigation.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function SidebarNavigation({
  collapsed = false,
  header,
  actions,
  footer,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "aside",
    {
      className: cn(
        "flex box-border h-full shrink-0 flex-col justify-between overflow-hidden border-r-[0.5px] border-[rgb(var(--color-alpha-black-10)/0.1)] bg-[rgb(var(--color-gray-00))] px-2 py-3 font-sans transition-[width] duration-200",
        collapsed ? "w-[43px]" : "w-[216px]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex min-h-0 flex-col gap-2", children: [
          header,
          actions && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex flex-col gap-1", children: actions }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { className: "flex min-h-0 flex-col gap-1 overflow-y-auto", "aria-label": "Application navigation", children })
        ] }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex flex-col gap-1 pt-2", children: footer })
      ]
    }
  );
}

// src/search-field/search-field.tsx
var import_react6 = require("react");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function SearchField({
  results,
  open,
  onSelectResult,
  placeholder = "Search projects",
  containerClassName,
  shortcut,
  size = "md",
  iconSize,
  ...props
}) {
  const [focused, setFocused] = (0, import_react6.useState)(false);
  const showResults = (open ?? focused) && results != null && results.length > 0;
  const resolvedIconSize = iconSize ?? (size === "sm" ? 12 : 18);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      TextInput,
      {
        size,
        leading: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react.Search, { style: { width: `${resolvedIconSize / 16}rem`, height: `${resolvedIconSize / 16}rem` } }),
        trailing: shortcut ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("kbd", { className: "flex min-w-5 items-center justify-center rounded-[3px] border-[0.6px] border-black/10 py-0.5 pr-0.5 pl-1 font-sans text-[0.625rem] leading-[0.875rem] tracking-[0.2px] text-[#8F8F8F]", children: shortcut }) : void 0,
        placeholder,
        containerClassName,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        ...props
      }
    ),
    showResults && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        role: "listbox",
        className: cn(
          "absolute left-0 top-full z-10 mt-1.5 w-full rounded-[6px] border-[0.5px] border-[#E0E0E0] bg-surface p-2",
          "shadow-[0_1px_1px_0_rgba(0,0,0,0.05),0_4px_8px_0_rgba(0,0,0,0.05),0_2px_4px_0_rgba(0,0,0,0.05)]"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex flex-col gap-2", children: results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          ListBase,
          {
            role: "option",
            leading: r.leading,
            trailing: r.trailing,
            className: "cursor-pointer",
            onMouseDown: (e) => e.preventDefault(),
            onClick: () => onSelectResult?.(r),
            children: r.label
          },
          r.id
        )) })
      }
    )
  ] });
}

// src/account-switcher/account-switcher.tsx
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
function AccountSwitcher({
  name,
  avatarSrc,
  initials,
  role,
  onClick,
  onToggleSidebar,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: cn("flex h-10 w-full items-center gap-2 rounded-[6px] bg-[#FBFAF9] pl-1 pr-[6px]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex min-w-0 flex-1 items-center justify-between gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        "button",
        {
          type: "button",
          onClick,
          className: "-ml-1 flex min-w-0 items-center gap-1 rounded-sm px-1 py-0.5 outline-none hover:bg-[#F5F5F5] focus-visible:ring-2 focus-visible:ring-[#CFC7BC]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Avatar, { src: avatarSrc, fallback: initials, alt: name, size: 20 }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "truncate text-sm leading-5 text-black", children: name }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react2.ChevronDown, { className: "size-3 shrink-0 text-subtle" })
          ]
        }
      ),
      role && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Badge, { variant: "purple", size: "sm", className: "shrink-0 px-1.5 py-0.5", children: role })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "button",
      {
        type: "button",
        onClick: onToggleSidebar,
        "aria-label": "Collapse sidebar",
        className: "flex shrink-0 items-center justify-center rounded-sm p-1 text-subtle outline-none hover:bg-[#F5F5F5] hover:text-black focus-visible:ring-2 focus-visible:ring-[#CFC7BC]",
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react2.PanelLeft, { className: "size-4" })
      }
    )
  ] });
}

// src/breadcrumb/breadcrumb.tsx
var import_react7 = require("react");
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var CRUMB = "text-[12px] leading-[16px] font-normal whitespace-nowrap";
function Crumb({ item, current }) {
  if (current) {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { "aria-current": "page", className: cn(CRUMB, "text-black"), children: item.label });
  }
  const cls = cn(
    CRUMB,
    "rounded-sm text-[#8f8f8f] outline-none hover:text-black focus-visible:ring-2 focus-visible:ring-[#CFC7BC]",
    (item.href || item.onClick) && "cursor-pointer"
  );
  return item.href ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: item.href, className: cls, children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", onClick: item.onClick, className: cls, children: item.label });
}
function ChevronSep() {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react3.ChevronRight, { size: 12, className: "shrink-0 text-[#8f8f8f]", "aria-hidden": true });
}
function EllipsisMenu({ items }) {
  const [open, setOpen] = (0, import_react7.useState)(false);
  const ref = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { ref, className: "relative flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "button",
      {
        type: "button",
        "aria-label": "Show hidden breadcrumbs",
        "aria-expanded": open,
        onClick: () => setOpen((o) => !o),
        className: cn(
          "flex size-4 shrink-0 items-center justify-center rounded-[4px] text-[#8f8f8f] outline-none hover:bg-[#f5f5f5] focus-visible:ring-2 focus-visible:ring-[#CFC7BC]",
          open && "bg-[#f5f5f5]"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react3.MoreHorizontal, { size: 16 })
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "div",
      {
        role: "menu",
        className: "absolute left-0 top-full z-20 mt-1 flex w-[216px] flex-col gap-1 rounded-[6px] border-[0.5px] border-black/10 bg-white px-1 py-2 shadow-[0_1px_1px_0_rgba(0,0,0,0.05),0_4px_8px_0_rgba(0,0,0,0.05),0_2px_4px_0_rgba(0,0,0,0.05)]",
        children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          ListBase,
          {
            role: "menuitem",
            className: "w-full cursor-pointer",
            onClick: () => {
              setOpen(false);
              item.onClick?.();
            },
            children: item.label
          },
          i
        ))
      }
    )
  ] });
}
function Breadcrumb({ items, maxItems = 4, className }) {
  if (items.length === 0) return null;
  const collapsed = items.length > maxItems;
  const hidden = collapsed ? items.slice(1, -2) : [];
  const nodes = collapsed ? [items[0], "ellipsis", items[items.length - 2], items[items.length - 1]] : items;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("nav", { "aria-label": "Breadcrumb", className: cn("flex items-center gap-[10px]", className), children: nodes.map((node, i) => {
    const last = i === nodes.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react7.Fragment, { children: [
      node === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(EllipsisMenu, { items: hidden }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Crumb, { item: node, current: last }),
      !last && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ChevronSep, {})
    ] }, i);
  }) });
}

// src/kpi-card/kpi-card.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var LABEL = "text-[12px] leading-[16px] font-normal text-[#525252]";
var VALUE = "font-sans text-[20px] leading-[1.2] font-medium tracking-normal text-black tabular-nums";
var DESC = "text-[11px] leading-[15px] font-normal text-[#525252]";
function Triangle({ down }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { width: "8", height: "8", viewBox: "0 0 8 8", "aria-hidden": true, className: cn("shrink-0", down && "rotate-180"), children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M4 0.5L7.5 7.5L0.5 7.5Z", fill: "currentColor" }) });
}
function ValueRow({ value, trend, suffix }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: cn("flex shrink-0", trend ? "items-center gap-2" : "items-end gap-[2px]"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: VALUE, children: value }),
    trend ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "span",
      {
        className: cn(
          "flex items-center gap-1 text-[14px] leading-[1.2] font-normal",
          trend.direction === "up" ? "text-[#129457]" : "text-[#e51d31]"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Triangle, { down: trend.direction === "down" }),
          trend.value
        ]
      }
    ) : suffix != null && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "py-[2px] text-[12px] leading-[1.2] font-normal text-[#525252]", children: suffix })
  ] });
}
function IconSlot({ icon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "flex size-5 shrink-0 items-center justify-center", children: icon });
}
var CARD = "overflow-hidden border-[0.5px] border-black/10 bg-white p-3 shadow-[0_2px_6px_-4px_rgba(0,0,0,0.05),0_1px_3px_-2px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1),inset_0_-0.5px_0.5px_0_rgba(0,0,0,0.1),inset_0_0.5px_0.5px_0_rgba(255,255,255,0.1)]";
function KpiCard({
  label,
  value,
  description,
  suffix,
  trend,
  icon,
  size = "default",
  className
}) {
  if (size === "compact") {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("article", { className: cn(CARD, "flex items-center gap-3 rounded-[8px]", className), children: [
      icon != null && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(IconSlot, { icon }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex min-w-0 flex-col items-start gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: LABEL, children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ValueRow, { value, trend, suffix })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("article", { className: cn(CARD, "flex items-start gap-4 rounded-[6px]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex h-20 min-w-0 flex-1 flex-col items-start justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: LABEL, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex flex-col items-start gap-[6px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ValueRow, { value, trend, suffix }),
        description != null && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: DESC, children: description })
      ] })
    ] }),
    icon != null && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(IconSlot, { icon })
  ] });
}

// src/legend/legend.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var LINE_STYLE_PROPS = {
  dashed: { strokeDasharray: "6 4" },
  dotted: { strokeDasharray: "1.5 3", strokeLinecap: "round" },
  solid: {}
};
function LegendSwatch({
  variant,
  color,
  dashed,
  lineStyle,
  bordered
}) {
  if (variant === "line") {
    const resolvedLineStyle = lineStyle ?? (dashed ? "dashed" : "solid");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "svg",
      {
        "aria-hidden": "true",
        width: "16",
        height: "2",
        viewBox: "0 0 16 2",
        className: "shrink-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "line",
          {
            x1: "0",
            y1: "1",
            x2: "16",
            y2: "1",
            stroke: color,
            strokeWidth: 2,
            ...LINE_STYLE_PROPS[resolvedLineStyle]
          }
        )
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "span",
    {
      "aria-hidden": "true",
      className: cn("size-2.5 shrink-0 rounded-[3px]", bordered && "border border-white/10"),
      style: { backgroundColor: color }
    }
  );
}
function Legend({
  variant = "square",
  color,
  label,
  value,
  percent,
  dashed = true,
  lineStyle,
  bordered = false,
  className
}) {
  const hasValue = value != null || percent != null;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "span",
    {
      className: cn(
        "flex items-center whitespace-nowrap text-[11px] leading-[15px] font-normal",
        hasValue ? "gap-2" : "gap-1",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(LegendSwatch, { variant, color, dashed, lineStyle, bordered }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[#525252]", children: label })
        ] }),
        hasValue && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "flex items-center gap-[2px]", children: [
          value != null && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[#525252]", children: value }),
          percent != null && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-[#8f8f8f]", children: percent })
        ] })
      ]
    }
  );
}

// src/toast/toast.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function Toast({ variant = "neutral", title = "Download complete", description = "document.md", actionLabel = "Try again", onAction, onDismiss, icon, className }) {
  const tone2 = variant === "default" ? "neutral" : variant;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { role: tone2 === "error" ? "alert" : "status", className: cn("relative grid w-[310px] grid-cols-[18px_minmax(0,1fr)] gap-1 rounded-[6px] border-[0.5px] border-white/50 p-2 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-white shadow-[0_1px_1px_rgba(0,0,0,.1),0_4px_4px_rgba(0,0,0,.08),0_6px_6px_rgba(0,0,0,.06),0_8px_8px_rgba(0,0,0,.04),inset_0_-.5px_.5px_rgba(0,0,0,.1)]", tone2 === "neutral" && "bg-[rgb(var(--color-gray-800))]", tone2 === "success" && "bg-[rgb(var(--color-bg-success))]", tone2 === "error" && "bg-[rgb(var(--color-error-800))]", tone2 === "warning" && "bg-[rgb(var(--color-bg-warning))]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "m-[3px] flex size-3 items-center justify-center [&>img]:size-3 [&>svg]:size-3", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { className: "font-normal", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: cn("truncate text-[rgb(var(--color-gray-350))]", tone2 === "success" && "text-white/60", (tone2 === "error" || tone2 === "warning") && "text-white/70"), children: description }),
      onAction != null && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", onClick: onAction, className: "mt-0.5 self-start p-0 text-white", children: actionLabel })
    ] }),
    onDismiss != null && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "absolute inset-0 -z-10", onClick: onDismiss, "aria-label": "Dismiss notification" })
  ] });
}

// src/file-list/file-list.tsx
var import_react8 = require("react");
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var statusBorder = {
  ready: "border-dashed border-black/20",
  uploading: "border-black/20",
  uploaded: "border-black/20",
  error: "border-error"
};
var statusMetaColor = {
  ready: "text-gray-500",
  uploading: "text-subtle",
  uploaded: "text-subtle",
  error: "text-error"
};
function FileList({
  status = "ready",
  name = "selected-file.pdf",
  size = "1.68 MB",
  progress = 68,
  onRemove,
  onRetry,
  className
}) {
  const percent = Math.min(100, Math.max(0, Math.round(progress)));
  const metaSegments = status === "ready" ? [size, "Ready to upload"] : status === "uploading" ? ["Uploading", `${percent}%`] : status === "uploaded" ? ["File uploaded", size] : ["Upload failed. Try again"];
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      className: cn(
        "flex h-16 w-full max-w-[520px] items-center justify-between rounded-md border bg-white p-2",
        statusBorder[status],
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex min-w-0 items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "span",
            {
              className: cn(
                "flex size-12 shrink-0 items-center justify-center rounded-xxs",
                status === "error" ? "bg-error-subtle" : "bg-gray-75"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react4.FileText, { size: 24, "aria-hidden": "true" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "truncate text-sm font-normal leading-5 text-strong", children: name }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              "div",
              {
                className: cn(
                  "flex items-center gap-1 text-xs font-normal leading-4",
                  statusMetaColor[status]
                ),
                children: metaSegments.map((segment, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_react8.Fragment, { children: [
                  index > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { "aria-hidden": "true", children: "\xB7" }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: segment })
                ] }, segment))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex shrink-0 items-center gap-1", children: [
          status === "error" && onRetry && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "button",
            {
              type: "button",
              onClick: onRetry,
              className: "inline-flex items-center rounded-full px-3 py-2.5 text-xs font-medium leading-4 text-error outline-none hover:bg-error-subtle focus-visible:ring-2 focus-visible:ring-red-500/20",
              children: "Retry"
            }
          ),
          onRemove && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "button",
            {
              type: "button",
              onClick: onRemove,
              className: "flex size-9 items-center justify-center rounded-full text-subtle outline-none hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/20",
              "aria-label": `Remove ${name}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react4.X, { size: 16, "aria-hidden": "true" })
            }
          )
        ] })
      ]
    }
  );
}

// src/empty-state/empty-state.tsx
var import_lucide_react5 = require("lucide-react");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime21 = require("react/jsx-runtime");
var ACTION_SHADOW = "shadow-[0_4px_8px_-4px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.15),0_1px_2px_-1px_rgba(0,0,0,0.2),inset_0_0_0_0.5px_rgba(0,0,0,0.1),inset_0_-0.5px_0.5px_0_rgba(0,0,0,0.1),inset_0_0.5px_1px_0_rgba(255,255,255,0.25)]";
var emptyStateAction = (0, import_class_variance_authority2.cva)(
  [
    "inline-flex items-center gap-1 rounded-[6px] px-2 py-1.5",
    "text-2xs font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25",
    "[&>svg]:h-3.5 [&>svg]:w-3.5"
  ],
  {
    variants: {
      variant: {
        secondary: cn(
          "border border-white/10 bg-white text-black",
          ACTION_SHADOW,
          "hover:bg-[#F5F5F5] active:bg-[#F0F0F0]"
        ),
        primary: cn(
          "border-[0.5px] border-white/10 text-white",
          "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,#26201C_0%,#26201C_100%)]",
          ACTION_SHADOW,
          "hover:text-white/80 active:text-white/60"
        )
      }
    },
    defaultVariants: { variant: "secondary" }
  }
);
function EmptyState({
  media = "icon",
  icon,
  avatarSrc,
  avatarAlt = "",
  title,
  description,
  actionLabel,
  actionIcon,
  actionVariant = "secondary",
  onAction,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: cn("flex flex-col items-center gap-4 text-center", className), children: [
    media === "icon" && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "flex items-center justify-center rounded-xs bg-black/5 p-1 text-black [&>svg]:h-4 [&>svg]:w-4", children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react5.Bell, { "aria-hidden": "true" }) }),
    media === "avatar" && (avatarSrc ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "img",
      {
        src: avatarSrc,
        alt: avatarAlt,
        className: "h-6 w-6 rounded-full border border-black/10 object-cover"
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "flex h-6 w-6 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black [&>svg]:h-3.5 [&>svg]:w-3.5", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react5.User, { "aria-hidden": "true" }) })),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-col items-center gap-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-body font-medium text-strong", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-body-sm text-subtle", children: description })
    ] }),
    actionLabel && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "button",
      {
        type: "button",
        onClick: onAction,
        className: emptyStateAction({ variant: actionVariant }),
        children: [
          actionIcon,
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: actionLabel })
        ]
      }
    )
  ] });
}

// src/text-field/text-field.tsx
var import_react9 = require("react");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function TextField(props) {
  const {
    label,
    required = false,
    info,
    hint,
    error = false,
    id,
    className,
    ...rest
  } = props;
  const generatedId = (0, import_react9.useId)();
  const fieldId = id ?? generatedId;
  const hintId = `${fieldId}-hint`;
  const { multiline = false, ...fieldProps } = rest;
  const describedBy = hint != null ? hintId : void 0;
  const field = multiline ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    Textarea,
    {
      ...fieldProps,
      id: fieldId,
      error,
      "aria-describedby": describedBy
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    TextInput,
    {
      ...fieldProps,
      id: fieldId,
      error,
      "aria-invalid": error || void 0,
      "aria-describedby": describedBy
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: cn("flex w-full flex-col gap-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center gap-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { htmlFor: fieldId, className: "text-sm font-medium leading-5 text-black", children: label }),
      required ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { "aria-hidden": "true", className: "text-sm font-medium leading-5 text-[#C0180C]", children: "*" }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "text-sm leading-5 text-[#8F8F8F]", children: "(Optional)" }),
      info != null && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Tooltip, { body: info, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react6.Info, { size: 14, className: "text-[#8F8F8F]", "aria-hidden": "true" }) })
    ] }),
    field,
    hint != null && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: cn("flex items-center gap-1", error ? "text-red-500" : "text-black"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react6.Info, { size: 12, className: "shrink-0", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { id: hintId, className: "text-xs leading-4", children: hint })
    ] })
  ] });
}

// src/dropdown/dropdown.tsx
var import_react10 = require("react");
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime23 = require("react/jsx-runtime");
function Dropdown({
  size = "md",
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Select\u2026",
  leading,
  error = false,
  disabled = false,
  open,
  filterable = false,
  className,
  "aria-label": ariaLabel
}) {
  const [internalValue, setInternalValue] = (0, import_react10.useState)(defaultValue);
  const selectedValue = value !== void 0 ? value : internalValue;
  const selected = options.find((o) => o.value === selectedValue);
  const [internalOpen, setInternalOpen] = (0, import_react10.useState)(false);
  const isOpen = !disabled && (open ?? internalOpen);
  const [query, setQuery] = (0, import_react10.useState)(null);
  const [activeIndex, setActiveIndex] = (0, import_react10.useState)(-1);
  const rootRef = (0, import_react10.useRef)(null);
  const inputRef = (0, import_react10.useRef)(null);
  const listboxId = (0, import_react10.useId)();
  const filterOptions = (q) => q === "" ? options : options.filter((o) => o.label.toLowerCase().includes(q.toLowerCase()));
  const visibleOptions = filterable && query != null ? filterOptions(query) : options;
  (0, import_react10.useEffect)(() => {
    if (!internalOpen) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setInternalOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setInternalOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [internalOpen]);
  (0, import_react10.useEffect)(() => {
    if (!isOpen) setQuery(null);
  }, [isOpen]);
  (0, import_react10.useEffect)(() => {
    if (!isOpen || activeIndex < 0) return;
    document.getElementById(`${listboxId}-option-${activeIndex}`)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, isOpen, listboxId]);
  const enabledIndexes = visibleOptions.map((o, i) => o.disabled ? -1 : i).filter((i) => i >= 0);
  const initialActive = (dir) => {
    const selectedIndex = visibleOptions.findIndex((o) => o.value === selectedValue && !o.disabled);
    if (selectedIndex >= 0) return selectedIndex;
    if (enabledIndexes.length === 0) return -1;
    return dir === 1 ? enabledIndexes[0] : enabledIndexes[enabledIndexes.length - 1];
  };
  const moveActive = (dir) => {
    setActiveIndex((prev) => {
      if (enabledIndexes.length === 0) return -1;
      const pos = enabledIndexes.indexOf(prev);
      if (pos < 0) return dir === 1 ? enabledIndexes[0] : enabledIndexes[enabledIndexes.length - 1];
      return enabledIndexes[(pos + dir + enabledIndexes.length) % enabledIndexes.length];
    });
  };
  const openList = () => {
    if (disabled) return;
    setInternalOpen(true);
    setActiveIndex(initialActive(1));
  };
  const toggleList = () => {
    if (disabled) return;
    if (isOpen) setInternalOpen(false);
    else openList();
  };
  const selectOption = (option) => {
    if (option.disabled) return;
    if (value === void 0) setInternalValue(option.value);
    onChange?.(option.value);
    setQuery(null);
    setInternalOpen(false);
  };
  const onTriggerKeyDown = (e) => {
    if (disabled) return;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp": {
        e.preventDefault();
        const dir = e.key === "ArrowDown" ? 1 : -1;
        if (isOpen) {
          moveActive(dir);
        } else {
          setInternalOpen(true);
          setActiveIndex(initialActive(dir));
        }
        break;
      }
      case "Enter":
      case " ": {
        if (isOpen) {
          e.preventDefault();
          const option = activeIndex >= 0 ? visibleOptions[activeIndex] : void 0;
          if (option) selectOption(option);
          else setInternalOpen(false);
        }
        break;
      }
      case "Escape": {
        if (isOpen) {
          e.stopPropagation();
          setInternalOpen(false);
        }
        break;
      }
    }
  };
  const onInputChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    setInternalOpen(true);
    setActiveIndex(filterOptions(q).findIndex((o) => !o.disabled));
  };
  const onInputKeyDown = (e) => {
    if (disabled) return;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp": {
        e.preventDefault();
        const dir = e.key === "ArrowDown" ? 1 : -1;
        if (isOpen) {
          moveActive(dir);
        } else {
          setInternalOpen(true);
          setActiveIndex(initialActive(dir));
        }
        break;
      }
      case "Enter": {
        if (isOpen) {
          e.preventDefault();
          const option = activeIndex >= 0 ? visibleOptions[activeIndex] : void 0;
          if (option) selectOption(option);
          else setInternalOpen(false);
        }
        break;
      }
      case "Escape": {
        if (query) {
          e.stopPropagation();
          setQuery(null);
          setActiveIndex(-1);
        } else if (isOpen) {
          e.stopPropagation();
          setInternalOpen(false);
        }
        break;
      }
    }
  };
  const iconSize = size === "sm" ? 12 : 18;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { ref: rootRef, className: cn("relative", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "div",
      {
        className: cn(
          "flex w-full items-center rounded-[6px] border-[0.5px]",
          size === "sm" && "h-8",
          disabled ? "border-black/10 bg-[#EBEBEB]" : error ? "border-red-500 bg-[#F5F5F5] focus-within:shadow-[0_0_0_3px_rgba(0,0,0,0.1)]" : "border-black/10 bg-[#F5F5F5] focus-within:border-black focus-within:shadow-[0_0_0_3px_rgba(0,0,0,0.1)]"
        ),
        children: filterable ? /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
          "div",
          {
            onClick: () => {
              if (disabled) return;
              inputRef.current?.focus();
              if (!isOpen) openList();
            },
            className: cn(
              "flex min-w-0 flex-1 items-center gap-2 bg-transparent",
              size === "sm" ? "px-2 text-[12px] leading-[16px]" : "p-3 text-sm leading-5",
              disabled && "cursor-not-allowed"
            ),
            children: [
              leading != null && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                "span",
                {
                  className: cn(
                    "flex shrink-0 items-center",
                    disabled ? "text-[#8F8F8F]" : "text-[#525252]"
                  ),
                  children: leading
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                "input",
                {
                  ref: inputRef,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": isOpen,
                  "aria-controls": isOpen ? listboxId : void 0,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : void 0,
                  "aria-label": ariaLabel,
                  disabled,
                  value: query ?? selected?.label ?? "",
                  placeholder,
                  onChange: onInputChange,
                  onKeyDown: onInputKeyDown,
                  className: cn(
                    "min-w-0 flex-1 bg-transparent text-black outline-none placeholder:text-[#525252]",
                    disabled && "cursor-not-allowed text-[#8F8F8F] placeholder:text-[#8F8F8F]"
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                import_lucide_react7.ChevronDown,
                {
                  size: iconSize,
                  "aria-hidden": true,
                  className: cn(
                    "shrink-0 transition-transform duration-150",
                    isOpen && "rotate-180",
                    disabled ? "text-[#8F8F8F]" : "text-[#525252]"
                  )
                }
              )
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
          "button",
          {
            type: "button",
            disabled,
            "aria-haspopup": "listbox",
            "aria-expanded": isOpen,
            "aria-controls": isOpen ? listboxId : void 0,
            "aria-activedescendant": isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : void 0,
            "aria-label": ariaLabel,
            onClick: toggleList,
            onKeyDown: onTriggerKeyDown,
            className: cn(
              "flex min-w-0 flex-1 items-center gap-2 bg-transparent text-left outline-none",
              size === "sm" ? "px-2 text-[12px] leading-[16px]" : "p-3 text-sm leading-5",
              disabled && "cursor-not-allowed"
            ),
            children: [
              leading != null && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                "span",
                {
                  className: cn(
                    "flex shrink-0 items-center",
                    disabled ? "text-[#8F8F8F]" : "text-[#525252]"
                  ),
                  children: leading
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                "span",
                {
                  className: cn(
                    "min-w-0 flex-1 truncate",
                    disabled ? "text-[#8F8F8F]" : selected ? "text-black" : "text-[#525252]"
                  ),
                  children: selected ? selected.label : placeholder
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                import_lucide_react7.ChevronDown,
                {
                  size: iconSize,
                  "aria-hidden": true,
                  className: cn(
                    "shrink-0 transition-transform duration-150",
                    isOpen && "rotate-180",
                    disabled ? "text-[#8F8F8F]" : "text-[#525252]"
                  )
                }
              )
            ]
          }
        )
      }
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "div",
      {
        role: "listbox",
        id: listboxId,
        "aria-label": ariaLabel,
        className: cn(
          "absolute left-0 top-full z-50 mt-1 flex max-h-60 w-full flex-col gap-1 overflow-y-auto",
          "rounded-[6px] border-[0.5px] border-black/10 bg-white p-1",
          "shadow-[0_1px_1px_0_rgba(0,0,0,0.05),0_4px_8px_0_rgba(0,0,0,0.05),0_2px_4px_0_rgba(0,0,0,0.05)]"
        ),
        children: visibleOptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ListBase, { size, state: "disabled", className: "cursor-default", "aria-hidden": "true", children: "No results" }) : visibleOptions.map((option, i) => {
          const isSelected = option.value === selectedValue;
          return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            ListBase,
            {
              id: `${listboxId}-option-${i}`,
              role: "option",
              "aria-selected": isSelected,
              "aria-disabled": option.disabled || void 0,
              size,
              state: option.disabled ? "disabled" : i === activeIndex ? "hover" : isSelected ? "selected" : "default",
              trailing: isSelected ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react7.Check, { "aria-hidden": true }) : void 0,
              className: option.disabled ? void 0 : "cursor-pointer",
              onClick: () => selectOption(option),
              onMouseEnter: () => {
                if (!option.disabled) setActiveIndex(i);
              },
              children: option.label
            },
            option.value
          );
        })
      }
    )
  ] });
}

// src/select/select.tsx
var import_react11 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
function Select({ options, placeholder = "Select", value, onChange, visualState = "default", chevron, selectedIndicator, className, "aria-label": ariaLabel }) {
  const [internalValue, setInternalValue] = (0, import_react11.useState)(value ?? "");
  const [internalOpen, setInternalOpen] = (0, import_react11.useState)(false);
  const selectedValue = value ?? internalValue;
  const selected = options.find((option) => option.value === selectedValue);
  const disabled = visualState === "disabled";
  const open = !disabled && (visualState === "open" || internalOpen);
  const choose = (next) => {
    if (value == null) setInternalValue(next);
    onChange?.(next);
    setInternalOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: cn("relative w-[132px] font-[Inter] text-xs font-normal leading-[18px]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "button",
      {
        type: "button",
        disabled,
        "aria-label": ariaLabel,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        onClick: () => setInternalOpen((current) => !current),
        className: cn(
          "flex h-[26px] w-full items-center justify-between gap-2 overflow-hidden rounded-[4px] border-[0.5px] border-black/20 bg-white px-2 py-1 text-left text-[rgb(var(--color-gray-975))]",
          "shadow-[0_0.5px_1px_-1px_rgba(0,0,0,0.1),inset_0_0.5px_0.5px_rgba(255,255,255,0.25),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]",
          visualState === "hover" && "bg-[rgb(var(--color-gray-50))]",
          visualState === "focused" && "outline outline-1 outline-offset-1 outline-[rgb(var(--color-accent-gray-aqua-500))]",
          disabled && "cursor-default border-black/10 bg-[rgb(var(--color-gray-50))] text-[rgb(var(--color-gray-400))] shadow-none"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: cn("min-w-0 flex-1 truncate", !selected && "text-[rgb(var(--color-gray-600))]"), children: selected?.label ?? placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: cn("flex size-3 shrink-0 items-center justify-center [&>img]:size-3 [&>svg]:size-3", open && "rotate-180"), children: chevron })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { role: "listbox", className: "absolute left-0 top-[30px] z-40 flex w-full flex-col overflow-hidden rounded-[6px] border-[0.5px] border-white/50 bg-[rgb(var(--color-gray-800))] p-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_-4px_rgba(0,0,0,0.08),0_6px_12px_-6px_rgba(0,0,0,0.06),0_8px_16px_-6px_rgba(0,0,0,0.04),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]", children: options.map((option) => {
      const isSelected = option.value === selectedValue;
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
        "button",
        {
          type: "button",
          role: "option",
          "aria-selected": isSelected,
          onClick: () => choose(option.value),
          className: cn("flex h-6 w-full items-center justify-between gap-1 rounded-[4px] border-[0.5px] border-transparent p-1 text-left text-white hover:border-white/10 hover:bg-white/10", isSelected && "border-white/10 bg-white/10"),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "min-w-0 flex-1 truncate", children: option.label }),
            isSelected && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "flex size-3 items-center justify-center [&>img]:size-3 [&>svg]:size-3", children: selectedIndicator })
          ]
        },
        option.value
      );
    }) })
  ] });
}

// src/menu/menu.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function MenuItem({ icon, indicator, visualState = "default", disabled, children, className, ...props }) {
  const isDisabled = disabled || visualState === "disabled";
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "button",
    {
      ...props,
      type: "button",
      disabled: isDisabled,
      "data-menu-item": true,
      className: cn(
        "flex h-[26px] w-[116px] items-center gap-1 rounded-[4px] border-[0.5px] border-transparent px-1.5 py-1 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-white",
        "beam-menu-item hover:border-white/10 hover:border-l-transparent",
        (visualState === "hover" || visualState === "selected") && "beam-menu-item-active border-white/10 border-l-transparent",
        visualState === "pressed" && "beam-menu-item-pressed border-white/10 border-l-transparent",
        isDisabled && "pointer-events-none text-white/40",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "flex size-3 shrink-0 items-center justify-center [&>img]:size-3 [&>svg]:size-3", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "min-w-0 flex-1 truncate text-left", children }),
        visualState === "selected" && indicator != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "flex size-3 shrink-0 items-center justify-center [&>img]:size-3 [&>svg]:size-3", children: indicator })
      ]
    }
  );
}
function Menu({ children, type = "single", className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      "data-menu-type": type,
      className: cn(
        "inline-flex flex-col overflow-hidden rounded-[6px] border-[0.5px] border-white/50 bg-[rgb(var(--color-gray-800))] p-0.5 font-['TikTok_Sans'] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_-4px_rgba(0,0,0,0.08),0_6px_12px_-6px_rgba(0,0,0,0.06),0_8px_16px_-6px_rgba(0,0,0,0.04),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]",
        type === "single" ? "w-[120px]" : "w-[151px] gap-1 [&_[data-menu-item]]:h-[22px] [&_[data-menu-item]]:w-full",
        className
      ),
      children
    }
  );
}
function MenuGroup({ children, label }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex w-full flex-col", children: [
    label != null && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex h-[22px] w-full items-center rounded-[4px] border-[0.5px] border-transparent px-1.5 py-1 text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-200))]", children: label }),
    children
  ] });
}

// src/table/table.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var grid = "grid grid-cols-[minmax(100px,1fr)_70px_82px_34px]";
function TableHeader({ labels = ["Name", "Size", "Modified"], className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: cn(grid, "h-[26px] rounded-t-[4px] border-[0.5px] border-black/10 bg-[rgb(var(--color-gray-50))] font-[Inter] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-800))]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex min-w-0 items-center px-2 py-1", children: labels[0] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex items-center justify-end px-2 py-1", children: labels[1] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex items-center px-2 py-1", children: labels[2] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {})
  ] });
}
function TableRow({ name, size, modified, state = "default", actionIcon, onAction, last = false, standalone = false, className }) {
  const disabled = state === "disabled";
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "div",
    {
      "data-state": state,
      className: cn(
        grid,
        "h-[26px] border-[0.5px] border-t-0 border-black/10 font-[Inter] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))] hover:bg-[rgb(var(--color-gray-75))]",
        standalone && "rounded-[4px] border-t-[0.5px]",
        last && !standalone && "rounded-b-[4px]",
        (state === "hover" || state === "selected") && "bg-[rgb(var(--color-gray-75))]",
        disabled && "pointer-events-none text-[rgb(var(--color-gray-400))]",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex min-w-0 items-center overflow-hidden px-2 py-1", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "truncate", children: name }) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex items-center justify-end px-2 py-1", children: size }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex items-center overflow-hidden px-2 py-1", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "truncate", children: modified }) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex items-center justify-end overflow-visible py-0 pl-2 pr-1", children: actionIcon != null && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "button",
          {
            type: "button",
            disabled,
            "aria-label": `Actions for ${name}`,
            onClick: onAction,
            className: "flex size-[26px] items-center justify-center rounded-[4px] p-[7px] hover:bg-[rgb(var(--color-gray-50))] disabled:opacity-40 [&>img]:size-3 [&>svg]:size-3",
            children: actionIcon
          }
        ) })
      ]
    }
  );
}
function Table({ rows, actionIcon, onAction, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: cn("w-full font-[Inter] text-xs font-normal leading-[18px]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableHeader, {}),
    rows.map((row, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        TableRow,
        {
          ...row,
          actionIcon,
          onAction: () => onAction?.(row),
          last: index === rows.length - 1
        },
        `${row.name}-${index}`
      );
    })
  ] });
}
function TableAction({ icon, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("button", { type: "button", className: cn("flex size-[26px] items-center justify-center rounded-[4px] p-[7px] hover:bg-[rgb(var(--color-gray-50))] [&>img]:size-3 [&>svg]:size-3", className), ...props, children: icon });
}

// src/file-card/file-card.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function FileCard({ preview, name = "document.md", visualState = "default", disabled, className, ...props }) {
  const isDisabled = disabled || visualState === "disabled";
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "button",
    {
      ...props,
      type: "button",
      disabled: isDisabled,
      "data-state": visualState,
      className: cn(
        "flex h-[102px] w-[136.667px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[4px] bg-transparent p-0 font-[Inter] text-[rgb(var(--color-gray-975))] outline-none",
        "hover:bg-[rgb(var(--color-gray-50))] active:bg-[rgb(var(--color-gray-75))] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[rgb(var(--color-accent-gray-aqua-500))]",
        (visualState === "hover" || visualState === "selected") && "bg-[rgb(var(--color-gray-50))]",
        visualState === "pressed" && "bg-[rgb(var(--color-gray-75))]",
        isDisabled && "pointer-events-none opacity-40",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "flex h-20 w-[63px] shrink-0 items-center justify-center [&>img]:h-[62px] [&>img]:w-[49.6px] [&>svg]:h-[62px] [&>svg]:w-[49.6px]", children: preview }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "block h-[22px] w-full shrink-0 truncate px-2 py-0.5 text-center text-xs font-normal leading-[18px]", children: name })
      ]
    }
  );
}

// src/dialog/dialog.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function Dialog({ variant = "standard", title, closeIcon, primaryIcon, primaryLabel, secondaryLabel = "Cancel", children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("section", { className: cn("flex w-[400px] max-w-full flex-col gap-3 rounded-[12px] border-[0.5px] border-black/10 bg-white px-2 pb-2 pt-3 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))] shadow-[0_8px_24px_rgba(0,0,0,0.08)]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("header", { className: "flex h-[18px] items-center gap-1 px-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "m-0 flex-1 text-xs font-normal leading-[18px]", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("button", { type: "button", className: "flex items-center gap-1.5 p-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "flex size-3 [&>img]:size-3 [&>svg]:size-3", children: closeIcon }),
        "Close"
      ] })
    ] }),
    variant === "standard" ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex flex-col gap-2 rounded-[4px] border-[0.5px] border-black/10 p-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex h-[26px] items-center justify-between gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("button", { type: "button", className: "flex h-[26px] items-center gap-1.5 rounded-[4px] bg-white px-2 py-1", children: [
          primaryIcon != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "flex size-3 [&>img]:size-3 [&>svg]:size-3", children: primaryIcon }),
          primaryLabel
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "relative flex w-full items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("input", { readOnly: true, value: "Untitled item", className: "h-[30px] w-full rounded-[4px] border-[0.5px] border-black/20 bg-white py-1.5 pl-2 pr-[88px] outline-none" }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "absolute right-2 text-[10px] text-[rgb(var(--color-gray-500))]", children: "Press Enter \u21B5" })
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex flex-col gap-4 rounded-[4px] border-[0.5px] border-black/10 px-2 pb-2 pt-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "m-0", children }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "h-[30px] rounded-[4px] bg-[rgb(var(--color-gray-50))] px-3 py-1.5", children: secondaryLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "h-[30px] rounded-[4px] bg-[#810718] px-3 py-1.5 text-white", children: primaryLabel })
      ] })
    ] })
  ] });
}

// src/share-popover/share-popover.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
function SharePopover({ state = "open", pointer, documentIcon, peopleIcon, avatar, footerIcon, fileName = "document.md", className }) {
  if (state === "closed") return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "font-['TikTok_Sans'] text-xs leading-[18px] text-[rgb(var(--color-gray-600))]", children: "Share popover closed" });
  const emphasized = state === "hovered" || state === "selected";
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { className: cn("relative flex w-[350px] flex-col pt-2 font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "absolute left-[223px] top-0 z-10 block h-[8.5px] w-[17px] [&>img]:size-full [&>svg]:size-full", children: pointer }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "relative flex flex-col rounded-[6px] bg-[rgb(var(--color-gray-800))] px-2 py-3 shadow-[inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col gap-2 overflow-hidden px-2 pb-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex w-full items-start justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex h-[18px] min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "People with access on" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "flex size-3 [&>img]:size-3 [&>svg]:size-3", children: documentIcon }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "truncate", children: fileName })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex h-[18px] items-center gap-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "flex size-3 [&>img]:size-3 [&>svg]:size-3", children: peopleIcon }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "1" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: cn("flex h-[22px] items-center justify-between rounded-[4px] px-0 py-0.5", emphasized && "beam-menu-item-active px-1"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "flex size-[18px] overflow-hidden rounded-full [&>img]:size-full", children: avatar }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "James T." }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "rounded-full bg-[rgb(var(--color-gray-700))] px-1.5 py-1 text-[10px] leading-[10px]", children: "Member" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-white/50", children: "Remove" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex h-[27px] items-end justify-between border-t-[0.5px] border-white/10 px-2 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "flex h-[18px] items-center gap-1.5", children: [
          "All people with access can edit",
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "flex size-3 [&>img]:size-3 [&>svg]:size-3", children: footerIcon })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", { className: "flex h-[18px] min-w-[72px] items-center gap-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "flex size-3 [&>img]:size-3 [&>svg]:size-3", children: footerIcon }),
          state === "selected" ? "Link-copied" : "Copy-link"
        ] })
      ] })
    ] })
  ] });
}

// src/editor-toolbar/editor-toolbar.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var surface = "bg-[rgb(var(--color-gray-800))] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_-4px_rgba(0,0,0,0.08),0_6px_12px_-6px_rgba(0,0,0,0.06),0_8px_16px_-6px_rgba(0,0,0,0.04),inset_0_0_0_0.5px_rgba(255,255,255,0.5),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1)]";
function EditorToolbar({ icons, state = "default", className }) {
  const active = state === "hover" || state === "pressed" || state === "selected";
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: cn("relative flex h-6 w-max items-center gap-1 font-['TikTok_Sans'] text-xs font-normal leading-[18px]", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: cn("relative flex h-6 items-center overflow-visible rounded-[6px] p-0.5", surface), children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("button", { className: "flex h-5 w-[98px] items-center justify-between gap-1 rounded-[4px] px-1 py-0.5 text-white", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "w-16 text-left", children: "Body" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: cn("flex size-3 [&>img]:size-3 [&>svg]:size-3", state === "menu-open" && "rotate-180"), children: icons.chevron })
      ] }),
      state === "menu-open" && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: cn("absolute left-0 top-7 z-10 flex w-[98px] flex-col overflow-hidden rounded-[6px] border-[0.5px] border-white/50 p-0.5", surface), children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex h-6 items-center justify-between rounded-[4px] p-1 text-white", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "w-16", children: "Header 1" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "beam-menu-item-active flex h-6 items-center justify-between rounded-[4px] border-[0.5px] border-white/10 p-1 text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "w-16", children: "Body" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "flex size-3 [&>img]:size-3 [&>svg]:size-3", children: icons.check })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: cn("relative flex h-6 items-center gap-0.5 overflow-visible rounded-[6px] p-0.5", surface), children: [
      [icons.bold, icons.italic, icons.underline].map((icon, index) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ToolbarIcon, { icon, active: index === 0 && active, pressed: index === 0 && state === "pressed" }, index)),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "flex h-5 w-1 [&>img]:size-full [&>svg]:size-full", children: icons.divider }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("button", { className: "flex size-5 items-center justify-center rounded-[4px] p-1", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "size-3 rounded-full bg-[rgb(var(--color-gray-500))] shadow-[inset_0_0_0_1.2px_rgb(var(--color-gray-975))]" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "flex h-5 w-1 [&>img]:size-full [&>svg]:size-full", children: icons.divider }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ToolbarIcon, { icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "flex size-3 flex-col justify-center gap-[1.2px]", children: [10, 7, 10, 7].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("i", { className: "block h-px rounded bg-white", style: { width: w } }, i)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ToolbarIcon, { icon: icons.list, active: state === "selected" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "flex h-5 w-1 [&>img]:size-full [&>svg]:size-full", children: icons.divider }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ToolbarIcon, { icon: icons.link }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ToolbarIcon, { icon: icons.image })
    ] })
  ] });
}
function ToolbarIcon({ icon, active = false, pressed = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("button", { className: cn("flex size-5 items-center justify-center rounded-[4px] border-[0.5px] border-transparent p-1 [&>img]:size-3 [&>svg]:size-3", active && "beam-menu-item-active border-white/10", pressed && "beam-menu-item-pressed"), children: icon });
}

// src/activity/activity.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function Activity({ items, lineAsset, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: cn("flex w-full flex-col font-['TikTok_Sans'] text-xs font-normal leading-[18px] text-[rgb(var(--color-gray-975))]", className), children: items.map((item, index) => {
    const state = item.state ?? "default";
    const hasLine = index < items.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "grid h-[78px] grid-cols-[16px_minmax(0,1fr)] gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "relative h-[78px] w-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: cn("absolute left-[5px] top-[10px] z-[1] size-1.5 rounded-full", state === "completed" ? "bg-[rgb(var(--color-gray-400))]" : "bg-[rgb(var(--color-accent-gray-aqua-500))]") }),
        hasLine && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "absolute bottom-0 left-2 top-[26px] flex w-px justify-center [&>img]:h-[52px] [&>img]:w-[0.5px] [&>svg]:h-[52px] [&>svg]:w-[0.5px]", children: lineAsset ?? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("i", { className: "block h-[52px] w-[0.5px] bg-[rgb(var(--color-accent-gray-aqua-500)/.5)]" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: cn("min-w-0 pt-1", state === "completed" && "opacity-60"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex h-[22px] items-center gap-1 whitespace-nowrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: item.person }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "rounded-full bg-[rgb(var(--color-gray-75))] px-2 py-0.5 text-[10px] leading-[10px] text-[rgb(var(--color-gray-900))]", children: item.action }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("time", { className: "ml-auto text-[rgb(var(--color-gray-600))]", children: item.time })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "m-0 whitespace-nowrap text-[rgb(var(--color-gray-500))]", children: item.detail })
      ] })
    ] }, `${item.person}-${item.time}-${index}`);
  }) });
}

// src/tabs/tabs.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function Tab({ selected = false, icon, children, onClick, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": selected,
      tabIndex: selected ? 0 : -1,
      onClick,
      className: cn(
        "relative flex h-[22px] items-center justify-center gap-1.5 rounded-[4px] border-[0.5px] border-transparent px-2 py-0.5 font-normal text-[rgb(var(--color-gray-500))]",
        selected && "border-black/10 bg-white text-[rgb(var(--color-gray-975))] shadow-[inset_0_0_0_0.2px_rgba(0,0,0,0.15),inset_0_0.5px_0.5px_rgba(255,255,255,0.6),inset_0_-0.5px_0.5px_rgba(0,0,0,0.5)]",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "flex size-3 shrink-0 [&>img]:size-3 [&>svg]:size-3", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { children })
      ]
    }
  );
}
function Tabs({ value = "grid", onValueChange, listIcon, gridIcon, className }) {
  const items = [
    { value: "list", label: "List", icon: listIcon },
    { value: "grid", label: "Grid", icon: gridIcon }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "div",
    {
      role: "tablist",
      "aria-label": "View",
      className: cn(
        "relative flex w-fit items-center overflow-hidden rounded-[6px] border-[0.5px] border-black/10 bg-[rgb(var(--color-gray-50))] p-0.5 font-sans text-xs font-normal leading-[18px] shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.6)]",
        className
      ),
      children: items.map((item) => {
        const active = item.value === value;
        return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          Tab,
          {
            selected: active,
            icon: item.icon,
            onClick: () => onValueChange?.(item.value),
            children: item.label
          },
          item.value
        );
      })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccountSwitcher,
  Activity,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Dialog,
  Dropdown,
  EditorToolbar,
  EmptyState,
  FileCard,
  FileList,
  Input,
  KpiCard,
  Legend,
  ListBase,
  LoadingSpinner,
  Menu,
  MenuGroup,
  MenuItem,
  NavSection,
  NavigationButton,
  SearchField,
  SegmentedButton,
  Select,
  Separator,
  SharePopover,
  SidebarNavigation,
  Tab,
  Table,
  TableAction,
  TableHeader,
  TableRow,
  Tabs,
  TextArea,
  TextField,
  TextInput,
  Textarea,
  Toast,
  Tooltip,
  cn
});
