var dispatcher = require('../dispatcher');

module.exports = {
  add: add,
  buy: buy,
  delete: _delete,
  unbuy: unbuy
};

function _delete(item) {
  dispatcher.dispatch({
    payload: item,
    type: 'grocery-item:delete'
  });
}

function add(item) {
  dispatcher.dispatch({
    payload: item,
    type: 'grocery-item:add'
  })
}

function buy(item) {
  dispatcher.dispatch({
    payload: item,
    type: 'grocery-item:buy'
  });
}

function unbuy(item) {
  dispatcher.dispatch({
    payload: item,
    type: 'grocery-item:unbuy'
  });
}