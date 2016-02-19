// Copyright (c) 2016 Consult with Mike, LLC | All rights reserved.
// Developer: Michael Perrenoud
// Website: http://consultwithmike.us

var $ = require('jquery');

module.exports = {
  del: del,
  get: get,
  post: post,
  patch: patch
};

function del(url) {
  return new Promise(function handleDelete(success, error) {
    $.ajax({
      url: url,
      type: 'DELETE',
      success: success,
      error: error
    })
  });
}

function get(url) {
  return new Promise(function handleGet(success, error) {
    $.ajax({
      url: url,
      dataType: 'json',
      success: success,
      error: error
    })
  });
}

function post(url, data) {
  return new Promise(function handlePost(success, error) {
    $.ajax({
      url: url,
      type: 'POST',
      data: data,
      success: success,
      error: error
    })
  });
}

function patch(url, data) {
  return new Promise(function handlePatch(success, error) {
    $.ajax({
      url: url,
      type: 'PATCH',
      data: data,
      success: success,
      error: error
    })
  });
}