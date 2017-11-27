import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Main, Category } from './components/';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { Router, Route} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Logger = store => next => action => {
	console.group(action.type);
	console.info('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	console.groupEnd(action.type);
	return result;
};

const store = createStore(
	reducers,
	// response data,
	composeEnhancers(
		applyMiddleware(Logger)
	)
);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="/categories/:category" component={Category}></Route>
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
