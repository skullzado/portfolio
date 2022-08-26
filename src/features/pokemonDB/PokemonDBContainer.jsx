import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQueryStatus,
  getQueryError,
  fetchAllPokemon,
  selectAllPokemon,
} from './pokemonDBSlice';
import { PokemonSearch } from './PokemonSearch';
import { pokemonDBRoutes, sortData } from '../../data/data';
import { sortPokemonData } from '../../utils/utils';
import { PokemonCard } from './PokemonCard';
import './PokemonDBContainer.css';

export const PokemonDBContainer = () => {
  document.title = 'skullzado - PokemonDB';

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const { pathname } = useLocation();
  const { gen } = useParams();
  const pokemonDB = useSelector(selectAllPokemon);
  const queryStatus = useSelector(getQueryStatus);
  const queryError = useSelector(getQueryError);

  const onChangeSearchTerm = (event) =>
    setSearchTerm(event.target.value.toLowerCase());

  const handleSearchClear = () => setSearchTerm('');

  useEffect(() => {
    if (queryStatus === 'idle') {
      dispatch(fetchAllPokemon());
    }
  }, [queryStatus, dispatch]);

  let content;
  if (queryStatus === 'loading') {
    content = <p className="pokemondb__query-status">Loading...</p>;
  } else if (queryStatus === 'succeeded') {
    content = null;
  } else if (queryStatus === 'failed') {
    content = <p className="pokemondb__query-status">{queryError}</p>;
  }

  let pokemonContent;
  if (gen) {
    if (searchTerm) {
      if (searchTerm.includes('filter:')) {
        let typeArg = searchTerm.split(':')[1].toLowerCase();
        pokemonContent = sortPokemonData(gen, sortData, pokemonDB)
          .filter((pokemon) => pokemon.pokemonTypes.includes(typeArg))
          .map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />);
      } else {
        pokemonContent = sortPokemonData(gen, sortData, pokemonDB)
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />);
      }
    } else {
      pokemonContent = sortPokemonData(gen, sortData, pokemonDB).map(
        (pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />
      );
    }
  } else if (!gen && pathname === '/projects/pokemondb') {
    if (searchTerm) {
      if (searchTerm.includes('filter:')) {
        let typeArg = searchTerm.split(':')[1].toLowerCase();
        pokemonContent = pokemonDB
          .filter((pokemon) => pokemon.pokemonTypes.includes(typeArg))
          .map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />);
      } else {
        pokemonContent = pokemonDB
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />);
      }
    } else {
      pokemonContent = pokemonDB.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ));
    }
  } else {
    pokemonContent = null;
  }

  return (
    <div className="pokemondb-container">
      <h3 className="pokemondb__title">PokemonDB</h3>
      <nav>
        <ul className="pokemondb__nav-list">
          {pokemonDBRoutes.map(({ name, route }) => (
            <li key={name}>
              <NavLink
                to={route}
                className={({ isActive }) =>
                  isActive && pathname === route
                    ? 'pokemondb__nav-link pokemondb--active'
                    : 'pokemondb__nav-link'
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <PokemonSearch
        searchTerm={searchTerm}
        onChangeSearchTerm={onChangeSearchTerm}
        handleSearchClear={handleSearchClear}
      />
      <Outlet context={{ pokemonContent }} />
      {content}
    </div>
  );
};
