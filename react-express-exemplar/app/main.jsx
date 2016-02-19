console.log('Hello from JSX!');

var React = require('react');
var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');
var GroceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = GroceryItemStore.getItems();

GroceryItemStore.onChange(groceryItemStoreOnChange);
render();

function groceryItemStoreOnChange(items) {
  initial = items;
  render();
}

function render() {
  ReactDOM.render(<GroceryItemList items={initial}/>, app);
}
