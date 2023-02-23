import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CardList } from "../CardList";
import { Loader } from "../Loader";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const getAllCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    //promise
    fetch(url)
      //When resolved
      .then((response) => response.json())

      .then((data) => {
        // this then is from the return
        setCharacters(data.results);
        setLoader(false);
      })

      .catch((error) => {
        /* When rejected */
        console.log("Error", error);
      });
  };

  //When rendered
  useEffect(() => {
    //simulates network delay
    const timer = setTimeout(() => {
      getAllCharacters();
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

export default RickAndMorty;
