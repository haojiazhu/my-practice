import 'babel-polyfill;'
const show=content=>{
	const box=document.getElementById("box");
	box.innerHTML=`你好！${content}`;
	}
	
	
	export {show}; //ES6导出模块的语法 