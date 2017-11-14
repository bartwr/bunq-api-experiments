import React from 'react';
import {mount} from 'react-mounter';

import Dashboard from '../imports/Dashboard/Dashboard.jsx';

FlowRouter.route('/', {
  action: function(params, queryParams) {
    console.log("Yeah! We are on the post:", params.postId);
    mount(Dashboard, {})
  }
});
