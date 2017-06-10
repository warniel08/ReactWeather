var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>
				This is a weather application built on React. It was built from The Complete React Web Developer Course from <a href="http://udemy.com" target="_blank">udemy.com</a>'s Andrew Mead.
			</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
				</li>
			</ul>
		</div>
	)
};

module.exports = About;