const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all-countries-loaded', (evt) => {
    const allCountries = evt.detail;
    console.log('Select view countries:', allCountries);
    this.populate(allCountries);
  })
};

SelectView.prototype.populate = function (countries) {
  countries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
