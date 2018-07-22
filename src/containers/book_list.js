import React, { Component } from 'react';
import { connect } from 'react-redux';
import {parseString} from 'xml2js';
import _ from 'lodash';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '50%'
  }
};

// let bookActive;

class BookList extends Component {

  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      title: 'Test',
      desc: 'This is the Description',
      smallImageUrl: 'http://'
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event, x, y) {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }


  renderBooks(bookList, index, arr) {
    let bookActive = bookList;
    const title = bookList.volumeInfo.title;
    const desc = bookList.volumeInfo.description;
    const imageUrl = bookList.volumeInfo.imageLinks.thumbnail;
    const smallImageUrl = bookList.volumeInfo.imageLinks.smallThumbnail;
    const id = bookList.id;
    const author = bookList.volumeInfo.authors && bookList.volumeInfo.authors.toString();
    const bindObj = {
      title,
      desc,
      imageUrl,
      author,
      id
    };
    return (
      <tr key={id} onClick={(bookList, index, arr) => {
        this.setState({
          title: bookActive.volumeInfo.title,
          desc: bookActive.volumeInfo.description,
          smallImageUrl: bookActive.volumeInfo.imageLinks.smallThumbnail,
          modalIsOpen: true,
          previewLink: bookActive.volumeInfo.previewLink
        });
      }}>
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
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {this.props.books.map(this.renderBooks.bind(this))}
        </tbody>
      </table>
      <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
      >
        <h2 ref={subtitle => this.subtitle = subtitle}>{this.state.title}</h2>
        <img src={this.state.smallImageUrl} />
          <br></br>
          <br></br>
          <div>{this.state.title}</div>
          <p>
          {this.state.desc}
          </p>
          <br></br>
          <a href={this.state.previewLink} target="_blank">Preview </a>
          <br></br>
          <button onClick={this.closeModal}>close</button>
      </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // const weather = state.weather;
  return {books: state.books}; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(BookList)
