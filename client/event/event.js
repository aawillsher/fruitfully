Template.event.helpers({
  'notes': function () {
    return Notes.find({subject: this._id}, {sort: {createdAt: -1}});
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
          return new Spacebars.SafeString('<a href = "/event/editNote/' + value + '">Edit or delete</a>')
        }},
      ]
    }
  }
});

Template.event.events({
  'click .delete': function (event) {
    var noteId = this._id;
    if (confirm('Are you sure you want to delete this note?')) {
      Meteor.call('deleteNote', noteId);
      toastr.success('Note deleted!');
      return false;
    } else {
      toastr.success('Deletion cancelled!');
      return false;
    }
  },
  'click .deleteEvent': function (event) {
    if (confirm('Are you sure you want to delete this Event? Deletion will permanently remove the Event from your account.')) {
      Meteor.call('deleteEvent', this._id);
      Meteor.defer(function () {
        Router.go('/displayEvents');
      });
      return false;
    }
  }
});
