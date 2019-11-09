//join 拼接，可用于拼接路径
 const {join} = require('path');

//  import join from 'path';   //不可用语法！

console.log(join('/user','local','bin/')); // \user\local\bin\
console.log(join('/user','../local','bin/')); // \local\bin\

//需要更改输出结果，可用replace