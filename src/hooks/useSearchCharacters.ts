import { useState } from "react";
import search from "@stores/search";
import { CharacterType } from "@world/types";

export const useSearchCharacters = (arr: CharacterType[]) => {
  const [filter, setFilter] = useState("");

  search.subscribe({
    next: (v) => setFilter(v),
  });

  const filteredArr = arr.filter((i) => i.name.toLowerCase().includes(filter));

  return [filteredArr];
};
