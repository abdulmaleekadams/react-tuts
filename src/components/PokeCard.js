import React from "react";
import './PokeCard.css'
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const card = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];
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
