import React from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem';
import './PokemonList.css';


const PokemonList = ({ onItemClick, pokemon }) => (
  <section className="pokemon-list">
    <h2>Pokemon List</h2>
    <ul className="pokemon-list__list">
      {
        pokemon.map(p => (
          <li key={p.name}>
            <PokemonListItem onClick={() => onItemClick(p.name)}>
              {p.name}
            </PokemonListItem>
          </li>))
      }
    </ul>
  </section>
);


PokemonList.defaultProps = {
  onItemClick: () => {},
};

PokemonList.propTypes = {
  onItemClick: PropTypes.func,
  pokemon: PropTypes.array.isRequired,
};


export default PokemonList;
