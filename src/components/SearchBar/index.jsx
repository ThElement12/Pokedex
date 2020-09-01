import React, { Component } from 'react'

import '../../assets/css/Navigation-with-Search.css';


class Search extends Component {
  state = {
    search: ''
  }
  onChange = e => {
    this.setState({

    });
  }
  render() {
    return (
      <nav classname="navbar navbar-light navbar-expand-md navigation-clean-search">
        <div classname="container"><a classname="navbar-brand" href="/">Poké-World</a>
          <form classname="form-inline d-inline-flex justify-content-start" target="_self">
            <div classname="form-group">
              <i classname="fa fa-search"></i>
              <input classname="form-control search-field" type="search" id="search-field" name="search" placeholder="Pokémon..." />
            </div>
            <a classname="btn btn-light action-button" role="button" href="/">Search</a>
          </form>
        </div>
      </nav>
    )
  }
}

export default Search;