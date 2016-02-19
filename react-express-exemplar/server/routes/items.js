// Copyright (c) 2016 Consult with Mike, LLC | All rights reserved.
// Developer: Michael Perrenoud
// Website: http://consultwithmike.us

module.exports = items;

function items(app) {
  var items = [
    {
      name: 'Ice Cream'
    },
    {
      name: 'Waffles'
    },
    {
      name: 'Candy',
      purchased: true
    },
    {
      name: 'Snarks'
    }
  ];

  app.route('/api/items')
    .get(getItems)
    .post(postItem);

  app.route('/api/items/:id?')
    .delete(deleteItem)
    .patch(patchItem);

  function deleteItem(req, res) {
    var index = locateItem({name: req.params.id});
    items.splice(index, 1);
    res.status(200).send();
  }

  function getItems(req, res) {
    res.send(items);
  }

  function patchItem(req, res) {
    var item = items[locateItem(req.body)];
    item.name = req.body.name;
    item.purchased = req.body.purchased;
    res.status(200).send();
  }

  function postItem(req, res) {
    items.push(req.body);
    res.status(201).send();
  }

  function locateItem(item) {
    return items.findIndex(function(o) {
      return o.name == item.name;
    });
  }
}
