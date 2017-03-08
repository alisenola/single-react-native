import React from 'react';

const {
  TOGGLE_COLOR,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA,
} = require('../lib/constants').default;

import {
  exampleRequest,
} from '../requester';

/** Toggle the hello world color */
export function toggleColor() {
  return dispatch => {
    dispatch({
      type: TOGGLE_COLOR,
      payload: { user: 'test' },
    })
  };
}

/** An example async action using the request module */
export function exampleAsync() {
  return dispatch => {
    dispatch({ type: EXAMPLE_REQUEST_START });
    exampleRequest().then(data => {
      dispatch({ type: EXAMPLE_REQUEST_DATA, data: data });
    });
  };
}

