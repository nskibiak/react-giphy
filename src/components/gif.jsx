import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = 'https://media2.giphy.com/media/d2ZfqZY5eSCR0rza/giphy.gif?cid=ecf05e47dc3693d699355d2e68670c6697e3ca036da69c4e&rid=giphy.gif'
    return (
      <img src={src} alt="" className="gif"/>
    )
  }
}

export default Gif;
