import type { ComponentType } from 'react';

export type Status = 'ready' | 'planned';
export type Category = 'top' | 'foundation' | 'component' | 'resource';

export interface RouteEntry {
  path: string;
  label: string;
  category: Category;
  status?: Status;
  description?: string;
  load?: () => Promise<{ default: ComponentType<unknown> }>;
}

export const routes: RouteEntry[] = [
  { path: '/',                 label: 'Home',            category: 'top', load: () => import('../pages/Home.js') },
  { path: '/getting-started',  label: 'Getting Started', category: 'top', load: () => import('../pages/GettingStarted.mdx') },

  // Foundations — tokens collected from the Beam apps on 2026-07-21
  { path: '/foundations/typography', label: 'Typography', category: 'foundation', load: () => import('../pages/foundations/Typography.mdx') },
  { path: '/foundations/color',      label: 'Color',      category: 'foundation', load: () => import('../pages/foundations/Color.mdx') },
  { path: '/foundations/spacing',    label: 'Spacing',    category: 'foundation', load: () => import('../pages/foundations/Spacing.mdx') },
  { path: '/foundations/radius',     label: 'Radius',     category: 'foundation', load: () => import('../pages/foundations/Radius.mdx') },
  { path: '/foundations/elevation',  label: 'Elevation',  category: 'foundation', load: () => import('../pages/foundations/Elevation.mdx') },

  // Visible components — intentionally limited to the current Beam catalog.
  { path: '/components/button',             label: 'Button',             category: 'component', status: 'ready', description: 'Button atom.',             load: () => import('../pages/components/BeamButton.mdx') },
  { path: '/components/text-input',         label: 'Input',              category: 'component', status: 'ready', description: 'Input atom.',            load: () => import('../pages/components/BeamInput.mdx') },
  { path: '/components/select',             label: 'Select',             category: 'component', status: 'ready', description: 'Select control.',         load: () => import('../pages/components/Select.mdx') },
  { path: '/components/menu',               label: 'Menu',               category: 'component', status: 'ready', description: 'Action menu.',            load: () => import('../pages/components/Menu.mdx') },
  { path: '/components/badge',              label: 'Badge',              category: 'component', status: 'ready', description: 'Semantic badge.',        load: () => import('../pages/components/BeamBadge.mdx') },
  { path: '/components/table',              label: 'Table',              category: 'component', status: 'ready', description: 'Data table.',            load: () => import('../pages/components/Table.mdx') },
  { path: '/components/file-card',          label: 'File Card',          category: 'component', status: 'ready', description: 'Grid file card.',         load: () => import('../pages/components/FileCard.mdx') },
  { path: '/components/dialog',             label: 'Dialog',             category: 'component', status: 'ready', description: 'Dialog structure.',       load: () => import('../pages/components/Dialog.mdx') },
  { path: '/components/popover',            label: 'Popover',            category: 'component', status: 'ready', description: 'Share popover.',          load: () => import('../pages/components/Popover.mdx') },
  { path: '/components/editor-toolbar',     label: 'Editor Toolbar',     category: 'component', status: 'ready', description: 'Formatting toolbar.',      load: () => import('../pages/components/EditorToolbar.mdx') },
  { path: '/components/activity',           label: 'Activity',           category: 'component', status: 'ready', description: 'Activity timeline.',        load: () => import('../pages/components/Activity.mdx') },
  { path: '/components/tooltip',            label: 'Tooltip',            category: 'component', status: 'ready', description: 'Compact feedback tooltip.', load: () => import('../pages/components/Tooltip.mdx') },
  { path: '/components/toast',              label: 'Toast',              category: 'component', status: 'ready', description: 'Status notification.',      load: () => import('../pages/components/Toast.mdx') },
  { path: '/components/navigation',         label: 'Navigation',         category: 'component', status: 'ready', description: 'Atomic navigation family.', load: () => import('../pages/components/Navigation.mdx') },
  { path: '/components/tabs',               label: 'Tab',                category: 'component', status: 'ready', description: 'List and grid view tabs.',   load: () => import('../pages/components/Tabs.mdx') },

  // Resources
  { path: '/changelog', label: 'Changelog', category: 'resource', load: () => import('../pages/Changelog.mdx') },
];

export const topRoutes = routes.filter((r) => r.category === 'top');
export const foundationRoutes = routes.filter((r) => r.category === 'foundation');
export const componentRoutes = routes.filter((r) => r.category === 'component');
export const resourceRoutes = routes.filter((r) => r.category === 'resource');

export interface GroupMeta {
  id: string;
  label: string;
}

export const groupMeta = {
  foundations: { id: 'foundations', label: 'Foundations' } satisfies GroupMeta,
  components:  { id: 'components',  label: 'Components'  } satisfies GroupMeta,
  resources:   { id: 'resources',   label: 'Resources'   } satisfies GroupMeta,
};
