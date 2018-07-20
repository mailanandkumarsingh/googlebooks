import { combineReducers } from 'redux';
import BookReducer from './reducer_book';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;
