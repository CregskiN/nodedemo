const fs = require('fs');

// 查询： 文件信息 // 可用于判断文件是否存在
fs.stat('./34_stat.js', (err, stats) => {
    if (err) {
        console.log("文件不存在");
        return ;
    }; // 线上可能记日志

    console.log(stats.isDirectory());
    console.log(stats.isFile());
    console.log(stats);
    // stats.atime 传进事件 // stats.birthtime 创建时间 // stats.ctime create时间
    // stats.isDirectory() 是否是文件夹
    //stats.isFile() 是否是文件
});