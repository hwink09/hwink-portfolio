# HWINK — Beyond the Pitch

## 1. Design Vision

HWINK is a professional developer portfolio combining futuristic technology, gaming culture, creative development, and football. **Beyond the Pitch** draws on Real Madrid, modern stadiums, premium sportswear, and AAA game interfaces. **Code. Play. Conquer.** is the brand slogan.

The approved direction blends Esports, Cinematic, and Futuristic aesthetics with immersive motion. Put real work and professional content first. Use bold typography, purposeful spatial depth, and selective football cues to support the reading experience.

[AGENTS.md](AGENTS.md) governs engineering and approvals. This document governs identity and experience. The brand, creative direction, and initial release priorities are approved. Starting specifications guide the next task and need validation in real components. Candidates and provisional targets guide experiments and do not authorize dependency installation.

## 2. Visual Identity and Theme

Use the HWINK wordmark and original visual assets. Record asset provenance, licenses, and required attribution. Obtain appropriate permission before reproducing protected material such as club crests, jerseys, or game interfaces. Keep the portfolio's independent identity clear and avoid implying an official Real Madrid affiliation.

Use technical grids, pitch markings, and neon lighting selectively. Favor editorial layouts, sharp or minimally rounded shapes, and purposeful depth. Reserve cards for content that needs a distinct container. Keep glow, gradients, particles, and glass effects restrained. Use reference interfaces for inspiration and create an original composition.

Dark-first describes the art direction. The existing next-themes integration defaults to **System**, with explicit **Light** and **Dark** choices. Design each resolved palette independently.

### Neon Pitch primitives

| Primitive      | Value     |
| -------------- | --------- |
| Midnight Pitch | `#080C0A` |
| Stadium Green  | `#101914` |
| Neon Lime      | `#B6FF00` |
| Pitch Green    | `#22C55E` |
| Madrid White   | `#F8F9FC` |
| Champagne Gold | `#C9A86A` |

Neon Lime is the signature accent, Madrid White provides clarity, and Champagne Gold marks restrained premium details. Primitives retain their values across themes. Semantic roles determine which colors work together in the UI. Add component-level tokens only when a real variant needs them.

### Semantic palette for Task 02

This is the approved starting specification from the audit. Map semantic CSS variables to Tailwind and the existing shadcn variants during Task 02, then verify the rendered states in both themes.

| Semantic role                                            | Light                                      | Dark                                   |
| -------------------------------------------------------- | ------------------------------------------ | -------------------------------------- |
| `background` / `foreground`                              | `#F8F9FC` / `#101914`                      | `#080C0A` / `#F8F9FC`                  |
| `surface` / `surface-foreground`                         | `#FFFFFF` / `#101914`                      | `#101914` / `#F8F9FC`                  |
| `surface-elevated` / `surface-elevated-foreground`       | `#FFFFFF` / `#101914`                      | `#17241C` / `#F8F9FC`                  |
| `primary` / `primary-foreground`                         | `#355A08` / `#F8F9FC`                      | `#B6FF00` / `#080C0A`                  |
| `primary-hover` / `primary-foreground`                   | `#284806` / `#F8F9FC`                      | `#A2E500` / `#080C0A`                  |
| `secondary` / `secondary-foreground`                     | `#EBF1ED` / `#101914`                      | `#213127` / `#F8F9FC`                  |
| `accent` / `accent-foreground`                           | `#E8F2D9` / `#355A08`                      | `#2A3826` / `#B6FF00`                  |
| `muted` / `muted-foreground`                             | `#EBF1ED` / `#4C5D51`                      | `#213127` / `#A6B8AB`                  |
| `border` / `input`                                       | `#D3DED6` / `#6D7D72`                      | `#314239` / `#637B6B`                  |
| `ring` / `ring-offset`                                   | `#355A08` / actual adjacent background     | `#B6FF00` / actual adjacent background |
| `link`                                                   | `#355A08`                                  | `#B6FF00`                              |
| `destructive` / `destructive-foreground`                 | `#A32339` / `#FFFFFF`                      | `#FF9AA9` / `#080C0A`                  |
| `success` / `success-foreground`                         | `#17663B` / `#FFFFFF`                      | `#74E7A1` / `#080C0A`                  |
| `warning` / `warning-foreground`                         | `#784A00` / `#FFFFFF`                      | `#F3CA79` / `#080C0A`                  |
| `info` / `info-foreground`                               | `#174E82` / `#FFFFFF`                      | `#9DCBFF` / `#080C0A`                  |
| `brand-lime`, `brand-gold`, `brand-white`, `brand-green` | `#B6FF00`, `#C9A86A`, `#F8F9FC`, `#22C55E` | Same primitive values                  |
| `brand-gold-text`                                        | `#785915`                                  | `#C9A86A`                              |
| `scene-key` / `scene-rim` / `scene-reflection`           | `#FFFFFF` / `#74A52E` / `#C9A86A`          | `#F8F9FC` / `#B6FF00` / `#C9A86A`      |

- Keep the shadcn aliases. Map `card` and `card-foreground` to the surface pair, and `popover` and `popover-foreground` to the elevated pair. Existing roles such as `background`, `primary`, `secondary`, `accent`, `muted`, `destructive`, `border`, `input`, and `ring` follow the corresponding semantic roles.
- Pair fills with their listed foregrounds. Use the Light dark-green primary on light surfaces and Light `brand-gold-text` for gold text. Use raw lime and gold for decoration where the surrounding UI already conveys the meaning. Underline inline links or add an equivalent non-color cue.
- Use `border` for decorative separators and `input` for visible form-control boundaries. Give the focus ring an offset matching the adjacent surface and test both edges. Pair status colors with text or icons so meaning survives without color.
- Aim for WCAG 2.2 AA. Require at least 4.5:1 for normal text and 3:1 for large text and essential non-text control indicators. Check actual adjacent colors and the final composited colors for hover, focus, pressed, alpha-based, and other applicable states.
- Scene values are light colors. Set intensities through rendered studies so text and actions retain contrast over the scene and poster.

## 3. Typography

Use **Geist Sans** for body and UI, and **Geist Mono** for code and technical metadata. **Barlow Condensed 700** is the preferred display candidate for editorial H1 and H2. **Oswald** is the fallback candidate. Final adoption requires owner approval after a Vietnamese and English specimen, license and redistribution verification, and rendering tests in the actual layout.

| Role               | Starting size | Line height | Weight  |
| ------------------ | ------------- | ----------- | ------- |
| Display H1         | 48–96px       | 1.02–1.12   | 700     |
| Editorial H2       | 32–56px       | 1.1–1.2     | 700     |
| H3                 | 20–28px       | 1.25        | 600     |
| Body               | 16–18px       | 1.55–1.65   | 400     |
| UI                 | 14–16px       | 1.4         | 500–600 |
| Technical metadata | 12–14px       | 1.5         | 400–500 |

Use display tracking between `-0.02em` and `0`. Reserve uppercase for short labels and keep Geist for compact controls and overlays. Check accented glyphs such as Ắ, Ề, Ễ, Ộ, Ự, Đ, ễ, and ộ. Allow wraps and increase line height where Vietnamese diacritics need room. Verify subset loading and fallback rendering on both locales before choosing the font loading strategy.

## 4. Layout and Composition

| Viewport width       | Columns | Starting gutter |
| -------------------- | ------- | --------------- |
| Below 48rem          | 4       | 16px            |
| 48rem to below 64rem | 8       | 24px            |
| 64rem and above      | 12      | 32px            |

Keep the Tailwind breakpoint scale at 40/48/64/80/96rem. Use an 80rem shell, a 96rem wide visual container, and approximately 65–72ch for prose. Let cinematic backgrounds bleed where appropriate. Start with spacing of 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128px, and radii of 0, 4, 6, 8, and 12px.

Compose editorials with intentional asymmetry, varied image sizes, and controlled whitespace. A desktop hero can pair introduction and actions with a larger visual. On mobile, stack the heading, copy, and actions before the poster. Keep DOM and keyboard order aligned with the reading order at every breakpoint. Keep essential content available on small screens, allow Vietnamese labels to wrap, and check reflow at 320px and zoom at 200%. Aim for 44 × 44px touch targets for primary controls and meet WCAG 2.2 AA target sizing where applicable.

## 5. Information Architecture

Prioritize **Home / Trang chủ**, **About / Giới thiệu**, **Projects / Dự án**, and **Contact / Liên hệ** for the first usable release. Use intuitive localized navigation and heading labels. Football names can accompany direct headings such as Featured Projects / Dự án nổi bật. Include only working destinations with approved public content.

### Homepage sequence

1. **Kickoff** — Immersive hero, role, and primary actions.
2. **Player Profile** — Verified personal introduction.
3. **Selected Matches** — Featured projects with role, context, and evidence.
4. **The Lineup** — Technical skills with a readable list.
5. **Career Journey** — Verified experience and education.
6. **Activity Heatmap** — GitHub activity with verified data, date range, and an unavailable state.
7. **Developer Playbook** — Published writing.
8. **Training Ground** — Creative demos with a poster and description.
9. **Let's Team Up** — Approved public contact channels.

Omit unavailable sections while preserving the order of those published. Keep detailed case studies, Blog, Lab, Resume, GitHub Activity, Command Palette, and AI Assistant on the roadmap. Each advanced feature needs approved content or data, a usable entry point, and its own acceptance criteria before exposure. Apply the content verification rules in [AGENTS.md](AGENTS.md).

## 6. Immersive Hero and 3D

### Art direction

Stage a cinematic, original football in white or metallic white with champagne-gold details, neon-green lighting, and purposeful spatial depth. Use stadium tunnels, floodlights, and tactical markings for atmosphere. Explore restrained wireframe details, finite rotation, pointer-responsive movement, and scroll-driven transformations. Prototype, measure, and adapt signature effects to fit the device and preserve a compelling composition.

### Prototype and production decisions

- **Proof of concept.** Start with a static poster baseline and evaluate a procedural football with Three.js as the initial candidate. Compare desktop and mobile costs. Test route cleanup, offscreen suspension, reduced motion, unsupported WebGL, loading errors, and context loss.
- **Production renderer.** React Three Fiber is the preferred production candidate if compatibility, maintainability, scene composition, and PoC measurements support it. The prototype leaves the renderer choice open. Evaluate Drei for specific helpers and original GLB/glTF assets or a hybrid procedural and authored scene if they improve quality within measured budgets.
- **Progressive enhancement.** Render the heading, actions, and aspect-ratio-reserved poster with the page. Keep the WebGL scene in a lazy client boundary and enable it after capability, preference, and visibility checks. Keep the poster for reduced motion, unsupported WebGL, load failure, and context loss. Evaluate poster-first or opt-in 3D on mobile using the PoC results. Make the mobile poster visually complete and keep essential interactions available in the DOM.

### Rendering and measurement

Start with adaptive quality tiers. Use a static tier, a low-cost tier with capped pixel ratio and simpler assets, and a standard tier that scales against measured frame time. Render on demand where possible, suspend rendering offscreen or in hidden tabs, and release listeners, frame loops, geometry, materials, textures, and renderer resources on unmount. Restore the poster on context loss and test the recovery path.

Measure a production poster baseline against the interactive scene on desktop and real mobile devices, including iOS Safari and Android. Compare cold-cache transfer, LCP, main-thread work, frame time, and layout shift. Track lab results separately from field data.

| Provisional measurement target                                 | Starting budget               |
| -------------------------------------------------------------- | ----------------------------- |
| Mobile poster                                                  | Approximately 150 KiB or less |
| Model asset, if used                                           | Approximately 350 KiB or less |
| Incremental compressed scene transfer, including JS and assets | Approximately 600 KiB or less |

Adjust these experimental targets based on visual quality and measurements. Preserve field Core Web Vitals targets at p75: **LCP ≤ 2.5s**, **INP ≤ 200ms**, and **CLS ≤ 0.1**.

## 7. Motion and Interaction

Use CSS for simple transitions and micro-interactions and Three.js for scene-specific motion. Evaluate Motion when advanced DOM orchestration has a measured need. Defer GSAP, Lenis, and postprocessing until justified. Give each effect a single owner and keep native scrolling.

Use roughly 120–180ms for control feedback, 200–300ms for state changes, and 400–600ms for selective reveals. Use visible content as the baseline, with decoration entering around it. Limit simultaneous effects and use easing that suits the transition. Keep pointer tilt bounded and omit it for coarse pointers. Bind scroll transformations to the visible hero range and keep layout stable. Respect `prefers-reduced-motion` with a static hero, immediate states where appropriate, and preserved feedback. Avoid autoplay audio, flashing, and artificial loading delays.

## 8. Components and Accessibility

- Build on existing shadcn/ui primitives. Give actions visible focus, purposeful hover feedback, and clear active states. Keep locale and theme controls available in responsive navigation and return focus when a menu closes.
- Lead project previews with meaningful imagery, verified roles, relevant technologies, and case study links when published. Keep actions available on touch and keyboard without relying on hover.
- Explore a player-card-inspired profile and a tactical formation for skills. Use verified content and provide the same information in readable DOM text.
- Target WCAG 2.2 AA. Check semantic headings and landmarks, labeled controls, useful alternatives to visuals, focus visibility, and keyboard operation. Verify the experience in both locales and all theme modes, including with motion reduced and WebGL unavailable. Use the feature-specific checks in [AGENTS.md](AGENTS.md).

## 9. Phase 2 Roadmap

Define acceptance criteria and validation for each task before implementation. Use the outcomes below as the starting checkpoints.

| Task                                             | Acceptance and validation                                                                                                               |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 01A. Documentation corrections                   | Review the two-document diff, verify the exact Next.js block, and run formatting and Git checks.                                        |
| 02. Design tokens and typography                 | Validate real component states in both palettes and all theme modes. Review bilingual display specimens, licensing, and font rendering. |
| 03. Responsive layout primitives                 | Verify the 4/8/12 grid, DOM order, prose widths, and reflow through real usage.                                                         |
| 04. Localized navigation and footer              | Verify live destinations, keyboard and touch behavior, theme controls, and language switching with applicable URL state.                |
| 05. Interactive football proof of concept        | Compare poster and procedural scene on desktop and mobile. Verify fallback, scene lifecycle, and context loss.                          |
| 06. Production immersive hero                    | Confirm readable content and actions with a static poster, matching layout, accessible motion, and measured transfer and runtime costs. |
| 07. Homepage content sections                    | Verify approved copy, assets, and destinations in the specified order across both locales.                                              |
| 08. Responsive refinement                        | Test narrow screens, tablet, desktop, zoom, touch, and Vietnamese text expansion across themes.                                         |
| 09. Advanced motion integration                  | Verify reduced-motion behavior and compare traces before and after adding effects.                                                      |
| 10. Accessibility, performance, and design audit | Run production checks and evaluate keyboard flows, fallbacks, responsive themes and locales, performance, and visual consistency.       |

Schedule advanced features as separate future milestones. Confirm the final display font, component palette validation, detailed production scene and asset choices, mobile 3D behavior, approved public content, and production origin in the tasks that depend on them.
