var http        = require('http'),              /* libraries used */
    cloudcmd    = require('cloudcmd'),
    express     = require('express'),
    io          = require('socket.io'),
    app         = express(),
    
    PORT        = 1337,           /* edit port here */

    server,
    socket;

/* creating server from express lib */
server = http.createServer(app);
socket = io.listen(server);

/* cloudcmd is being used as middleware for express for better performance */ 
app.use(cloudcmd({
    socket: socket,   
    config: {           
        prefix: '/cloudcmd', 
    }
}));

server.listen(PORT);
