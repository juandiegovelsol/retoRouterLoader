import React from "react";

export const initialContext = {
  rickAndMorty: {
    characters: [],
  },
  pokemon: {
    characters: [],
  },
};
export const Context = React.createContext(initialContext);
