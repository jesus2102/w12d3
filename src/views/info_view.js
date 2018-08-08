const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    const country = evt.detail;
    this.render(country);
  });
};

InfoView.prototype.render = function (country) {

  const name = document.createElement('h2');
  name.textContent = country.name;

  const flag = document.createElement('img');
  flag.setAttribute("src", country.flag);
  flag.setAttribute("width", "200px");

  const regionTitle = document.createElement('h3');
  regionTitle.textContent = "Region:"

  const region = document.createElement('h4');
  region.textContent = country.region;

  const languageTitle = document.createElement('h3');
  languageTitle.textContent = 'Languages:'

  const languages = this.createList(country.languages);


  this.container.innerHTML = '';
  this.container.appendChild(name);
  this.container.appendChild(flag);
  this.container.appendChild(regionTitle);
  this.container.appendChild(region);
  this.container.appendChild(languageTitle);
  this.container.appendChild(languages);
};

InfoView.prototype.createList = function (languages) {
  const list = document.createElement('ul');
  languages.forEach((language) => {
    const item = document.createElement('li');
    item.textContent = language.name;

    list.appendChild(item);
  })
  return list;
};

module.exports = InfoView;
