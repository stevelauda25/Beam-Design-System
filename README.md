# Beam Design System

The shared design foundations and React components used by Beam applications.
The documentation site includes token references, component states, component
specifications, and previews matched to Beam-App-Project.

## Requirements

- Node.js 18.17 or newer
- pnpm 9.7.0

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The documentation site runs locally with Vite. The terminal output shows the
active local URL.

## Validation

```bash
pnpm typecheck
pnpm build
```

The production documentation output is generated in `apps/docs/dist`.

## Repository structure

```text
apps/docs/       Beam documentation site
packages/tokens/ Beam design tokens and Tailwind preset
packages/ui/     Beam React components
```

## Deployment

The repository includes root-level Vercel configuration. Import the GitHub
repository into Vercel and keep the project root set to the repository root.
Vercel installs the pnpm workspace, builds the Beam documentation site, and
publishes `apps/docs/dist`.
