import tokens from '../../data/beam-foundation.json';
import { PreviewCard } from '../docs/PreviewCard.js';
import { PropsTable } from '../docs/PropsTable.js';

/**
 * Renderers for the Beam foundation tokens (src/data/beam-foundation.json),
 * collected from the Beam apps on 2026-07-21 and this repo's token source.
 * Every preview here uses inline styles with the raw collected values rather
 * than Tailwind token classes.
 */

type RampName = 'neutral' | 'accent-gray-aqua' | 'success' | 'warning' | 'error' | 'info' | 'gray' | 'alpha-black' | 'alpha-white';

/** One color ramp (e.g. neutral-25 → neutral-950) as a swatch grid. */
export function BeamColorRamp({ ramp }: { ramp: RampName }) {
  const shades = tokens.color[ramp];
  return (
    <div className="my-0 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {Object.entries(shades).map(([shade, hex]) => (
        <div key={shade} className="flex min-w-0 flex-col gap-1.5">
          <div
            className="component-tile h-12 rounded border border-black/10"
            style={{ backgroundColor: hex }}
            aria-hidden="true"
          />
          <div className="flex min-w-0 flex-col">
            <span className="font-sans text-xs font-normal uppercase leading-[18px] text-[#201b18]">
              {ramp}-{shade}
            </span>
            <span className="text-xs leading-[18px] text-[#a3a3a3]">{hex}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Semantic color tokens, rendered as a labeled swatch list. */
export function BeamSemanticColors() {
  return (
    <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(tokens.color.semantic).map(([name, value]) => (
        <div
          key={name}
          className="flex items-center gap-3 rounded-md border border-default bg-surface p-3"
        >
          <div
            className="h-10 w-10 shrink-0 rounded-md border border-subtle"
            style={{ backgroundColor: value }}
            aria-hidden="true"
          />
          <div className="flex min-w-0 flex-col text-default">
            <span className="font-mono text-xs">{name}</span>
            <span className="truncate text-[11px] text-muted">{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Radius scale in the JSON's file order (none → full). NOTE: JS reorders
 * integer-like object keys ("10") ahead of string keys in Object.entries,
 * so the order is pinned explicitly here to match the file.
 */
const RADIUS_ORDER = ['none', '2xs', 'xs', 'sm', 'md', '10', 'lg', 'xl', 'full'] as const;

/** Radius scale as rows: chip + value + accent sample box (36px, pill for `full`). */
export function BeamRadiusGrid() {
  return (
    <div className="my-6 flex flex-col divide-y divide-black/10 rounded border border-black/10 bg-surface">
      {RADIUS_ORDER.map((name) => {
        const value = tokens.radius[name];
        return (
          <div key={name} className="flex items-center gap-4 px-4 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-default">
              radius-{name}
            </code>
            <span className="w-14 shrink-0 text-[11px] text-muted">{value}</span>
            <div
              className={name === 'full' ? 'h-9 w-20' : 'h-9 w-9'}
              style={{
                borderRadius: value,
                backgroundColor: tokens.color['accent-gray-aqua']['500'],
              }}
              aria-hidden="true"
            />
          </div>
        );
      })}
    </div>
  );
}

/** Shadow tokens rendered on cards inside a bordered panel (max contrast). */
export function BeamShadowGrid() {
  return (
    <div className="my-6 rounded-lg border border-default bg-canvas px-8 pt-12 pb-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {Object.entries(tokens.shadow).map(([name, value]) => (
          <div key={name} className="flex flex-col items-center gap-4">
            <div
              className="flex h-24 w-full items-center justify-center rounded-lg border border-default bg-surface"
              style={{ boxShadow: value }}
            >
              <code className="font-mono text-xs text-default">
                shadow-{name}
              </code>
            </div>
            <code className="break-all text-center font-mono text-[11px] leading-relaxed text-muted">
              {value}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Font preview card using the Figma typography family token.
 */
export function BeamFontPreview() {
  return (
    <PreviewCard>
      <p
        className="text-2xl font-medium"
        style={{ fontFamily: 'var(--font-family-sans)' }}
      >
        The quick brown fox jumps over the lazy dog
      </p>
    </PreviewCard>
  );
}

/**
 * Size/line-height pairing from the Figma Typography variable collection.
 */
const SIZE_SCALE: Array<{
  token: string;
  size: string;
  lineHeight: string;
  sample: string;
  tracking: string;
}> = [
  ...(['text-xs', 'text-sm', 'text-md', 'text-lg', 'text-xl', 'display-xs', 'display-sm'] as const).map((token) => ({ token, size: tokens.typography.fontSize[token], lineHeight: tokens.typography.lineHeight[token], tracking: '0%', sample: `Aa ${token}` })),
  ...(['display-md', 'display-lg', 'display-xl', 'display-2xl'] as const).map((token) => ({ token, size: tokens.typography.fontSize[token], lineHeight: tokens.typography.lineHeight[token], tracking: '-2%', sample: `Aa ${token}` })),
];

/** Size scale table — same 4-column PropsTable style as the Beam Typography page. */
export function BeamSizeScale() {
  return (
    <PropsTable>
      <thead>
        <tr>
          <th>Token</th>
          <th>Size</th>
          <th>Line height</th>
          <th>Tracking</th>
          <th>Sample</th>
        </tr>
      </thead>
      <tbody>
        {SIZE_SCALE.map((row) => (
          <tr key={row.token}>
            <td>
              <code>{row.token}</code>
            </td>
            <td>{row.size}</td>
            <td>{row.lineHeight}</td>
            <td>{row.tracking}</td>
            <td>
              <span
                className="text-default"
                style={{ fontSize: row.size, lineHeight: row.lineHeight, letterSpacing: row.tracking === '-2%' ? '-0.02em' : '0' }}
              >
                {row.sample}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </PropsTable>
  );
}

const WEIGHTS: Array<{ className: string; weight: number }> = [
  { className: 'font-normal', weight: 400 },
  { className: 'font-medium', weight: 500 },
  { className: 'font-semibold', weight: 600 },
  { className: 'font-bold', weight: 700 },
];

/** Weights table — same 2-column PropsTable style as the Beam Typography page. */
export function BeamWeights() {
  return (
    <PropsTable>
      <thead>
        <tr>
          <th>Class</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        {WEIGHTS.map((w) => (
          <tr key={w.className}>
            <td>
              <code>{w.className}</code>
            </td>
            <td>{w.weight}</td>
          </tr>
        ))}
      </tbody>
    </PropsTable>
  );
}

/**
 * Tailwind's default spacing scale — what both Beam apps actually use.
 * NOT a Beam token set and NOT in the JSON: this is Tailwind's documented
 * default (px = step × 4), shown so the page can visualize the convention.
 */
const SPACING_STEPS = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20,
  24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
] as const;

/** Spacing scale as horizontal bars using the available accent fill. */
export function BeamSpacingScale() {
  return (
    <div className="my-6 flex flex-col divide-y divide-black/10 overflow-x-auto rounded border border-black/10 bg-surface">
      {SPACING_STEPS.map((step) => {
        const px = step * 4;
        return (
          <div key={step} className="flex items-center gap-4 px-4 py-2">
            <code className="w-14 shrink-0 font-mono text-xs text-default">
              p-{step}
            </code>
            <span className="w-12 shrink-0 text-right text-[11px] text-muted">
              {px}px
            </span>
            <div
              className="h-3 shrink-0 rounded-[2px]"
              style={{
                width: px,
                backgroundColor: tokens.color['accent-gray-aqua']['500'],
              }}
              aria-hidden="true"
            />
          </div>
        );
      })}
    </div>
  );
}
