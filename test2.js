var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
   console.log(data,1)
});