Contacts = new Mongo.Collection('contacts');
Events = new Mongo.Collection('events');
Notes = new Mongo.Collection('notes');
Relationships = new Mongo.Collection('relationships');
FruitFields = new Mongo.Collection('fruitFields');
FruitValues = new Mongo.Collection('fruitValues');

Contacts.allow({
  insert: function (userId, doc) {
    return !! userId;
  },
  update: function (userId, doc) {
    return doc.createdBy === Meteor.userId();
  },
  remove: function (userId, doc) {
    return doc.createdBy === Meteor.userId();
  }
});

Events.allow({
  insert: function (userId, doc) {
    return !! userId;
  },
  update: function (userId, doc) {
    return doc.createdBy === Meteor.userId();
  },
  remove: function (userId, doc) {
    return doc.createdBy === Meteor.userId();
  }
});

Contacts.attachSchema(new SimpleSchema ({

  firstName: {
    type: String,
    max: 30,
    label: 'First name'
  },

  lastName: {
    type: String,
    max: 30,
    label: 'Last name'
  },

  position: {
    type: String,
    label: 'Position (optional)',
    optional: true
  },

  organization: {
    type: String,
    label: 'Organization (optional)',
    optional: true
  },

  industry: {
    type: String,
    label: 'Industry (optional)',
    optional: true
  },

  description: {
    type: String,
    label: 'Organization description (optional)',
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea'
      }
    }
  },

  website: {
    type: String,
    label: 'Web site (optional)',
    optional: true
  },

  streetAddress: {
    type: String,
    label: 'Street address (optional)',
    optional: true
  },

  municipality: {
    type: String,
    label: 'Municipality (optional)',
    optional: true
  },

  province: {
    type: String,
    label: 'Province or territory (optional)',
    allowedValues: ['BC', 'AB', 'MB', 'SK', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'NU', 'NT', 'YT'],
    optional: true
  },

  postalCode: {
    type: String,
    regEx: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
    label: 'Postal Code (optional)',
    optional: true
  },

  telephone: {
    type: String,
    label: 'Telephone number (optional)',
    optional: true,
    regEx: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
  },

  cell: {
    type: String,
    label: 'Cell number (optional)',
    optional: true,
    regEx: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
  },

  fax: {
    type: String,
    label: 'Fax number (10 digits) (optional)',
    optional: true,
    regEx: /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
  },

  emailAddress: {
    type: String,
    label: 'Email address (optional)',
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },

  createdBy: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    optional: true,
    autoValue: function () {
      return Meteor.userId();
    }
  }

}));

Events.attachSchema(new SimpleSchema ({
  eventTitle: {
    type: String,
    max: 50,
    label: 'Title'
  },

  eventDescription: {
    type: String,
    optional: true,
    label: 'Description'
  },

  eventStart: {
    type: String,
    label: 'Start time',
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker'
      }
    }
  },

  eventEnd: {
    type: String,
    label: 'Finish time',
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker'
      }
    }
  },

  eventLocation: {
    type: String,
    label: 'Location (optional)',
    optional: true
  },

  eventAddress: {
    type: String,
    label: 'Street address (optional)',
    optional: true
  },

  eventMunicipality: {
    type: String,
    label: 'Municipality (optional)',
    optional: true
  },

  eventProvince: {
    type: String,
    label: 'Province or territory (optional)',
    allowedValues: ['BC', 'AB', 'MB', 'SK', 'ON', 'QC', 'NB', 'NS', 'PE', 'NL', 'NU', 'NT', 'YT'],
    optional: true
  },

  eventPostalCode: {
    type: String,
    regEx: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
    label: 'Postal Code (optional)',
    optional: true
  },

  eventContact: {
    type: String,
    optional: true
  },

  eventTelephone: {
    type: String,
    label: 'Telephone number (10 digits) (optional)',
    optional: true,
    regEx: /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
  },

  eventFax: {
    type: String,
    label: 'Fax number (10 digits) (optional)',
    optional: true,
    regEx: /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
  },

  eventEmailAddress: {
    type: String,
    label: 'Email address (optional)',
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },

  eventWebsite: {
    type: String,
    label: 'Website',
    optional: true
  },

  eventCost: {
    type: Number,
    label: 'Cost in $',
    optional: true
  },

  createdBy: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    optional: true,
    autoValue: function () {
      return Meteor.userId();
    }
  },

  eventColor: {
    type: String,
    optional: true,
    autoform: {
      type: 'hidden',
      label: false
    },
    autoValue: function () {
      return 'blue'
    }
  }

}));
