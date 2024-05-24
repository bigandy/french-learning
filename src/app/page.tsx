import styles from "./page.module.css";

import { getVerbs } from "./utils";

export default async function Home() {
  const verbs = await getVerbs();

  return (
    <main className={styles.main}>
      <h2>List the verbs</h2>

      {Object.entries(verbs).map(([_, verb]) => {
        return (
          <div key={verb.verb}>
            {verb.verb} - {verb.translation}
          </div>
        );
      })}
    </main>
  );
}
