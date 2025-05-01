export type NavItem = {
  label: string;
  href: string;
};

export type HeaderProps = {
  logoText?: string;
  logoHref?: string;
  navItems?: NavItem[];
};
