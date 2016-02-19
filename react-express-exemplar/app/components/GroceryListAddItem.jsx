var React = require('React');
var action = require('../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
  addItem: addItem,
  getInitialState: getInitialState,
  handleInputName: handleInputName,
  render: render
});

function addItem(e) {
  e.preventDefault();
  console.log('Adding item ...', this.state.input);
  action.add({
    name: this.state.input
  });
  this.setState({
    input: ''
  })
}

function getInitialState() {
  return {
    input: ''
  }
}

function handleInputName(e) {
  this.setState({
    input: e.target.value
  });
}

function render() {
  return (
    <div className="grocery-addItem">
      <form onSubmit={this.addItem}>
        <input value={this.state.input} type="text" onChange={this.handleInputName}/>
        <button>Add Item</button>
      </form>
    </div>
  )
}