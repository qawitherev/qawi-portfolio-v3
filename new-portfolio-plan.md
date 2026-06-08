# New Portfolio Plan — v4

## Design System: Apple-inspired (based on DESIGN-apple.md)

- Single accent: Action Blue `#0066cc`
- Alternating light/dark full-bleed sections
- SF Pro Display/Text typography (Inter as fallback)
- No gradients, no decorative shadows
- Pill CTAs, zero-radius tiles

---

## Sections (brainstorming — in progress)

### 1. Hero / Summary

**Component:** `hero-tile-dark` — a full-bleed dark opening tile. Bold headline, a single clarifying paragraph, and one blue pill CTA. No photography needed; the typography carries it.

```yaml
hero-tile-dark:
  surface: "{colors.surface-tile-1}"        # #272729 — near-black
  textColor: "{colors.on-dark}"              # #ffffff
  rounded: "{rounded.none}"                  # 0px — edge-to-edge
  padding: "{spacing.section}"               # 80px vertical
  maxWidth: 980px                            # text-constrained, not full-bleed content
  alignment: center                          # stacked, centered

  content:
    headline:
      token: "{typography.hero-display}"     # 56px / 600 / 1.07 / -0.28px
      text: "I Build Software That Ships"

    tagline:
      token: "{typography.lead}"             # 28px / 400 / 1.14 / 0.196px
      text: "Backend, infrastructure, CI/CD — I handle everything between idea and production."
      marginTop: "{spacing.lg}"              # 24px below headline

    summary:
      token: "{typography.body}"             # 17px / 400 / 1.47 / -0.374px
      marginTop: "{spacing.xl}"              # 32px below tagline
      blocks:
        - label: "What I do"
          text: "Web development (backend-focused), CI/CD pipelines, cloud infrastructure, and a bit of everything. I'm a generalist who ships."
        - label: "What I don't do"
          text: "UI/UX design, system analysis, formal testing. I just like to build."

    cta:
      component: "{component.button-primary}"  # Action Blue pill
      text: "Let's Talk"
      href: "mailto:qawitherev@gmail.com"          # TBC — most work is NDA-bound
      marginTop: "{spacing.xl}"                # 32px above CTA

  states:
    default:  no shadow, no border — surface color is the only container
    ctaHover: "{component.button-primary-focus}" — 2px solid #0071e3 outline
    ctaPress: transform scale(0.95)
```

**Layout breakdown (top → bottom):**
```
┌──────────────────────────────────────────────────┐
│                 #272729 full-bleed                │
│                                                  │
│              I Build Software That Ships          │  ← 56px, weight 600, -0.28px tracking
│                                                  │
│     Backend, infrastructure, CI/CD — I handle    │  ← 28px, weight 400
│     everything between idea and production.      │
│                                                  │
│     What I do         What I don't do            │  ← 17px body, two columns on desktop
│     Web dev, CI/CD,   UI/UX design, system       │     stacked on mobile
│     infra, generalist analysis, testing.         │
│     who ships.        I just like to build.      │
│                                                  │
│               ( Let's Talk )                     │  ← Action Blue pill CTA
│                                                  │
└──────────────────────────────────────────────────┘
```

**Mobile adjustments (≤ 640px):**
- `headline`: drops to 34px (`display-md` sizing)
- `tagline`: drops to 21px (`tagline` sizing)
- `summary`: two-column "What I do / What I don't do" stacks to single column
- `padding`: tightens from 80px → 48px

### 2. Tech Stacks

**Section:** `product-tile-parchment` — light tile following the dark hero, maintaining the alternating rhythm. Three utility cards in a row, each covering one domain.

```yaml
tech-stacks-section:
  surface: "{colors.canvas-parchment}"       # #f5f5f7 — light, contrasts the dark hero
  textColor: "{colors.ink}"                  # #1d1d1f
  rounded: "{rounded.none}"                  # 0px — full-bleed
  padding: "{spacing.section}"               # 80px vertical
  maxWidth: 980px                            # constrained — card grid, not product imagery
  alignment: center

  heading:
    token: "{typography.display-md}"          # 34px / 600 / 1.47 / -0.374px
    text: "What I Work With"
    marginBottom: "{spacing.xxl}"            # 48px below heading

  grid:
    columns: 3                               # desktop
    gap: "{spacing.lg}"                      # 24px gutters
    card:
      component: "{component.store-utility-card}"
      # background: #ffffff, border: 1px solid #e0e0e0, rounded: 18px, padding: 24px
      alignment: left                        # card content is left-aligned, not centered
      minHeight: 220px                       # uniform height across the row

      content:
        categoryLabel:
          token: "{typography.caption-strong}" # 14px / 600 / 1.29 / -0.224px
          color: "{colors.ink-muted-48}"       # #7a7a7a — muted, lets the tools speak

        tools:
          token: "{typography.body-strong}"    # 17px / 600 / 1.24 / -0.374px
          color: "{colors.ink}"               # #1d1d1f
          marginTop: "{spacing.sm}"            # 12px below category label
          layout: stacked                      # one tool per line

  cards:
    - category: "Backend"
      tools:
        - ".NET"
        - "C#"
        - "OutSystems Developer Cloud"

    - category: "Infrastructure"
      tools:
        - "Docker"
        - "Terraform"
        - "AWS"

    - category: "CI/CD"
      tools:
        - "GitHub Actions"
```

**Layout breakdown (top → bottom):**
```
┌──────────────────────────────────────────────────────────────┐
│                    #f5f5f7 full-bleed                        │
│                                                              │
│                   What I Work With                           │  ← 34px, weight 600
│                                                              │
│   ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   │ BACKEND         │ │ INFRASTRUCTURE  │ │ CI/CD           │  ← 14px muted labels
│   │                 │ │                 │ │                 │
│   │ .NET            │ │ Docker          │ │ GitHub Actions  │  ← 17px, weight 600
│   │ C#              │ │ Terraform       │ │                 │
│   │ OutSystems      │ │ AWS             │ │                 │
│   │ Developer Cloud │ │                 │ │                 │
│   └─────────────────┘ └─────────────────┘ └─────────────────┘
│    ↑ 18px radius        ↑ 1px #e0e0e0        ↑ white #ffffff
│      hairline border      background           24px padding
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Mobile adjustments (≤ 640px):**
- `heading`: drops to 28px
- `grid`: stacks to single column — cards run full-width, stacked vertically
- `gap`: 16px between stacked cards
- `padding`: tightens from 80px → 48px

**Hover (desktop only):**
- Card border shifts from `hairline` (#e0e0e0) to a slightly darker tint — subtle, not a shadow

### 3. Experience

**Section:** `product-tile-dark` — dark tile resuming the alternating rhythm after parchment. Grid of company logos with names. Placeholder images for now — logos to be supplied.

```yaml
experience-section:
  surface: "{colors.surface-tile-1}"         # #272729 — near-black
  textColor: "{colors.on-dark}"              # #ffffff
  rounded: "{rounded.none}"                  # 0px — full-bleed
  padding: "{spacing.section}"               # 80px vertical
  maxWidth: 980px
  alignment: center

  heading:
    token: "{typography.display-md}"          # 34px / 600 / 1.47 / -0.374px
    text: "Where I've Worked"
    marginBottom: "{spacing.xxl}"            # 48px

  grid:
    columns: 5                                # desktop
    gap: "{spacing.xl}"                      # 32px
    minColumnWidth: 140px                    # collapse columns below this

    company:
      layout: stacked                          # logo on top, name below
      alignment: center
      logoPlaceholder:
        width: 80px
        height: 80px
        rounded: "{rounded.lg}"              # 18px
        background: "{colors.surface-tile-2}" # #2a2a2c — micro-step lighter
        border: 1px solid rgba(255, 255, 255, 0.08)
      name:
        token: "{typography.caption}"         # 14px / 400 / 1.43 / -0.224px
        color: "{colors.body-muted}"          # #cccccc — muted on dark
        marginTop: "{spacing.sm}"             # 12px

  companies:
    - name: "PETRONAS"
    - name: "Bank Syariah Indonesia"
    - name: "DIALOG"
    - name: "FPT Software"
    - name: "AvePoint Inc"
```

**Layout breakdown:**
```
┌──────────────────────────────────────────────────────────────┐
│                    #272729 full-bleed                         │
│                                                              │
│                   Where I've Worked                          │  ← 34px, weight 600
│                                                              │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   │          │  │          │  │          │  │          │  │          │
│   │   img    │  │   img    │  │   img    │  │   img    │  │   img    │  ← 80×80
│   │   placeholder  placeholder  placeholder  placeholder  placeholder
│   │          │  │          │  │          │  │          │  │          │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
│    PETRONAS      BSI          DIALOG       FPT Software   AvePoint Inc
│                                              (ex company)   (current)
└──────────────────────────────────────────────────────────────┘
```

**Mobile adjustments (≤ 640px):**
- `heading`: drops to 28px
- `grid`: 2 columns → drops to 1 column at very narrow (≤ 380px)
- `logoPlaceholder`: scales to 64×64px
- `gap`: 24px between items
- `padding`: tightens from 80px → 48px

---

## Decision Log

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | Full rewrite — discard v3 entirely | Clean slate, Apple design language throughout |

