const select = document.getElementById('selectCountry');
const selectedCountry = document.getElementById('selectedCountry');
const casesToday = document.getElementById('casesToday');
const casesTotal = document.getElementById('casesTotal');
const casesPerMillionPop = document.getElementById('casesPerMillionPop');

let countryData = {};

fetch('../data/covidData.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    countryData = data;
    data.forEach((country) => {
      select.innerHTML += `<option value=${country.countryInfo.iso2} > ${country.country} </option>`;
      countryData[country.countryInfo.iso2] = country;
    });
  });

function onCountryChange(name) {
  const countryCode = name.options[name.selectedIndex].value;
  const selectedCountryData = countryData[countryCode];
  selectedCountry.innerHTML = selectedCountryData.country;

  console.log(selectedCountryData.cases);
}
