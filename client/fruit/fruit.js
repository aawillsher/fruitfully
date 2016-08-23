Template.fruit.helpers({

  'results': function () {
    var array = [];
    var x;
    var counter = 0;
    var c = Contacts.find({}).fetch();
    for (x in c) {
      if (FruitValues.findOne({contact: c[x]._id, fruit: this._id})) {
        var r = FruitValues.findOne({contact: c[x]._id, fruit: this._id}).result;
        var b = {
          contact: c[x]._id,
          result: r
        }
        array.push(b);
        counter++;

      } else {
        var b = {
          contact: c[x]._id,
          result: 0
        }
        array.push(b);
        counter++;

      }
    }
    return array;
  },

  'fruit': function () {
    return FruitValues.find({fruit: this._id}, {sort: {result: -1}});
  },
  'fruitTitle': function () {
    var a = FruitFields.findOne({_id: this._id});
    return a.fruitFieldTitle;
  },
  'findContact': function (val) {
    var a = Contacts.findOne({_id: val});
    return a.firstName + ' ' + a.lastName;
  },
  tableValues1: function () {
    var array = [];
    var x;
    var counter = 0;
    var c = Contacts.find({}).fetch();
    for (x in c) {
      if (FruitValues.findOne({contact: c[x]._id, fruit: this._id})) {
        var r = FruitValues.findOne({contact: c[x]._id, fruit: this._id}).result;
        var b = {
          contact: c[x]._id,
          result: r
        }
        array.push(b);
        counter++;

      } else {
        var b = {
          contact: c[x]._id,
          result: 0
        }
        array.push(b);
        counter++;

      }
    }
    return array;
  },
  settings1: function () {
    return {
      rowsPerPage: 10,
      showFilter: true,
      fields: [
        {key: 'contact', label: 'First name', fn: function (value) {return Contacts.findOne({_id: value}).firstName}},
        {key: 'contact', label: 'Last name', fn: function (value) {return Contacts.findOne({_id: value}).lastName}},
        {key: 'result', label: 'Fruit Value', fn: function (value) {return parseInt(value)}}
      ]
    }
  }
});
