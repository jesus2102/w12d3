const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function () {
  this.countries = null;
};

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.countries = data;
    console.log(this.countries);
    PubSub.publish('Countries:all-countries-loaded', this.countries);
  });
};

module.exports = Countries;
