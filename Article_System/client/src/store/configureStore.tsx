import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from '../reducers/index';
import { createBrowserHistory }from "history";
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';


export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer(history);


const initialState = {};

const middleware = [
	sagaMiddleware,
	routerMiddleware(history)
];

declare global {
	interface Window {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(
		applyMiddleware(...middleware),
	),
);

sagaMiddleware.run(rootSaga);

export default store;
