import React, { useEffect, useState, useContext, Link } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FavouritesContext } from "../FavouritesProvider";

function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState(null);
  const { addFavourite } = useContext(FavouritesContext);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return (
    <Card style={{ width: "18rem" }} className="mx-auto text-capitalize">
      <Card.Img
        width="286"
        height="286"
        bg="dark"
        variant="top"
        src={pokemon?.sprites.front_default}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/${name}`}>{name}</Link>
        </Card.Title>
        <Card.Text as="div">
          Abilities:
          <ul>
            {pokemon?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
        </Card.Text>
        <Button variant="primary" onClick={() => addFavourite(pokemon)}>Add to Favourites</Button>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
