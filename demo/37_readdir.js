const fs = require('fs');

// 读取： 文件夹下文件列表
fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log(files);
});