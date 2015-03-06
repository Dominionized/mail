var mail = angular.module('mail', ['ngRoute', 'inbox']);

mail.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'inbox/inbox.tpl.html',
				controller: 'InboxCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);