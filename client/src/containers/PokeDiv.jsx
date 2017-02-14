var React = require('react');
var PokeSelector = require('../components/PokeSelector.jsx');
//var Pokedex = require('../components/Pokedex.jsx');

var PokeDiv = React.createClass({
getInitialState: function() {
  return {pokemon: [], focusMon: null};
},

componentDidMount: function() {
  var url = "http://pokeapi.co/api/v2/pokemon/";
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
    if (request.status === 200) {
      var data =JSON.parse(request.responseText);
      this.setState({pokemon: data.results, focusMon: data[0]});
    }
  }.bind(this);
  request.send();
},

setFocusMon: function(poke) {
  this.setState({focusMon: poke});
},  

render: function() {
  return (
    <div className="poke-div">
      <h2>Pokemonz</h2>
      <PokeSelector pokemon={this.state.pokemon} selectPokemon={this.setFocusMon}/>
     
    </div>
    )
}


});

module.exports = PokeDiv;