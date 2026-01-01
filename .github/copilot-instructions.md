# Package Management Rules for Turborepo (CRITICAL!)

Follow these rules to ensure consistent, maintainable, and efficient dependency management in this pnpm + Turborepo monorepo:

1. **Always Use pnpm with --filter**
  - To add a dependency to a specific package, run from the monorepo root:
    `pnpm add <package> --filter=@mo/<package-name>`
  - For dev dependencies:
    `pnpm add -D <package> --filter=@mo/<package-name>`

2. **Never Add Packages from Inside a Package Directory**
  - Do NOT `cd` into a package and run `pnpm add`.
  - Always execute package management commands from the monorepo root.

3. **Shared Dependencies**
  - If a dependency is used by multiple packages, add it at the root:
    `pnpm add <package>`
  - This ensures deduplication and faster installs.

4. **Turbo Tasks and Scripts**
  - When adding a tool (e.g., test runner, linter), ensure the corresponding script exists in the target package’s `package.json`.
  - Register new tasks in `turbo.json` if they should be orchestrated by Turbo.

5. **Lockfile and Workspace Consistency**
  - After adding/removing packages, always run `pnpm install` from the root to update the lockfile and ensure all workspace links are correct.

6. **Never Use npm or Yarn**
  - Only use `pnpm` for all package management to avoid workspace corruption.

7. **Document Special Steps**
  - If a package requires post-install steps, document them in the package’s README or in a root-level CONTRIBUTING.md.

**Summary:**
Always manage dependencies from the monorepo root using `pnpm` with `--filter` for package-local installs, and update scripts/turbo tasks as needed. Never run `pnpm add` from inside a package directory. This keeps your monorepo fast, consistent, and maintainable.

# Copilot Instructions for mo Project

## Monorepo Commands (CRITICAL!)

This is a **pnpm monorepo with Turborepo**. You MUST follow these rules without exception:

### 1. ALWAYS use Turborepo with filter
**NEVER** run commands directly in package directories. **NEVER** use `pnpm` directly for scripts without `turbo`.

```bash
# ✅ CORRECT - Always use turbo with filter
pnpm turbo run <command> --filter=@mo/ui

# ❌ WRONG - Never do these
cd packages/ui && pnpm <command>
pnpm --filter @mo/ui <command>
```

### 2. Port Management (Port 6006)
Storybook runs on port 6006. If you need to start Storybook, the `storybook` script in `packages/ui/package.json` already includes `kill-port 6006`. 
**ALWAYS** use the turbo command which will handle killing the port:
`pnpm turbo run storybook --filter=@mo/ui`

### 3. Workspace Hygiene (CRITICAL!)
**NEVER** create temporary files, log files, or redirection outputs (e.g., `> output.txt`) in the project root or package directories. 
- If you need to capture command output, read it directly from the terminal.
- If you MUST create a temporary file for complex processing, use a hidden directory named `.copilot-tmp` in the root and **DELETE** the entire directory immediately after the task is complete.
- **NEVER** leave the workspace in a "dirty" state with debugging artifacts.

- `pnpm turbo run lint --filter=<package>` - Lint a package
- `pnpm turbo run check-types --filter=<package>` - Type check a package

### 1. Testing Architecture
- **Runner**: Vitest v3+ with `browser` mode enabled.
- **Provider**: Playwright (Chromium).
- **Plugin**: `storybookTest()` from `@storybook/addon-vitest/vitest-plugin`.
- **Setup**: `.storybook/vitest.setup.ts` calls `setProjectAnnotations`.
  - Use the `canvas` object from the context: `play: async ({ canvas, step }) => { ... }`.
  - Use `step` to organize complex interactions.

### 3. Testing Commands
- **Run All Tests**: `pnpm turbo run test-storybook --filter=@mo/ui`
- **UI Mode**: `pnpm turbo run test-storybook --filter=@mo/ui -- --ui`

import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within, fn } from 'storybook/test';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  args: { onClick: fn() },
};
export default meta;

type Story = StoryObj<typeof MyComponent>;

export const Interactive: Story = {
  play: async ({ canvas, step }) => {
    await step('Initial state', async () => {
      await expect(canvas.getByRole('button')).toBeInTheDocument();
    });
    
    await step('Click interaction', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await expect(canvas.getByText('Clicked')).toBeInTheDocument();
    });
  },
};
```

### What NOT to do
- ❌ **NEVER** use `screen` from `@testing-library/react`.
- ❌ **NEVER** use `fireEvent`. Use `userEvent` for realistic interactions.
- ❌ **NEVER** forget `await` before `expect` or `userEvent` calls.
- ❌ **NEVER** use `@storybook/jest` or `@storybook/testing-library`.
- If you need to debug, use `console.log` or read terminal output directly.
- Any temporary artifacts MUST be in `.copilot-tmp/` and deleted immediately.

