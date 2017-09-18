const request = require('request');

var getWeather = (lat, lng, callback) => {
   request({
      url: 'https://api.forecast.io/forecast/b2040ac156296ee7d38a5655fd27c105/'+ lat+ ','+ lng,
      json: true
   }, (error, response, body) => {
      if (error) {
         callback('Unable to connect to Forecast.io server');
      }
      if (!error && response.statusCode === 200) {
         callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
         });
      } else {
         callback('Unable to fetch weather.');
      }

   });
};

module.exports.getWeather = getWeather;
