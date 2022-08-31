import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectsList } from './pages/ProjectsList';
import { About } from './pages/About';
import { TodolistContainer } from './components/todolist/TodolistContainer';
import { PokemonDBContainer } from './features/pokemonDB/PokemonDBContainer';
import { PokemonList } from './features/pokemonDB/PokemonList';
import { AllPokemon } from './features/pokemonDB/AllPokemon';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects-list" element={<ProjectsList />} />
        <Route path="/projects">
          <Route path="todolist" element={<TodolistContainer />} />
          <Route path="pokemondb" element={<PokemonDBContainer />}>
            <Route index element={<AllPokemon />} />
            <Route path=":gen" element={<PokemonList />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
