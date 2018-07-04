import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  state = {
    inputValue: ''
  };

  handleSearchClicked = e => {
    if (this.state.inputValue) {
      this.props.handleSearch(this.state.inputValue);
    }
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className="search">
        <div className="search-line">
          <input className="search-input" onChange={this.handleInputChange} type="text" value={this.state.inputValue} />
          <button className="search-button" onClick={this.handleSearchClicked}>Search</button>
        </div>
        <div>
          {this.props.thumb_url && <img className="search-img"  alt="artistimg" src={this.props.thumb_url} />}
          {this.props.name && <label className="search-label">{`Artist Name: ${this.props.name}`}</label>}
        </div>
      </div>
    );
  }
}

export default Search;
