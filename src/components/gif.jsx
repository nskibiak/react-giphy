import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;

    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} alt="homer" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
