const needle = require("needle");

needle.get('https://api.thecatapi.com/v1/breeds/search?q=sib', function(error, response) {
  if (!error && response.statusCode === 200)
    console.log(response.body);
});
