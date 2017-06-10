var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<h3>It is currently {temp}°F in {location}.</h3>
	)
};

module.exports = WeatherMessage;