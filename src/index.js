var http = require("http");
const PORT=8081;
const httpServer = http.createServer(handleServer);
function handleServer(req, res) {
    if(req.url==="/welcome"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Welcome to Dominos!");
    }else if(req.url==="/contact"){
        const data = { 
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
        res.end();
  
}else{
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Not Found");
}
}

module.exports = httpServer;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



