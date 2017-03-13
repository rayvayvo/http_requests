var https = require('https');
var chunks = [];


module.exports = function getHTML (options, callback) {
    /* Your code here */

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