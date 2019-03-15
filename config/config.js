/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "bottom_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				displaySeconds: true
			}
		},
		{
			module: "calendar",
			header: "US LazyDays",
			position: "middle_center",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://p71-calendars.icloud.com/published/2/AAAAAAAAAAAAAAAAAAAAABTPSdp5Yq7VhWxXmBy27xiVMvBvG87_ZcEsEeBvYOW3WsTITVOm_1eeUvsFc06lKiDIFAF9CDgric6LspOTLA8"
					}
				]
			}
		},
		{
			module: "helloworld",
			position: "lower_third",
			config: {
				text: "Hello Vocatio!"}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Philadelphia",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Philadelphia",
				locationID: "5128581",  //ID from https://openweathermap.org/city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_right",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
