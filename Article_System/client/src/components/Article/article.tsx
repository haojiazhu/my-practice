import React, { Component } from 'react';
import './article.scss';

export interface Props {
	title: string;
	content: string;
}

export default function Article ({title, content} : Props) {

	return (
		<div className="article">
			<h1 className="title">{title}</h1>
			<div className="content">{content}</div>
		</div>
	)

}
