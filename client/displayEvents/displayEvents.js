Template.displayEvents.helpers({

  'events': function () {
    return Events.find({})
  },

  'selector': function () {
    return {createdBy: Meteor.userId()}
  },
  'tableValues': function () {
    return Events.find({});
  },
  'settings': function () {
    return {
      rowsPerPage: 10,
      showFilter: true,
      fields: [
        {key: 'eventTitle', label: 'Event'},
        {key: 'eventLocation', label: 'Location'},
        {key: 'eventMunicipality', label: 'Municipality'},
        {key: 'eventProvince', label: 'Province'},
        {key: 'eventStart', label: 'Date', fn: function (value) {return moment(value).format('MMMM D, YYYY')}},
        {key: '_id', label: 'Display', fn: function (value) {
          return new Spacebars.SafeString('<a href = "/event/' + value + '">Display</a>')}}
      ]
    }
  }

});
