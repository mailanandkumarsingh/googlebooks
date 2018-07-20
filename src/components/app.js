import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import BookList from '../containers/book_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookList />
      </div>
    );
  }
}
