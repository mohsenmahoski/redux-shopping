import React , {Component} from 'react';
import Cart from '../component/Cart';
import {connect} from 'react-redux';
import {getCartProducts,getTotal} from '../reducers';
import {Checkout} from '../actions';

class CartContainer extends Component{
	render(){
		const {products,total,Checkout} = this.props;
		return(

                  <div className="CartContainer">
                  	<Cart products={products} total={total} onCheckout={ ()=>Checkout(products) } />
                  </div>

			  );
	}
}

const mapStateToProps = (state)=>({
   products : getCartProducts(state),
   total : getTotal(state),
})


export default connect(mapStateToProps,{Checkout})(CartContainer);