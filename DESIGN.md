---
version: 1.0.0
name: Beam
description: A compact, precise design system for the Beam file-management application and its documentation.
colors:
  canvas: "#F5F5F5"
  surface: "#FFFFFF"
  surface-subtle: "#FAFAFA"
  surface-hover: "#F0F0F0"
  surface-pressed: "#EBEBEB"
  text-primary: "#0A0A0A"
  text-secondary: "#525252"
  text-muted: "#8F8F8F"
  text-disabled: "#A3A3A3"
  border: "rgba(0, 0, 0, 0.10)"
  border-strong: "rgba(0, 0, 0, 0.20)"
  accent: "#6B9094"
  accent-subtle: "#ECF3F3"
  menu: "#525252"
  menu-hover: "#666666"
  success: "#129457"
  success-subtle: "#ECFDF3"
  warning: "#D18B0C"
  warning-subtle: "#FFF8E6"
  error: "#E51D31"
  error-strong: "#810718"
  error-subtle: "#FFF0F1"
  info: "#0D76F2"
  info-subtle: "#EAF3FF"
typography:
  ui:
    fontFamily: TikTok Sans
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 18px
  ui-small:
    fontFamily: TikTok Sans
    fontSize: 10px
    fontWeight: "400"
    lineHeight: 10px
  mono:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 18px
rounded:
  none: 0px
  2xs: 2px
  xs: 4px
  sm: 6px
  md: 8px
  10: 10px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  hairline: 0.5px
  2xs: 2px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 20px
  3xl: 24px
  4xl: 32px
components:
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.xs}"
    height: 26px
    padding: "{spacing.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.xs}"
    height: 26px
    padding: "{spacing.md}"
  tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-muted}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xs}"
  menu:
    backgroundColor: "{colors.menu}"
    textColor: "{colors.surface}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xs}"
  badge:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.ui-small}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  table-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.ui}"
    rounded: "{rounded.xs}"
    height: 26px
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  popover:
    backgroundColor: "{colors.menu}"
    textColor: "{colors.surface}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
---

## Overview

Beam is a compact file-management application for organizing folders, viewing and editing documents, sharing access, reviewing activity, and creating API keys. The visual system should feel quiet, direct, and tool-like. Hierarchy comes from spacing, neutral tones, hairline borders, and restrained inset shadows rather than large type, heavy weight, or decoration.

The design must stay faithful to the product flow. Components are documented as reusable primitives, while product screens are compositions of those components. Do not invent a new component when an existing Beam primitive can express the behavior.

## Colors

Beam uses neutral gray as its structural palette, gray-aqua as its accent, and semantic ramps for feedback.

- Use `surface` for primary panels, controls, cards, dialogs, and preview canvases.
- Use `canvas` and `surface-subtle` for page backgrounds, table headers, selected rows, and quiet groupings.
- Use `text-primary` for headings, control labels, and essential values.
- Use `text-secondary` for descriptions and supporting labels. Use `text-muted` for metadata, placeholders, inactive tabs, and timestamps.
- Use `border` for ordinary dividers and frames. Use `border-strong` only where an input or control needs a clearer edge.
- Use gray-aqua `accent` for focus rings, current activity markers, and subtle emphasis. It is not a bright marketing color and should not flood large surfaces.
- Use semantic success, warning, error, and info colors only for status, validation, badges, tooltips, and toast feedback.
- Dark menus and popovers use `menu` with white content. Their hover state adds a light overlay or uses `menu-hover`; it does not change the menu geometry.

The complete source ramps live in the Beam foundation tokens. Alpha colors must be composed from the alpha-black and alpha-white ramps rather than approximated with unrelated gray values.

## Typography

TikTok Sans Regular is the UI typeface. Geist Mono Regular is the technical typeface for token names, code, file keys, keyboard hints, and other machine-readable values.

- Default UI text is `12px / 18px`, weight `400`.
- Compact badges may use `10px / 10px`, weight `400`.
- Do not use bold or semibold. Create hierarchy with color, placement, spacing, and surface treatment.
- Do not substitute Geist Mono for ordinary labels, and do not use TikTok Sans for code-like values.
- Preserve sentence case. Avoid all-caps except literal token names shown in documentation.

## Layout

Beam uses a 4px spacing foundation with 2px and 6px intermediate values where compact control geometry requires them.

- The desktop application fills the viewport and keeps the primary navigation fixed on the left.
- Expanded side navigation is `216px` wide with `12px 8px` outer padding. Collapsed navigation is `43px` wide. Collapsing removes labels without adding an empty right gutter.
- The main content fills all remaining width. Never reserve unexplained blank space beside content.
- Standard controls are `26px` high. Their usual internal padding is `4px 8px`, with a `6px` icon-to-label gap and `12px` icons.
- Documentation pages use a left navigation, fluid main content, and an optional right “On this page” navigation capped at `266px`.
- Component previews are centered, display-only, and sized to the component. Large components may be uniformly downscaled, but their internal proportions must remain unchanged.
- Tables stretch to the available content width in product screens. Isolated table previews hug their intrinsic content before being scaled to fit a card.

## Elevation & Depth

Beam is mostly flat. Depth is reserved for interactive affordances and temporary layers.

- Base frames use a `0.5px` alpha-black border.
- Inputs, tabs, buttons, and selected controls may use restrained inset highlights and a small bottom inset shadow.
- Hover treatments must not translate, grow, or change layout position. Add only the specified surface or shadow treatment.
- Menus, tooltips, popovers, dialogs, and toasts use compact layered shadows. Avoid broad, decorative shadows on ordinary content.
- Modal backdrops may use a very light black overlay and blur, keeping the underlying app recognizable.

## Shapes

The default interaction radius is `4px`.

- Use `4px` for buttons, inputs, table frames, selected rows, and menu items.
- Use `6px` for grouped controls, menus, popovers, toasts, and tab containers.
- Use `12px` for dialogs and large modal surfaces.
- Use `9999px` only for status badges and circular identity treatments.
- Icons are normally `12px`. When a neutral placeholder icon is required in documentation, use a simple outlined circle rather than inventing an asset.

## Components

### Button

Use one complete button structure: leading icon plus label. Show default, hover, pressed, and disabled states. Default remains white or transparent; hover uses `surface-subtle`; pressed uses `surface-hover`; disabled reduces both icon and label contrast. Keep all states at the same size and position.

### Input

The complete input contains a leading icon, placeholder or value, and a trailing action or shortcut. Support default, focused, filled, disabled, and error states. Focus uses the gray-aqua accent. Error uses the error ramp without changing field geometry.

### Select

Use one label-and-chevron trigger. Support default, hover, focused, open, selected, and disabled states. The open menu sits directly beneath the trigger, uses the dark menu surface, and preserves trigger width. Access, permission, and expiry are product usages, not separate component types.

### Menu

Menus have two types: a single-item list and a grouped list of three or more items. Each item uses an icon, label, and optional trailing selected indicator. The group and single-list captions align on the same horizontal baseline in documentation. Hover uses the real dark Beam menu treatment: a subtle light overlay, hairline highlight, and inset shadow without moving the item.

### Badge

Use one pill structure with neutral, accent, success, warning, error, and info variants. Badges are for compact metadata or status, never primary actions.

### Tab

Tabs are a two-option segmented control. The container uses a `6px` radius, `2px` padding, and a subtle gray surface. Each item is `22px` high with a `4px` radius. Selected items use a white surface and primary text; unselected items use muted text. Documentation uses a circle icon and the label “Tab” for both items, then shows the complete two-tab composition.

### Table

Document table header and table row separately, followed by a complete table with three headers and three rows. Header is a single default state on the subtle gray surface. Rows support default, hover, selected, disabled, and trailing action. Use alpha-black 10% borders and `4px` outer radius. File and API-key tables are compositions of this same pattern.

### File Card

Use one grid card structure with default, hover, pressed, selected, and disabled states. A file card contains the real file asset, truncated file name, and only the metadata needed for the current view. State treatment must not resize the card.

### Dialog

Use the standard Beam dialog only: a header with the title and close action aligned on one row, followed by bordered content and the relevant action. The create-folder dialog pairs a folder-name field with an Add folder action. Do not duplicate it as a separate confirmation example in the design-system catalog.

### Popover

Use the open Share popover as the canonical example. It contains the file access heading and count, a member row, permission control, and copy-link action. The preview may be scaled to `0.8`, preserving its pointer, dark surface, spacing, and alignment.

### Editor Toolbar

Treat the formatting toolbar as one component. It contains the block-style select and formatting actions for bold, italic, underline, text color, alignment, lists, links, and media. Document default, button hover, button pressed, button selected, and menu-open states. The preview needs enough vertical room for an open menu without clipping.

### Activity

Use one timeline component for default, current, and completed items. Each item has a dot, optional connector, person, action badge, timestamp, and file path. Metrics belong to the composed File Activity dialog and do not become a standalone component. The design-system home preview shows the composed activity rather than a separate state gallery.

### Tooltip and Toast

Tooltips have default, success, and error variants and hidden or visible states. Toasts have neutral, success, and error variants with visible, action-available, and dismissed behavior. Feedback appears near the relevant action when local; global creation and download feedback appears at the bottom right.

### Navigation

Navigation is built from the real Beam sidebar assets and behavior. Expanded and collapsed variants must match the application in size, placement, icon alignment, and spacing. The expanded form includes organization selection, collapse control, search, new folder, folders with counts, API Keys, Settings, and account. The collapsed form retains only centered icons in a `43px` rail. Search expands the sidebar before accepting text. State examples remain display-only in documentation.

## Product Flows

### App shell and workspace

1. Open Beam in the expanded sidebar state.
2. Use the organization control to switch between Personal and company workspaces.
3. Collapse the sidebar to an icon rail or expand it without shifting the internal control alignment.
4. Keep the active folder or API Keys location visibly selected.

### Search and filtering

1. Activate search from either sidebar state; collapsed navigation expands first.
2. Enter a query to replace the current content with search results.
3. Filter results by All, Folder, or File using compact pill controls.
4. Clearing the query resets the filter and returns to My Beam.

### Folder management

1. Create a folder from New folder or the empty-state action.
2. Enter the folder name in the standard dialog and submit with Add folder or Enter.
3. Open a folder from the sidebar or home table.
4. Open the row menu for Open, Rename, or Delete actions.
5. Rename updates the sidebar, home table, folder contents, and current route together. Delete removes the same linked data and returns home if the open folder was deleted.

### Files and views

1. Inside a folder, switch between List and Grid using the Tab component.
2. Upload one or more files from the upload action, or drag files onto the folder surface.
3. Show the empty-folder composition when no files exist.
4. Open a file from a row or card. File actions include Info, Copy link, Download, and Delete.

### Preview, edit, and share

1. Opening a file creates a split layout with the folder on the left and preview on the right.
2. Resize the split with the pane handle while keeping both panes usable.
3. Use Info, Share, Download, or Close from the preview toolbar.
4. Select editable text to reveal the Editor Toolbar; apply block style and formatting in context.
5. Open Share to review access, permission, and copy-link feedback.
6. If preview or download fails, keep the error in context and expose Try again.

### Activity and feedback

1. Open Info to show the File Activity dialog with metrics and timeline history.
2. Copy actions show a short contextual tooltip.
3. Downloads show neutral success or error toasts; an error may expose Try again.
4. Creation feedback uses a success toast and dismisses automatically after a short duration.

### API keys

1. Open API Keys from the sidebar.
2. Enter a name and select access, permission, and expiry.
3. Keep Create API Key disabled until every required field is complete.
4. On creation, append the key to the table, reveal its value, reset the form, and show success feedback.
5. Copy the key with contextual feedback or open its row menu to revoke it.

## Do’s and Don’ts

### Do

- Reuse the token source and the actual assets from Beam-App-Project.
- Keep typography Regular and use Geist Mono for technical values.
- Preserve the compact `26px` control system, `12px` icons, `6px` gaps, and `4px` interaction radius.
- Keep hover and pressed states in place; change only surface, border, or shadow.
- Make component documentation display-only when interaction could misrepresent a state specimen.
- Keep product feedback close to its cause and expose recovery when an action can fail.

### Don’t

- Do not introduce unrelated brand colors, including Blissblue.
- Do not use bold or semibold to manufacture hierarchy.
- Do not replace Beam icons with approximations in product compositions.
- Do not add extra component categories for one-off usages such as upload button, destructive button, file actions, or API-key permission selects.
- Do not add padding to the collapsed sidebar’s right side or leave unused width beside fluid content.
- Do not make previews interactive, allow text entry, or navigate away from the design-system home.
- Do not animate position or scale on hover.
