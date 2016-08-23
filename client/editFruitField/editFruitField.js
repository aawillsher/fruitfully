Template.editFruitField.events({
  'submit .editFruitField': function (event) {
    var a = event.target.newFruitFieldTitle.value;
    var b = this._id;
    Meteor.call('editFruitFieldTitle', a, b);
    toastr.success('Fruit Field Title updated!');
    Router.go('/displayFruit');
    return false;
  },
  'click .deleteFruitField': function (event) {
    if (confirm('Are you sure you want to delete this Fruit Field? Deletion will permanently remove the Fruit Field and all associated values from your account.')) {
      var a = this._id;
      Meteor.call('deleteFruitField', a);
      Meteor.defer(function () {
        Router.go('/displayFruit');
      });
      toastr.success('Fruit Field deleted!');
      return false;
    }
  }
});
