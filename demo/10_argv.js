/*
  参数相关！
*  argv
*  argv0
*  execArgv
*  execPath
*/

//作为 process的属性出现
const {argv, argv0, execArgv, execPath} = process;

//argv 在启动时的所有参数
argv.forEach(item => {
    console.log(item)
});

//argv0 保存了argv第一个值的引用
console.log(argv0);

//execArgv： 调用node所传递的特殊参数
console.log(execArgv);

//execPath： 读脚本路径
console.log(execPath);

