import React, { Component } from 'react';
import Product from './Product';

export default class ProductItem extends Component {
  render() {
  	const {product,AddToCard} = this.props;
  	
    return (
      <div className="ProductItem">
	     <Product 
	         title={product.title} 
	         price={product.price} 
	      />
	     <button 
	         onClick={AddToCard}
	         disabled={product.inventory > 0 ? '' : 'disabled' }
	      >
	         {product.inventory > 0 ? 'AddToCard' : 'SOLD OUT' }
	      </button>
      </div>
    );
  }
}