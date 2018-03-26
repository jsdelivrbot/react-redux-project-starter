import React, { Component } from 'react';



export default class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state={ term: ''};
  }

  onInputChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecase in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={(e) => this.onInputChange(e)}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
