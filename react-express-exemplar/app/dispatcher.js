// Copyright (c) 2016 Consult with Mike, LLC | All rights reserved.
// Developer: Michael Perrenoud
// Website: http://consultwithmike.us

var guid = require('guid');
var listeners = {};

module.exports = {
  dispatch: dispatch,
  register: register
};

function dispatch(payload) {
  console.info('Dispatching ...', payload);
  for (var id in listeners) {
    if (listeners.hasOwnProperty(id)) {
      listeners[id](payload);
    }
  }
}

function register(cb) {
  var id = guid.raw();
  listeners[id] = cb;
  return id;
}