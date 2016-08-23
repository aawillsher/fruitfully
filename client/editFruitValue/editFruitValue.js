Template.editFruitValue.helpers({
  'title': function (a) {
    return FruitFields.findOne({_id: Session.get('fruit')}).fruitFieldTitle
  },
  'contactName': function (a) {
    var b = Contacts.findOne({_id: Session.get('contact')});
    return b.firstName + ' ' + b.lastName
  },
  'value': function (a) {
    return Session.get('oldResult')
  }
});

Template.editFruitValue.events({
  'submit .editFruitValue': function (event) {
    var newResult = event.target.newFruitValue.value;
    var contact = Session.get('contact2');
    var fruit = Session.get('fruit2');
    Meteor.call('updateFruitValue', contact, fruit, newResult);
    toastr.success('Fruit Value updated!');
    Router.go('/contact/'+contact);
    return false;
  },
  'click .cancel': function (event) {
    var a = Session.get('contact2');
    Router.go('/contact3/' + a);
    return false;
  }

});
