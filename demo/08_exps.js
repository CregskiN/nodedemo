/*
//commonJS 默认会有这句
const exports = module.exports;

(
    function (exports, require, module, _filename, _dirname) {
        //code
    }
);*/


//exports.test = 100;

//！不对 修改了module.export的指向
/*exports = {
    a: 1,
    b: 2,
    test: 100
};*/


//必须加module才能用 拿到mod.test
module.exports = {
    a: 1,
    b: 2,
    test: 100
};
