var React = require('react');

var WeatherMessage = React.createClass({
	render: function () {
		return (
			<h3>It is currently 88°F in Salt Lake City.</h3>
		);
	}
});

module.exports = WeatherMessage;