const EventEmitter = require('events');

// 定义： 事件类
class CustomEvent extends EventEmitter {}

// 定义： 事件函数 fn1
function fn1() {
    console.log('fn1');
}

// 定义： 事件函数 fn2
function fn2() {
    console.log('fn2');
}

// 实例化： 事件对象
const ce = new CustomEvent();

// 绑定： 事件对象 ← 事件名 + 事件函数
ce.on('test', fn1);
ce.on('test', fn2);

// 触发： 事件对象 ce 的事件'test'
setInterval(() => {
    ce.emit('test');
}, 500);

// 移除： 事件对象 ce 的 'test'事件 和 事件函数 fn1 fn2
setTimeout(() => {
    // ce.removeListener('test',fn2);
    // ce.removeListener('test',fn1);

// 移除： 事件对象 ce 的 事件 'test'(及其所有事件函数)
    ce.removeAllListeners('test');
},1500);