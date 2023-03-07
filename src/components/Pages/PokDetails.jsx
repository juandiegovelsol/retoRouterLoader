import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import { PokDetail } from "../PokDetail";

const PokDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || {};
  const { name, order, height, image } = character || {};

  const getOnePokemon = async (id) => {
    let pokemon = {};
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const image = data.sprites.front_default;
    const { name, order, height } = data;
    pokemon = { name, id, image, order, height };
    setCharacter(pokemon);
  };

  useEffect(() => {
    const item = characters.find((item) => item.id.toString() === idParam);
    if (item) {
      setCharacter(item);
    } else {
      getOnePokemon(idParam);
    }
  }, []);

  return <PokDetail name={name} order={order} height={height} image={image} />;
};

export default PokDetails;
