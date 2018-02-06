import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

import Header from './component/Header';


class App extends Component {
  constructor(props){
    super(props);
    this.data = props.data;
  }
  render() {
    console.log('data: ',data);
    return (
      <div className="App">
          <Header />
      </div>
    );
  }
}

export default App;
