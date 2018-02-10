import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
// import {connect} from 'react-redux';
// import {getAllProducts} from '../actions';
import CartContainer from './CartContainer';



export default class App extends Component {
  
  // componentDidMount(){
  //   this.props.getAllProducts();
  // }
  render() {
    return (
	      <div className="App">
           <h1>Shopping Cart</h1>
           <hr/>
	         <ProductsContainer />
           <h1>Your Cart</h1>
           <hr/>
           <CartContainer />
	      </div>
    );
  }
}



// export default connect(null,{getAllProducts})(App);
