import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import DEFAULT_POKEBALL_SRC from '../../assets/pokeball.png';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';

const initialState = {
  pokemon: [],
  status: 'idle',
  error: null,
};

export const fetchAllPokemon = createAsyncThunk(
  'pokemonDB/fetchAllPokemon',
  async () => {
    const promises = [];
    for (let i = 1; i <= 905; i++) {
      const response = await axios.get(`${POKEMON_URL}${i}`);
      promises.push(response.data);
    }
    const data = await Promise.all(promises);
    return data;
  }
);

const pokemonDBSlice = createSlice({
  name: 'pokemonDB',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllPokemon.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAllPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        action.payload.map(({ id, name, sprites, types }) => {
          let sprite = sprites.other['official-artwork']['front_default'];
          if (!sprite) {
            sprite = DEFAULT_POKEBALL_SRC;
          }
          let pokemonTypes = types.map((type) => type.type.name);
          return state.pokemon.push({ id, name, sprite, pokemonTypes });
        });
      })
      .addCase(fetchAllPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllPokemon = (state) => state.pokemonDB.pokemon;
export const getQueryStatus = (state) => state.pokemonDB.status;
export const getQueryError = (state) => state.pokemonDB.error;

export default pokemonDBSlice.reducer;
