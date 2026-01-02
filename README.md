Codecrib UI (monorepo)

This repository contains a React UI component library, demo web app, and Storybook documentation.

- **What**: Component library (packages/ui), demo app (apps/web), shared configs (packages/*).
- **Run demo (dev)**: `pnpm turbo run dev --filter=@codecrib/web`
- **Run Storybook (dev)**: `pnpm turbo run storybook --filter=@codecrib/ui`
- **Run tests (watch)**: `pnpm turbo run test --filter=@codecrib/ui -- --watch`
- **Build library**: `pnpm --filter @codecrib/ui build`
- **Build Storybook**: `pnpm --filter @codecrib/ui build-storybook`
- **Publish**: CI job publishes the built package from `packages/ui` to npm (requires `NPM_TOKEN`).

Storybook (published):
- https://melihokursoy.github.io/mo

Notes:
- Package scope was updated to `@codecrib/*`. Run `pnpm install` after pulls that rename packages so workspace metadata updates.
- Use Turborepo (`pnpm turbo ...`) from the repo root to run scripts in packages.

Files of interest:
- [packages/ui/package.json](packages/ui/package.json)
- [apps/web/src/App.tsx](apps/web/src/App.tsx)

If you want, I can also update the GitHub Pages URL if you publish Storybook under a different repo or path.