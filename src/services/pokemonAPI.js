export const getOnePokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const getOnePokemonWithId = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const data = await getOnePokemon(url);
  return data;
};

export const getAllPokemons = async () => {
  const pokemons = [];
  const url = "https://pokeapi.co/api/v2/pokemon";
  try {
    const response = await fetch(url);
    const datas = await response.json();

    for (let i = 0; i < datas.results.length; i++) {
      const item = datas.results[i];
      const data = await getOnePokemon(item.url);
      const { name, sprites, id, order, height } = data || {};
      const { front_default: image } = sprites || {};
      pokemons.push({ name, image, id, order, height });
    }

    return pokemons;
  } catch (error) {
    return error;
  }
};
