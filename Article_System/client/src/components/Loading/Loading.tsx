import React, { Component } from 'react';
import './loading.scss';

const Loading: any = () => {
	return (
		<div>
			<div className="cover" />
			<div className='loading'>
				<div className="spinner-border text-light" role="status">
  					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</div>
	)
}

export default Loading;
