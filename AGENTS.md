# Agent Guidelines for AstroWind Repository

## Build & Development Commands

- **Dev server**: `npm run dev` or `npm start`
- **Production build**: `npm run build`
- **Preview build**: `npm run preview`
- **Type check**: `npm run check:astro`

## Code Quality & Linting

- **Full check** (astro + eslint + prettier): `npm run check`
- **Fix code style**: `npm run fix` (runs both eslint and prettier fixes)
- **ESLint only**: `npm run check:eslint` (check) or `npm run fix:eslint` (fix)
- **Prettier only**: `npm run check:prettier` (check) or `npm run fix:prettier` (fix)

## Code Style Guidelines

**Formatting**: Prettier enforces `printWidth: 120`, 2-space tabs, single quotes, trailing commas (ES5).

**Imports**: Use ESM syntax. Path alias `~` maps to `src/` (configured in tsconfig.json and astro.config.ts).

**TypeScript**: Strict null checks enabled. Use `strictNullChecks: true`. Prefix unused parameters with `_` (e.g., `_unused`).

**Naming**: Use camelCase for variables/functions, PascalCase for components/types. Astro components in `src/components/` use `.astro` extension.

**Error Handling**: No silent failures. Always handle errors explicitly in try-catch blocks or promise chains.

**Components**: Place Astro components in `src/components/`, organize by feature (blog/, widgets/, ui/, common/). Use TypeScript in component scripts.

## Key Stack

- **Framework**: Astro 5.0 with Tailwind CSS
- **Language**: TypeScript with strict type checking
- **Linters**: ESLint (typescript-eslint), Prettier, Astro type checker
- **Min Node**: v18.17.1 (see package.json engines)
