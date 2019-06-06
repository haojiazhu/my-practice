import { takeEvery } from 'redux-saga/effects';
import { fetchArticle, fetchOneArticle, addArticle } from './actions/articleSaga';
import ActionTypes from './actionTypes';

function* rootSaga() {
	yield takeEvery(ActionTypes.FETCH_ARTICLE, fetchArticle);
	yield takeEvery(ActionTypes.FETCH_ONE_ARTICLE, fetchOneArticle);
	yield takeEvery(ActionTypes.ADD_ARTICLE, addArticle);
}

export default rootSaga;
