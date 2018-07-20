import React, { Component } from 'react';
import { connect } from 'react-redux';
import {parseString} from 'xml2js';
import _ from 'lodash';

class BookList extends Component {
  renderBooks(bookList) {
    console.log('Render Books --> ', bookList);
    const title = bookList.volumeInfo.title;
    const imageUrl = bookList.volumeInfo.imageLinks.thumbnail;
    const id = bookList.id;
    const author = bookList.volumeInfo.authors[0];
    return (
        <tr key={id}>
          <td>
            <div>
              <img src={imageUrl} />
              <p>{title}</p>
            </div>
          </td>
          <td>{author}</td>
        </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {this.props.books.map(this.renderBooks)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  // const weather = state.weather;
  return {books: state.books}; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(BookList)
