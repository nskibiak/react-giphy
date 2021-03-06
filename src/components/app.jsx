import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'Hx9jDJ8h2fEEf1mtmxTOKTIP9B25k0ee';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
      // selectedGifId: 'xT9IgDEI1iZyb2wqo8'
    };

    this.search('chocolate');
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId, gifs } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.selectGif} gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
