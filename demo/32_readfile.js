// fs： 读文件
const fs = require('fs');

// 读取（异步）
fs.readFile('./32_event_remove.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // <Buffer 63 6f 6e ... > (未加 'utf8' , 加则原样输出)
});

// 读取：（同步） // 先于异步执行 // 尽量使用异步操作
const data = fs.readFileSync('./02_cusmod.js', 'utf8');
console.log(data);



