import * as mongoose from 'mongoose';

const DB_URL = 'mongodb://localhost:27017/111';

mongoose.connect(DB_URL,(err)=>{
	if(err){
		console.log(err);
		throw err;
	}else{
		console.log("-------------------- connect db success -----------------------");
	}
});

module.exports = mongoose;
