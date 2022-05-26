// 6 Create "myWebServer" module
// a. Inside of your myWebServer module, create a web server which listens to requests
// on port 1234
// ■ Note: It is a good practice to write a custom message such as
// console.log(“Server running”) in your server listener you create to check
// if your server is running and listening to requests
// b. Run your "myWebServer" module on your terminal to check if your server is
// listening to requests at port 1234
// c. Inside of your "myWebServer" module, write your request listener function as a
// callback inside of the server you created above. This function should return the
// following text message "Request received and processed" to the browser.
// d. Run your "myWebServer" module on your terminal and go to your browser and
// type “localhost:1234” to check if your browser displays the "Request received and
// processed " message sent from your server

const http = require("http");
const fs = require("fs");
const url = require("url");
const lookup = require("mime-types").lookup;
// const ranDomNumber = require("./randomNumber");
// PORT
const PORT = 1234;

// 7. Inside your "myWebServer" module
// a. Import your "randomNumber" module inside of your "myWebServer" module.
// Now, generate a random number using the random() function from the
// "randomNumber" module and return the generated random number to the client
// browser when request is sent to port 1234.
// ■ Don’t forget to run your module on your terminal to keep your server
// running and
// ■ Go to your browser and type “localhost:1234” to see the random number
// generated
// let randomNumberImportResult = ranDomNumber.random();
// server create
const server = http.createServer((req, res) => {
  // question 8
  //   8. Create a new folder called "static"
  // a. Inside the "static" folder, save the “apple html css replica” folder by
  // downloading and extracting it
  // b. Add a sample "about.html" page inside of your “apple html css replica” folder
  // you just downloaded. Open your "about.html” file and add the text ‘This is
  // coming from my "about page ” ’
  // c. Modify your request listener function in a way it would serve the "about.html"
  // page when users request it on the browser
  // ■ Hint: You will need to import additional node modules to display your
  // “about.html” page when users request it on the browser
  // d. Don’t forget to run your module on your terminal to keep your server running.
  // Now, go to your browser and type “localhost:1234” to see the ‘This is coming
  // from my "about page ” ’ text sent to your browser
  // e. Now, modify your listener function in a way that it serves any of the pages inside
  // of your "static" folder when requested
  let urlPath = url.parse(req.url, true);
  let filePath = urlPath.path.replace(/^\/+|\/+$/g, "");
  // let filePath = urlPath.path;

  console.log(filePath);
  if (filePath == "") {
    filePath = "/index.html";
    // test
    console.log(filePath);
  }
  let requestedFile = __dirname + "/static/apple/" + filePath;
  let readFile = fs.readFile(requestedFile, (err, content) => {
    if (err) {
      res.writeHead(400);
      res.end();
    } else {
      let mime = lookup(filePath);
      res.writeHead(200, { "content-type": mime });
      res.end(content);
    }
  });
  //   if (req.url === "/" && req.method === "GET") {
  //
  //     console.log("Request received and processed");
  //     // question 6 test
  //     // res.write("This is about page.");

  //     // question 7
  //     res.write(String(randomNumberImportResult));
  //     res.end();
  //   }
});

// server listen port
server.listen(PORT, () =>
  console.log(`Server is running on PORT http://localhost:${PORT}`)
);
