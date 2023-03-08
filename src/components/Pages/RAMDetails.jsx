import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import { RAMDetail } from "../RAMDetail";
import { getOneCharacter } from "../../services/rickAndMortyAPI";
import { useData } from "../hooks";

const RAMDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const { data: otherCharacter } = useData([], getOneCharacter, idParam);
  const context = useContext(Context);
  const { rickAndMorty } = context || {};
  const { characters } = rickAndMorty || [];
  const { id, species, name, status, image, gender } = character || {};

  useEffect(() => {
    const item = characters.find((item) => item.id.toString() === idParam);
    if (item) {
      setCharacter(item);
    } else {
      setCharacter(otherCharacter);
    }
  }, [otherCharacter]);

  return (
    <RAMDetail
      id={id}
      species={species}
      name={name}
      status={status}
      image={image}
      gender={gender}
    />
  );
};

export default RAMDetails;
