import React from 'react';
import Editor from './Editor';
import { shallow } from 'enzyme';

describe('test editor', () => {
	it('should render', () => {
		const editor = shallow(<Editor />);
		expect(editor.find('ReactAce').length).toEqual(1);
	});

	it('should have default value as inported props value', () => {
		const editor = shallow(<Editor defaultValue="props value" />);
		expect(editor.find('ReactAce').props().defaultValue).toBe('props value');
	});
});


