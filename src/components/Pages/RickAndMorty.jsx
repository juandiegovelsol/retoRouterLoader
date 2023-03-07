import React, { useEffect, useState, useContext } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CardList } from "../CardList";
import { Loader } from "../Loader";
import { Context } from "../../context";
import { getAllCharacters } from "../../services/rickAndMortyAPI";
import { useData } from "../hooks";

const RickAndMorty = () => {
  const { data: characters } = useData([], getAllCharacters);
  const [loader, setLoader] = useState(true);
  const context = useContext(Context);

  useEffect(() => {
    const timer = setTimeout(() => {
      context.rickAndMorty.characters = characters;
      context.redirectDetailsRoute = "/rickandmorty";
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [characters]);
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
