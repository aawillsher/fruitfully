Template.contact3.helpers({
  contacts: function () {
    return Contacts.find({});
  },
  fields: function () {
    return FruitFields.find({});
  },
  values: function () {
    var a = Router.current().params._id;
    return FruitValues.find({contact: a});
  },
  'topName': function () {
    var a = Router.current().params._id;
    return Contacts.findOne({_id:a}).firstName + ' ' + Contacts.findOne({_id:a}).lastName;
  },
  'formatTitle': function (a) {
    return FruitFields.findOne({_id: a}).fruitFieldTitle;
  },
  'results': function () {
    var array = [];
    var x;
    var f = FruitFields.find({}).fetch();
    for (x in f) {
      if (FruitValues.findOne({contact: this._id, fruit: f[x]._id})) {
        var r = FruitValues.findOne({contact: this._id, fruit: f[x]._id}).result;
        var b = {
          fruit: f[x]._id,
          result: r
        }
        array.push(b);
      } else {
        var b = {
          fruit: f[x]._id,
          result: 0
        }
        array.push(b);
      }
    }
    return array;
  }
});

Template.contact3.events({
  'click .updateFruitValue': function (event) {
    // set session variables for Contact, Fruit Field
    var c = Router.current().params._id; // contact

    var f = this.fruit;

    var r = this.result;

    Session.set('contact', c);
    Session.set('contact2', c);
    Session.set('fruit', f);
    Session.set('fruit2', f);
    Session.set('oldResult', r);
    Session.set('oldResult2', r)
    Router.go('/editFruitValue');
    return false;
  }
});
