const fs = require('fs');

// 创建： 文件
fs.mkdir('test', (err) => {
    if (err) throw err;
    console.log('mkdir done!');
});