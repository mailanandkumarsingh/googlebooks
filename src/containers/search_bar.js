import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchBook } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      term: '',
      startIndex: 0,
      activePage: 0
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchBook(this.state.term, this.state.startIndex);
    //this.setState({ term: '' });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState(
      {
        activePage: pageNumber,
        // startIndex: pageNumber
      }
    );
    this.props.fetchBook(this.state.term, pageNumber);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onFormSubmit } className="input-group">
          <input
            placeholder="Search for Books by Title"
            className="form-control"
            id="title"
            value={ this.state.term }
            onChange={ this.onInputChange }
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
          
        </form>
        <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={150}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
          />
      </div>
      
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBook }, dispatch);
}

// export default SearchBar;
export default connect(null, mapDispatchToProps)(SearchBar);
