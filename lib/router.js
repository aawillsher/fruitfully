Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'home',
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('notes')
      ]
    }
  });

  this.route('about', {
    path: '/about',
    template: 'about'
  });

  this.route('addContact', {
    path: '/addContact',
    template: 'addContact',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    }
  });

  this.route('addEvent', {
    path: '/addEvent',
    template: 'addEvent',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    }
  });

  this.route('displayFruit', {
    path: '/displayFruit',
    template: 'displayFruit',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('fields'),
        Meteor.subscribe('values')
      ]
    }
  });

  this.route('displayContacts', {
    path: '/displayContacts',
    template: 'displayContacts',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return Meteor.subscribe('contacts')
    }
  });

  this.route('displayEvents', {
    path: '/displayEvents',
    template: 'displayEvents',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return Meteor.subscribe('events')
    }
  });

  this.route('contact', {
    path: '/contact/:_id',
    data: function () {
      var currentContact = this.params._id;
      return Contacts.findOne({_id: currentContact})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('notes')
      ]
    }
  });

  this.route('fruit', {
    path: '/fruit/:_id',
    data: function () {
      var currentFruit = this.params._id;
      return FruitFields.findOne({_id: currentFruit})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('fields'),
        Meteor.subscribe('values')
      ]
    }
  })

  this.route('contact2', {
    path: '/contact2/:_id',
    data: function () {
      var currentContact = this.params._id;
      return Contacts.findOne({_id: currentContact})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('relationships')
      ]
    }
  });

  this.route('contact3', {
    path: '/contact3/:_id',
    data: function () {
      var currentContact = this.params._id;
      return Contacts.findOne({_id: currentContact})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('fields'),
        Meteor.subscribe('values')
      ]
    }
  });

  this.route('note', {
    path: '/note/:_id',
    data: function () {
      var currentNote = this.params._id;
      return Notes.findOne({_id: currentNote})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('notes')
      ]
    }
  });

  this.route('addContactNote', {
    path: '/contact/addNote/:_id',
    data: function () {
      var currentContact = this.params._id;
      return Contacts.findOne({_id: currentContact})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events')
      ]
    }
  });

  this.route('addEventNote', {
    path: '/event/addNote/:_id',
    data: function () {
      var currentEvent = this.params._id;
      return Events.findOne({_id: currentEvent})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events')
      ]
    }
  });

  this.route('editContactNote', {
    path: '/contact/editNote/:_id',
    data: function () {
      var currentNote = this.params._id;
      return Notes.findOne({_id: currentNote})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return Meteor.subscribe('notes')
    }
  });

  this.route('editEventNote', {
    path: '/event/editNote/:_id',
    data: function () {
      var currentNote = this.params._id;
      return Notes.findOne({_id: currentNote})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return Meteor.subscribe('notes')
    }
  });

  this.route('editContactSource', {
    path: '/contact/editSource/:_id',
    data: function () {
      var currentContact = this.params._id;
      return Contacts.findOne({_id: currentContact})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events')
      ]
    }
  });

  this.route('editEventSource', {
    path: '/event/editSource/:_id',
    data: function () {
      var currentEvent = this.params._id;
      return Events.findOne({_id: currentEvent})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events')
      ]
    }
  });

  this.route('displayReferralValues', {
    path: '/displayReferralValues/:_id',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('fields'),
        Meteor.subscribe('values'),
        Meteor.subscribe('relationships')
      ]
    }
  });

  this.route('displayReferralValues2', {
    path: '/displayReferralValues2/:_id',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('fields'),
        Meteor.subscribe('values'),
        Meteor.subscribe('relationships')
      ]
    }
  });

  this.route('contact4', {
    path: '/contact4/:_id',
    data: function () {
      var currentContact = this.params._id;
      return Contacts.findOne({_id: currentContact})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('relationships'),
        Meteor.subscribe('values'),
        Meteor.subscribe('fields')
      ]
    }
  });

  this.route('contact5', {
    path: '/contact5/:_id',
    data: function () {
      var currentContact = this.params._id;
      return Contacts.findOne({_id: currentContact})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('relationships'),
        Meteor.subscribe('values'),
        Meteor.subscribe('fields')
      ]
    }
  });

  this.route('event', {
    path: '/event/:_id',
    data: function () {
      var currentEvent = this.params._id;
      return Events.findOne({_id: currentEvent})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return Meteor.subscribe('events')
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('events'),
        Meteor.subscribe('notes')
      ]
    }
  });

  this.route('event2', {
    path: '/event2/:_id',
    data: function () {
      var currentEvent = this.params._id;
      return Events.findOne({_id: currentEvent})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('relationships')
      ]
    }
  });

  this.route('event4', {
    path: '/event4/:_id',
    data: function () {
      var currentEvent = this.params._id;
      return Events.findOne({_id: currentEvent})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('relationships'),
        Meteor.subscribe('values'),
        Meteor.subscribe('fields')
      ]
    }
  });

  this.route('event5', {
    path: '/event5/:_id',
    data: function () {
      var currentEvent = this.params._id;
      return Events.findOne({_id: currentEvent})
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('events'),
        Meteor.subscribe('relationships'),
        Meteor.subscribe('values'),
        Meteor.subscribe('fields')
      ]
    }
  });

  this.route('editContact', {
    path: '/contact/edit/:_id',
    template: 'editContact',
    data: function () {
      var currentContact = this.params._id;
      return Contacts.findOne({_id: currentContact});
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return Meteor.subscribe('contacts')
    }
  });

  this.route('editEvent', {
    path: '/event/edit/:_id',
    template: 'editEvent',
    data: function () {
      var currentEvent = this.params._id;
      return Events.findOne({_id: currentEvent});
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return Meteor.subscribe('events')
    }
  });

  this.route('createNewFruitField', {
    path: '/createNewFruitField',
    template: 'createNewFruitField',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return Meteor.subscribe('fields')
    }
  });

  this.route('editFruitField', {
    path: '/fruit/edit/:_id',
    template: 'editFruitField',
    data: function () {
      var currentFruitField = this.params._id;
      return FruitFields.findOne({_id: currentFruitField});
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      var a = this.params._id;
      return Meteor.subscribe('fields')
    }
  });

  this.route('editFruitValue', {
    path: '/editFruitValue',
    template: 'editFruitValue',
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    },
    subscriptions: function () {
      return [
        Meteor.subscribe('contacts'),
        Meteor.subscribe('fields'),
        Meteor.subscribe('values')
      ]
    }
  });

});
