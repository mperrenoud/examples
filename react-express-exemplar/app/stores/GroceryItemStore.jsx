var dispatcher = require('../dispatcher');
var restHelper = require('../helpers/RestHelper');

function GroceryItemStore() {
  var items = [];
  var listeners = [];

  restHelper.get('api/items')
    .then(function(data) {
      items = data;
      triggerListeners();
    });

  function getItems() {
    return items;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function triggerListeners() {
    listeners.forEach(function(l) {
      l(items);
    })
  }

  dispatcher.register(dispatcherHandler);

  function dispatcherHandler(evt) {
    var split = evt.type.split(':');
    if (split[0] === 'grocery-item') {
      switch (split[1]) {
        case 'add':
          addGroceryItem(evt.payload);
          break;
        case 'buy':
          buyGroceryItem(evt.payload);
          break;
        case 'delete':
          deleteGroceryItem(evt.payload);
          break;
        case 'unbuy':
          unbuyGroceryItem(evt.payload);
          break;
      }
    }
  }

  function addGroceryItem(item) {
    items.push(item);
    triggerListeners();

    restHelper.post('api/items', item);
  }

  function buyGroceryItem(item) {
    var index = locateItem(item);
    items[index].purchased = true;
    triggerListeners();

    restHelper.patch('api/items', items[index]);
  }

  function deleteGroceryItem(item) {
    var index = locateItem(item);
    items.splice(index, 1);
    triggerListeners();

    restHelper.del('api/items/' + item.name);
  }

  function unbuyGroceryItem(item) {
    var index = locateItem(item);
    items[index].purchased = false;
    triggerListeners();

    restHelper.patch('api/items', items[index]);
  }

  function locateItem(item) {
    return items.findIndex(function(o) {
      return o.name == item.name;
    });
  }

  return {
    getItems: getItems,
    onChange: onChange
  };
}

module.exports = new GroceryItemStore();