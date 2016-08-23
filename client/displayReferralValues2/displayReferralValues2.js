Template.displayReferralValues2.helpers({

  'title': function () {
    return FruitFields.findOne({_id: Router.current().params._id}).fruitFieldTitle;
  },

  'settings': function () {
    return {
      rowsPerPage: 10,
      showFilter: true,
      fields: [
        {key: 'item', label: 'Contact or Event', fn: function (value) {
          if (Contacts.findOne({_id: value})) {return Contacts.findOne({_id: value}).firstName + ' ' + Contacts.findOne({_id: value}).lastName}
          else {return Events.findOne({_id:value}).eventTitle} }},
        {key: 'value', label: 'Direct Referral Value'}
      ]
    }
  },

  'tableValues': function () {
    var selectedFruit = Router.current().params._id;
    var c = Contacts.find({}).fetch();
    var e = Events.find({}).fetch();
    var array1 = c.concat(e);
    var array = array1.map(function(obj) {return obj._id});
    var results = [];
    var x = 0;
    for (x in array) {
      var relationships = Relationships.find({source: array[x]}).fetch();
      if (relationships) {
        var r = relationships.map(function(obj) {return obj.referral});
        var y = 0;
        var counter = 0;
        for (y in r) {
          var fv = FruitValues.findOne({contact: r[y], fruit: selectedFruit});
          if (fv) {
            var value = parseInt(fv.result);
            counter += value;
          }
        }
      }
      if (counter > 0) {
        results.push({item: array[x], value: counter});
      }

    }
    return results;
  }
});
