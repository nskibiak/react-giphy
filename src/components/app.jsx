import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'd2ZfqZY5eSCR0rza'
    }
  }
  render() {
    const gifs = [
      {id: 'd2ZfqZY5eSCR0rza'},
      {id: 'xT9IgDEI1iZyb2wqo8'}
    ]

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
