import { useState, useEffect } from "react";
import characters$ from "@stores/characters";
import { CharacterType } from "@world/types";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  useEffect(() => {
    const subscription = characters$.subscribe((c) => setCharacters(c));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return [characters];
};
