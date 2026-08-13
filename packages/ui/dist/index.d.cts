import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, ReactElement } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

type ButtonState = 'default' | 'hover' | 'pressed' | 'disabled';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: ReactNode;
    /** Forces a state for design-system comparison. Normal usage can omit it. */
    visualState?: ButtonState;
    /** Kept for compatibility; Beam-App-Project uses one visual button type. */
    variant?: string;
    /** Kept for compatibility; Beam-App-Project uses one 26px size. */
    size?: string;
    loading?: boolean;
}
/**
 * Beam-App-Project button.
 * Extracted from `.plainButton` / `.createApiKey`: 26px high, 4px × 8px
 * padding, 6px gap, 12px icon, 12px/18px TikTok Sans, and 4px radius.
 */
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'purple';
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant?: BadgeVariant;
    /** Compatibility props retained while the catalog uses one structure. */
    size?: 'sm' | 'md';
    dot?: boolean;
    icon?: ReactNode;
}
/** One Beam badge structure; only its semantic color variant changes. */
declare function Badge({ variant, size: _size, dot, icon, children, className, ...props }: BadgeProps): react.JSX.Element;

type InputState = 'default' | 'focused' | 'filled' | 'disabled' | 'error';
interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
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
declare function TextInput({ leading, trailing, visualState, error, disabled, containerClassName, className, value, defaultValue, placeholder, size: _size, prefix: _prefix, suffix: _suffix, fieldClassName: _fieldClassName, ...props }: TextInputProps): react.JSX.Element;
type InputProps = TextInputProps;
declare const Input: typeof TextInput;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** md = 12px padding / 14px text (regular), sm = 8px padding / 12px text (compact, mirrors TextInput sm) */
    size?: "sm" | "md";
    error?: boolean;
    containerClassName?: string;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;
/** Legacy aliases kept for compatibility. */
type TextAreaProps = TextareaProps;
declare const TextArea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

/**
 * list-base — the shared row primitive.
 *
 * Every list-shaped component composes this: nav-item, footer-item,
 * menu-item, select-option, command-item. Slots + states only, no
 * navigation or selection logic (that lives in the composing component).
 *
 * NOTE: text/hover colors below use the brand "Neutral Gray" (cool) scale
 * from the Figma spec (#525252 text, #F5F5F5 hover, #A3A3A3 disabled).
 * These are arbitrary values for now — reconcile into `gray-*` tokens once
 * we settle warm vs cool neutrals across the system.
 */
type ListBaseSize = "sm" | "md";
declare const listBase: (props?: ({
    size?: "sm" | "md" | null | undefined;
    state?: "default" | "hover" | "disabled" | "selected" | null | undefined;
    tone?: "default" | "danger" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ListBaseProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof listBase> {
    /** row height and text size (default `sm`) */
    size?: ListBaseSize;
    /** leading slot — icon, radio, checkbox, avatar */
    leading?: ReactNode;
    /** trailing slot — chevron, check, badge, shortcut */
    trailing?: ReactNode;
    /** the row label */
    children: ReactNode;
}
declare function ListBase({ size, leading, trailing, children, state, tone, className, ...props }: ListBaseProps): react.JSX.Element;

interface SeparatorProps {
    className?: string;
}
/**
 * separator — a hairline divider row for the sidebar (and menus).
 *
 * A 12px-tall row with the list-base 8px horizontal inset, holding a centered
 * 0.5px line. This inset makes the rule line up with the text of the rows above
 * and below rather than running full-bleed.
 *
 * NOTE: the line is black/10 per the Figma (rgba(0,0,0,0.1)). Reconcile into
 * --border-hairline with the rest of the neutrals later. Pass `className`
 * (e.g. px-0) for a full-bleed rule.
 */
declare function Separator({ className }: SeparatorProps): react.JSX.Element;

type LoadingSpinnerSize = "xs" | "s" | "md" | "lg" | "xl";
type LoadingSpinnerVariant = "filled" | "stroke" | "ring" | "dot";
interface LoadingSpinnerProps {
    size?: LoadingSpinnerSize;
    variant?: LoadingSpinnerVariant;
    label?: string;
    className?: string;
}
declare function LoadingSpinner({ size, variant, label, className, }: LoadingSpinnerProps): react.JSX.Element;

type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
type TooltipSide = TooltipPlacement;
type TooltipVariant = 'default' | 'success' | 'error';
interface TooltipProps {
    children: ReactElement;
    body?: ReactNode;
    content?: ReactNode;
    title?: ReactNode;
    placement?: TooltipPlacement;
    side?: TooltipSide;
    variant?: TooltipVariant;
    open?: boolean;
    defaultOpen?: boolean;
    className?: string;
}
declare function Tooltip({ children, body, content, title, placement, side, variant, open, defaultOpen, className }: TooltipProps): react.JSX.Element;

interface AvatarProps {
    /** image url; when omitted, the initials fallback is shown */
    src?: string;
    alt?: string;
    /** diameter, given in px at the base scale but rendered in rem so it scales
     *  with the app's root font-size (see index.css) */
    size?: number;
    /** initials shown when there is no image (e.g. "JH") */
    fallback?: string;
    className?: string;
}
/**
 * avatar — a circular user image with an initials fallback.
 *
 * 1px black/10 ring per the Figma. Image is object-cover; without a src it
 * renders the initials on a neutral fill, sized proportionally to the avatar.
 */
declare function Avatar({ src, alt, size, fallback, className }: AvatarProps): react.JSX.Element;

interface SegmentedButtonOption {
    value: string;
    label: string;
    /** optional count badge, shown only when provided */
    count?: number;
}
interface SegmentedButtonProps {
    options: SegmentedButtonOption[];
    /** the selected option's value */
    value: string;
    onChange: (value: string) => void;
    /** medium = the raw component (14px / 36px), small = the chart range tabs (12px / 22px) */
    size?: "medium" | "small";
    /** stretch the segments to equal width to fill the container (give it a width via className) */
    fill?: boolean;
    /** show the divider line between segments (default true) */
    dividers?: boolean;
    className?: string;
}
/**
 * segmented-button — a single-select button group with a sliding selection pill,
 * matching the forecast chart's control (#f5f5f5 track, #3d3d3d pill, #525252
 * idle, no hover state). Two sizes: medium (raw component 2176:7625) and small
 * (chart range tabs 2494:7304). Each segment can carry an optional count badge.
 */
declare function SegmentedButton({ options, value, onChange, size, fill, dividers, className, }: SegmentedButtonProps): react.JSX.Element;

interface NavSectionProps {
    /** section caption, rendered uppercase. Omit for an unlabeled group. */
    label?: string;
    /** the nav-items belonging to this section */
    children?: ReactNode;
    className?: string;
    /** optional divider treatment used by application sidebar groups */
    divided?: boolean;
}
declare function NavSection({ label, children, className, divided }: NavSectionProps): react.JSX.Element;

interface NavigationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    leading?: ReactNode;
    trailing?: ReactNode;
    active?: boolean;
    collapsed?: boolean;
}
/** Atom: the compact interactive row used throughout Beam application navigation. */
declare const NavigationButton: react.ForwardRefExoticComponent<NavigationButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface SidebarNavigationProps extends HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
    header?: ReactNode;
    actions?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
}
/** Organism: application sidebar shell composed from navigation atoms and molecules. */
declare function SidebarNavigation({ collapsed, header, actions, footer, children, className, ...props }: SidebarNavigationProps): react.JSX.Element;

interface SearchResult {
    id: string;
    label: string;
    leading?: ReactNode;
    trailing?: ReactNode;
}
interface SearchFieldProps extends Omit<TextInputProps, "leading" | "prefix" | "suffix" | "results" | "trailing"> {
    /** results shown in the dropdown */
    results?: SearchResult[];
    /** force the dropdown open (defaults to open on focus) */
    open?: boolean;
    onSelectResult?: (result: SearchResult) => void;
    /** keyboard shortcut hint shown as a trailing kbd badge, e.g. "⌘K" */
    shortcut?: string;
    /** override the search icon size (defaults to 18 for md, 12 for sm) */
    iconSize?: number;
}
declare function SearchField({ results, open, onSelectResult, placeholder, containerClassName, shortcut, size, iconSize, ...props }: SearchFieldProps): react.JSX.Element;

interface AccountSwitcherProps {
    /** display name, e.g. "Jason Heim" */
    name: string;
    /** avatar image url; falls back to initials */
    avatarSrc?: string;
    /** initials for the avatar fallback, e.g. "JH" */
    initials?: string;
    /** role badge text, e.g. "Admin". Omit to hide the pill. */
    role?: string;
    /** profile menu trigger */
    onClick?: () => void;
    /** collapse-sidebar toggle (the panel icon) */
    onToggleSidebar?: () => void;
    className?: string;
}
declare function AccountSwitcher({ name, avatarSrc, initials, role, onClick, onToggleSidebar, className, }: AccountSwitcherProps): react.JSX.Element;

interface BreadcrumbItem {
    /** the crumb label */
    label: string;
    /** navigates when the crumb is an ancestor (not the current page) */
    href?: string;
    onClick?: () => void;
}
interface BreadcrumbProps {
    /** the trail, first to last. The LAST item is the current page (black). */
    items: BreadcrumbItem[];
    /**
     * Collapse the middle of the trail into an ellipsis menu once there are more
     * than this many items. The first item and the last two always stay visible.
     */
    maxItems?: number;
    className?: string;
}
declare function Breadcrumb({ items, maxItems, className }: BreadcrumbProps): react.JSX.Element | null;

interface KpiTrend {
    /** up = green rising triangle, down = red falling triangle */
    direction: "up" | "down";
    /** the delta shown beside the triangle, e.g. "6" */
    value: string;
}
interface KpiCardProps {
    label: string;
    value: string;
    /** rendered under the value, in the default size only */
    description?: string;
    /** a unit suffix rendered after the value, e.g. "/hr" (ignored if `trend` is set) */
    suffix?: string;
    /** a delta indicator (green up / red down) rendered after the value */
    trend?: KpiTrend;
    /** optional icon: top-right in the default size, leading in compact */
    icon?: ReactNode;
    size?: "default" | "compact";
    className?: string;
}
declare function KpiCard({ label, value, description, suffix, trend, icon, size, className, }: KpiCardProps): react.JSX.Element;

type LegendVariant = "square" | "line";
type LegendLineStyle = "dashed" | "dotted" | "solid";
interface LegendProps {
    variant?: LegendVariant;
    color: string;
    label: string;
    value?: string;
    percent?: string;
    dashed?: boolean;
    lineStyle?: LegendLineStyle;
    bordered?: boolean;
    className?: string;
}
declare function Legend({ variant, color, label, value, percent, dashed, lineStyle, bordered, className, }: LegendProps): react.JSX.Element;

type ToastVariant = 'neutral' | 'default' | 'success' | 'error' | 'warning';
interface ToastProps {
    variant?: ToastVariant;
    title?: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    onDismiss?: () => void;
    icon?: ReactNode;
    loading?: boolean;
    className?: string;
}
declare function Toast({ variant, title, description, actionLabel, onAction, onDismiss, icon, className }: ToastProps): react.JSX.Element;

type FileListStatus = "ready" | "uploading" | "uploaded" | "error";
interface FileListProps {
    status?: FileListStatus;
    name?: string;
    size?: string;
    progress?: number;
    onRemove?: () => void;
    onRetry?: () => void;
    className?: string;
}
declare function FileList({ status, name, size, progress, onRemove, onRetry, className, }: FileListProps): react.JSX.Element;

type EmptyStateMedia = "icon" | "avatar" | "none";
type EmptyStateActionVariant = "primary" | "secondary";
interface EmptyStateProps {
    /** media block above the copy: a 16px icon chip, a 24px avatar, or nothing */
    media?: EmptyStateMedia;
    /** override the media="icon" glyph (defaults to Bell) */
    icon?: ReactNode;
    /** image URL for media="avatar"; falls back to a neutral User chip when omitted */
    avatarSrc?: string;
    /** alt text for the avatar image */
    avatarAlt?: string;
    title: string;
    description?: string;
    /** renders the action button when provided */
    actionLabel?: string;
    /** optional 14px leading icon inside the action button */
    actionIcon?: ReactNode;
    /** action button style: white "secondary" chip or dark "primary" chip */
    actionVariant?: EmptyStateActionVariant;
    onAction?: () => void;
    className?: string;
}
declare function EmptyState({ media, icon, avatarSrc, avatarAlt, title, description, actionLabel, actionIcon, actionVariant, onAction, className, }: EmptyStateProps): react.JSX.Element;

interface TextFieldBaseProps {
    /** label text shown above the field (14px / 500) */
    label: ReactNode;
    /** shows a red asterisk after the label; otherwise an "(Optional)" caption */
    required?: boolean;
    /** tooltip content — when present a trailing info icon (14px) appears in the label row */
    info?: ReactNode;
    /** hint text below the field (turns red when error) */
    hint?: ReactNode;
    /** error styling — red field border + red hint */
    error?: boolean;
    /** id for the inner input/textarea (auto-generated when omitted) */
    id?: string;
    /** className for the outer wrapper (the field column) */
    className?: string;
}
type TextFieldProps = TextFieldBaseProps & (({
    multiline?: false;
} & Omit<TextInputProps, "error">) | ({
    multiline: true;
} & Omit<TextareaProps, "error">));
/**
 * text-field — the complete form field: label row + field + hint row.
 *
 * Composes the existing TextInput (single-line) and Textarea (multiline); all
 * field sizes/variants/states pass straight through. From Figma: column flex
 * with 8px gaps; label row is a 2px-gap row (14px/500 label, red asterisk when
 * required, "(Optional)" #8F8F8F otherwise, trailing 14px info icon when the
 * field has tooltip content); hint row is a 4px-gap row (12px info icon + 12px
 * hint, #000000 default / red on error).
 *
 * NOTE: the asterisk uses the exact Figma red #C0180C; the error hint uses
 * red-500 to match the existing TextInput/Textarea error border.
 */
declare function TextField(props: TextFieldProps): react.JSX.Element;

type DropdownSize = "sm" | "md";
interface DropdownOption {
    /** the value handed to onChange */
    value: string;
    /** the label shown in the list and in the closed field */
    label: string;
    /** disabled options use the ListBase disabled state and cannot be chosen */
    disabled?: boolean;
}
interface DropdownProps {
    /**
     * md = 12px padding / 14px text (regular), sm = fixed 32px height / px-2 /
     * 12px text (small). The ListBase option rows follow the same size.
     */
    size?: DropdownSize;
    /** the options shown in the open list */
    options: DropdownOption[];
    /** controlled selected value */
    value?: string;
    /** uncontrolled initial value */
    defaultValue?: string;
    /** called with the value of the chosen option */
    onChange?: (value: string) => void;
    /** shown in the field when nothing is selected (input placeholder grey) */
    placeholder?: string;
    /** leading icon inside the field */
    leading?: ReactNode;
    /** error styling (red border) */
    error?: boolean;
    disabled?: boolean;
    /** force the list open (e.g. for docs); overrides the internal open state */
    open?: boolean;
    /**
     * type-to-filter mode: the closed field becomes an editable input — clicking
     * focuses it, typing opens the list and live-filters the options by a
     * case-insensitive substring match on the option label, Enter selects the
     * active option, and Escape clears the query (then closes the list). Defaults
     * to false, keeping the classic button trigger.
     */
    filterable?: boolean;
    className?: string;
    "aria-label"?: string;
}
/**
 * dropdown — select-style closed field + open list panel. Dependency-free.
 *
 * The closed field mirrors text-input: fill gray-50 (#F5F5F5), 0.5px black/10
 * border, 6px radius. Focus (via focus-within) turns the border black and adds
 * a 3px black/10 ring; error uses the red-500 border; disabled uses #EBEBEB
 * fill with #8F8F8F text and a not-allowed cursor. The field shows the
 * selected option label, or the placeholder in the input's #525252 placeholder
 * colour. The trailing ChevronDown rotates 180° while open.
 *
 * The open panel reuses the repo's popover recipe (white fill, 0.5px black/10
 * hairline, 6px radius, the shared popover shadow from breadcrumb /
 * search-field) and its rows are composed from ListBase — the row size follows
 * the dropdown's size prop, the selected row gets a trailing Check, and
 * disabled options use the ListBase disabled state.
 *
 * Behaviour: opens on click, closes on Escape and outside pointer-down.
 * Keyboard: ArrowUp/ArrowDown move the active option (wrapping, skipping
 * disabled), Enter/Space selects the active option.
 *
 * With `filterable` the trigger swaps from a button to an editable text input
 * on the same field recipe (same sizes, focus ring, error and disabled states,
 * same chevron). Typing opens the list and filters options by a
 * case-insensitive substring match on the label; an empty result renders a
 * single "No results" row. Enter picks the active option (the field text
 * becomes its label and onChange fires); Escape first clears the query, then
 * closes the list; closing the list always drops the query so the field falls
 * back to the selected label. Accessibility switches to the ARIA combobox
 * pattern (role="combobox" + aria-autocomplete="list" on the input,
 * aria-expanded, aria-controls and aria-activedescendant pointing at the
 * listbox); the classic mode keeps its button + listbox roles untouched.
 */
declare function Dropdown({ size, options, value, defaultValue, onChange, placeholder, leading, error, disabled, open, filterable, className, "aria-label": ariaLabel, }: DropdownProps): react.JSX.Element;

type SelectState = 'default' | 'hover' | 'focused' | 'open' | 'selected' | 'disabled';
interface SelectOption {
    value: string;
    label: string;
}
interface SelectProps {
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
declare function Select({ options, placeholder, value, onChange, visualState, chevron, selectedIndicator, className, 'aria-label': ariaLabel }: SelectProps): react.JSX.Element;

type MenuItemState = 'default' | 'hover' | 'pressed' | 'selected' | 'disabled';
interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    indicator?: ReactNode;
    visualState?: MenuItemState;
}
declare function MenuItem({ icon, indicator, visualState, disabled, children, className, ...props }: MenuItemProps): react.JSX.Element;
type MenuType = 'single' | 'group';
declare function Menu({ children, type, className }: {
    children: ReactNode;
    type?: MenuType;
    className?: string;
}): react.JSX.Element;
declare function MenuGroup({ children, label }: {
    children: ReactNode;
    label?: string;
}): react.JSX.Element;

type TableRowState = 'default' | 'hover' | 'selected' | 'disabled';
interface TableRowData {
    name: string;
    size: string;
    modified: string;
}
interface TableProps {
    rows: Array<TableRowData & {
        state?: TableRowState;
    }>;
    actionIcon: ReactNode;
    onAction?: (row: TableRowData) => void;
    className?: string;
}
interface TableHeaderProps {
    labels?: [string, string, string];
    className?: string;
}
declare function TableHeader({ labels, className }: TableHeaderProps): react.JSX.Element;
interface TableRowProps extends TableRowData {
    state?: TableRowState;
    actionIcon?: ReactNode;
    onAction?: () => void;
    last?: boolean;
    standalone?: boolean;
    className?: string;
}
declare function TableRow({ name, size, modified, state, actionIcon, onAction, last, standalone, className }: TableRowProps): react.JSX.Element;
/** The complete Beam file/API table composition. */
declare function Table({ rows, actionIcon, onAction, className }: TableProps): react.JSX.Element;
interface TableActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
}
declare function TableAction({ icon, className, ...props }: TableActionProps): react.JSX.Element;

type FileCardState = 'default' | 'hover' | 'pressed' | 'selected' | 'disabled';
interface FileCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    preview: ReactNode;
    name?: string;
    visualState?: FileCardState;
}
/** Beam-App-Project grid file card, extracted from `.fileGridCard`. */
declare function FileCard({ preview, name, visualState, disabled, className, ...props }: FileCardProps): react.JSX.Element;

type DialogVariant = 'standard' | 'confirmation';
interface DialogProps {
    variant?: DialogVariant;
    title: string;
    closeIcon: ReactNode;
    primaryIcon?: ReactNode;
    primaryLabel: string;
    secondaryLabel?: string;
    children: ReactNode;
    className?: string;
}
declare function Dialog({ variant, title, closeIcon, primaryIcon, primaryLabel, secondaryLabel, children, className }: DialogProps): react.JSX.Element;

type SharePopoverState = 'closed' | 'open' | 'hovered' | 'selected';
interface SharePopoverProps {
    state?: SharePopoverState;
    pointer: ReactNode;
    documentIcon: ReactNode;
    peopleIcon: ReactNode;
    avatar: ReactNode;
    footerIcon: ReactNode;
    fileName?: string;
    className?: string;
}
declare function SharePopover({ state, pointer, documentIcon, peopleIcon, avatar, footerIcon, fileName, className }: SharePopoverProps): react.JSX.Element;

type EditorToolbarState = 'default' | 'hover' | 'pressed' | 'selected' | 'menu-open';
interface EditorToolbarIcons {
    chevron: ReactNode;
    bold: ReactNode;
    italic: ReactNode;
    underline: ReactNode;
    divider: ReactNode;
    list: ReactNode;
    link: ReactNode;
    image: ReactNode;
    check: ReactNode;
}
interface EditorToolbarProps {
    icons: EditorToolbarIcons;
    state?: EditorToolbarState;
    className?: string;
}
declare function EditorToolbar({ icons, state, className }: EditorToolbarProps): react.JSX.Element;

type ActivityItemState = 'default' | 'current' | 'completed';
interface ActivityItem {
    person: string;
    action: string;
    time: string;
    detail: string;
    state?: ActivityItemState;
}
interface ActivityProps {
    items: ActivityItem[];
    lineAsset?: ReactNode;
    className?: string;
}
declare function Activity({ items, lineAsset, className }: ActivityProps): react.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { AccountSwitcher, type AccountSwitcherProps, Activity, type ActivityItem, type ActivityItemState, type ActivityProps, Avatar, type AvatarProps, Badge, type BadgeProps, type BadgeVariant, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, type ButtonProps, type ButtonState, Dialog, type DialogProps, type DialogVariant, Dropdown, type DropdownOption, type DropdownProps, type DropdownSize, EditorToolbar, type EditorToolbarIcons, type EditorToolbarProps, type EditorToolbarState, EmptyState, type EmptyStateActionVariant, type EmptyStateMedia, type EmptyStateProps, FileCard, type FileCardProps, type FileCardState, FileList, type FileListProps, type FileListStatus, Input, type InputProps, type InputState, KpiCard, type KpiCardProps, type KpiTrend, Legend, type LegendLineStyle, type LegendProps, type LegendVariant, ListBase, type ListBaseProps, type ListBaseSize, LoadingSpinner, type LoadingSpinnerProps, type LoadingSpinnerSize, type LoadingSpinnerVariant, Menu, MenuGroup, MenuItem, type MenuItemProps, type MenuItemState, type MenuType, NavSection, type NavSectionProps, NavigationButton, type NavigationButtonProps, SearchField, type SearchFieldProps, type SearchResult, SegmentedButton, type SegmentedButtonOption, type SegmentedButtonProps, Select, type SelectOption, type SelectProps, type SelectState, Separator, type SeparatorProps, SharePopover, type SharePopoverProps, type SharePopoverState, SidebarNavigation, type SidebarNavigationProps, Table, TableAction, type TableActionProps, TableHeader, type TableHeaderProps, type TableProps, TableRow, type TableRowData, type TableRowProps, type TableRowState, TextArea, type TextAreaProps, TextField, type TextFieldProps, TextInput, type TextInputProps, Textarea, type TextareaProps, Toast, type ToastProps, type ToastVariant, Tooltip, type TooltipPlacement, type TooltipProps, type TooltipSide, type TooltipVariant, cn };
