import axios from 'axios';
import {parseString} from 'xml2js';

const API_KEY = 'wP9YohPmVTl9W8XUJVVgFQ';
//const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `https://www.googleapis.com/books/v1/volumes?`;

export const FETCH_BOOK = 'FETCH_BOOK';

export function fetchBook(title, index) {
  console.log('What is the index ', index);
  const toIndex = index * 10 + 1;
  const url = `${ROOT_URL}q=${title}&startIndex=${toIndex}`;
  console.log('What is the URL : ', url);
  const request = axios.get(url);

  return {
    type: FETCH_BOOK,
    payload: request
  };
}
