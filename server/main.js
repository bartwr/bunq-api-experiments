import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

import '../imports/server/requestUser.ts';
import '../imports/server/requestPayments.ts';
// import '../imports/server/sendPayments.ts';
