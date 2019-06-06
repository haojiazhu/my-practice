import * as Router from 'koa-router';
const handleRes = require('../utils/response');
const ArticleService = require('../service/articleService');
const bodyParser = require('koa-bodyparser');
const articleService = new ArticleService();
const articleRouter = new Router({
	prefix: '/api/article',
});

articleRouter
	.get('/all', async (ctx, next) => {
		try {
			const data = await articleService.getAllArticles();
			if (data) {
				handleRes({
					ctx,
					data,
				})
			}
		} catch (error) {}
	})
	.get('/:articleId', async (ctx, next) => {
		const articleId = ctx.params.articleId;
		try {
			const data = await articleService.getById(articleId);
			if (data) {
				handleRes({
					ctx,
					data,
				});
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	})
	.post('/', async (ctx, next) => {
		const { title, content } = ctx.request.body;
		try {
			const data = await articleService.addArticle(title,content);
			if (data) {
				console.log(data);
				handleRes({
					ctx,
					data,
				});
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	})


module.exports = articleRouter;
