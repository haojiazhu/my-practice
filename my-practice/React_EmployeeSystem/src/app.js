import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './login';
import EmployeeTab from './employeeTab';
 
class App extends React.Component {
	render(){
		return(
		<Router>
		 <Switch>
			<Route path="/" exact component={Login} />
			<Route path="/employeeTab" exact component={EmployeeTab} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
		</Switch>
		</Router>
		)
		}
	}
export default App;