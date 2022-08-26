export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const sortPokemonData = (str, obj, arr) => {
  const [start, end] = obj[str];
  return arr.slice(start - 1, end);
};

export const removeWhiteSpace = (str) => {
  return str.replace(' ', '').toLowerCase();
};

export const poorId = () => {
  return Math.random().toString();
};
