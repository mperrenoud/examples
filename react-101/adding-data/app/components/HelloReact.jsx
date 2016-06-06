var React = require('react');
var Heading = require('./shared/Heading.jsx');
var TodoList = require('./todo/TodoList.jsx');

module.exports = React.createClass({
  render: render
});

function render() {
  return (
    <div>
      <Heading text="Hello, React Todos!" />
      <TodoList />
    </div>
  );
}