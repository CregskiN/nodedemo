const EventEmitter = require("events");

// 定义 继承执行事件类
class CustomEvent extends EventEmitter {}

// 实例化 CustomEvent 对象
const ce = new CustomEvent();

//给 ce 绑定 test 事件（可多次触发），并监听
ce.on('test', () => {
    console.log('this is a test!');
});

//触发 ce 的 test 事件
setInterval(() => {
    ce.emit('test');
}, 500);
