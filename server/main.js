Meteor.methods({

  'addRelationship': function (a, b) {
    Relationships.insert({
      source: b,
      referral: a,
      createdBy: Meteor.userId()
    });
  },

  'removeRelationship': function (a) {
    Relationships.remove({referral: a})
  },

  'deleteContact': function (a) {
    Relationships.remove({source: a});
    Relationships.remove({referral: a});
    Contacts.remove({_id: a});
    Notes.remove({subject: a});
  },

  'deleteEvent': function (a) {
    Relationships.remove({source: a});
    Relationships.remove({referral: a});
    Events.remove({_id: a});
    Notes.remove({subject: a});
  },

  'createNote': function(a, b, c) {
    Notes.insert({
      noteContent: a,
      subject: b,
      createdAt: c,
      createdBy: Meteor.userId()
    })
  },

  'createEventNote': function (a, b, c) {
    Notes.insert({
      noteContent: a,
      subject: b,
      createdAt: c,
      createdBy: Meteor.userId()
    });
  },

  'deleteNote': function (a) {
    Notes.remove({_id: a})
  },

  'deleteEventNote': function (a, b) {
    Notes.update({
      _id: a
    }, {
      $set: {
        noteContent: b
      }
    });
  },

  'editNote': function (a, b) {
    Notes.update({
      _id: a
    }, {
      $set: {
        noteContent: b
      }
    });
  },

  'createNewFruitField': function (a) {
    FruitFields.insert({fruitFieldTitle: a, createdBy: Meteor.userId()});
  },

  'editFruitFieldTitle': function (a, b) {
    FruitFields.update({_id: b}, {$set: {fruitFieldTitle: a}});
  },

  'deleteFruitField': function (a) {
    FruitFields.remove({_id: a});
    FruitValues.remove({fruit: a});
  },

  'updateFruitValue': function (contact, fruitField, newResult) {
    FruitValues.remove({contact: contact, fruit: fruitField});
    FruitValues.insert({
      contact: contact,
      fruit: fruitField,
      result: newResult,
      createdBy: Meteor.userId()
    });
  },

  'createFruitValue': function (contact, fruitField, result) {
    FruitValues.insert({
      contact: contact,
      fruit: fruitField,
      result: 0,
      createdBy: Meteor.userId()
    });
  }

});
