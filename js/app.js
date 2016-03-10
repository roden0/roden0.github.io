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
			isVisible: true
		},
		{
			name: 'Massimo Dutti',
			startDate: '12/2013',
			endDate: '02/2014',
			description: '',
			tags: ['jQuery','jQueryMobile','Handlebars','API','JSON'],
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