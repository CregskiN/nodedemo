
const {
    sep,    // 路径的分隔符
    delimiter,  // path的分隔符
    win32,
    posix,
} = require('path');

// sep 指路径的分隔符
console.log('sep:', sep); // sep: \
// posix 的路径分隔符
console.log('sep:', posix.sep); // sep: /

//打印 env.PATH
console.log('PATH', process.env.PATH);
/*
    PATH C:\windows\system32;C:\windows;
    C:\windows\System32\Wbem;
    C:\windows\System32\WindowsPowerShell\v1.0\;
    C:\windows\System32\OpenSSH\;
    C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;
    C:\Program Files\NVIDIA Corporation\NVIDIA NvDLISR;E:\tools\git\Git\cmd;
    E:\surroundings\node.js\;C:\Users\CREGSKIN\AppData\Local\Microsoft\WindowsApps;;
    E:\IDEs\JetBrains\WebStorm 2019.2.4\bin;;
    E:\IDEs\JetBrains\IntelliJ IDEA 2019.2.4\bin;;
    C:\Users\CREGSKIN\AppData\Roaming\npm;
    E:\IDEs\microsoft\vscode\Microsoft VS Code\bin
*/

//打印 posix下的PATH
console.log('PATH', process.env.PATH);
/*
    PATH C:\windows\system32;C:\windows;
    C:\windows\System32\Wbem;
    C:\windows\System32\WindowsPowerShell\v1.0\;
    C:\windows\System32\OpenSSH\;
    C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;
    C:\Program Files\NVIDIA Corporation\NVIDIA NvDLISR;
    E:\tools\git\Git\cmd;E:\surroundings\node.js\;
    C:\Users\CREGSKIN\AppData\Local\Microsoft\WindowsApps;;
    E:\IDEs\JetBrains\WebStorm 2019.2.4\bin;;
    E:\IDEs\JetBrains\IntelliJ IDEA 2019.2.4\bin;;
    C:\Users\CREGSKIN\AppData\Roaming\npm;
    E:\IDEs\microsoft\vscode\Microsoft VS Code\bin
*/


// delimiter 指 PATH分隔符
console.log('delimiter', delimiter); // delimiter ;
// posix 的 PATH分隔符
console.log('delimiter', posix.delimiter); // delimiter :

//不同操作系统下 分隔符delimiter不一样
