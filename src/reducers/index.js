import { combineReducers } from 'redux';
import Users from './Users';
import Profile from './Profile';

const rootReducer = combineReducers({
  Users,
  Profile
});

export default rootReducer;
