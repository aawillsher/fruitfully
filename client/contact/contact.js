Template.contact.helpers({
  'notes': function () {
    var a = Router.current().params._id;
    return Notes.find({subject: a}, {sort: {createdAt: -1}});
  },
  tableValues1: function () {
    var a = Router.current().params._id;
    return Notes.find({subject: a}, {sort: {createdAt: -1}});
  },
  settings1: function () {
    return {
      rowsPerPage: 5,
      showFilter: true,
      fields: [
        {key: 'createdAt', label: 'Date', fn: function (value) {return moment(value).format('MMMM D, YYYY')}},
        {key: 'noteContent', label: 'Note', fn: function (value) {if (value === value.substr(0,45)) {
          return value
        } else {
          return value.substr(0,45) + '...'
        }}},
        {key: '_id', label: 'Display', fn: function (value) {
          return new Spacebars.SafeString('<a href = "/note/' + value + '">Display</a>')
        }},
        {key: '_id', label: 'Options', fn: function (value) {
          return new Spacebars.SafeString('<a href = "/contact/editNote/' + value + '">Edit or delete</a>')
        }},
      ]
    }
  }
});


Template.registerHelper('showNote', function (note) {
  if (note === note.substr(0,45)) {
    return note
  } else {
    return note.substr(0,45) + '...'
  }
});

Template.contact.events({
  'click .deleteContact': function (event) {
    if (confirm('Are you sure you want to delete this Contact? Deletion will permanently remove the Contact from your account.')) {
      Meteor.call('deleteContact', this._id);
      Meteor.defer(function () {
        Router.go('displayContacts');
      });
      return false;
    }
  },
});
