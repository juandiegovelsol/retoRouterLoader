import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import { PokDetail } from "../PokDetail";
import { getOnePokemonWithId } from "../../services/pokemonAPI";

const PokDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || {};

  const getImage = (character) => {
    let image = "";
    if (character.sprites) {
      const { sprites } = character || {};
      image = sprites.front_default;
    } else {
      image = character.image;
    }
    return image;
  };

  const image = getImage(character);
  const { name, id, order, height } = character || {};

  const getData = async (id) => {
    const data = await getOnePokemonWithId(id);
    setCharacter(data);
  };

  useEffect(() => {
    const item = characters.find((item) => item.id.toString() === idParam);
    if (item) {
      setCharacter(item);
    } else {
      getData(idParam);
    }
  }, []);

  return (
    <PokDetail
      name={name}
      id={id}
      order={order}
      height={height}
      image={image}
    />
  );
};

export default PokDetails;
