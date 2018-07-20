import { FETCH_BOOK } from '../actions/index';
import {parseString} from 'xml2js';
import _ from 'lodash';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_BOOK:
      // return state.concat([ action.payload.data ]);
      console.log('What is the book payload ---> ', action.payload.data.items);
      let bookList = action.payload.data.items;
      /*parseString(action.payload.data, (err, result) => {
	      const pullBook = result && result.GoodreadsResponse.search[0].results[0].work
	      bookList =  _.map(pullBook, 'best_book');
  	  });*/
      return bookList;
  }

  return state;
}
