import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CardList } from "../CardList";
import { Loader } from "../Loader";

const Pokemon = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const getOnePokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_default;
  };
  //Async/await
  const getAllPokemons = async () => {
    const pokemons = [];
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);

    for (let i = 0; i < data.results.length; i++) {
      const item = data.results[i];
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
      setTimeout(() => {}, 100);
    }

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

    console.log("Pokemons", pokemons);
    setLoader(false);
    setCharacters(pokemons);
  };

  useEffect(() => {
    //simulates network delay
    const timer = setTimeout(() => {
      getAllPokemons();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header>Header</Header>
      {loader && <Loader />}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
};

export default Pokemon;
