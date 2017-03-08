const {
  TOGGLE_COLOR,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA,
} = require('../lib/constants').default;

const initialState = {
  color: 'blue',
  data: {
    loading: false,
    objects: [],
  },
};

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COLOR:
      return Object.assign({}, state, {
        color: state.color === 'red' ? 'blue' : 'red'
      });

    case EXAMPLE_REQUEST_START:
      return Object.assign({}, state, {
        data: assign({}, state.data, {
          loading: true,
        })
      });

    case EXAMPLE_REQUEST_DATA:
      return Object.assign({}, state, {
        data: assign({}, state.data, {
          loading: false,
          objects: action.data,
        })
      });

    default:
      return state;
  }
}