// stream 流数据 有方向的数据 ， 包括 数据 + 方向 ， 512MB电脑看2G电影
const fs = require('fs');

// 创建: 数据流
const rs = fs.createReadStream('./41_readstream.js');

// 定义： 方向   // 细节： 读一点，输出一点， 与readFile相比，readFile需存储到内存
rs.pipe(process.stdout); // 流向 控制台