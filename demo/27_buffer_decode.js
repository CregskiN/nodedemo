const buffer = Buffer.from('中文字符串！');

for (let i = 0; i < buffer.length; i += 5) {
    //for含义： 拆buffer
    const b = Buffer.allocUnsafe(5);
    buffer.copy(b, 0, i);

    console.log(b.toString())
}