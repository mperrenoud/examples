var React = require('react');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

module.exports = React.createClass({
  render: render
});

function render() {
  return (
    <div>
      <h1>Grocery Listify</h1>
      <div>
        {
          this.props.items.map(mapItems)
        }
      </div>
      <GroceryListAddItem />
    </div>
  );
}

function mapItems(item, index) {
  return (
    <GroceryItem item={item} key={'item' + index} />
  )
}