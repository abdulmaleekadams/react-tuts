import React from "react";
import './PokeCard.css'
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const PokeCard = ({ name, id, type, exp }) => {
  let imageSrc = `${POKE_API}${id}.png`;
  return (
    <div className="pokeCard">
      <h1>{name}</h1>
          <img src={imageSrc} alt={name} />
          <p>Type: {type}</p>
          <p>EXP: {exp}</p>
    </div>
  );
};

export default PokeCard;
