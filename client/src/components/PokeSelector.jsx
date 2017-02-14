var React = require('react');

var PokeSelector = React.createClass({
  getInitialState: function() {
    return {selectedIndex: undefined}
  },
  handleChange: function(event) {
    var newIndex = event.target.value;
    var details = document.querySelector('.poke-details');
    this.setState({selectedIndex: newIndex});
    this.props.selectPokemon(this.props.pokemon[newIndex]);
    // details.style.visibility = "visible";
  }, 
  render: function() {
    var options = this.props.pokemon.map(function (pokemon, index) {
      return <option value={index} key={index}>{pokemon.name}</option>
    })
    return (
      <select id="pokemon" value={this.state.selectedIndex} onChange={this.handleChange}>
      <option selected disabled>Choose a pokemon</option>
        {options}
      </select>)
  }

});

module.exports = PokeSelector;