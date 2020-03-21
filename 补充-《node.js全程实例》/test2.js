// console.log('hello')
// console.info('hello info')
// console.error('hello error')

// //断言 assert
// let a = 1
// let b = 2
// console.assert(a==b, "error: 1==2")
// console.table({
//     A: {no:'1', name: 'apple'},
//     B: {no:'2', name: 'originer'},
//     C: {no:'3', name: 'dog'}
// })
// // ┌─────────┬─────┬────────────┐
// // │ (index) │ no  │    name    │
// // ├─────────┼─────┼────────────┤
// // │    A    │ '1' │  'apple'   │
// // │    B    │ '2' │ 'originer' │
// // │    C    │ '3' │   'dog'    │


// console.log(process.pid)      //2540
// console.log(process.title)   //C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
// console.log(process.version)
// console.log(process.versions)

console.table({
    '/bin': '存放系统命令',
    '/sbin': '保存于系统环境设置相关的命令',
    '/usr/bin': '存放系统命令的目录',
    '/usr/sbin/': '存放根文件系统不必要的系统管理命令',
    '/boot': '系统启动目录',
    '/dev': '设备文件保存位置',
    '/etc': '配置文件保存位置',
    '/home': '普通用户的宿主目录',
    'lib': '系统调用的函数库保存位置',
    'lost+found': '',
    '/media/':'挂在目录,建议挂在媒体设别',
    '/mnt/': '挂载目录, 如U盘',
    '/misc/': '挂在目录, 挂在NFS服务共享目录',
    '/root': 'root的宿主目录,普通用户是home',
    '/usr': '系统软件资源目录 usr:unix software resource',
    '/usr/'
})