import React, { Component, Dispatch } from 'react';
import './Quill.scss';
import quill from "quill";
import 'quill/dist/quill.snow.css'
import { connect } from 'react-redux';
import { addArticle } from '../../actions/articleAction';

type GetQuillProps = {
	addArticle: any
}

type GetQuillState = {
	value?: string,
	editor: any,
	title?: string,
	content?: string,
}

class Quill extends Component<GetQuillProps, GetQuillState>{
	constructor(props: any) {
		super(props);
		this.state = {
			value: "",
			editor: null
		};
	};

	componentDidMount() {
		const toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'],
			['blockquote', 'code-block'],
			[{ 'size': ['small', false, 'large', 'huge'] }],
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			[{ 'color': [] }, { 'background': [] }],
			[{ 'font': [] }],
			['image', 'code-block'],
			['clean']
		];
		const options = {
			debug: "warn",
			theme: "snow",
			modules: {
				toolbar: toolbarOptions
			},
		};
		this.setState({
			editor: new quill('#editor', options)
		});
	}

	handleClick: any = async () => {
		await this.setState({
			content: this.state.editor.container.firstChild.innerHTML
		});
		this.props.addArticle(this.state.title, this.state.content);
	}

	handleChange: any = (e: any) => {
		console.log("444" + e.target.value);
		this.setState({
			title: e.target.value
		})
	}

	render() {
		const title = this.state.title;
		return (
			<div style={{ height: 500, width: 800 }}>
				<div><input type="text" value={title} onChange={this.handleChange} /></div>
				<div id="editor" style={{ height: 300 }}></div>
				<input type="button" value="save" onClick={this.handleClick} />
			</div>
		)
	}
}
const mapStateToProps = (store: any) => {
	return { articleReducer: store.articleReducer };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
	return {
		addArticle: (title: string, content: string) => {
			dispatch(addArticle(title, content));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Quill);
