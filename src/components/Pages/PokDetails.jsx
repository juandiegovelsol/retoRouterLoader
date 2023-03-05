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

  useEffect(() => {
    const item = characters.find((item) => item.id.toString() === idParam);
    setCharacter(item);
  }, []);

  return <PokDetail name={name} order={order} height={height} image={image} />;
};

export default PokDetails;
