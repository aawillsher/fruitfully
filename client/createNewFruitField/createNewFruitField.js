Template.createNewFruitField.events({
  'submit .createNewFruitFieldForm': function (event) {

    var a = event.target.fruitFieldTitle.value;
    Meteor.call('createNewFruitField', a);
    toastr.success('New Fruit Field added!');
    Router.go('/displayFruit');
    return false;
  }
});
