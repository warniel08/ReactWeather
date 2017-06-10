var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<h3 className="text-center">It is currently {temp}°F in</h3>
			<h3 className="text-center">{location}.</h3>
		</div>
	)
};

module.exports = WeatherMessage;