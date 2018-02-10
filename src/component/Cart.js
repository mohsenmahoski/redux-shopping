import React, { Component } from 'react';
import Product from './Product';

export default class Cart extends Component {
  render() {
    const {products,total,onCheckout} = this.props;
    const hasProducts = products.length > 0 ;
    const nodes = hasProducts ? (
             products.map(product=>
             	<Product 
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  key={product.id}
             	/>
             )
    	):(
             <em>Please Add Some Products</em>
    	);
    	
    return (
      <div className="Cart" >
	    {nodes}
	    <p>
	    	Total : {total}
	    </p>
	    <button onClick={onCheckout} disabled={ hasProducts ? '' : 'disabled' } >checkout</button>
      </div>
    );
  }
}