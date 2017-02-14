var React = require('react');
var PokeSelector = require('../components/PokeSelector.jsx');
var Pokedex = require('../components/Pokedex.jsx');

var PokeDiv = React.createClass({
getInitialState: function() {
  return {pokemon: [], focusMon: null};
}



render: function() {
  return (
    <div className="poke-div">
      <h2>Pokemonz</h2>
      <PokeSelector />
      <Pokedex />
    </div>
    )
}


});

module.exports = PokeDiv;