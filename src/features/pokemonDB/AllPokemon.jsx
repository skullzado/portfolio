import { useOutletContext } from 'react-router-dom';
import './PokemonList.css';

export const AllPokemon = () => {
  const { pokemonContent } = useOutletContext();

  return <div className="pokemondb-list">{pokemonContent}</div>;
};
