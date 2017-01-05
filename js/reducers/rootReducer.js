import { combineReducers } from 'redux';
import postReducer from './postReducer';


// combines reducers for store

const rootReducer = combineReducers({
  posts: postReducer,

});

export default rootReducer;
