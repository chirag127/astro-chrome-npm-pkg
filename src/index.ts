// @chirag127/astro-chrome
// v0.1.2 — shared Astro chrome. Components accept a Firebase `Auth` instance
// via props; the consuming app owns Firebase initialization.
//
// Astro `.astro` components must be imported via subpath exports (the bare
// specifier — e.g. `@chirag127/astro-chrome/ConsentBanner.astro`) because
// Astro components cannot be re-exported from a `.ts` index. Only React
// components are re-exported here.
//
// v0.1.2 adds: MultiSearch, StatusBanner, ConsentBanner.astro
// (consolidates ~6 vendored copies across the family).
export const __pkg = '@chirag127/astro-chrome' as const

export { AccountPanel } from './components/AccountPanel'
export type { AccountPanelProps } from './components/AccountPanel'
export { FinishSignIn } from './components/FinishSignIn'
export type { FinishSignInProps } from './components/FinishSignIn'

// React UI islands consolidated in v0.1.2.
// Default exports re-exported as named for ergonomic imports.
export { default as MultiSearch, DEFAULT_ENGINES } from './components/MultiSearch'
export type { SearchEngine } from './components/MultiSearch'
export { default as StatusBanner, parseLatestActive } from './components/StatusBanner'
