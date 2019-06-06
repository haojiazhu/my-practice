import request from './request';

class ArticleApi {
	public static prefix = '/article';
	public fetchArticle () {
		return request.get(`${ArticleApi.prefix}/all`);
	}
	public fetchOneArticle(articleId:string) {
		return request.get(`${ArticleApi.prefix}/${articleId}`);
	}
	public addArticle(title:string,content:string) {
		return request.post(`${ArticleApi.prefix}`, {
			title,
			content,
		});
	}
}

export default ArticleApi;
