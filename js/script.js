const select = document.getElementById('selectCountry');
const selectedCountry = document.getElementById('selectedCountry');
const casesToday = document.getElementById('casesToday');
const casesTotal = document.getElementById('casesTotal');
const casesPerMillionPop = document.getElementById('casesPerMillionPop');
const recoveredToday = document.getElementById('recoveredToday');
const recoveredTotal = document.getElementById('recoveredTotal');
const recoveredPerMillionPop = document.getElementById(
  'recoveredPerMillionPop'
);
const deathsToday = document.getElementById('deathsToday');
const deathsTotal = document.getElementById('deathsTotal');
const deathsPerMillionPop = document.getElementById('deathsPerMillionPop');

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
  casesToday.innerHTML = selectedCountryData.todayCases;
  casesTotal.innerHTML = selectedCountryData.cases;
  casesPerMillionPop.innerHTML = selectedCountryData.casesPerOneMillion;
  recoveredToday.innerHTML = selectedCountryData.todayRecovered;
  recoveredTotal.innerHTML = selectedCountryData.recovered;
  recoveredPerMillionPop.innerHTML = selectedCountryData.recoveredPerOneMillion;
  deathsToday.innerHTML = selectedCountryData.todayDeaths;
  deathsTotal.innerHTML = selectedCountryData.deaths;
  deathsPerMillionPop.innerHTML = selectedCountryData.deathsPerOneMillion;

  console.log(selectedCountryData.cases);
}
