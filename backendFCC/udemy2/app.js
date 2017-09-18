const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js')

// var address, latitude, longitude;

const argv = yargs
   .options({
      address: {
         demand: true,
         alias: 'a',
         describe: 'Address to fetch weather for',
         string: true
      }
   })
   .help()
   .alias('help', 'h')
   .argv; // store the result at the variable
// // 2013 Commonwealth Avenue
//
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
   if (errorMessage) {
      console.log(errorMessage);
   } else {
      console.log(results.address);
      weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
         if (errorMessage) {
            console.log(errorMessage);
         } else {
            console.log('It is currently ' + weatherResults.temperature + ' Degree Fahrenheit \nIt feels like ' + weatherResults.apparentTemperature+ ' Degree Fahrenheit now');
         }
      });
   }
});


// https://api.forecast.io/forecast/b2040ac156296ee7d38a5655fd27c105/42.3463503,-71.1626756
