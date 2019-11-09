const path = require('path');
const mod = require('./02_cusmod');

console.log(mod.testVar);
// This is a module
// 100

// 查看 文件所在路径
console.log('__dirname', __dirname); //__dirname E:\codes\node\learnNode\demo

// 查看 当前process执行路径
console.log('process.cwd()', process.cwd()); //process.cwd() E:\codes\node\learnNode\demo

// 打印 查看指定位置的绝对路径
console.log('./',path.resolve('./')); //./ E:\codes\node\learnNode\demo
