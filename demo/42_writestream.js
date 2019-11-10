const fs = require('fs');

// 创建： 写入数据流
const ws = fs.createWriteStream('./test.txt');

const tid = setInterval(() => {
    const num = parseInt(Math.random() * 10);
    if (num < 7) {
        // const buffer = Buffer.from(num + '');
        ws.write(num + ''); // ws.write(String or Buffer)
    } else {
        clearInterval(tid);
        ws.end();   // ws.end() 结束输入
    }
},200);

// 监听： 结束事件
ws.on('finish', () => {
    console.log('done！');
});
