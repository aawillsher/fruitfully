Template.editContactSource.helpers({
  'contacts': function () {
    var y = this._id;

    // function to exclude item from array by field
    var x = function(arr, attr, value) {
      var i = arr.length;
      while(i--) {
        if ( arr[i]
        && arr[i].hasOwnProperty(attr)
        && (arguments.length > 2 && arr[i][attr] === value)) {
          arr.splice(i,1);
        }
      }
      return arr;
    }

    // runs function from above and sorts by last name
    var a = x(Contacts.find({createdBy: Meteor.userId()}).fetch(), '_id', y);
    return a.sort(function(b,c) {
      if (b.lastName < c.lastName) {return -1}
      else {return 1}
    });

  },
  'events': function () {
    var a = Events.find({createdBy: Meteor.userId()}).fetch();

    // sorts list by title
    return a.sort(function(b,c) {
      if (b.eventTitle < c.eventTitle) {return -1}
      else {return 1}
    });
  }
});

Template.editContactSource.events({

  'submit .chooseContact': function (event) {
    var a = this._id;
    var b = event.target.chooseContact.value;
    Meteor.call('removeRelationship', a);
    Meteor.call('addRelationship', a, b);
    toastr.success('Source updated!');
    var a = Router.current().params._id;
    Router.go('/contact/'+a);
    return false;
  },
  'submit .chooseEvent': function (event) {
    var a = this._id;
    var b = event.target.chooseEvent.value;
    Meteor.call('removeRelationship', a);
    Meteor.call('addRelationship', a, b);
    toastr.success('Source updated!');
    var a = Router.current().params._id;
    Router.go('/contact/'+a);
    return false;
  },
  'click .cancel': function (event) {
    var a = Router.current().params._id;
    Router.go('/contact/' + a);
    return false;
  }
});
