# Contributing to Sable Africa

## Workflow

1. **Branches**: Create feature branches from `main`. Use prefixes: `feat/`, `fix/`, `docs/`, `refactor/`.
2. **Commits**: Use conventional commits format: `feat: add theme system` / `fix: correct light mode contrast` / `docs: update README`
3. **Pull Requests**: Open PRs to `main`. Include screenshots for visual changes.
4. **Code Review**: At least one approval required before merging.

## Development

```bash
bun install        # Install dependencies
bun run dev        # Start dev server with HMR
bun run build      # Production build
bun run publish    # Build + deploy to port 3000
```

## Code Style

- **TypeScript**: Strict mode enabled. No `any` unless absolutely necessary.
- **React**: Functional components with hooks. Avoid class components.
- **Styling**: Tailwind CSS v4 with custom design tokens. No CSS-in-JS.
- **Animations**: CSS transitions and Intersection Observer only. No animation libraries.
- **Imports**: Use `~/*` path alias (maps to `src/*`).

## Design Guidelines

### Colours
Use theme tokens: `text-sable-black`, `bg-warm-ivory`, `text-muted-gold`, etc.
Always provide dark variants: `text-sable-black dark:text-warm-ivory`.

### Dark/Light Mode
Every new component must handle both modes. Use `dark:` prefix variants.
Test with all three theme settings: light, dark, system.

### Performance
- No heavy animation libraries (no Framer Motion, GSAP, etc.)
- CSS-drawn decorative elements over images where possible
- Keep bundle size under 400KB gzipped for initial load
- Use code-splitting for article route pages

### New Sections
Add sections to `src/components/` and import into `src/routes/index.tsx`.
Use the `.reveal` class for scroll-triggered animations.

### New Article Routes
1. Create a route file in `src/routes/brief/`, `src/routes/investigations/`, or `src/routes/weekend/`
2. Use the `ArticleLayout` component for consistent styling
3. Add the article to the relevant section component's data array
4. Run `bun run publish` to deploy

## Questions?

Contact the team lead or open a GitHub issue.