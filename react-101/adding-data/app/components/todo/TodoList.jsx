var React = require('react');
var TodoActions = require('../../actions/TodoActions');
var TodoItem = require('./TodoItem.jsx');
var TodoStore = require('../../stores/TodoStore');

var TodoList = React.createClass({
  _onChange: _onChange,
  componentDidMount: componentDidMount,
  componentWillUnmount: componentWillUnmount,
  getInitialState: getInitialState,
  render: render
});

function _onChange() {
  this.setState({
    todos: TodoStore.getTodos()
  });
}

function componentDidMount() {
  TodoStore.addChangeListener(this._onChange);
}

function componentWillUnmount() {
  TodoStore.removeChangeListener(this._onChange);
}

function getInitialState() {
  return {
    todos: TodoStore.getTodos()
  };
}

function render() {
  var todos = [];
  var allTodos = this.state.todos;

  for (var key in allTodos) {
    todos.push(<TodoItem key={key} todo={allTodos[key]} />);
  }

  return (
    <form>
      <input type="text" />
      <button onClick={TodoActions.create}>add</button>
    </form>
    <ul>
      {todos}
    </ul>
  )
}

module.exports = TodoList;
