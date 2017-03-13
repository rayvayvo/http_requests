
// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path

var host = process.argv[2];
var path = process.argv[3];

  var https = require('https');
  var requestOptions = {
    host: host,
    path: path
  };
  var url = "";

function printHTML (html) {
  console.log(html);
}



function getHTML (url, printHTML) {

if (path !== undefined){
   url = host + path;
} else {
   url = -;
}


  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {

          // console.log("Datablock: " + [i] + "\n" + chunks[i]);
        // return chunks;

    });

    response.on('end', function() {

      console.log('Response stream complete.');

    });
  });

return url;

};

console.log(getHTML());

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response

  // set encoding of received data to UTF-8
