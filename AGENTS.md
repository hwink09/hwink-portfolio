<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guidelines

## 1. Project Overview

- Name: hwink-portfolio
- Type: Personal developer portfolio
- Goal: Showcase technical skills, projects, experience, and professional identity.
- Audience: Recruiters, developers, potential clients, and collaborators.

Build a distinctive, accessible, performant, and maintainable portfolio.

Prefer simplicity, consistency, and quality over unnecessary complexity.

## 2. Technology Stack

### Installed and configured

- Next.js App Router with React and React DOM, React Compiler enabled, and Cache Components disabled.
- TypeScript in strict mode and Tailwind CSS v4.
- shadcn/ui with Radix primitives, class variance utilities, and Lucide React icons.
- next-themes for theme preferences and next-intl for localized routing and messages.
- pnpm, ESLint, Prettier with the Tailwind plugin, Husky, lint-staged, and Commitlint.

Use [README.md](README.md#getting-started) for runtime requirements and Windows PATH guidance. Use `package.json` for direct dependency declarations and the root importer in `pnpm-lock.yaml` for resolved versions. A transitive entry does not establish a direct dependency.

### Approved technical direction awaiting implementation

[DESIGN.md](DESIGN.md) defines the staged work for Neon Pitch tokens in Tailwind and shadcn/ui, responsive layout, localized navigation with next-intl, and an isolated WebGL scene with a static fallback. These plans use the existing stack where possible. Each new library and implementation task needs its own scope approval.

### Future dependency candidates

- Three.js for the initial 3D proof of concept. React Three Fiber and Drei are conditional production candidates.
- Motion for advanced DOM animation. GSAP, Lenis, and postprocessing are deferred candidates.
- Vercel AI SDK for the future assistant, Zod for schema validation, and MDX for content when justified.

### Dependency Rules

- Use pnpm exclusively. Inspect the manifest and lockfile before using a package.
- Prefer existing dependencies and framework-native solutions.
- Explain the need and verify framework compatibility before seeking approval for a dependency addition.
- Keep `pnpm-lock.yaml` synchronized with `package.json` when dependencies change.

## 3. Agent Skills

Project-level skills are located in `.agents/skills/`.

| Skill                       | Responsibility                                    |
| --------------------------- | ------------------------------------------------- |
| frontend-design             | Distinctive visual direction and frontend design  |
| ui-ux-pro-max               | UI/UX research and design recommendations         |
| design-system               | Design tokens and visual consistency              |
| shadcn                      | Component implementation and registry integration |
| vercel-react-best-practices | React and Next.js performance                     |
| impeccable                  | UI/UX auditing and visual refinement              |

### Skill Rules

- Read the relevant SKILL.md before applying a skill.
- Use only skills relevant to the current task.
- Avoid redundant or conflicting skill instructions.
- Treat skills as guidance, not absolute requirements.
- Project requirements take precedence over skill suggestions.
- Do not modify third-party skill files.
- Review external scripts before executing them.
- Do not install additional skills without approval.

### Design Authority

- `AGENTS.md` is the engineering authority for architecture, dependencies, workflow, validation, and Git.
- [DESIGN.md](DESIGN.md) is the visual and experience authority. Read it before implementing or modifying UI.
- Follow the approved HWINK — Beyond the Pitch direction, including its Real Madrid-inspired identity, Neon Pitch palette, and immersive motion. Prioritize accessibility and performance as effects are developed.

## 4. Development Workflow

- **Approved project direction** sets the design and engineering baseline across tasks.
- **Approved task scope** authorizes implementation of the agreed deliverables. Inspect the code and Git status, consult relevant docs and skills, and outline the plan for non-trivial work.
- **Routine implementation decisions** within scope can proceed without repeated approval. Examples include reusing an existing primitive, naming an internal component, and adjusting spacing within the approved layout.
- **Significant changes** require explicit approval when they fall outside the approved task scope. Examples include new dependencies, architectural changes, major layout or semantic palette changes, typography adoption or changes, brand changes, and material deviations from approved interaction behavior.
- Run relevant checks, review the final diff, and report results with a suggested commit. Commit and push each require separate explicit permission.

### General Rules

- Do not implement unrelated features.
- Do not modify unrelated files.
- Do not overwrite existing user changes.
- Avoid unnecessary refactoring and abstractions.
- Do not introduce speculative features.
- Ask for clarification when ambiguity affects implementation.
- Report limitations and blockers honestly.

## 5. Code Standards

### TypeScript

- Use strict TypeScript.
- Avoid `any` unless explicitly justified.
- Prefer type inference where appropriate.
- Use descriptive names.
- Validate untrusted data at application boundaries.
- Avoid unnecessary type assertions.

### React and Next.js

- Prefer Server Components by default.
- Use small Client Component boundaries for interactivity, browser APIs, and isolated WebGL scenes.
- Read the relevant installed Next.js guides in `node_modules/next/dist/docs/` before implementing framework-specific behavior.
- Avoid deprecated APIs and conventions.
- Avoid unnecessary useEffect and derived state.
- Use appropriate loading and error boundaries.
- Keep Cache Components disabled unless approved.
- Preserve React Compiler configuration.
- Prefer framework-native solutions.

### Naming

- Use kebab-case for project files and directories. Follow Next.js conventions for reserved filenames and route segments such as `page.tsx`, `layout.tsx`, `route.ts`, `opengraph-image.tsx`, `proxy.ts`, `[locale]`, and `(group)`.
- React components: PascalCase.
- Functions and variables: camelCase.
- Hooks: useSomething.
- Constants: UPPER_SNAKE_CASE where appropriate.
- Use the configured `@/` import alias.

### Maintainability

- Prefer readable code over clever code.
- Keep components focused and composable.
- Extract reusable logic when justified.
- Avoid premature abstraction.
- Write comments for intent and non-obvious decisions.
- Follow existing ESLint and Prettier conventions.

## 6. Project Structure

Use the following structure as a guideline:

    src/
      app/
      components/
        ui/
        layout/
        shared/
      features/
      config/
      data/
      hooks/
      i18n/
      lib/
      providers/
      types/
    messages/
    content/
    public/

### Structure Rules

- Keep routing and route-specific files in app/.
- Keep UI primitives in components/ui/.
- Keep shared components in components/shared/.
- Colocate feature-specific components and logic.
- Separate configuration from application logic.
- Create directories only when needed.
- Avoid unnecessary architectural layers.
- Do not reorganize the project without approval.

## 7. Design Implementation

Follow [DESIGN.md](DESIGN.md) for composition, visual hierarchy, assets, and interaction. Use approved references as inspiration for original work and explain material design decisions. Apply the approval rules in the development workflow when a change affects the agreed direction.

## 8. Component Strategy

- Prefer existing shadcn/ui components.
- Reuse existing components before creating new ones.
- Explore approved open-source registries for complex UI.
- Verify licenses and framework compatibility.
- Adapt imported components to the project design system.
- Avoid mixing incompatible visual styles.
- Avoid unnecessary component dependencies.
- Use semantic design tokens instead of hardcoded colors.

Potential component sources:

- shadcn/ui
- Magic UI
- Animate UI
- Origin UI
- Cult UI
- Motion Primitives
- AI Elements

These are optional references, not mandatory dependencies.

## 9. Theme

Use the existing next-themes integration for Light, Dark, and System. System is the default preference and follows the OS when active. Use semantic CSS variables, preserve hydration-safe theme controls, and verify contrast in both resolved palettes. [DESIGN.md](DESIGN.md) defines the dark-first art direction.

## 10. Internationalization

Use the existing next-intl routing and navigation helpers for English (`en`) and Vietnamese (`vi`). Organize messages by feature, keep keys aligned, and localize user-facing strings, metadata, dates, and numbers.

- Switch to the equivalent route in the target locale. Preserve supported query parameters and fragments when their target meaning remains valid. Map translated anchors when needed.
- Resolve localized slugs through a shared content identity and the target translation. If a localized page is unavailable, use a relevant localized parent or landing page and communicate the fallback. An invalid locale should follow the existing not-found behavior.
- Treat missing message keys as defects and check parity before release. An intentional fallback must use approved copy from the default locale (`en`) and surface the missing key to developers. Keep raw keys out of the UI.
- For future API endpoints, pass the locale explicitly when the response depends on it. Validate it against the supported locale list at the request boundary and reject invalid values with an appropriate client error.
- Publish locale-specific titles, descriptions, and social metadata. Use the owner-approved production origin through `SITE_URL` for canonical URLs, hreflang, and sitemap entries. Emit language alternates for existing translations and leave production URL metadata unpublished until the origin is confirmed.

### Language Conventions

- Source code: English.
- Identifiers: English.
- Code comments: English.
- Commit messages: English.
- Communication with the project owner: Vietnamese,
  unless requested otherwise.

## 11. Planned Features

Use [DESIGN.md](DESIGN.md) for the initial release priorities, homepage sequence, and future milestones. Implement features incrementally within approved tasks.

### Content Rules

- Never fabricate personal information.
- Never fabricate experience or achievements.
- Never fabricate GitHub statistics.
- Never present placeholder projects as completed work.
- Use verified information provided by the project owner.
- Clearly identify temporary placeholder content.
- Do not expose private personal information.

## 12. AI Integration

The AI assistant should help visitors learn about the
developer's public profile, skills, experience, and projects.

### AI Rules

- Prefer Vercel AI SDK.
- Support streaming responses when appropriate.
- Keep API credentials on the server.
- Ground responses in approved public portfolio content.
- Support Vietnamese and English.
- Validate incoming requests.
- Implement rate limiting and request size limits.
- Handle provider failures gracefully.
- Treat visitor input as untrusted.
- Do not expose secrets or private data.
- Do not add RAG or vector databases without justification.

## 13. Accessibility and Performance

### Accessibility

- Use semantic HTML.
- Support keyboard navigation.
- Provide visible focus states.
- Use accessible labels and meaningful alt text.
- Respect prefers-reduced-motion.
- Aim for WCAG 2.2 AA compliance.

### Performance

- Minimize unnecessary client-side JavaScript.
- Optimize images and fonts.
- Avoid unnecessary network requests and re-renders.
- Prevent layout shifts.
- Lazy-load expensive features where appropriate.
- Avoid unnecessary caching complexity.
- Apply relevant vercel-react-best-practices guidance.

## 14. SEO

- Use the Next.js Metadata API.
- Provide meaningful titles and descriptions.
- Support localized metadata.
- Provide Open Graph metadata.
- Provide sitemap and robots configuration as the release scope calls for them. Follow the production-origin rules in Internationalization.
- Use accurate structured data when appropriate.
- Maintain semantic heading hierarchy.

## 15. Security

- Never expose API keys, credentials, or secrets.
- Never commit private environment files.
- Use server-side environment variables for secrets.
- Maintain a safe .env.example when needed.
- Validate external input.
- Avoid unsafe HTML rendering.
- Review third-party dependencies and scripts.
- Do not weaken security controls to bypass errors.

## 16. Git Workflow

Use a lightweight GitHub Flow suitable for a personal project.

### Branch Strategy

- main: Stable and deployable code.
- feat/\*: Significant new features.
- fix/\*: Bug fixes.
- chore/\*: Configuration and tooling changes.
- refactor/\*: Significant code restructuring.

Small, approved changes may be made directly on main.

### Conventional Commits

Format:

    <type>(<scope>): <description>

The scope is optional.

Allowed types:

- feat
- fix
- docs
- style
- refactor
- perf
- test
- build
- ci
- chore
- revert

Examples:

    chore: configure development tooling
    chore: initialize shadcn/ui
    feat(theme): add theme switching
    feat(i18n): add Vietnamese and English localization
    feat(projects): implement project showcase
    fix(nav): resolve mobile navigation overflow
    docs: update project documentation

### Git Rules

- Write commit messages in English.
- Use concise, imperative descriptions.
- Keep commits focused and atomic.
- Separate unrelated changes.
- Inspect git status and git diff before staging.
- Stage only files relevant to the approved task.
- Avoid blindly using git add .
- Commit dependency lockfiles when dependencies change.
- Commit approved project-level skills and their lockfiles
  when licensing permits.
- Never commit secrets or generated build artifacts.
- Run relevant validation checks before committing.
- Never bypass Git hooks to conceal validation failures.
- Never commit or push without explicit user approval.
- Never force-push or rewrite history without approval.
- Never discard existing user changes.
- Suggest a Conventional Commit message after each task.

## 17. Validation

Use the scripts available in `package.json` and select checks for the affected documentation, routes, components, and features.

| Check               | When and how                                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read-only           | Use `pnpm lint` and `pnpm format:check` as relevant. For a strictly read-only TypeScript check, use `pnpm exec tsc --noEmit --incremental false` when required Next.js types already exist. Review `git diff --check` and Git status. |
| Generates artifacts | `pnpm typecheck` runs Next.js type generation and can write generated types and TypeScript build info. `pnpm build` writes production build artifacts. Use these when artifacts are in scope.                                         |
| Writes source files | `pnpm format` and `pnpm lint:fix` may rewrite files across the project. Target approved files explicitly when the scope is narrower.                                                                                                  |
| Tests               | Run relevant tests when a test script exists.                                                                                                                                                                                         |

For UI and behavior changes, use the affected rows in this validation matrix:

| Feature               | Validation                                                                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Theme                 | Check Light, Dark, and System with both OS schemes. Verify persistence, explicit overrides, hydration, and real component contrast.                                                                 |
| Locale and metadata   | Check Vietnamese and English, translated metadata, narrow layouts, locale-aware links, and switching with valid query parameters, fragments, and localized slugs when present.                      |
| Keyboard and overlays | Verify tab order, visible focus, keyboard activation, Escape and focus restoration where applicable, and focus visibility around sticky UI.                                                         |
| Responsive layout     | Check narrow mobile, tablet, desktop, touch targets, and reflow with zoom. Include longer localized labels.                                                                                         |
| Motion and WebGL      | Test reduced motion, unavailable WebGL, load failure, and context loss. Verify that the static fallback preserves content and actions. Check lifecycle cleanup and offscreen suspension for scenes. |
| Production            | Build when changes affect runtime behavior, routing, rendering, fonts, dependencies, or deployment. Test affected routes and production-specific behavior when applicable.                          |

Fix issues introduced by the task, report unrelated failures and unavailable checks, and record actual results. Avoid suppressing errors to pass validation.

## 18. Definition of Done

A task is complete when:

- Approved requirements are implemented.
- Code follows project conventions.
- No unrelated changes are introduced.
- Relevant validation checks pass or limitations are reported.
- Accessibility, security, and performance are considered.
- Documentation is updated when necessary.
- The final diff has been reviewed.
- A Conventional Commit message is suggested.

## 19. Agent Response Format

After completing an implementation task, provide:

### Summary

Briefly describe the implementation.

### Changed Files

List important files and their purpose.

### Validation

Report executed checks and actual results.

### Notes

Explain decisions, limitations, and remaining issues.

### Suggested Commit

Provide an appropriate Conventional Commit message.

Keep responses concise, actionable, and in Vietnamese
unless requested otherwise.
