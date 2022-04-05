import React, { useState } from "react";
import search from "@stores/search";
export const Filter = () => {
  const [input, setInput] = useState("");

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setInput(value);
    search.next(value);
  };

  return (
    <div className="mt-4">
      <label
        htmlFor="Search"
        className="block text-sm font-medium text-gray-700"
      >
        Search your favorite character
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-200 sm:text-sm"></span>
        </div>
        <input
          type="text"
          name="Search"
          id="Search"
          className="focus:ring-gray-200 focus:border-gray-200 block w-200 pl-7 p-2 sm:text-sm border-gray-300 rounded-md"
          placeholder="Character name"
          value={input}
          onChange={handleChange}
        />
        {/* <div className="absolute inset-y-0 right-0 flex items-center">
        <label htmlFor="currency" className="sr-only">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          className="focus:ring-gray-200 focus:border-gray-200 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-200 sm:text-sm rounded-md"
        >
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
      </div> */}
      </div>
    </div>
  );
};

export default Filter;
