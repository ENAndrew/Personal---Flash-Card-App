
    
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
    });
    
    $urlRouterProvider.otherwise('/');


});


