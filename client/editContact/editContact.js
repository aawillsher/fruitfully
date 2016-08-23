AutoForm.hooks({
  editContact: {
    onSuccess: function(doc) {
      toastr.success('Contact updated!');
      var a = Router.current().params._id;
      Router.go('/contact/'+a);
    }
  }
});

Template.editContact.events({
  'click .cancel': function (event) {
    var a = Router.current().params._id;
    Router.go('/contact/' + a);
    return false;
  }
});
