
var app = angular.module('cardApp');

app.directive('choicesDirective', function(){
    return {
        restrict: "EA",
        templateUrl: '../directives/choices/choices.html'
    };
});

app.directive('headerDirective', function(){
    return {
        restrict: "EA",
        templateUrl: '../directives/header/header.html'
    };
});

