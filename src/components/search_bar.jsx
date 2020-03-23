import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleChange = ({ event, searchFunction }) => {
    searchFunction(event.target.value);
    this.setState(this.state.term = event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.term}
        className="form-search form-control"
        onChange={this.handleChange}
      />
    );
  }

}

export default SearchBar;
