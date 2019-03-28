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
	units: "imperial", // this was metric

	modules: [
		// {
		// 	module: "alert"
		// },
		// {
		// 	module: "updatenotification",
		// 	position: "bottom_bar"
		// },
		{
			module: "clock",
			position: "top_left",
			config: {
				displaySeconds: true
			}
		},
		{
			module: "calendar",
			header: "Vocatio School Schedule",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://p71-calendars.icloud.com/published/2/AAAAAAAAAAAAAAAAAAAAABTPSdp5Yq7VhWxXmBy27xiVMvBvG87_ZcEsEeBvYOW3WsTITVOm_1eeUvsFc06lKiDIFAF9CDgric6LspOTLA8"
					}
				]
			}
		},
		// {
		// 	module: "helloworld",
		// 	position: "lower_third",
		// 	config: {
		// 		text: "Hello Vocatio"
		// 	}
		// },
		{
			module: "compliments",
			position: "lower_third",
			config: {
				compliments: {
					anytime: [
						"Hey Vocatio!",
						"You are awesome!"
					],
					morning: [
						"Good Morning Vocatio!",
						"Are you ready for a great day?",
						"You are making a difference!",
						"You're more fun than bubble wrap!"
					],
					afternoon: [
						"Hope you're having a great day!",
						"Can't wait to see you tomorrow!",
						"You made someone smile today, I know it.",
						"You are making a difference.",
						"The day was better for your efforts."
					]
				}
			}
		},
		{
			module: 'MMM-DailyBibleVerse',
			position: 'bottom_bar',	// This can be any of the regions. Best result is in the bottom_bar as verses can take multiple lines in a day.
			config: {
	            version: 'NIV', // This can be changed to any version you want that is offered by Bible Gateway. For a list, go here: https://www.biblegateway.com/versions/,
		    size: 'small' // default value is medium, but can be changed.
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Philadelphia",
				locationID: "4560349",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "1d1a239860191a9fdea86e2cf4e57f1d"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Philadelphia",
				locationID: "4560349",  //ID from https://openweathermap.org/city
				appid: "1d1a239860191a9fdea86e2cf4e57f1d"
			}
		},
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_right",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true
		// 	}
		// },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
