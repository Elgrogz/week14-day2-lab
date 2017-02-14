var React = require('react');



var Pokedex = function(props) {

  if (!props.poke) {
    return <h5></h5>
  }

  var types = props.poke.types.map(function(pokemonType, index){
     return <h4 key={index}>{pokemonType.type.name}</h4>
   });
  
  return (

    <div className="poke-details">
    <h4>A wild {props.poke.name} has appeared</h4>
    <h4>Weight: {props.poke.weight}</h4>
    <h4>Height: {props.poke.height}</h4>
    {types}
  

    </div>
    )
};

module.exports = Pokedex;