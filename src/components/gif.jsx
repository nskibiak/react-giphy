import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    // TODO: change the state!
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} alt="" className="gif"
      onClick={this.handleClick}/>
    )
  }
}

export default Gif;
