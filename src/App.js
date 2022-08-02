import { GlobalStyle } from "./styles/global";
import { useState, useEffect } from "react";
import { api } from "./api/api";
import PokeTeam from "./components/PokeTeam";
import PokeList from "./components/PokeList";
import { Container } from "./styles/components";

function App() {
  const [loading, setLoading] = useState(false);

  const [pokemonList, setPokemonList] = useState([]);

  const [pokemonTeam, setPokemonTeam] = useState([]);

  //Criando um useEffect de montagem para carregar uma requisição
  useEffect(() => {
    async function getPokemon() {
      try {
        setLoading(true);
        const response = await api.get("pokemon?limit=151&offset=0");
        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPokemon();
  }, []);  

  //Efeito de carregamento localStorage
  useEffect(() => {
    const localTeam = localStorage.getItem('@POKEMON');
    if(localTeam){
      const parsedTeam = JSON.parse(localTeam);
      setPokemonTeam(parsedTeam);
    }
  }, [])

  //Adicionando um pokemon a um time (do estado pokemonList para o estado pokemonTeam)
  function addPokemon(currentPokemon) {
    //Validando se o pokémon já está adicionado no time
    if (pokemonTeam.find((pokemon) => pokemon.name === currentPokemon.name)){
      alert("O pokémon já está adicionado ao time.")
    //Limitando a quantidade de pokémons no time  
    } else if (pokemonTeam.length === 6) {
      alert("O time já está cheio!");
    } else {
      //Se não houverem erros o pokémon é adicionado ao estado
      const newTeam = [...pokemonTeam, currentPokemon]
      localStorage.setItem('@POKEMON', JSON.stringify(newTeam));
      setPokemonTeam(newTeam); //Adicinando newList a localStorage     
    }
  }

  function removePokemon(currentPokemon) {
    //Filtro que retorna todos os pokemons menos o selecionado (removação)
    const newList = pokemonTeam.filter((pokemon) => pokemon !== currentPokemon);
    localStorage.setItem('@POKEMON', JSON.stringify(newList)); //Adicinando newList a localStorage
    setPokemonTeam(newList);
  }

  return (
    <div className="App">
      {/* Estilo Global */}
      <GlobalStyle />
      <Container marginTop="12rem">
        <PokeTeam pokemonTeam={pokemonTeam} removePokemon={removePokemon} />  
        <PokeList pokemonList={pokemonList} addPokemon={addPokemon} />     
      </Container>
    </div>
  );
}

export default App;
