import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Navigator from './Navigator/Navigator';
import { Provider } from 'react-redux';
import store, { history }  from './store/configureStore';
import { ConnectedRouter } from "connected-react-router";


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Navigator history={history} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
