import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    console.log(`clicked ${event.target.id}`);
    this.props.searchFunction(event.target.id);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" id={this.props.id}
        onClick={this.handleClick}/>
    );
  }
}

export default Gif;
