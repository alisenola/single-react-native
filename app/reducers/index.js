import { combineReducers } from 'redux';
import auth from './auth';
import main from './main';

const rootReducer = combineReducers({
  auth,
  main,
});

export default rootReducer;
