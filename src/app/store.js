import { configureStore } from '@reduxjs/toolkit';
import pokemonDBReducer from '../features/pokemonDB/pokemonDBSlice';

export const store = configureStore({
  reducer: {
    pokemonDB: pokemonDBReducer,
  },
});
