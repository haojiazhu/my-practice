import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { fetchArticle, fetchOneArticle } from '../actions/articleAction';

const TestButton: any = (props:any) => {

	let flag = false;

	function handleButtonClick() {
		props.fetchArticle();
		flag = false;
	}

	const handleLinkClick = (articleId: string) => {
		props.fetchOneArticle(articleId);
		flag = true;
	}

	// function handleLinkClick(id: string) {

	// }

	const articles = props.articleReducer;

	return (
		<div>
			<button onClick={handleButtonClick}>fetchArticle</button>
			<div>
				<ul>
					{articles.map( (v:any) => {
						return (
							<a onClick={event => handleLinkClick(v._id)}>
								<li key={v._id}>
									<div>
										<span>{v._id}</span>
										<span>{v.title}</span>
									</div>
								</li>
							</a>
						)
					})}
				</ul>

				<div>
					{flag ? (
						articles.map((v:any) => {
							return (
								<div>
									<span>{v.title}</span>
									<p>{v.content}</p>
								</div>
							)
						})
					) : (<span></span>)}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (store: any) => {
	return { articleReducer: store.articleReducer };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
	return {
		fetchArticle: () => {
			dispatch(fetchArticle());
		},
		fetchOneArticle: (articleId: string) => {
			dispatch(fetchOneArticle(articleId));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TestButton);
