import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@beam/ui';
import { TableOfContents } from './TableOfContents.js';

// TOC auto-shows on every /components/* and /foundations/* page.
// Standalone pages (Home, Getting Started, Changelog) skip it.
const TOC_PREFIXES = ['/components/', '/foundations/'];

export function MdxLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const showToc = TOC_PREFIXES.some((p) => pathname.startsWith(p));
  // Every component page documents a Beam component, so each receives the Beam theme.
  const isBeamComponent = pathname.startsWith('/components/');
  const usesCompactSpecLayout = [
    '/components/button',
    '/components/text-input',
    '/components/select',
    '/components/menu',
    '/components/badge',
    '/components/table',
    '/components/file-card',
    '/components/dialog',
    '/components/popover',
    '/components/editor-toolbar',
    '/components/navigation',
    '/components/activity',
    '/components/tooltip',
    '/components/toast',
  ].includes(pathname);
  const contentClass = cn(
    'mdx-content',
    isBeamComponent && 'beam-theme',
    usesCompactSpecLayout && 'compact-spec-page',
  );

  if (!showToc) {
    return <div className={contentClass}>{children}</div>;
  }

  return (
    <div className="inner-page-layout flex items-start gap-8">
      <div className={contentClass}>{children}</div>
      <TableOfContents />
    </div>
  );
}
