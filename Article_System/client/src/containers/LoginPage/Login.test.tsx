import React from 'react';
import Login from './LoginPage';
import {shallow} from 'enzyme';

describe('test Login', () => {
	it('should render', () => {
		const login = shallow(<Login/>);
		expect(login.find('img').length).toEqual(2);
		expect(login.find('form').length).toEqual(1);
		expect(login.find('.row').length).toEqual(3);
		expect(login.find('.cas-login-input').length).toEqual(2);
		expect(login.find('.btn').length).toEqual(2);
	});
	it('when username change, should reset username in state', () => {
		const login = shallow(<Login/>);
		login.find('input[type="text"]').simulate('change', {target:{value:'user'}});
		expect(login.state('userName')).toEqual('user');
	});
	it('when password change, should reset password in state', () => {
		const login = shallow(<Login/>);
		login.find('input[type="password"]').simulate('change', {target:{value:'123'}});
		expect(login.state('password')).toEqual('123');
	});
	it('when click Reset button, should reset state to empty string', () => {
		const login = shallow(<Login/>);
		login.find('input[type="button"]').simulate('click');
		expect(login.state('userName')).toEqual('');
		expect(login.state('password')).toEqual('');
	});
});




