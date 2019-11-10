// fs： 写文件
const fs = require('fs');

// 写： 字符串 （需声明 'utf8'）
fs.writeFile('./text','This is a test', {
    encoding: 'utf8'
}, (err) => {
    if(err) throw err;
    console.log('done!');
});

// 写： buffer （不用声明 'utf8'）
const buffer = Buffer.from('This is a test time 2');
fs.writeFile('./text',buffer, (err) => {
    if(err) throw err;
    console.log('done!');
});