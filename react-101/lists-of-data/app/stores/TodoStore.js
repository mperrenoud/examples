var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {
  1: {
    description: 'Task #1'
  },
  2: {
    description: 'Task #2'
  },
  3: {
    description: 'Task #3',
    completed: true
  }
};

function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

  _todos[id] = {
    description: text,
    completed: false
  };
}

var TodoStore = assign({}, EventEmitter.prototype, {

  getTodos: function() {
    return _todos;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
TodoStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case TodoConstants.TODO_CREATE:
      create(action.text);
      TodoStore.emitChange();
      break;

    default:
    // no op
  }
});

module.exports = TodoStore;