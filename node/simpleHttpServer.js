#!/usr/bin/node
/*
 * @file:simpleHttpServer.js
 * @brief: 简单的http服务器程序
 * @author: feihu1996.cn
 * @date: 2018-02-27
 * @version: 1.0
 */
var http = require('http');
var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});		
	res.end("Hello,World!\n");
});
server.listen(80,"localhost");
console.log("Server running at http://localhost");


