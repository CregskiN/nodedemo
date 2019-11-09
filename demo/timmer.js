//等同步语句执行结束，再执行
setImmediate(() => {
    console.log('setImmediate 执行了！');
});

//插入一个执行过程
setTimeout(() => {
    console.log('i am here');
}, 0);


//类似的有,但nextTick执行的更早
process.nextTick(() => {
    console.log('nextTick 执行了！');
    process.nextTick(() => {
        console.log('nextTick 又执行了！');
    })
});


//涉及： 事件队列
//nextTick在队尾， setImmediate在下一个队列