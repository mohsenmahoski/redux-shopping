import {AD} from '../constants/ActionTypes';

const initialState = {
	addedIds:[],
	quantitiyIds:{}
}

const addedIds = (state = initialState.addedIds , action )=>{
	switch(action.type){
       case AD :
         if ( state.indexOf(action.productId) !== -1 ){
              return state;
         } 
         return [...state,action.productId];
       default :
         return state;
	}
}
const quantitiyIds = (state = initialState.quantitiyIds , action )=>{
	switch(action.type){
       case AD :
         const {productId} = action;
         return {...state , [productId] : ( state[productId] || 0 )+1 }
       default :
         return state;
	}
}
const cart = ( state=initialState , action )=>{
     switch(action.type){
        case 'CHECKOUT_PRODUCTS':
          return initialState;
        default : 
          return {
          	 addedIds:addedIds( state.addedIds , action ),
          	 quantitiyIds:quantitiyIds( state.quantitiyIds , action )
          };
     }
}

export default cart;