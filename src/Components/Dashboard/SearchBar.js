import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input class="form-control mr-sm-2" type="search" placeholder="Search..." onChange={(e) => this.props.onFilterTextChange(e.target.value)}
          value={this.props.filterText}
          aria-label="Search">
        </input>

        <label>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={(e) => this.props.onInStockOnlyChange(e.target.checked)}
          />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
}

export default SearchBar;
