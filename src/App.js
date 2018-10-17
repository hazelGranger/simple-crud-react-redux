import React, { Component } from 'react';
import './App.css';

import AddItem from './containers/AddItem'
import Keyword from './containers/Keyword'
import VisibilityFilter from './containers/VisibilityFilter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItem />
        <Keyword />
        <VisibilityFilter />
      </div>
    );
  }
}

export default App;
