AutoForm.hooks({
  editEvent: {
    onSuccess: function(doc) {
      toastr.success('Event updated!');
      var a = Router.current().params._id;
      Router.go('/event/'+a);
    }
  }
});

Template.editEvent.events({
  'click .cancel': function (event) {
    var a = Router.current().params._id;
    Router.go('/event/' + a);
    return false;
  }
});
