import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps) {
    const { id } = this.props;
    return nextProps.id !== id;
  }

  render() {
    const { id } = this.props;

    console.log('RENDERED GIF ID ' + id);

    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} alt="homer" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
