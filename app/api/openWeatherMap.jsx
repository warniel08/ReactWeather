var axios = require('axios');

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${process.env.APPID_KEY}&units=imperial`;

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return Math.round(res.data.main.temp);
			}
		}, function (err) {
			throw new Error(err.response.data.message);
		});
	}
}