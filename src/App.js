import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Home } from './routes/Home';
import { PokeDetails } from './routes/PokeDetails';
import { Favourites } from './routes/Favourites';
import { FavouritesProvider } from './FavouritesProvider';

function App() {
  return (
    <FavouritesProvider>
      <div data-testid="app">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/:name" element={ <PokeDetails /> } />
            <Route path="/favourites" element ={ <Favourites /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </FavouritesProvider>
  );
}

export { App };
