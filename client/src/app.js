var React = require('react');
var ReactDOM = require('react-dom');

var PokeDiv = require('./containers/PokeDiv.jsx')

window.onload = function(){
  ReactDOM.render(
    <PokeDiv />,
    document.getElementById('app')
  );
}
