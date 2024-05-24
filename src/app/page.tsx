import styles from "./page.module.css";

import { ToggleExample } from "@/components/ToggleExample";

async function getVerbs() {
  const { data } = await import("../data/verbs");

  // const data = JSON.parse(file);

  return data;
}

export default async function Home() {
  const verbs = await getVerbs();

  console.log({ verbs: Object.entries(verbs) });

  return (
    <main className={styles.main}>
      <h1>French Learning App</h1>

      <h2>List the verbs</h2>

      {Object.entries(verbs).map(([_, verb]) => {
        return (
          <div key={verb.verb}>
            {verb.verb} - {verb.translation}
          </div>
        );
      })}

      <hr style={{ marginBlock: "3rem 1rem" }} />

      <ToggleExample />
    </main>
  );
}
