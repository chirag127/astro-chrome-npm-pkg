// @chirag127/astro-chrome
// v0.1.1 — shared Astro chrome (Header, Sidebar, BottomBar, Footer, Stamp, SEO,
// Auth UI, Analytics, Consent). Components accept a Firebase `Auth` instance via
// props; the consuming app owns Firebase initialization.
export const __pkg = '@chirag127/astro-chrome' as const

export { AccountPanel } from './components/AccountPanel'
export type { AccountPanelProps } from './components/AccountPanel'
export { FinishSignIn } from './components/FinishSignIn'
export type { FinishSignInProps } from './components/FinishSignIn'
