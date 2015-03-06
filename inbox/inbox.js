var inbox = angular.module('inbox', []);
	
inbox.controller('InboxCtrl', function($scope){
	$scope.messages = ['Facebook notification', 'I love you', 'New video on Youtube', 'Leaflet design'];
});