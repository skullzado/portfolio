import { useOutletContext } from 'react-router-dom';
import './PokemonList.css';

export const PokemonList = () => {
  const { pokemonContent } = useOutletContext();
  return <div className="pokemondb-list">{pokemonContent}</div>;
};
