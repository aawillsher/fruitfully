Template.event5.helpers({

  'formatName': function (a) {
    if (Contacts.findOne({_id:a})) {return Contacts.findOne({_id: a}).firstName + ' ' + Contacts.findOne({_id: a}).lastName}
    else {return Events.findOne({_id:a}).eventTitle}
  },

  'name': function () {
    var a = Router.current().params._id;
    return Contacts.findOne({_id:a}).firstName + ' ' + Contacts.findOne({_id:a}).lastName;
  },

  'formatFruit': function (a) {
    return FruitFields.findOne({_id: a}).fruitFieldTitle;
  },

  'results': function () {
    var c = Router.current().params._id;
    var results = [];
    var a = FruitFields.find({}).fetch();
    var j;
    for (j in a) {
      var selectedFruit = a[j]._id;
      var relationships = Relationships.find({source: c}).fetch();
      if (relationships) {
        var r = relationships.map(function (obj) {return obj.referral});
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
      results.push({fruit: selectedFruit, value: counter});
    }
    return results;
  }
})
