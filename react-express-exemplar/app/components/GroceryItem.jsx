var React = require('react');
var action = require('../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
  delete: _delete,
  render: render,
  togglePurchased: togglePurchased
});

function _delete(e) {
  e.preventDefault();
  action.delete(this.props.item);
}

function togglePurchased(e) {
  e.preventDefault();
  if (this.props.item.purchased) {
    action.unbuy(this.props.item);
  } else {
    action.buy(this.props.item);
  }
}

function render() {
  return (
    <div className="grocery-item row">
      <div className="six columns">
        <h4 className={this.props.item.purchased ? 'strikethrough' : ''}>
          <div>{this.props.item.name}</div>
        </h4>
      </div>
      <form className="three columns" onSubmit={this.togglePurchased}>
        <button className={this.props.item.purchased ? "" : "button-primary"}>
          {this.props.item.purchased ? "Unbuy" : "Buy"}
        </button>
      </form>
      <form className="three columns" onSubmit={this.delete}>
        <button>&times;</button>
      </form>
    </div>
  )
}