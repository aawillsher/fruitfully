Template.event2.helpers({

  contacts: function() {
    return Contacts.find().fetch().map(function(it){ return it.firstName + ' ' + it.lastName; });
  },

  tableValues1: function () {
    var a = Relationships.find({source: this._id}).fetch();
    var x = a.map((function(a) {return a.referral}));
    return Contacts.find({_id: { $in: x}}).fetch();
  },

  tableValues2: function () {
    var a = Relationships.find({source: this._id}).fetch();
    var x = a.map((function(a) {return a.referral}));
    return Events.find({_id: { $in: x}}).fetch();
  },

  settings1: function () {
    return {
      rowsPerPage: 5,
      showFilter: true,
      fields: [
        {key: 'firstName', label: 'First'},
        {key: 'lastName', label: 'Last'},
        {key: 'organization', label: 'Organization'},
        {key: '_id', label: 'Display', fn: function (value) {
          return new Spacebars.SafeString('<a href = "/contact/' + value + '">Display</a>')
        }}
      ]
    }
  },

  settings2: function () {
    return {
      rowsPerPage: 5,
      showFilter: true,
      fields: [
        {key: 'eventTitle', label: 'Event'},
        {key: 'eventLocation', label: 'Location'},
        {key: '_id', label: 'Display', fn: function (value) {
          return new Spacebars.SafeString('<a href = "/event/' + value + '">Display</a>')
        }}
      ]
    }
  },

  a: function() {
    if (Relationships.findOne({referral: this._id})) {return false} else {return true}
  },

  b: function () {
    var z = Relationships.findOne({referral: this._id});
    var y = z.source;
    if (Contacts.findOne({_id: y})) {return true} else {return false}
  },

  c: function() {
    if (Relationships.findOne({referral: this._id})) {return true} else {return false}
  },

  source: function () {
    if (Contacts.findOne({_id: Relationships.findOne({referral: this._id}).source})) {
      var a = Relationships.findOne({referral: this._id});
      var b = a.source;
      var c = Contacts.findOne({_id: b});
      return c.firstName + ' ' + c.lastName + '.';
    } else {
      var a = Relationships.findOne({referral: this._id});
      var b = a.source;
      var c = Events.findOne({_id: b});
      return c.eventTitle
    }
  },

  sourceId: function () {
    if (Contacts.findOne({_id: Relationships.findOne({referral: this._id}).source})) {
      var a = Relationships.findOne({referral: this._id});
      var b = a.source;
      var c = Contacts.findOne({_id: b});
      return c._id;
    } else {
      var a = Relationships.findOne({referral: this._id});
      var b = a.source;
      var c = Events.findOne({_id: b});
      return c._id;
    }
  },

  d: function() {
    if (Relationships.find({source: this._id}).count() != 0) {return false} else {return true}
  },

  e: function() {
    var a = Relationships.find({source: this._id});
    var x = a.map((function(a) {return a.referral}));
    var y = Contacts.find({_id: { $in: x}});
    return  y;
  },

  f: function () {
    var a = Relationships.find({source: this._id});
    var x = a.map((function(a) {return a.referral}));
    var y = Events.find({_id: { $in: x}});
    return  y;
  },

  g: function() {
    if (Relationships.find({source: this._id}).count() != 0) {return true} else {return false}
  }

});

Template.event2.events({
  'click .remove': function (event) {
    Meteor.call('removeRelationship', this._id);
  }
});
