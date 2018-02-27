/*
 * @file: simpleChatServer02.js
 * @brief: 客户端之间的通信
 * @author: feihu1996.cn
 * @date: 2018-02-27
 * @version: 1.0
 */


var net = require('net');
var chatServer = net.createServer(),
	clientList = [];// 创建一个列表,然后把希望与之通信的客户端都添加进去。当一个新的客户端出现时,就把它添加到列表中,然后利用此列表实现客户端之间的通信
chatServer.on('connection',function(client){
	client.write('Hi!\n');
	clientList.push(client);
	client.on('data',function(data){
		for(var i=0;i<clientList.length;i++){
			// 把数据发送给所有客户端
			clientList[i].write(data);
		}	
	});
});
chatServer.listen(81);
console.log("chatServer running at localhost:81");
