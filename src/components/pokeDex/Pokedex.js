import React from "react";
import "./Pokedex.css";
import PokeCard from "../pokeCard/PokeCard";

const Pokedex = ({ pokemon = [], exp, isWinner }) => {
  let title;
  title = (
    <h1 className={isWinner ? "pokedexWinner" : "pokedexLooser"}>
      {isWinner ? "Winning Hand" : "Loosing Hand"}
    </h1>
  );
  return (
    <div className="pokedex">
      <h1>Pokedex!</h1>
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className="pokedexCards">
        {pokemon.map((p, idx) => (
          <PokeCard
            key={idx}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
            id={p.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
