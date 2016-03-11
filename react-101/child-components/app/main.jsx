console.log('Hello from JSX!');

var React = require('react');
var ReactDOM = require('react-dom');
var HelloReact = require('./components/HelloReact.jsx');

render();

function render() {
  ReactDOM.render(<HelloReact />, app);
}
