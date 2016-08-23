Template.displayFruit.helpers({
  'fruit': function() {
    return FruitFields.find({createdBy: Meteor.userId()});
  }
});
