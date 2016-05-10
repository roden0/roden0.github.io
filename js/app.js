(function () {
    'use strict';
    var experiences = [
		{
			name: 'Privalia',
			startDate: '02/2014',
			endDate: null,
			description: 'Front-end developer',
			tags: ['VanillaJS', 'OOP', 'SCRUM', 'API'],
            longdesc: 'Scrum Master & Front-end architecture core developer at a 4 devs and 2 QAs team. Helping POs writting stories and teams to improve agile process and web performance.',
            techs: 'VanillaJS, Handlebars templates, AJAX, Jenkins automation',
            achvs: 'New core rendering system from response to callback-driven taylor-made framework. Transition to responsive site and core evolution to modular ES6.',
			isVisible: true
		},
		{
			name: 'Massimo Dutti',
			startDate: '12/2013',
			endDate: '02/2014',
			description: 'Front-end developer',
			tags: ['jQuery', 'jQueryMobile', 'Handlebars', 'API', 'JSON'],
            longdesc: 'Front-end app developer for desktop and mobile web.',
            techs: 'JSP, jQueryMobile, REST API',
            achvs: 'New sections rendered with Handlebars and Less',
			isVisible: true
		},
        {
			name: 'Desigual',
			startDate: '08/2013',
			endDate: '09/2013',
			description: 'Front-end developer',
			tags: ['jQuery', 'CSS3', 'Handlebars', 'API', 'JSON'],
            longdesc: 'Front-end app developer for desktop and mobile web.',
            techs: 'JSP, jQueryMobile, REST API, Parse PaaS Backend',
            achvs: 'New sections rendered with Handlebars and Less',
			isVisible: true
		},
        {
			name: 'Mango',
			startDate: '06/2013',
			endDate: '07/2013',
			description: 'Front-end developer',
			tags: ['jQuery', 'CSS3', 'Bootstrap', 'IE6+', 'RWD'],
            longdesc: 'Front-end app developer restyling responsive ecommerce site.',
            techs: 'JSP, Bootstrap, gracefull degradation, Less',
            achvs: 'Restyling of a web to responsive with IE6+ retro-compatibility and CSS3 gracefull degradation',
			isVisible: true
		},
        {
			name: 'Telefónica I+D',
			startDate: '02/2013',
			endDate: '05/2013',
			description: 'Front-end developer',
			tags: ['JSP', 'Bootstrap', 'Less', 'eHealth'],
            longdesc: 'Front-end app developer for an eHealth webapp.',
            techs: 'JSP, Bootstrap, Less',
            achvs: 'Telediagnosys webapp at the Telefónica UX dept. Improvement of the usability through BDD.',
			isVisible: true
		}
        
	],
	    app = angular.module('resume', [ ]);

	app.controller('resumeController', function () {
		this.exps = experiences;
	});

	app.controller('panelController', function () {
		
		this.tab = 1;

		this.selectTab = function (tab) {
			this.tab = tab;
		};

		this.isSelected = function (tab) {
			return this.tab === tab;
		};
	});
}());