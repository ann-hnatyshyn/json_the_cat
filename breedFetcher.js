const needle = require("needle");

const fetchBreedDescription = function(breedName, callback) {
  needle.get('https://api.thecatapi.com/v1/breeds/search?q=sib');
};
const callback = (error, breedDescription) => {
  if (error) {
    console.error(error);
  } else {
    console.log(breedDescription);
  }
};

fetchBreedDescription('sib', callback);

module.exports = fetchBreedDescription;
