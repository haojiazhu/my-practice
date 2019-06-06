import * as koa from 'koa';
const Mongodb = require('../db/db');
const ArticleService = require('../service/articleService');
const handleRes = require('../utils/response');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')

const articleRouter = require('../router/articleRouter');

export const app = new koa();

app.use(cors());
app.use(bodyParser());
app.use(articleRouter.routes());

app.listen(5000,()=>{
	console.log('---------------- server begin -------------------');
});



