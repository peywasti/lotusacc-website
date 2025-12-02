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
- Consistent color scheme: blue-700 primary, gray-900/700 for text
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