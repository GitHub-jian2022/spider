  
const cheerio=require('cheerio');

// 解析函数
// 参数1: request请求响应dom结果
// 参数2: 下载函数

function findImg(dom,callback=function(){}) {
	let $=cheerio.load(dom);

	$('.link-button img').each(function(i,element){
		//element 目标img元素, src地址
		let imgSrc=$(element).attr('src');
		// console.log(imgSrc)
	    callback(imgSrc,i,'images');
	});

	// $('img').each(function(i,element){
	// 	//element 目标img元素, src地址
	// 	let imgSrc=$(element).attr('src');
	// 	// console.log(imgSrc)
	//     callback(imgSrc,i);
	// });
	
}
module.exports = {
    findImg
};