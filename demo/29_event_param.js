const EventEmitter = require('events');

class CustomEvent extends EventEmitter {
}

const ce = new CustomEvent();

// error 是通用事件处理程序
ce.on('error', (err, time) => {
    console.log(err);
    console.log(time);
});

// 触发， 可执行多个
ce.emit('error', new Error('oops!'), Date.now());



