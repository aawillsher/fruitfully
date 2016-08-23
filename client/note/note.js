Template.note.helpers({
  'formatName': function (a) {
    if (Contacts.findOne({_id:a})) {return Contacts.findOne({_id: a}).firstName + ' ' + Contacts.findOne({_id: a}).lastName}
    else {return Events.findOne({_id:a}).eventTitle}
  }
});

Template.note.events({
  'click .back': function (event) {
    var a = Router.current().params._id;
    var b = Notes.findOne({_id: a}).subject;
    if (Contacts.findOne({_id: b})) {
      Router.go('/contact/'+b)
    } else {
      Router.go('/event/'+b)
    };
    return false;
  }
});
