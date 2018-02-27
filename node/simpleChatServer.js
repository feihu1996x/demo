/*
 * @file:simpleChatServer.js
 * @brief: 创建简单的聊天服务器
 * @author: feihu1996.cn
 * @date: 2018-02-27
 * @version- 1.0
 */

var net = require('net');
var chatServer = net.createServer();
chatServer.on('connection',function(client){
	client.write('Hi!\n');
	// 每当 client 发送数据
	// 给服务器时,data事件都会被触发
	client.on('data',function(data){
		client.write(`你刚刚说了这句话:${data}`);	
	});
	// client.write('Bye!\n');
	// client.end();
});
chatServer.listen(81);
console.log("chatServer running at 127.0.0.1:81");
