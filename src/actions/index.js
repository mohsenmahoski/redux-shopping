import shop from '../api/shop';
import {RP,AD} from '../constants/ActionTypes';

const reciveproducts = products=>({
       type: RP,
       products
});

export const getAllProducts = ()=>dispatch=>{
	shop.getProducts(products=>{ 
		             dispatch( reciveproducts(products) )
		         })
};

const addtocardunsafe = productId =>({
	type:AD,
    productId
});

export const addtocard = productId=>(dispatch,getState)=>{
	if ( getState().products.byId[productId].inventory > 0 ){
          dispatch(addtocardunsafe(productId)); 
	}
}

export const Checkout = products=>(dispatch , getState)=>{
	dispatch({
		type:'CHECKOUT_PRODUCTS'
	});
	shop.getProducts(products=>{ 
		             dispatch( reciveproducts(products) )
		         })
}