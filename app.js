const http= require('http');

const server =  http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('HI welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end("Yup you are on about page");
    }
    res.end(
        `<h1>You messed up big time dude</h1>
        <a href='/'>Click here</a> to go to home page </a>
        `);
        
});

server.listen(5000);