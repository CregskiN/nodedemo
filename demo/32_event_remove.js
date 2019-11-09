const EventEmitter = require('events');

class CustomEvent extends EventEmitter {
}

function fn1() {
    console.log('fn1');
}

function fn2() {
    console.log('fn2');
}

const ce = new CustomEvent();

ce.on('test', fn1);
ce.on('test', fn2);

// 每 500ms 触发 ce 的 test 事件
setInterval(() => {
    ce.emit('test');
}, 500);

// 在 1500ms 时移除fn2
setTimeout(() => {
    ce.removeListener('test',fn2);
},1500);