
// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
  var https = require('https');
  var chunks = [];
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };



function getAndPrintHTMLChunks () {


  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {

        chunks.push(data);
          // console.log("Datablock: " + [i] + "\n" + chunks[i]);
        // return chunks;

    });

    response.on('end', function() {
      console.log('\n', 'hey look over here bro', chunks);

      console.log('Response stream complete.');

    });
  });


};

console.log(getAndPrintHTMLChunks());

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response

  // set encoding of received data to UTF-8
