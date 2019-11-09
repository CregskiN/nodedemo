/*
*   Buffer.byteLength
*   Buffer.isBuffer()
*   Buffer.concat()
*/

// byteLength 返回输入所占字节
console.log(Buffer.byteLength('test')); // 4
console.log(Buffer.byteLength('测试')); // 6

// isBuffer() 判断输入是不是Buffer对象
console.log(Buffer.isBuffer({})); //false
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3]))); //true

// concat()
const buffer1 = Buffer.from('This');
const buffer2 = Buffer.from('is');
const buffer3 = Buffer.from('is');
const buffer4 = Buffer.from('test');
const buffer5 = Buffer.from('!');
console.log(Buffer.concat([buffer1, buffer2, buffer3, buffer4, buffer5])); // <Buffer 54 68 69 73 69 73 69 73 74 65 73 74 21>
