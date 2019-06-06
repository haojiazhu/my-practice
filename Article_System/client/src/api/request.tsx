import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const request = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
});

export default request;
