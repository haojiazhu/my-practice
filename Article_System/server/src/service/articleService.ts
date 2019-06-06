
const articleModel = require('../db/model/articleModel');

class ArticleService {
	async addArticle(title:string, content:string) {
		const article = new articleModel({
			title,
			content,
		});
		try {
			const data = await article.save();
			return data;
		} catch (error) {
			throw new Error('save failed');
		}
	};
	async deleteArticle(articleId: any) {
		try {
			const article = await articleModel.findByIdAndDelete(articleId);
		} catch (error) {
			throw new Error('delete failed');
		}
	};
	async getAllArticles() {
		try {
			const articles = await articleModel.find();
			return articles;
		} catch (error) {
			throw new Error('get all article failed')
		}
	};
	async getById(articleId:string) {
		try {
			const article = await articleModel.findById(articleId);
			console.log('article ' + article);
			return article;
		} catch (error) {
			throw error;
		}
	};
	async updateTitle(articleId:any, title:string) {
		try {
			const data = await articleModel.findOneAndUpdate({_id : articleId}, {title : title});
			return data;
		} catch (error) {
			throw new Error('update failed');
		}
	};
}

module.exports = ArticleService;
