import React, { Component } from 'react';
import { PokemonDetail, PokemonList } from './components';
import './App.css';

const mockPokemonList = [
  { name: 'Bulbasaur', url: 'bulbasaur.com' },
  { name: 'Charmander', url: 'charmander.com' },
  { name: 'Squirtle', url: 'squirtle.com' },
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPokemon: mockPokemonList[0] };
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  selectPokemon(name) {
    this.setState({ selectedPokemon: mockPokemonList.find(p => p.name === name) });
  }

  render() {
    return (
      <div className="app">
        <PokemonList
          onItemClick={this.selectPokemon}
          pokemon={mockPokemonList}
        />
        <PokemonDetail pokemon={this.state.selectedPokemon} />
      </div>
    );
  }
}


export default App;
