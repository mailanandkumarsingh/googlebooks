import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
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

  handlePageChange({selected}) {
    console.dir(selected);
    this.setState(
      {
        activePage: selected,
        // startIndex: pageNumber
      }
    );
    this.props.fetchBook(this.state.term, selected);
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
        <ReactPaginate previousLabel={"previous"}
           nextLabel={"next"}
           breakLabel={<a href="">...</a>}
           breakClassName={"break-me"}
           pageCount={50}
           marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={this.handlePageChange}
           containerClassName={"pagination"}
           subContainerClassName={"pages pagination"}
           activeClassName={"active"} 
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
