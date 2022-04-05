/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { useCharacters } from "@hooks/useCharacters";
import Card from "@components/card/Card";
import Filter from "@components/filter/Filter";
import { useSearchCharacters } from "@hooks/useSearchCharacters";

export const App = () => {
  const [characters] = useCharacters();
  const [filteredCharacters] = useSearchCharacters(characters);

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Rxjs/React Boilerplate
          </h1>
          <Filter />
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {filteredCharacters &&
              filteredCharacters.map((char) => (
                <Card key={char.id} {...char} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
