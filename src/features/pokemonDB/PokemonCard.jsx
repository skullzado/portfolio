import { pokemonTypesColor } from '../../data/data';
import { capitalize } from '../../utils/utils';
import './PokemonCard.css';

export const PokemonCard = ({ id, name, sprite, pokemonTypes }) => {
  return (
    <div className="pokemondb-card">
      <div className="pokemondb-card__header">
        <h4 className="pokemondb-card__name">{capitalize(name)}</h4>
        <p className="pokemondb-card__id">#{id}</p>
      </div>
      <div className="pokemondb-card__contents">
        <img
          className="pokemondb-card__sprite"
          src={sprite}
          alt={capitalize(name)}
          width="128"
          height="128"
        />
      </div>
      <div
        className={
          pokemonTypes.length > 1
            ? 'pokemondb-card__footer--multiple'
            : 'pokemondb-card__footer'
        }
      >
        {pokemonTypes.map((item, index) => (
          <p
            className="pokemondb-card__types"
            key={item + index}
            style={{
              backgroundColor: pokemonTypesColor[capitalize(item)],
            }}
          >
            {capitalize(item)}
          </p>
        ))}
      </div>
    </div>
  );
};
