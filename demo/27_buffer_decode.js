const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');


const buffer = Buffer.from('中文字符串！');

for (let i = 0; i < buffer.length; i += 5) {
    //for含义： 拆buffer
    const b = Buffer.allocUnsafe(5);
    buffer.copy(b, 0, i); //拷贝buffer的0至i b的0-i
    console.log(i, b.toString());
    /*
    *   0 中�
    *   5 �字�
    *   10 ��串
    *   15 ！
    */
}

for (let i = 0; i < buffer.length; i += 5) {
    const b = Buffer.allocUnsafe(5);
    buffer.copy(b, 0, i);
    console.log(i, decoder.write(b));
    /* //自动识别 三个byte 打印一个汉字, 不足则缓存，待下次拼接
     *  0 中
     *  5 文字
     *  10 符串
     *  15 ！
    */
}
