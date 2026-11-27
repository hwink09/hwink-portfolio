<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## 1. Project Overview

- Project name: hwink-portfolio
- Project type: Personal developer portfolio
- Purpose: Showcase technical skills, projects, experience,
  and professional identity.
- Target audience: Recruiters, developers, potential clients,
  and collaborators.

Build a distinctive, accessible, maintainable, and
production-ready portfolio.

Prioritize quality over quantity and simplicity over
unnecessary complexity.

## 2. Technology Stack

### Core

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- pnpm

### Planned Libraries

- shadcn/ui
- next-themes
- next-intl
- Motion
- Lucide React
- Vercel AI SDK
- Zod
- MDX

### Development Tools

- ESLint
- Prettier
- Husky
- lint-staged
- Commitlint

Inspect package.json before using any library.

Do not assume that planned dependencies are already installed.
Do not install new dependencies without explaining their purpose
and obtaining approval.

## 3. Agent Skills

Project-level skills are located in `.agents/skills/`.

Use the appropriate skill for each task:

| Skill                       | Responsibility                                    |
| --------------------------- | ------------------------------------------------- |
| frontend-design             | Visual direction and distinctive frontend design  |
| ui-ux-pro-max               | UI/UX research and design recommendations         |
| design-system               | Design tokens and component consistency           |
| shadcn                      | Component implementation and registry integration |
| vercel-react-best-practices | React and Next.js performance                     |
| impeccable                  | Visual review and design refinement               |

### Skill Usage Rules

- Read the relevant SKILL.md before applying a skill.
- Select skills based on the current task.
- Do not invoke every skill for every task.
- Avoid conflicting or redundant skill instructions.
- Project requirements take precedence over optional
  stylistic suggestions from skills.
- Review third-party scripts before executing them.
- Do not install additional skills without approval.

## 4. Development Workflow

Follow this workflow for non-trivial tasks:

1. Understand the requirements.
2. Inspect the existing codebase.
3. Read relevant documentation and Agent Skills.
4. Identify affected files and dependencies.
5. Propose an implementation plan.
6. Obtain approval for significant changes.
7. Implement the smallest complete solution.
8. Validate the implementation.
9. Review the final diff.
10. Suggest a Conventional Commit message.

### General Rules

- Do not implement unrelated features.
- Do not modify unrelated files.
- Do not perform unnecessary refactoring.
- Do not overwrite existing user changes.
- Do not introduce speculative abstractions.
- Ask for clarification when requirements are ambiguous.
- Explain important technical decisions.
- Report blockers and incomplete work honestly.

## 5. Code Standards

### TypeScript

- Use strict TypeScript.
- Avoid `any` unless explicitly justified.
- Prefer type inference when appropriate.
- Use meaningful and descriptive names.
- Use `unknown` for untrusted values.
- Validate external data at application boundaries.

### React and Next.js

- Prefer Server Components by default.
- Use Client Components only when required.
- Keep client-side boundaries as small as practical.
- Follow the current Next.js documentation.
- Avoid deprecated APIs and patterns.
- Avoid unnecessary useEffect and derived state.
- Use appropriate loading and error boundaries.
- Prefer framework-native features over extra dependencies.
- Keep Cache Components disabled unless explicitly approved.

### Styling

- Use Tailwind CSS and semantic design tokens.
- Prefer existing shadcn/ui components.
- Avoid unnecessary custom CSS.
- Avoid duplicated styling patterns.
- Do not hardcode theme-dependent colors.
- Keep component variants consistent.

### Naming Conventions

- Files and directories: kebab-case.
- React components: PascalCase.
- Functions and variables: camelCase.
- Hooks: useSomething.
- Constants: UPPER_SNAKE_CASE when appropriate.
- Prefer the configured `@/` import alias.

## 6. Project Structure

Prefer a feature-oriented structure with clear boundaries.

Suggested structure:

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
- Keep reusable UI primitives in components/ui/.
- Keep shared components in components/shared/.
- Keep feature-specific logic within its feature.
- Keep configuration separate from business logic.
- Create directories only when they are needed.
- Avoid empty folders and unnecessary abstraction layers.
- Do not reorganize the entire project without approval.

## 7. Design Principles

The portfolio must have a distinctive visual identity.

### Design Direction

- Professional developer-oriented aesthetic.
- Intentional typography and visual hierarchy.
- Consistent spacing and alignment.
- Thoughtful use of whitespace.
- Subtle and purposeful animations.
- Responsive and accessible interfaces.
- Consistent light and dark themes.

The final visual direction, typography, color palette,
and layout must be approved before major UI implementation.

### Anti AI-Slop Rules

- Avoid generic AI-generated layouts.
- Avoid excessive gradients and glowing effects.
- Avoid excessive glassmorphism.
- Avoid wrapping every section in a card.
- Avoid unnecessary badges, icons, and decorations.
- Avoid repetitive layouts without visual purpose.
- Avoid meaningless animations.
- Avoid generic marketing copy.
- Do not sacrifice usability for visual effects.

### Design References

- Use approved references as inspiration.
- Do not directly clone another developer's portfolio.
- Do not invent design requirements.
- Explain the purpose of major design decisions.

## 8. Component Strategy

- Prefer existing shadcn/ui components.
- Search approved open-source registries before creating
  complex UI components from scratch.
- Verify component compatibility and licensing.
- Adapt imported components to the project design system.
- Avoid mixing incompatible visual styles.
- Avoid duplicate components with similar responsibilities.
- Do not install an entire component library for one component.
- Keep components composable and maintainable.

Potential component sources:

- shadcn/ui
- Magic UI
- Animate UI
- Origin UI
- Cult UI
- Motion Primitives
- AI Elements

These are reference sources, not mandatory dependencies.

## 9. Theme

Support the following theme modes:

- Light
- Dark
- System

### Theme Rules

- Use next-themes when implemented.
- Use semantic CSS variables and design tokens.
- Avoid hardcoded light-only or dark-only colors.
- Prevent theme-related hydration mismatches.
- Ensure sufficient contrast in both themes.
- Test every major component in both light and dark mode.

## 10. Internationalization

Support:

- Vietnamese (vi)
- English (en)

### Localization Rules

- Use next-intl when implemented.
- Keep translation messages organized by feature.
- Avoid hardcoded user-facing strings.
- Keep translation keys consistent between locales.
- Localize metadata where appropriate.
- Preserve the current route when switching languages.
- Use locale-aware date and number formatting.
- Test layouts with both languages.

Source code, identifiers, comments, and commit messages
should use English.

Communicate with the project owner in Vietnamese
unless requested otherwise.

## 11. Content and Features

Planned portfolio features:

- Home and personal introduction.
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

### Content Rules

- Never fabricate personal information.
- Never fabricate work experience or achievements.
- Never fabricate GitHub statistics.
- Never present placeholder projects as completed work.
- Use verified content provided by the project owner.
- Clearly identify temporary placeholder content.
- Do not expose private personal information.

Implement features incrementally based on approved tasks.

## 12. AI Integration

The AI assistant should help visitors learn about the
developer's public profile, skills, experience, and projects.

### AI Rules

- Prefer Vercel AI SDK.
- Support streaming responses when appropriate.
- Keep model credentials on the server.
- Ground responses in approved portfolio content.
- Do not invent personal information.
- Support Vietnamese and English.
- Validate incoming requests.
- Implement rate limiting and request size limits.
- Handle API failures gracefully.
- Treat visitor input as untrusted.
- Do not expose system prompts or private data.
- Do not add RAG or vector databases unless justified.

## 13. Accessibility and Performance

### Accessibility

- Use semantic HTML.
- Support keyboard navigation.
- Provide visible focus states.
- Use accessible labels.
- Provide meaningful image alt text.
- Respect prefers-reduced-motion.
- Aim for WCAG 2.2 AA compliance.

### Performance

- Minimize unnecessary client-side JavaScript.
- Optimize images and fonts.
- Avoid unnecessary network requests.
- Avoid unnecessary re-renders.
- Prevent layout shifts.
- Lazy-load expensive features when appropriate.
- Do not introduce caching complexity without a clear need.

## 14. SEO

- Use the Next.js Metadata API.
- Provide meaningful page titles and descriptions.
- Support localized metadata.
- Configure canonical URLs and hreflang when applicable.
- Provide Open Graph metadata.
- Provide sitemap.xml and robots.txt.
- Use structured data only when accurate.
- Maintain semantic heading hierarchy.

## 15. Security

- Never expose secrets or API keys.
- Never commit private environment files.
- Use environment variables for sensitive configuration.
- Maintain a safe .env.example when required.
- Validate external input.
- Sanitize untrusted content when necessary.
- Avoid unsafe HTML rendering.
- Review third-party dependencies before installation.
- Do not execute untrusted scripts blindly.
- Do not weaken security controls to bypass errors.

## 16. Git Workflow

Use a simple GitHub Flow suitable for a personal project.

### Branches

- main: Stable and deployable code.
- feat/\*: Significant new features.
- fix/\*: Bug fixes.
- chore/\*: Significant configuration changes.
- refactor/\*: Significant code restructuring.

Small, approved changes may be committed directly to main.

### Conventional Commits

Use the following format:

    <type>(<scope>): <description>

The scope is optional.

Allowed commit types:

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

    chore: initialize project configuration
    chore: add project-level agent skills
    chore: configure prettier and commitlint
    feat(theme): add light and dark mode
    feat(i18n): add Vietnamese and English localization
    feat(projects): implement project showcase
    fix(nav): resolve mobile navigation overflow
    refactor(ui): simplify shared components
    docs: update project documentation

### Commit Rules

- Write commit messages in English.
- Use concise, imperative descriptions.
- Keep commits small, focused, and atomic.
- Separate unrelated changes into different commits.
- Inspect git status and git diff before staging.
- Stage only files related to the current task.
- Avoid blindly using git add .
- Do not commit secrets or generated build artifacts.
- Commit dependency lockfiles when dependencies change.
- Commit approved project-level Agent Skills and their
  lockfiles when applicable.
- Run relevant checks before committing.
- Do not bypass Git hooks to hide validation failures.
- Never commit or push without explicit user approval.
- Never force-push or rewrite Git history without approval.
- Never discard existing user changes.
- Suggest a commit message after completing each task.

## 17. Quality Checks

Run relevant checks using the scripts available in package.json.

Expected checks:

    pnpm lint
    pnpm typecheck
    pnpm format:check
    pnpm test
    pnpm build

Do not assume every script already exists.

### Validation Rules

- Fix issues introduced by the current task.
- Do not suppress errors merely to pass checks.
- Test affected routes and components.
- Test responsive layouts when changing UI.
- Test both themes when changing styling.
- Test both locales when changing user-facing content.
- Report checks that could not be executed.
- Do not claim that a check passed without running it.

## 18. Definition of Done

A task is complete when:

- Approved requirements are implemented.
- Code follows project conventions.
- No unrelated changes are introduced.
- Relevant validation checks pass.
- Responsive behavior is verified when applicable.
- Theme and localization support remain consistent.
- Security and accessibility concerns are addressed.
- Documentation is updated when necessary.
- The final diff has been reviewed.
- A Conventional Commit message is suggested.

## 19. Agent Response Format

After completing an implementation task, provide:

### Summary

Briefly describe what was implemented.

### Changed Files

List important files and their purpose.

### Validation

Report executed checks and actual results.

### Notes

Explain important decisions, limitations, or remaining issues.

### Suggested Commit

Provide one appropriate Conventional Commit message,
or multiple messages if changes should be committed separately.

Keep responses concise, actionable, and in Vietnamese
unless requested otherwise.
