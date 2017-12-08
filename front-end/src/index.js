import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Wrapper } from './components/';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

const router = (
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider>
				<Wrapper/>
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
