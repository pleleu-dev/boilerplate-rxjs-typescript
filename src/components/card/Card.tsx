import React from "react";
import { CharacterType } from "@world/types";
import "@stores/characters";

export const Card = ({
  id,
  image,
  name,
  species,
  type,
  gender,
  status,
}: CharacterType) => {
  return (
    <div className="mb-4 w-140 flex">
      <div className="h-24 w-24 rounded-full bg-indigo-500 text-white overflow-clip">
        <img src={image} alt={name} />
      </div>
      <div className="ml-2">
        <p className="text-lg text-gray-900 leading-3 font-medium mt-2">
          {name}
        </p>
        <p className="text-base text-gray-500 mt-4">
          {species}: {type && `${type} -`} {gender}{" "}
          {status === "Dead" && `| ${status}`}
        </p>
      </div>
    </div>
  );
};

export default Card;
