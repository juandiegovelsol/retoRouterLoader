import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import { PokDetail } from "../PokDetail";
import { getOnePokemonWithId } from "../../services/pokemonAPI";
import { useData } from "../hooks";

const PokDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const { data: otherCharacter } = useData([], getOnePokemonWithId, idParam);
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

  useEffect(() => {
    const item = characters.find((item) => item.id.toString() === idParam);
    if (item) {
      setCharacter(item);
    } else {
      setCharacter(otherCharacter);
    }
  }, [otherCharacter]);

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
