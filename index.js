
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.write("Welcome to Home Page");
        res.end();
    }

    else if (req.url === "/about") {
        res.write("Welcome to About Page");
        res.end();
    }

    else if (req.url === "/contact") {
        res.write("Welcome to Contact Page");
        res.end();
    }

    else if (req.url === "/services") {
        res.write("Welcome to Services Page");
        res.end();
    }

    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.write("404 - Page Not Found");
        res.end();
    }

});

server.listen(1000, () => {
    console.log("Server is working well");
});
