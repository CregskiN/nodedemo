
const {basename, dirname, extname} = require('path');

const filePath = './node_modules/chalk/package.json';

// basename 文件名
console.log(basename(filePath)); //package.json

// dirname所在文件夹名
console.log(dirname(filePath)); //./node_modules/chalk

// extname拓展名
console.log(extname(filePath)); //.json



