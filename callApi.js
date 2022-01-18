const https = require('https');

https.get('https://randomapi.com/api', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (user) => {
    data += user;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

