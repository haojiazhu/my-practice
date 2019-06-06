import { IAction } from '../interface/IAction';
import { put, call } from 'redux-saga/effects';
import ActionTypes from '../actionTypes';
import ArticleApi from '../api/articleApi';

const articleApi = new ArticleApi();

export function* fetchArticle(action: IAction) {
	const req = async function() {
		const { data } = await articleApi.fetchArticle();
		return data;
	};
	const res = yield call(req);
	yield put ({
		type: ActionTypes.FETCH_ARTICLE_SUC,
		payload: res.data,
	});
};

export function* fetchOneArticle(action: IAction) {
	const { articleId } = action.payload;
	const req = async function() {
		const { data } = await articleApi.fetchOneArticle(articleId);
		return data;
	};
	const res = yield call(req);
	yield put ({
		type: ActionTypes.FETCH_ONE_ARTICLE_SUC,
		payload: res.data,
	})
};

export function* addArticle(action: IAction) {
	const { title, content } = action.payload;
	const add = async function() {
		const { data } = await articleApi.addArticle(title,content);
		return data;
	}

	const response = yield call(add);
	// yield put ({
	// 	type:
	// 	payload: response.data,
	// });
}
