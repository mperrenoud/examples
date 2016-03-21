var keyMirror = require('keymirror');
var assign = require('object-assign');

var obj = {};

obj = assign({}, obj, keyMirror({
  TODO_CREATE: null,
  TODO_UPDATE: null,
  TODO_COMPLETE: null,
  TODO_DELETE: null
}));

module.exports = obj;