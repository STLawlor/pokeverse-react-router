import React, { createContext, useState } from 'react';

const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(pokemon) {
    //TODO: logic to stop adding same pokemon
    setFavourites([...favourites, pokemon]);
    console.log(favourites)
  }

  function removeFavourite(name) {
    setFavourites(favourites.filter((pokemon) => pokemon.name !== name))
  }

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      { children }
    </FavouritesContext.Provider>
  )
}

export { FavouritesProvider, FavouritesContext };