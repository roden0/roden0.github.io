(function(){
	var app = angular.module('resume', [ ]);

	app.controller('resumeController',function(){
		this.exps = experiences;
	});

	var experiences = [
		{
			name: 'Privalia',
			startDate: '02/2014',
			endDate: null,
			description: '',
			tags: ['VanillaJS','OOP','SCRUM','API'],
            longdesc: 'Scrum Master & Front-end core developer at a 4 devs and 2 QAs. Helping POs writting stories and teams to improve agile process and web performance.',
            techs: 'VanillaJS, Handlebars templates, AJAX, Jenkins automation',
            achvs: '',
			isVisible: true
		},
		{
			name: 'Massimo Dutti',
			startDate: '12/2013',
			endDate: '02/2014',
			description: '',
			tags: ['jQuery','jQueryMobile','Handlebars','API','JSON'],
            longdesc: 'Front-end app developer for desktop and mobile web.',
            techs: '',
            achvs: '',
			isVisible: true
		}

	];

	app.controller('panelController',function(){
		
		this.tab = 1;

		this.selectTab = function(tab){
			this.tab = tab;
		};

		this.isSelected = function(tab){
			return this.tab === tab;
		};
	});
})();