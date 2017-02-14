var React = require('react');

var PokeSelector = React.createClass({
  getInitialState: function() {
    return {selectedIndex: undefined}
  },  
  render: function() {
    var options = this.props.pokemon.map(function (pokemon, index) {
      return <option value={index} key={index}>{pokemon.name}</option>
    })
    return (
      <select id="pokemon" value={this.state.selectedIndex}>
        {options}
      </select>)
  }

});

module.exports = PokeSelector;