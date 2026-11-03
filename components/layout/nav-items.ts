// The site's pages, in the header (nav-links.tsx) and the footer. Not in
// nav-links.tsx: that is a client module, so the footer, a server
// component, could not read it.
export const navItems = [
  { href: "/meni", label: "menu" },
  { href: "/galerija", label: "gallery" },
  { href: "/o-nama", label: "about" },
  { href: "/kontakt", label: "contact" },
] as const
