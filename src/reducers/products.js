import {RP,AD} from '../constants/ActionTypes';
import { combineReducers } from 'redux';


const products = (state , action )=>{
         switch(action.type){
             case AD :
              return{
             	...state,
             	inventory:state.inventory-1 
             }
             default : 
              return state;
         }
	}
const byId = (state={},action)=>{
	
	switch(action.type){
		case  RP :
			return{
				...state,
				...action.products.reduce((obj , product)=>{
	                obj[product.id] = product;
					return obj;
				},{})
			} 
		default : 
		  const {productId} = action;
		  if (productId){
		  	return{
		  		...state,
		  		[productId] : products(state[productId],action)
		  	}
		  }
		  return state;
	}
}




export default combineReducers({
   byId
});