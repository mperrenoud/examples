var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();

console.log('AppDispatcher::ctor', module.exports);