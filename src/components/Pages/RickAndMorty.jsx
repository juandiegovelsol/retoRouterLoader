import React, { useEffect, useState, useContext } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CardList } from "../CardList";
import { Loader } from "../Loader";

import { Context } from "../../context";

import { getAllCharacters } from "../../services/rickAndMortyAPI";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const context = useContext(Context);

  /* const getAllCharacters = () => {
  const url = "https://rickandmortyapi.com/api/character";
  //promise
  fetch(url)
    //When resolved
    .then((response) => response.json())

    .then((data) => {
      // this then is from the return
      setCharacters(data.results);
      context.rickAndMorty.characters = data.results;
      context.redirectDetailsRoute = "/rickandmorty";
      setLoader(false);
    })

    .catch((error) => {
      // When rejected
      console.log("Error", error);
    });
}; */
  const getData = async () => {
    const data = await getAllCharacters();
    setCharacters(data);
    context.rickAndMorty.characters = data;
    context.redirectDetailsRoute = "/rickandmorty";
    setLoader(false);
  };

  //When rendered
  useEffect(() => {
    //simulates network delay
    const timer = setTimeout(() => {
      getData();
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

export default RickAndMorty;
