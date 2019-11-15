import React, { Component } from 'react';
import './App.css';



export default class ProductRow extends Component {
  

render() {
    
    return (
        <div className="product" >
            <h4>{this.props.theProduct.name}</h4>
            <h4>{this.props.theProduct.price}</h4>
        </div>
    );
  }
}