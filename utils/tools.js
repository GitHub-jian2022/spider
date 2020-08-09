const path = require('path')
const fs = require('fs')
const request = require('request')

const timeStamp = new Date().getTime()

// 下载函数
// 参数1: 要下载内容的地址
// 参数2: 要保存的文件名
// 参数3: 要保存的文件夹名
function downLoad (url, index, imgDir) {
     // 根据当前目录，生成上级文件夹目录
     const dir = path.join(__dirname,'../' ,imgDir)
     // 判断文件夹是否存在
     const isDir = fs.existsSync(dir)
     // 不存在, 创建
     if (!isDir) {
         fs.mkdir(dir,err => {
             err && console.log(err)
         })
     }

    //重命名文件 'https://pic1.zhiimg.jpg'.split('.').pop() 得到jpg
    let filename = (`${timeStamp}-${index}`) + '.'+ url.split('.').pop();
    // 生成保存文件路径 
    const filePath = path.join(dir, filename)

    // 下载并保存
    // 所获取的数据的二进制数据，所以一定要设置编码格式为binary，因为writeFile的默认编码格式为utf-8，否则保存的图片无法打开。
    let writeStream = fs.createWriteStream(filePath)
    request(url).pipe(writeStream, {
        'enconding':'binary'
    })
}

module.exports = {
    downLoad
}