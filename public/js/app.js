
    
var app = angular.module('cardApp', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider){

    $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/default.html'
    })
            .state('mainCards', {
                url: '/cards',
                templateUrl: 'views/mainCards.html'
    })
            .state('hardCards', {
                url: '/challenging',
                templateUrl: 'views/hardCards.html'
    })
            .state('easyCards', {
                url: '/easy',
                templateUrl: 'views/easyCards.html'
    })
            .state('addNew', {
                url: '/add-new',
                templateUrl: 'views/addNew.html',
                controller: 'addNewCtrl'
    });
    
    $urlRouterProvider.otherwise('/');


});


