//Buffer.alloc / allocUnsafe //Buffer对象实例化的两种方法

// 创建一个指定长度的 Buffer，        初始化情况如下
console.log(Buffer.alloc(10)); //<Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(Buffer.alloc(20)); //<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(Buffer.alloc(5,1)); //<Buffer 01 01 01 01 01>
//  创建allocUnsafe， 默认不做初始化
console.log(Buffer.allocUnsafe(5)); //<Buffer 65 78 57 72 69>


//Buffer.from(XXX)
//以指定内容创建 （默认编码格式 UTF-8）
console.log(Buffer.from([1,2,3])); //<Buffer 01 02 03>
console.log(Buffer.from('test')); //<Buffer 74 65 73 74>
console.log(Buffer.from('test', 'base64')); //<Buffer b5 eb 2d>


