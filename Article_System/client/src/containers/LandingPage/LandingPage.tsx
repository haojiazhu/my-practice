import React, { Component } from 'react';
import Article from '../../components/Article/article';

class LandingPage extends Component{
	render(){
		return(
			<div>
				<Article title={'title'} content={'content'}></Article>
			</div>
		)
	}
}

export default LandingPage;
