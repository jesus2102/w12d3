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

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    console.log('event detail', evt.detail);
    this.publishCountryDetail(selectedIndex);
  });
};

Countries.prototype.publishCountryDetail = function (countryIndex) {
  const selectedCountry = this.countries[countryIndex];
  PubSub.publish('Countries:selected-country-ready', selectedCountry);
  console.log('selected country:', selectedCountry);
};

module.exports = Countries;
