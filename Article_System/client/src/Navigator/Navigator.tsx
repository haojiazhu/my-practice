import React from 'react';
import { Router, Route } from 'react-router';

import Login from '../containers/LoginPage/LoginPage';
import Testbutton from '../containers/TestButton';
import LandingPage from '../containers/LandingPage/LandingPage';
import App from '../containers/App/App';

export interface Props {
	history: any;
}

const Navigator = ({ history }: Props) => {
	return (
		<Router history={history}>
			<Route exact path="/" component={App} />
			<Route path="/login" component={Login} />
			<Route path="/articles" component={Testbutton} />
			{/**<Route path='*' component={NotFoundPage} /> */}
		</Router>
	);
};

export default Navigator;
