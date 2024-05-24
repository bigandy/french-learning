"use client";

import { useEffect } from "react";
import styles from "../page.module.css";

export default function Home() {
  useEffect(() => {
    import("./sibling-count.js");
    import("./re-sizer.js");
  }, []);

  return (
    <main className={styles.main}>
      <h2>Custom Element Test</h2>

      <h3>re-sizer element ✅</h3>
      <re-sizer horizontal vertical debug>
        <div style={{ minHeight: 100 }}>
          <h1 style={{ marginBlock: 0 }}>I am test</h1>
        </div>
      </re-sizer>

      <h3>sibling-count ❌</h3>
      <sibling-count>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </sibling-count>
    </main>
  );
}
