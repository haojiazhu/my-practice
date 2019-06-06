import ActionTypes from '../actionTypes'
import  { IAction } from '../interface/IAction'
import { IArticleState } from '../interface/IArticleState';

let initialState: IArticleState[];
initialState = [];

const articleReducer = (state = initialState, action:IAction) => {
	switch(action.type) {
		case ActionTypes.FETCH_ARTICLE_SUC:
			return [...initialState, ...action.payload];
		case ActionTypes.FETCH_ONE_ARTICLE_SUC:
			return [...initialState, action.payload];
		default:
		return state;
	}
}

export default articleReducer;

