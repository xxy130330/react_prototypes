import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

import Header from './component/Header';
import TopBlogPost from './component/Top_blog_post';
import SliceMenu from './component/SliceMenu';

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
          <SliceMenu />
          <TopBlogPost />
      </div>
    );
  }
}

export default App;
