import React, { useContext } from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FavouritesContext } from "../FavouritesProvider";

function Favourites() {
  const { favourites } = useContext(FavouritesContext);

  return (
    <Container>
      <h2>Favourites:</h2>
      <Row className="g-4">
        {favourites.map((pokemon) => (
          <Col key={pokemon.name}>
            <PokemonCard url={pokemon.url} name={pokemon.name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { Favourites };
