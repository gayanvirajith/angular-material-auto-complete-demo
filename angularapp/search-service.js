var app = angular.module('people');

app.factory('SearchService', ['$http', function($http){
    return {
        get: function(text) {
            return $http.get('/search/' + text);
        }
    };
}]);