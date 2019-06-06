import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const articleSchema = new Schema(
	{
		title: String,
		content: String,
	},
	{
		versionKey: false,
		collection: 'article',
	},
);

articleSchema.set('toJSON', {virtuals: false});

const articleModel = mongoose.model('Article', articleSchema);

module.exports = articleModel;
