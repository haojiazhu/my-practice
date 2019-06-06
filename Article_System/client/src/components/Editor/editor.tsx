import React, { Component } from 'react';
import './editor.scss';
import AceEditor from 'react-ace';
import "brace/theme/monokai";

type GetEditorProps = {
	defaultValue?: string
}

export default class Editor extends Component<GetEditorProps>{
	constructor(props: any) {
		super(props);
	};

	onChange = (event: any) =>{
		console.log(event);
	}
	render() {
		const defaultValue = this.props.defaultValue;
		return (
			<AceEditor
				theme="monokai"
				defaultValue={defaultValue}
				onChange ={this.onChange}
			/>
		)
	}
}

