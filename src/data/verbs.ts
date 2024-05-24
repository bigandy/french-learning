export const data: Data = {
  attendre: {
    verb: "attendre",
    translation: "to wait",
    tenses: {
      presént: {
        je: "j'attends",
        tu: "tu attends",
        il: "il attend",
        nous: "nous attendons",
        vous: "vous attendez",
        ils: "ils attendent",
      },
    },
  },
  manger: {
    verb: "manger",
    translation: "to eat",
    tenses: {
      presént: {
        je: "je mange",
        tu: "tu manges",
        il: "il mange",
        nous: "nous mangeons",
        vous: "vous mangez",
        ils: "ils mangent",
      },
    },
  },
};

type Data = Record<string, Verb>;

interface Verb {
  verb: string;
  translation: string;
  tenses: Record<
    string,
    {
      je: string;
      tu: string;
      il: string;
      nous: string;
      vous: string;
      ils: string;
    }
  >;
}
