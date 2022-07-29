import React, { useState } from 'react'

const PokeList = ({ pokemonList, addPokemon}) => {

    const [pokemonSearch, setPokemonSearch] = useState([]); //Estado que recebe uma busca
    const [search, setSearch] = useState(); //Estado que recebe o valor do campo de busca

    function handleSearch(e) {
        e.preventDefault(); //Previnindo o comportamento padrão do formulário
        const newFilter = pokemonList.filter((pokemon) =>
          pokemon.name.match(search)
        ); //utiliza o método filter para retornar resultados que tenho um name semelhante ao valor digitado
        setPokemonSearch(newFilter);
      }
    
      function clearSearch() {
        //Limpa os estados de busca
        setSearch("");
        setPokemonSearch([]);
      }

  return (
    <section>
        <div>
          <form onSubmit={handleSearch}>
            {search}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Busca</button>
          </form>
        </div>

        <div>
          <ul>
            {pokemonSearch.length > 0 && (
              <>
                <h2>Resultados de busca para: {search}</h2>
                <button onClick={clearSearch}>Limpar busca</button>
              </>
            )}
            {(pokemonSearch.length > 0 ? pokemonSearch : pokemonList).map(
              (pokemon) => (
                <li key={pokemon.name}>
                  <h2>{pokemon.name}</h2>
                  <button onClick={() => addPokemon(pokemon)}>
                    Adicionar ao time
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
    </section>
  )
}

export default PokeList