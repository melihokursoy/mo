# @codecrib/typescript-config

Shared TypeScript configurations for the monorepo.

Why this package exists
- Centralizes TypeScript compiler settings used across packages and apps.
- Ensures consistent `compilerOptions`, `lib`, JSX handling, declaration output, and module resolution.
- Makes upgrades and policy changes easy by editing one place.

Configs
- react-library.json — config for building React libraries (declarations + ESM/CJS). See: [react-library.json](react-library.json)
- base.json — common base used by other configs. See: [base.json](base.json)

Quick usage

- Local (monorepo) — extend by relative path in your package's tsconfig.json:
```json
{
  "extends": "../../packages/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "dist"
  }
}