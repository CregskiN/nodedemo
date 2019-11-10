const fs = require('fs');

// 删除： 文件夹
fs.rmdir('./test', (err) => {
    console.log('delete done!');
});