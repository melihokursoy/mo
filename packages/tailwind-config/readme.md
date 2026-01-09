# @codecrib/tailwind-config

Shared Tailwind CSS configuration and presets for the monorepo.

Why this package exists
- Centralizes Tailwind theme tokens, plugins, variant rules, and purge/content paths.
- Ensures consistent design system across packages (apps, UI library, docs).
- Makes upgrades and global style changes easy by editing a single source of truth.

Configs
- preset.cjs — Tailwind preset to be reused via `presets: [require('...')]`.
- tailwind.config.cjs — example project config that extends the preset.

Quick usage

- Local (monorepo) — require the preset by relative path in your package's tailwind.config.cjs:
```js
module.exports = {
  presets: [require('../../packages/tailwind-config/preset.cjs')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // package-specific overrides:
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Published package — after publishing, require via package name:
```js
module.exports = {
  presets: [require('@codecrib/tailwind-config/preset')],
};
```

Notes
- Keep content paths in the consuming package tailored to avoid over-including unrelated workspaces.
- Update tokens/plugins in the preset to propagate changes everywhere.
- Follow monorepo package rules: manage deps from the repo root using pnpm (use --filter for package-scoped installs).