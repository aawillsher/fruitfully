Template.addContactNote.events({
  'submit .addContactNoteForm': function (event) {
    var x = this._id;
    Meteor.call('createNote', event.target.noteContent.value, x, new Date());
    toastr.success('Note added!');
    Router.go('/contact/' + this._id);
    return false;
  },
  'click .cancel': function (event) {
    var x = Router.current().params._id;
    Router.go('/contact/' + x);
    return false;
  }
});

Template.addContactNote.helpers({
  'formatName': function (a) {
    if (Contacts.findOne({_id: a})) {return Contacts.findOne({_id: a}).firstName + ' ' + Contacts.findOne({_id: a}).lastName}
    else {return Events.findOne({_id: a}).eventTitle}
  }
})
