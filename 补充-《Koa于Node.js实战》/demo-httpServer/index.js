const http = require('http')
const path = require('path')   //用于处理文件与目录的路径工具函数
const url = require('url')         //用于url处理与解析
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req,res) => {
    let pathname = url.parse(req.url).pathname
    let extname = path.extname(pathname)
    if(pathname == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(fs.readFileSync(path.join(__dirname,pathname), 'index.html'))
    } else if(extname == '.jpg' || extname =='.png') {
        res.writeHead(200, {'Content-Type': 'image/' + extname.substr(1)})
        res.end(fs.readFileSync(path.join(__dirname, pathname)))
    } else {
        res.statusCode = 404
        res.end()
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})