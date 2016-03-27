
var app = angular.module('cardApp');

app.controller('addNewCtrl', function($scope){
    
    //will need to take in the new word entered
    
    //send new word to addCard service, which will post it 
    
    
    $scope.addWord = function(str){
        alert(str);
        
        //pass to service here
        
        //clear form
        $scope.word = "";
    };
    
    
});

