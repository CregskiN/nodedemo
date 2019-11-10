const fs = require('fs');

// 监视：
fs.watch('./', {
    recursive: true //是否监视子文件夹
}, (eventType, filename) => {
    console.log(eventType, filename);
});