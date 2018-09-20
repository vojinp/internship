import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import storeFactory from './store';
import { Provider } from 'react-redux';
import { initialState, saveState } from './utility';


const store = storeFactory(initialState);
store.subscribe(saveState)

// store.dispatch(addItem())

window.React = React;
window.store = store;

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('react-container')
);