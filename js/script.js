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
var num;
function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + 'k'; // convert to k for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(0) + 'm'; // convert to m for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}
function onCountryChange(name) {
  var countryCode = name.options[name.selectedIndex].value;

  var selectedCountryData = countryData[countryCode];

  selectedCountry.innerHTML = selectedCountryData.country;
  casesToday.innerHTML = numFormatter(selectedCountryData.todayCases);
  casesTotal.innerHTML = numFormatter(selectedCountryData.cases);
  casesPerMillionPop.innerHTML = numFormatter(
    selectedCountryData.casesPerOneMillion
  );
  recoveredToday.innerHTML = numFormatter(selectedCountryData.todayRecovered);
  recoveredTotal.innerHTML = numFormatter(selectedCountryData.recovered);
  recoveredPerMillionPop.innerHTML = numFormatter(
    selectedCountryData.recoveredPerOneMillion
  );
  deathsToday.innerHTML = numFormatter(selectedCountryData.todayDeaths);
  deathsTotal.innerHTML = numFormatter(selectedCountryData.deaths);
  deathsPerMillionPop.innerHTML = numFormatter(
    selectedCountryData.deathsPerOneMillion
  );

  console.log(selectedCountryData.cases);
}
