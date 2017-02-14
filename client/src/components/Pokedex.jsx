var React = require('react');

var Pokedex = function(props) {
  if (!props.poke) {
    return <h5></h5>
  }
  return (
    <div className="poke-details">
    <h4>A wild {props.poke.name} has appeared</h4>
    <h4>Weight: {props.poke.weight}</h4>
    <h4>Height: {props.poke.height}</h4>


    </div>
    )
};

module.exports = Pokedex;