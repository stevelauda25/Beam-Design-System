import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /**
   * Skip `overflow-hidden` so absolute-positioned popovers (Dropdown menus,
   * Tooltips, etc.) can escape the card boundary. Default false — card
   * clips content to the rounded corners.
   */
  noClip?: boolean;
  /**
   * Content alignment inside the card. `center` (default) for single-item
   * previews; `start` for multi-row grids where centering looks ragged.
   */
  align?: 'center' | 'start';
  /** Compact spacing for small state comparisons such as buttons. */
  compact?: boolean;
  /** Taller compact frame for specimens with an open popup. */
  tall?: boolean;
  /** Extra vertical room for multi-row specimens with an open overlay. */
  extraTall?: boolean;
  /** Full-height frame for tall component specimens such as side navigation. */
  fullHeight?: boolean;
  /** Use a white documentation canvas instead of Gray-25. */
  white?: boolean;
}

export function PreviewCard({ children, noClip = false, align = 'center', compact = false, tall = false, extraTall = false, fullHeight = false, white = false }: Props) {
  const justify = align === 'start' ? 'justify-start' : 'justify-center';
  const items = align === 'start' ? 'items-start' : 'items-center';
  const compactHeight = fullHeight ? 'h-[590px]' : extraTall ? 'h-[238px]' : tall ? 'h-[182px]' : 'h-[102px]';
  const compactMinHeight = fullHeight ? 'min-h-[584px]' : extraTall ? 'min-h-[232px]' : tall ? 'min-h-[176px]' : 'min-h-[96px]';
  return (
    <div
      className={`preview-card ${compact ? `mt-1 mb-4 ${compactHeight} rounded-[4px] border-black/10 ${white ? 'bg-white' : 'bg-[#fafafa]'} pt-1` : `my-6 rounded-lg border-default ${white ? 'bg-white' : 'bg-canvas'}`} border ${
        noClip ? '' : 'overflow-hidden'
      }`}
    >
      <div className={`flex ${compact ? `${compactMinHeight} w-full px-4 py-[22px]` : 'min-h-[160px] p-8'} ${items} ${justify}`}>
        {children}
      </div>
    </div>
  );
}
