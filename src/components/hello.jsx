import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello, {name}
//     </div>
//   );
// };

class Hello extends Component {
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
    // BUILD AND RETURN HTML
    return (
      <div className={this.state.clicked ? 'clicked' : null }
        onClick={this.handleClick}>
        Hello {this.props.name}
      </div>
    )
  }
}
