/*
        Buffer实例化对象的操作 和 属性
*  buffer.length
*  buffer.toString()
*  buffer.fill()
*  buffer.equals()
*  buffer.indexOf()
*  buffer.copy()
*/

// buffer.length Buffer实例对象的长度（所占空间长度）
const buffer1 = Buffer.from('This is a test'); //通过Buffer.from创建的实例对象，内容及所空间
console.log(buffer1.length); // 14

const buffer2 = Buffer.alloc(10);
buffer2[0] = 12;   // 默认填入 00 (十六进制)
console.log(buffer2); // <Buffer 02 00 00 00 00 00 00 00 00 00>
console.log(buffer2.length); // 10


// buffer.toString(XX) 设置编码格式XX, 默认UTF-8
console.log(buffer1.toString('base64')); // VGhpcyBpcyBhIHRlc3Q=


// buffer.fill() 往Buffer对象中填入
const buffer3 = Buffer.allocUnsafe(10);
console.log(buffer3); // <Buffer 46 61 73 74 42 75 66 66 65 72>
// 填入value 从offset开始 到end
console.log(buffer3.fill(10, 2, 6)); // <Buffer 46 61 0a 0a 0a 0a 66 66 65 72>


//buffer.equals(XX) 选中的buffer对象和XXs内容是否相等
const buffer4 = Buffer.from('test');
const buffer5 = Buffer.from('test');
const buffer6 = Buffer.from('test！');
console.log(buffer4.equals(buffer5)); // true
console.log(buffer4.equals(buffer6)); // false


// buffer.indexOf() 返回输入字符在选中字符串中首位置（从0开始计）
console.log(buffer4.indexOf('s')); // 2
console.log(buffer4.indexOf('esa')); // -1

