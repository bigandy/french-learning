export async function getVerbs() {
  const { data } = await import("../data/verbs");

  return data;
}
