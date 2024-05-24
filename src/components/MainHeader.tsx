import styles from "./MainHeader.module.css";

import Link from "next/link";

import { MainNav } from "./MainNav";

export const MainHeader = () => {
  return (
    <>
      <Link href="/" className={styles.headingLink}>
        <h1 className={styles.heading}>French Learning App</h1>
      </Link>

      <MainNav />
    </>
  );
};
