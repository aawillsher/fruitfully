Meteor.publish('contacts', function () {
  var currentUser = this.userId;
  return Contacts.find({createdBy: currentUser})
});

Meteor.publish('fields', function () {
  var currentUser = this.userId;
  return FruitFields.find({createdBy: currentUser})
});

Meteor.publish('values', function () {
  var currentUser = this.userId;
  return FruitValues.find({})
});

Meteor.publish('events', function () {
  var currentUser = this.userId;
  return Events.find({createdBy: currentUser})
});

Meteor.publish('notes', function () {
  var currentUser = this.userId;
  return Notes.find({createdBy: currentUser})
});

Meteor.publish('relationships', function () {
  var currentUser = this.userId;
  return Relationships.find({createdBy: currentUser})
});
