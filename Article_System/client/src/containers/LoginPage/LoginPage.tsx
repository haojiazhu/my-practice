import * as React from 'react';
import './Login.scss';
import logoImg from '../../assert/img/perficient-logo.png';
import logRight from '../../assert/img/log_right.png';

export interface Props {

}

export interface State {
	userName: string;
	password: string;
	errorMessage: string;
}

class Login extends React.Component<Props, State>{
	constructor(props: Props) {
		super(props);
		this.state = {
			userName: '',
			password: '',
			errorMessage: '',
		}
	}

	handleInputChange = (event : any) => {
		const target = event.target;
		const type = target.type;
		type === 'password' ? this.setState({password : target.value}) : this.setState({userName : target.value});
	}

	handleSubmit = () => {

	}

	handleReset = () => {
		this.setState ({
			userName : '',
			password: '',
		})
	}

	handleLogin = () => {

	}

	render() {
		return (
			<div>
				<div className="col-xs-12 col-md-12 col-sm-12 text-center xs-margin">
					<img src={logoImg} />
				</div>
				<div className="table-div">
					<table className="table">
						<tbody>
							<tr>
								<td className="hidden-xs col-md-6 col-sm-6">
									<img className="log-right" src={logRight}/>
								</td>
								<td className="col-md-6 col-xs-12 col-sm-6">
									<div className="login login-margin">
										<div className="login-header">
											<h3 className="login-title">Log In</h3>
										</div>
										<form>
											<div className="row">
												<div className="div">
													<input className="cas-login-input"
														type="text"
														value={this.state.userName}
														required
														placeholder="Input User Name"
														onChange={this.handleInputChange}
													/>
												</div>
											</div>
											<div className="row">
												<div className="div">
													<input className="cas-login-input"
														type="password"
														value={this.state.password}
														required
														placeholder="Input Paasword"
														onChange={this.handleInputChange}
													/>
												</div>
											</div>
											<div className="row row-btn">
												<input className="btn form-btn login-btn login-btn-margin" type="submit" value="Login"/>
												<input className="btn form-btn reset-btn" type="button" value="Reset" onClick={this.handleReset}/>
											</div>
										</form>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Login;
