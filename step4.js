
// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path


  var https = require('https');
  var chunks = [];
  var requestOptions = {
    host: process.argv[2],
    path: process.argv[3]
  };


function getHTML(options, printHTML) {


  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {

        chunks.push(data);
          // console.log("Datablock: " + [i] + "\n" + chunks[i]);
        // return chunks;
// console.log(chunks[0]);

    });

    response.on('end', function() {
      printHTML(chunks);
      console.log('Response stream complete.');

    });
  });

};

function printHTML (html) {
  console.log('hi');
  // console.log(chunks[0]);
  console.log(html);
}
getHTML(null, printHTML);

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response

  // set encoding of received data to UTF-8
