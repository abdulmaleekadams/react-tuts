import React from "react";
import "./PokeCard.css";
const POKE_API =
  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 99 ? `00${number}`.slice(-3) : number);

const PokeCard = ({ name, id, type, exp }) => {
  let imageSrc = `${POKE_API}${padToThree(id)}.png`;
  return (
    <div className="pokecard">
      <h1 className="pokecardTitle">{name}</h1>
      <img src={imageSrc} alt={name} />
      <div className="pokecardData">Type: {type}</div>
      <div className="pokecardData">EXP: {exp}</div>
    </div>
  );
};

export default PokeCard;
