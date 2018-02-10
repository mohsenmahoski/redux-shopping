import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductList from '../component/ProductList';
import ProductItem from '../component/ProductItem';
import {addtocard} from '../actions';

class ProductsContainer extends Component {
  render() {
  
  	const {products,addtocard}= this.props;
    return (
      <div className="ProductsContainer" >
	        <ProductList title='products'>
	        	<ul>
	        		{Object.keys(products).map(productKey=>
	        		    <ProductItem
	        		     AddToCard={()=>addtocard(productKey)} 
	        		     key={productKey} 
	        		     product={products[productKey]} 
	        		     /> )	 
	        	    }
	        	</ul>
	        </ProductList>
      </div>
    );
  }
}

const mapStateToProps = state=>{
	return{
		products:state.products.byId
	}
}

export default connect(mapStateToProps, { addtocard } )(ProductsContainer);