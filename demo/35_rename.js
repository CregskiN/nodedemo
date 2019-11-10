const fs = require('fs');

// 重命名
fs.rename('./text','test.txt',(err) => {
    if(err) throw err;
    console.log(('done!'));
});