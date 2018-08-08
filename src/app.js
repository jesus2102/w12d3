const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.getData();
  console.log('all countries:', countries);

  const selectElement = document.querySelector('select#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  countries.bindEvents();

  const infoDiv = document.querySelector('div#country');
  const infoView = new InfoView(infoDiv);
  infoView.bindEvents();
});
