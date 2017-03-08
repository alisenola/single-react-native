import React from 'react';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = require('../lib/constants').default;


export function loginWithMobile(item) {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: item },
    })
  }
}

