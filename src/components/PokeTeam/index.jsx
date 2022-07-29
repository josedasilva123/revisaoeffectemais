import React from "react";

const PokeTeam = ({ pokemonTeam, removePokemon }) => {
  return (
    <section>
      <h2>Meu time pokémon:</h2>
      {pokemonTeam.length > 0 && (
        <div>
          {pokemonTeam.map((pokemon, index) => (
            <li key={index}>
              <h2>{pokemon.name}</h2>
              <button onClick={() => removePokemon(pokemon)}>Remover</button>
            </li>
          ))}
        </div>
      )}
    </section>
  );
};

export default PokeTeam;
