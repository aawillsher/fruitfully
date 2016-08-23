Template.contact4.helpers({

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
    var results = [];
    var results2 = [];
    var contacts = Contacts.find({}).fetch();
    var events = Events.find({}).fetch();
    var array = contacts.concat(events);
    var counter;
    while (array.length > 0) {
      counter = 0;
      while (counter < array.length) {
        var c = array.map(function (obj) {return obj._id});
        var id = c[counter];
        var s = Relationships.findOne({referral: id});
        if (s) {var s1 = s.source;} else {var s1 = false};
        var check = function (a, b) {return b.some(function (v) {return a.indexOf(v) >= 0;});};
        var r = Relationships.find({source: id}).fetch();
        if (r) {var r1 = r.map(function (obj) {return obj.referral}); var checkReferral = check(c, r1)}
        if ((s1 && r1 && !checkReferral) || (s1 && !r1)) {
          var fields = FruitFields.find({}).fetch();
          var k;
          for (k in fields) {
            itemReferralValue = 0;
            var l = 0;
            for (l in results) {
             if (results[l].item === id && results[l].fruit === fields[k]._id) {
               itemReferralValue = results[l].value;
               break;
             }
           }
           sourceReferralValue = 0;
           var m = 0;
           for (m in results) {
            if (results[m].item === s1 && results[m].fruit === fields[k]._id) {
              sourceReferralValue = results[m].value;
              break;
            }
          }
          itemFruitValue = 0;
          var y = FruitValues.findOne({$and: [{contact: id}, {fruit: fields[k]._id}]});
          if (y) {itemFruitValue = parseInt(y.result)};
          if (results.length === 0) {
            results.push({item: s1, fruit: fields[k]._id, value: itemFruitValue + itemReferralValue});
          } else {
            newValue = true;
            for (var r in results) {
              if (results[r].item === s1 && results[r].fruit === fields[k]._id) {
                newValue = false;
                break;
              }
            }
            if (newValue) {
              results.push({item: s1, fruit: fields[k]._id, value: itemFruitValue + itemReferralValue});
            } else {
              results[r].value += itemFruitValue + itemReferralValue;
            };
          };
        }
          array.splice(counter, 1);
        } else if ((!s1 && r1 && !checkReferral)) {
          array.splice(counter, 1);
        } else if (s1 && r1 && checkReferral) {
          counter++;
        } else if (!s1 && r1 && checkReferral) {
          counter++;
        } else if (!s1 && !r1) {
          array.splice(counter, 1); // case 2
        }
      }
    }
    for (var x in results) {
      if (results[x].item === Router.current().params._id) {
        results2.push(results[x]);
      }
    }
    return results2;
  }
  
});
