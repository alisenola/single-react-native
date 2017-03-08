const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = require('../lib/constants').default;

const initialState = {
  user: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user:   action.payload.user,
      });
      break;
    default:
      return state;
  }
}
