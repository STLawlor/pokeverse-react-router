import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function PokeDetails() {
  const [pokemon, setPokemon] = useState();

  const params = useParams();

  useEffect(() => {
    getPokeDetails();
  }, []);

  async function getPokeDetails() {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      );
      const data = await res.json();
      setPokemon(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  if (!pokemon) {
    return <>Loading...</>;
  }

  return (
    <Container className="text-capitalize">
      <h3>{pokemon.name}</h3>
      <ul>
        <li>Height: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
        <li>
          Abilities:
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </li>
        <li>
          Types:
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </li>
        <li>
          Stats:
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
        </li>
      </ul>
      <Link to="/">Back</Link>
    </Container>
  );
}

export { PokeDetails };
