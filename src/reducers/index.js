import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

const reducer = combineReducers({
   products,cart
});

export default reducer;

export const getCartProducts = state=>
		state.cart.addedIds.map(id=>({
			...state.products.byId[id],
			quantity : state.cart.quantitiyIds[id] || 0
		}));

const getPrice = ( state , id )=> state.products.byId[id].price ;
const quantityItem = ( state , item )=>state.cart.quantitiyIds[item] ; 

export const getTotal = state=>
    state.cart.addedIds.reduce((total , item )=>total + getPrice( state , item )  * quantityItem( state , item ) || 0,0).toFixed(2);