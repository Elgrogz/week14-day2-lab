var React = require('react');

var Pokedex = function(props) {
  if (!props.poke) {
    return <h5>No Pokemon here</h5>
  }
  return (<h4>A wild {props.poke.name} has appeared</h4>)
};

module.exports = Pokedex;