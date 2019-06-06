import {app} from './router';
import * as request  from 'supertest';


it('1加1应该等于2', async  (done) => {
	app.listen = jest.fn();
	const respose = await request(app.callback()).get("/");
	expect(respose.text).toBe('hello')
});
