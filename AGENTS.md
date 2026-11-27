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

### Core

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- pnpm

### Planned Libraries

- shadcn/ui — UI components
- next-themes — theme management
- next-intl — internationalization
- Motion — animations
- Lucide React — icons
- Vercel AI SDK — AI assistant
- Zod — schema validation
- MDX — content management

### Development Tools

- ESLint
- Prettier
- prettier-plugin-tailwindcss
- Husky
- lint-staged
- Commitlint

### Dependency Rules

- Use pnpm exclusively.
- Inspect package.json before using a dependency.
- Do not assume planned libraries are installed.
- Prefer existing dependencies and framework-native solutions.
- Explain and obtain approval before adding dependencies.
- Verify compatibility with the installed framework versions.
- Keep pnpm-lock.yaml synchronized with package.json.

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

## 4. Development Workflow

For non-trivial tasks:

1. Understand the requirements.
2. Inspect the existing codebase and Git status.
3. Read relevant documentation and skills.
4. Propose an implementation plan.
5. Wait for approval before significant changes.
6. Implement the approved scope.
7. Run relevant validation checks.
8. Review the final diff.
9. Report results and suggest a commit message.

For small, explicitly requested changes, proceed directly when safe.

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
- Use Client Components only when necessary.
- Keep client-side boundaries small.
- Follow documentation for the installed Next.js version.
- Avoid deprecated APIs and conventions.
- Avoid unnecessary useEffect and derived state.
- Use appropriate loading and error boundaries.
- Keep Cache Components disabled unless approved.
- Preserve React Compiler configuration.
- Prefer framework-native solutions.

### Naming

- Files and directories: kebab-case.
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

## 7. Design Principles

### Visual Direction

- Distinctive and professional developer aesthetic.
- Intentional typography and visual hierarchy.
- Consistent spacing and alignment.
- Thoughtful use of whitespace.
- Subtle, purposeful animations.
- Responsive and accessible layouts.
- Consistent light and dark themes.

The final visual direction, typography, color palette,
and layout must be approved before major UI implementation.

### Anti AI-Slop

- Avoid generic AI-generated aesthetics.
- Avoid excessive gradients and glowing effects.
- Avoid excessive glassmorphism.
- Avoid unnecessary rounded containers.
- Do not wrap every section in a card.
- Avoid repetitive layouts without visual purpose.
- Avoid meaningless animations and decorations.
- Avoid generic marketing copy.
- Do not sacrifice usability for visual effects.

### Design References

- Use approved references as inspiration.
- Do not directly clone other portfolios.
- Do not invent visual requirements.
- Explain important design decisions.

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

Support:

- Light
- Dark
- System

### Theme Rules

- Use next-themes when implemented.
- Use semantic CSS variables and design tokens.
- Avoid hardcoded theme-dependent colors.
- Prevent theme-related hydration mismatches.
- Ensure sufficient contrast in both themes.
- Test major UI changes in both themes.

## 10. Internationalization

Support:

- Vietnamese (vi)
- English (en)

### Localization Rules

- Use next-intl when implemented.
- Organize translation messages by feature.
- Avoid hardcoded user-facing strings.
- Keep translation keys consistent across locales.
- Preserve the current route when switching languages.
- Localize metadata, dates, and numbers where appropriate.
- Test layouts with both languages.

### Language Conventions

- Source code: English.
- Identifiers: English.
- Code comments: English.
- Commit messages: English.
- Communication with the project owner: Vietnamese,
  unless requested otherwise.

## 11. Planned Features

- Personal introduction.
- About, education, and experience.
- Technical skills.
- Featured projects.
- Detailed project case studies.
- Resume download.
- Blog and developer notes.
- GitHub activity.
- Contact.
- Command palette.
- AI personal assistant.

Implement features incrementally based on approved tasks.

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
- Configure canonical URLs and hreflang where applicable.
- Provide Open Graph metadata.
- Provide sitemap and robots configuration.
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

Use scripts available in package.json.

Expected commands:

    pnpm lint
    pnpm typecheck
    pnpm format:check
    pnpm test
    pnpm build

Not all scripts may exist during early development.

### Validation Rules

- Run checks relevant to the current changes.
- Fix errors introduced by the current task.
- Do not suppress errors merely to pass validation.
- Test affected routes and components.
- Test responsive layouts for UI changes.
- Test both themes and locales when applicable.
- Report checks that could not be executed.
- Never claim a check passed without running it.

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
