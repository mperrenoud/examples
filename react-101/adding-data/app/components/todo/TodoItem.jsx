var React = require('react');

var TodoItem = React.createClass({
  render: render
});

function render() {
  console.log('todo:', this.props.todo);
  return (
    <li key={this.props.key}>
      <label>{this.props.todo.description}</label>
    </li>
  );
}

module.exports = TodoItem;