# Agent Guidelines for lotusacc.ir

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Code Style Guidelines

### TypeScript & JavaScript

- Use strict TypeScript configuration (`astro/tsconfigs/strict`)
- Use ES modules with `import/export`
- Place imports at the top of files
- Use `unknown` type for caught errors, then type guard with `instanceof Error`
- Use camelCase for variables, functions, and properties
- Use PascalCase for component names and types

### Astro Components

- Use `.astro` extension for components
- Frontmatter imports should be grouped logically
- Use semantic HTML elements
- Right-to-left (RTL) layout for Persian content

### Styling

- Use Tailwind CSS utility classes
- Custom font: "Estedad" (loaded from `/fonts/`)
- Consistent color scheme: primary-700 (#18486e) for primary elements and headings, gray-700 for body text
- Use responsive design with `md:` breakpoints
- Hover states with `transition` class

### Error Handling

- Wrap async operations in try/catch blocks
- Return structured error responses with success/error fields
- Use proper HTTP status codes

### File Structure

- Components in `src/components/` with PascalCase names
- Pages in `src/pages/` following Astro routing
- API routes in `src/pages/api/` with `.ts` extension
- Global styles in `src/styles/global.css`

### Naming Conventions

- Component files: PascalCase (e.g., `Header.astro`)
- API routes: kebab-case (e.g., `send-email.ts`)
- CSS classes: kebab-case in HTML, camelCase in Tailwind utilities</content>
  <parameter name="filePath">AGENTS.md

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Built-in Commands vs Scripts

`vp <name>` runs a built-in command. `vp run <name>` runs a `package.json` script or a `vite.config.ts` task. Scripts cannot overwrite built-ins, so `vp dev` and `vp run dev` may do different things. Check `package.json` and `vite.config.ts` first, and run `vp run <name>` when the project defines a script or task with that name.

## Tool Versions

Run `vp toolchain` to show versions and relationships in the active Vite+
release. Add a tool name to select part of the graph. For example, run
`vp toolchain vite`. Use `--global` to ignore the local `vite-plus` package. Use
`vp why <package>` to show the package-manager dependency graph.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->
