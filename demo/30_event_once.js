const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();

//给ce 绑定只触发一次的事件 'test'
ce.once('test', () => {
    console.log('test event');
});

setInterval (() => {
    ce.emit('test');
},500);