const {normalize} = require('path');
//等价 const normalize = require('path').normalize;

console.log(normalize('E:/codes/node/learnNode/demo'));
console.log(normalize('E:/codes/node/../demo'));