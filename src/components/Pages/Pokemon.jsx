import React, { useContext, useEffect, useState } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CardList } from "../CardList";
import { Loader } from "../Loader";
import { Context } from "../../context";
import { getAllPokemons } from "../../services/pokemonAPI";

const Pokemon = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);
  const context = useContext(Context);

  const getPokemons = async () => {
    const pokemons = await getAllPokemons();
    setLoader(false);
    setCharacters(pokemons);
    context.pokemon.characters = pokemons;
    context.redirectDetailsRoute = "/pokemon";
  };

  useEffect(() => {
    //simulates network delay
    const timer = setTimeout(() => {
      getPokemons();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header>Header</Header>
      {loader && <Loader />}
      {!loader && <CardList list={characters} />}
      <Footer>Footer</Footer>
    </>
  );
};

export default Pokemon;
//For in utiliza el indice para recorrer el arreglo
/*     for (let index in data.results) {
      console.log("For in", index);
      const item = data.results[index];
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
    } */
//For of utiliza el elemento para recorrer el arreglo
/* for (let item of data.results) {
      console.log("For of get value of each item", item);
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
    } */
