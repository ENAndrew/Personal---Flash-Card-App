
var app = angular.module('cardApp');

app.directive('choicesDirective', function(){
    return {
        restrict: "EA",
        templateUrl: 'choices/choices.html'
    };
});

