// Has to be a client component because it uses the usePathname hook
"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import styles from "./MainHeader.module.css";

const Pages = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/test",
    title: "Test",
  },
];

export const MainNav = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        {Pages.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className={pathname == page.href ? "active" : ""}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
