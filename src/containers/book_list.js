import React, { Component } from 'react';
import { connect } from 'react-redux';
import {parseString} from 'xml2js';
import _ from 'lodash';

class BookList extends Component {
  renderBooks(bookList) {
    const title = bookList[0].title[0];
    const imageUrl = bookList[0].image_url[0];
    const id = bookList[0].id[0]._;
    const author = bookList[0].author[0].name[0];
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
