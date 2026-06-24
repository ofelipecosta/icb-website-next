/**
 * Design Tokens — Referência única para design system do ICB
 * Mantido em sincronia com tailwind.config.ts
 */

export const colors = {
  navy: {
    primary: '#0a2342',
    deep: '#06192e',
    soft: '#103a5e',
  },
  red: {
    primary: '#b83a3a',
    dark: '#962e2e',
    accent: '#c41e3a',
  },
  cream: {
    light: '#f6f3ec',
    dark: '#ece6d8',
  },
  neutral: {
    ink: '#14202e',
    muted: '#5e6b78',
    line: 'rgba(10, 39, 66, 0.12)',
    white: '#ffffff',
  },
}

export const typography = {
  fonts: {
    sans: "'Inter', system-ui, 'Segoe UI', Roboto, sans-serif",
    serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
    display: "'Playfair Display', Georgia, 'Times New Roman', serif",
  },
  sizes: {
    h1: { size: '56px', lineHeight: '1.08', weight: 400, family: 'serif' },
    h2: { size: '42px', lineHeight: '1.12', weight: 500, family: 'serif' },
    h3: { size: '32px', lineHeight: '1.15', weight: 500, family: 'serif' },
    h4: { size: '24px', lineHeight: '1.2', weight: 500, family: 'serif' },
    h5: { size: '20px', lineHeight: '1.3', weight: 600, family: 'sans' },
    h6: { size: '16px', lineHeight: '1.4', weight: 600, family: 'sans' },
    body: { size: '16px', lineHeight: '1.6', weight: 400, family: 'sans' },
    bodySm: { size: '14px', lineHeight: '1.5', weight: 400, family: 'sans' },
    eyebrow: { size: '12px', lineHeight: '1.4', weight: 600, family: 'sans' },
  },
}

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
}

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px rgba(0, 0, 0, 0.07)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  elevated: '0 20px 40px rgba(10, 35, 66, 0.15)',
}

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const transitions = {
  fast: '250ms ease-out',
  base: '300ms ease-out',
  slow: '500ms ease-out',
}

export const buttons = {
  primary: {
    bg: colors.red.primary,
    text: colors.neutral.white,
    hover: colors.red.dark,
  },
  secondary: {
    bg: colors.navy.primary,
    text: colors.cream.light,
    hover: colors.navy.deep,
  },
  ghost: {
    border: colors.navy.primary,
    text: colors.navy.primary,
    hover: colors.navy.soft,
  },
}

export const card = {
  border: colors.neutral.line,
  shadow: shadows.md,
  radius: '8px',
  padding: spacing.lg,
}

export const container = {
  maxWidth: '1280px',
  padding: '1.5rem',
}

export const hero = {
  heightDesktop: '70vh',
  heightMobile: '50vh',
  overlayColor: colors.navy.primary,
  overlayOpacity: 0.35,
}
