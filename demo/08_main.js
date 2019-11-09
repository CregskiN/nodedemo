/*
const mod = require('./08_exps');

console.log(mod.test);*/

const mod = require('./08_global');

console.log(mod.testVar);

//testVar作用域并不是全局global
console.log(testVar); //undefined

// testVar2 已经用于global
console.log(testVar2); //200
