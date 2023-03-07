export const getOnePokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const image = data.sprites.front_default;
  const id = data.id;
  const order = data.order;
  const height = data.height;
  return { image, id, order, height };
};

export const getAllPokemons = async () => {
  const pokemons = [];
  const url = "https://pokeapi.co/api/v2/pokemon";
  try {
    const response = await fetch(url);
    const data = await response.json();

    for (let i = 0; i < data.results.length; i++) {
      const item = data.results[i];
      const { image, id, order, height } = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image, id, order, height });
    }

    return pokemons;
  } catch (error) {
    return error;
  }
};
