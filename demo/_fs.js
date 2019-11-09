//引用 fs 模块
const fs = require('fs');

//异步获取读取结果
const result = fs.readFile('./importModule.js', (err, data) => {
    if (err) {
        console.log(err);a
    } else {
        console.log(data.toString());
    }
});

//同步，输出快，但没拿到数据 显示undefined
console.log(result);