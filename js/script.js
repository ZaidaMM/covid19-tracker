var select = document.getElementById('selectCountry');
var selectedCountry = document.getElementById('selectedCountry');
var casesToday = document.getElementById('casesToday');
var casesTotal = document.getElementById('casesTotal');
var casesPerMillionPop = document.getElementById('casesPerMillionPop');
var recoveredToday = document.getElementById('recoveredToday');
var recoveredTotal = document.getElementById('recoveredTotal');
var recoveredPerMillionPop = document.getElementById('recoveredPerMillionPop');
var deathsToday = document.getElementById('deathsToday');
var deathsTotal = document.getElementById('deathsTotal');
var deathsPerMillionPop = document.getElementById('deathsPerMillionPop');

var countryData = {};

data.forEach(function (country) {
  select.innerHTML +=
    '<option value= ' +
    country.countryInfo.iso2 +
    '>' +
    country.country +
    '</option>';
  countryData[country.countryInfo.iso2] = country;
});

function onCountryChange(name) {
  var countryCode = name.options[name.selectedIndex].value;

  var selectedCountryData = countryData[countryCode];

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
