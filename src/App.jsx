import React, { useEffect, useState } from "react";
import { getAllPokemon } from "./utils/pokemon.jsx";
import PokemonCard from "./components/card/PokemonCard.jsx";
import { getPokemon } from "./utils/pokemon.jsx";
import Nav from "./components/nav/nav.jsx";
import "./App.css";

const App = () => {
  const initialData = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res = await getAllPokemon(initialData);
      const pokemonDetails = await loadPokemon(res.results);
      setPokemonData(pokemonDetails);
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    const pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const response = await getPokemon(pokemon.url);
        return response;
      })
    );
    return pokemonData;
  };

  const handleNextPage = async () => {
    setLoading(true);
    const res = await getAllPokemon(nextUrl);
    const pokemonDetails = await loadPokemon(res.results);
    setPokemonData(pokemonDetails);
    setNextUrl(res.next);
    setPrevUrl(res.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevUrl) return;
    setLoading(true);
    const res = await getAllPokemon(prevUrl);
    const pokemonDetails = await loadPokemon(res.results);
    setPokemonData(pokemonDetails);
    setNextUrl(res.next);
    setPrevUrl(res.previous);
    setLoading(false);
  };

  return (
    <div className="App">
      <Nav />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <div className="PokemonCards">
            {pokemonData.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
          </div>
        </div>
      )}
      <di className="buttonWrapper">
        <button onClick={handlePrevPage}>前へ</button>
        <button onClick={handleNextPage}>次へ</button>
      </di>
    </div>
  );
};

export default App;
