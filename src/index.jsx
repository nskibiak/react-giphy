import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';



const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Steve" />, root);
}
