Template.home.helpers({
  'contacts': function () {
    return Contacts.find({})
  },
  'events': function () {
    return Events.find({})
  },
  'loggedIn': function () {
    return Meteor.userId();
  }
});

Template.registerHelper('formatDate', function (date) {
  return moment(date).format('MMMM D, YYYY, h:mm a')
});

Template.registerHelper('formatDateShort', function (date) {
  return moment(date).format('MMMM D, YYYY')
});

Template.home.onRendered(function () {

  $('#event-calendar').fullCalendar({

    fixedWeekCount: false,
    timezone: 'local',
    eventLimit: true,
    aspectRatio: 1.6,

    eventClick: function (event) {
      if (event.url) {
        Router.go(event.url);
      }
    },

    events: function (start, end, timezone, callback) {
      var events = [];

      firstEvents = Events.find({createdBy: Meteor.userId()});
      firstEvents.forEach(function(evt) {
        event = {id:evt._id, title:evt.eventTitle, start:evt.eventStart, end:evt.eventEnd, color: evt.eventColor, url: '/event/'+ evt._id};
        events.push(event);
      });

      secondEvents = Notes.find({createdBy: Meteor.userId()});
      secondEvents.forEach(function(evt) {

        if (Events.findOne({_id: evt.subject})) {
          var a = Events.findOne({_id: evt.subject});
          event = {id: evt._id, title: 'note: ' + a.eventTitle, start: evt.createdAt, color: 'green', url: '/event/'+ a._id};
          events.push(event);
        } else if (Contacts.findOne({_id: evt.subject})) {
          var a = Contacts.findOne({_id: evt.subject});
          event = {id: evt._id, title: 'note: ' + a.firstName + ' ' + a.lastName, start: evt.createdAt, color: 'red', url: '/contact/' + a._id};
          events.push(event);
        }

      })

      callback(events);
    }

  });
});

Tracker.autorun( () => {
    Events.find().fetch();
    Contacts.find().fetch();
    Notes.find().fetch();
    $( '#calendar' ).fullCalendar( 'refetchEvents' );
  });
