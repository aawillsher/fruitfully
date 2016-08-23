Template.editContactNote.events({
  'submit .editNoteForm': function (event) {
    var a = this._id;
    var b = event.target.noteContent.value;
    Meteor.call('editNote', a, b);
    toastr.success('Note updated!');
    var a = Router.current().params._id;
    var b = Notes.findOne({_id: a}).subject;
    Router.go('/contact/'+b);
    return false;
  },
  'click .delete': function (event) {
    var noteId = this._id;
    if (confirm('Are you sure you want to delete this note?')) {
      Meteor.call('deleteNote', noteId);
      toastr.success('Note deleted!');
      var a = Router.current().params._id;
      var b = Notes.findOne({_id: a}).subject;
      Router.go('/contact/'+b);
      return false;
    } else {
      toastr.success('Deletion cancelled!');
      var a = Router.current().params._id;
      var b = Notes.findOne({_id: a}).subject;
      Router.go('/contact/'+b);
      return false;
    }
  },
  'click .cancel': function (event) {
    var a = Router.current().params._id;
    var b = Notes.findOne({_id: a}).subject;
    Router.go('/contact/'+b);
    return false;
  }
});
