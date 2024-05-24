// Has to be a client component because it uses the usePathname hook
"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import styles from "./MainHeader.module.css";

export const MainNav = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" className={pathname == "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/test" className={pathname == "/test" ? "active" : ""}>
            Test
          </Link>
        </li>
      </ul>
    </nav>
  );
};
