var http = require('http');

const PORT = 8000

//We need a function which handles requests and send response
function handleRequest(request, response){


    if (request.method == 'GET'){
        request.on("data", function (data){
           console.log(data);
            console.log('gege')
            response.end('It Works!! Path Hit: ' + request.url);
        });
    }

}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});


