Template.displayReferralValues.helpers({

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
        {key: 'value', label: 'Referral Value'}
      ]
    }
  },

  'tableValues': function () {
    var selectedFruit = Router.current().params._id;
    var contacts = Contacts.find({}).fetch();
    var events = Events.find({}).fetch();
    var c = contacts.concat(events);
    var counter;
    var results = [];
    while (c.length > 0) {
      counter = 0;
      while (counter < c.length) {
        var c1 = c.map(function(obj) {return obj._id});
        var id = c1[counter];
        var s = Relationships.findOne({referral: id});
        if (s) {
          var s1 = s.source;
        } else {
          s1 = false;
        };
        var check = function (a, b) {
          return b.some(function (v) {
            return a.indexOf(v) >= 0;
          });
        };
        var r = Relationships.find({source: id}).fetch();
        var r1 = r.map(function(obj) {return obj.referral});
        if (s1 && check(c1, r1)) {
          counter++;
        } else if (s1 && !check(c1, r1)) {
            itemReferralValue = 0;
            var results1 = results.map(function(obj) {return obj.item});
            if (results1.includes(id)) {
              var place = results1.indexOf(id);
              itemReferralValue = results[place].value;
            }
            var itemFruitValue = 0;
            var y = FruitValues.findOne({$and: [{contact: id}, {fruit: selectedFruit}]});
            if (y) {
              itemFruitValue = parseInt(y.result)
            }
            if (results1.includes(s1)) {
              var place2 = results1.indexOf(s1);
              results[place2].value += itemReferralValue + itemFruitValue;
            } else {
              results.push({item: s1, value: itemFruitValue + itemReferralValue});
            }
            c.splice(counter, 1);
          } else if (!s1 & check(c1, r1)) {
            counter++;
          } else if (!s1 & !check(c1, r1)) {
            c.splice(counter, 1);
          }
        }
    }
    return results;
  }
});
