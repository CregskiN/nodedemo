// 对pathObject 处理
const {parse, format} = require('path');

const filePath = './node_modules/chalk/package.json';

// parse 解析路径 成 pathObject路径对象
const ret = parse(filePath);

console.log(ret);
/*
*   {
      root: '',
      dir: './node_modules/chalk',
      base: 'package.json',
      ext: '.json',
      name: 'package'
    }
* */

// format 把路径输出
console.log(format(ret)); //./node_modules/chalk\package.json

