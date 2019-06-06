import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import articleReducer from './articleReducer'

export default (history: any) => combineReducers({
	router: connectRouter(history),
	articleReducer,
	//itemReducer
})
