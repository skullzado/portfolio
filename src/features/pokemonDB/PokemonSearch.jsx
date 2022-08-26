import React from 'react';
import './PokemonSearch.css';

export const PokemonSearch = ({
  searchTerm,
  onChangeSearchTerm,
  handleSearchClear,
}) => {
  return (
    <div className="pokemondb__search">
      <input
        className="pokemondb__search-input"
        type="text"
        id="pokemon-search"
        placeholder="Pokemon's name OR filter:type"
        autoComplete="off"
        value={searchTerm}
        onChange={onChangeSearchTerm}
      />
      <button className="btn btn__clear-search" onClick={handleSearchClear}>
        Clear
      </button>
    </div>
  );
};
