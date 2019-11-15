import React, { Component } from 'react';
import './App.css';
import ProductTable from './ProductTable';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronStore</h1>
        </header>
        <ProductTable products= {data}/>
      </div>
    );
  }
}
