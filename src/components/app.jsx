import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'd2ZfqZY5eSCR0rza'
    }

    this.search('homer thinking');
  }

  search = (query) => {
    giphy('Hx9jDJ8h2fEEf1mtmxTOKTIP9B25k0ee').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
      gifs: result.data
      });
    }
  );
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
