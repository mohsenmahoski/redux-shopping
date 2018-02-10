import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {getAllProducts} from './actions';
import { createLogger } from 'redux-logger'



const middlewar = [thunk];
middlewar.push(createLogger());

const store = createStore(
	                        reducer,
	                        applyMiddleware(...middlewar)
	                      );

store.dispatch(getAllProducts());

ReactDOM.render(
	            <Provider store={store} >
	             <App />
	             </Provider>
	             , document.getElementById('root')
	            );
