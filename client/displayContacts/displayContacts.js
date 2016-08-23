Template.displayContacts.helpers({

  'contacts': function () {
    return Contacts.find({});
  },

  'selector': function () {
    return {createdBy: Meteor.userId()}
  },

  'tableValues': function () {
    return Contacts.find({});
  },

  'settings': function () {
    return {
      rowsPerPage: 10,
      showFilter: true,
      fields: [
        {key: 'firstName', label: 'First name'},
        {key: 'lastName', label: 'Last name'},
        {key: 'position', label: 'Position'},
        {key: 'organization', label: 'Organization'},
        {key: 'municipality', label: 'City'},
        {key: 'province', label: 'Province'},
        {key: '_id', label: 'Display', fn: function (value) {
          return new Spacebars.SafeString('<a href = "/contact/' + value + '">Display</a>')}}
      ]
    }
  }

});
