import React from 'react';
import Loading from './Loading';
import renderer from 'react-test-renderer';

it('render loading', () => {
	const loading = renderer.create(<Loading />).toJSON();
	expect(loading).toMatchSnapshot();
});
