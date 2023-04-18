import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Home } from './routes/Home';
import { PokeDetails } from './routes/PokeDetails'

function App() {
  return (
    <div data-testid="app">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/:name" element={ <PokeDetails /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
