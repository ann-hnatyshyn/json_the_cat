const needle = require("needle");

const fetchBreedDescription = (error, breedDescription) => {
  needle.get('https://api.thecatapi.com/v1/breeds/search?q=sib');
  if (error) {
    console.error(error);
  } else {
    console.log(breedDescription);
  }
};

fetchBreedDescription();

module.exports = fetchBreedDescription;
