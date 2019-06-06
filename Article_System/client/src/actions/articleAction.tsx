import ActionTypes from '../actionTypes';

export function fetchArticle() {
	return {
		type: ActionTypes.FETCH_ARTICLE,
		payload: {
		}
	}
};
export function fetchOneArticle(articleId:string) {
	return {
		type: ActionTypes.FETCH_ONE_ARTICLE,
		payload: {
			articleId,
		}
	}
};
export function addArticle(title:string,content:String) {
	return {
		type: ActionTypes.ADD_ARTICLE,
		payload: {
			title,
			content,
		}
	}
};
