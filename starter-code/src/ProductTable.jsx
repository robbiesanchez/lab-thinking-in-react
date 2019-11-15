import React, { Component } from 'react';
import './App.css';
import ProductRow from './ProductRow';




export default class ProductTable extends Component {
  

    constructor(props) {

        super(props)
        this.state = {
            name: "",
            price: 0,
            newProducts: props.products
        }

        console.log(this.props.products);
    }




    typeStuff = (e) => { 


        let newProductsClone = [...this.state.newProducts]

        let filteredProducts = newProductsClone.filter(eachProduct => {
            return eachProduct.name.toLowerCase().includes(e.target.value.toLowerCase())
        })

        
        this.setState({
            "newSearch": e.target.value,
            "newProducts": filteredProducts
            }, ()=>{
            console.log(this.state)
            })    
        
        e.preventDefault();
    }

    
    showProducts = () => {

        return this.state.newProducts.map((eachProduct,i)=>{
            return (
                <div>
                <ProductRow 
                    key= {i}
                    theProduct= {eachProduct}
                />    
                </div>
            )

        })

    }

   


    render() {

    return (
      <div>
     <SearchBar typeStuffForChild={this.typeStuff} />
      <div className="title">
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      {this.showProducts()}
      </div>
    );
  }
}




const SearchBar = (props) => {
    return (
    <div >
    <h3>Search</h3>
    <form>
        <input className="search-bar" type="text" name="search" onChange={props.typeStuffForChild}> 
        </input>
    </form>
    </div>
  )
}


