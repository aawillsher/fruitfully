Template.addEventNote.events({
  'submit .addEventNoteForm': function (event) {
    var x = this._id;
    Meteor.call('createNote', event.target.noteContent.value, x, new Date());
    toastr.success('Note added!');
    Router.go('/event/' + this._id);
    return false;
  },
  'click .cancel': function (event) {
    var x = Router.current().params._id;
    Router.go('/event/' + x);
    return false;
  }
});

Template.addEventNote.helpers({
  'formatName': function (a) {
    if (Contacts.findOne({_id: a})) {return Contacts.findOne({_id: a}).firstName + ' ' + Contacts.findOne({_id: a}).lastName}
    else {return Events.findOne({_id: a}).eventTitle}
  }
})
