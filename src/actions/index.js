import axios from 'axios';
import {parseString} from 'xml2js';

const API_KEY = 'wP9YohPmVTl9W8XUJVVgFQ';
//const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `https://www.goodreads.com/search/index.xml?key=${API_KEY}`;

export const FETCH_BOOK = 'FETCH_BOOK';

export function fetchBook(title) {
  const url = `${ROOT_URL}&q=${title}`;
  const request = axios.get(url);

  return {
    type: FETCH_BOOK,
    payload: request
  };
}
