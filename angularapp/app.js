'use strict';

var app = angular.module('people', [
  'underscore',
  'ui.bootstrap',
  'ExampleModule',
  'ngAnimate',
  'ngAria',
  'ngMaterial'
]);

app.controller('AppCtrl', ['$scope', 'SearchService', function ($scope, SearchService) {
  $scope.laravel = {
    url   : 'http://laravel.com',
    title : 'Laravel PHP Framework'
  };

  $scope.message = 'You have arrived.';

  $scope.items = [];
  SearchService.get('a').success(function(data) {
    $scope.items = data.data;
  });

}]);


app.controller('DemoCtrl',['$scope', '$timeout', '$q', 'SearchService', function ($scope, $timeout, $q, SearchService) {
  var self = this;
  // list of `state` value/display objects
  self.states        = [];
  self.selectedItem  = null;
  self.searchText    = null;
  self.querySearch   = querySearch;
  self.simulateQuery = false;
  self.isDisabled    = false;
  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
  function querySearch (query) {

    // Get results based on query text
   loadAll(query);
    var results = query ? self.states.filter( createFilterFor(query) ) : [],
        deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }
  /**
   * Build suggested people info array based of query text
   */
  function loadAll(query) {
    SearchService.get(query).success(function(data) {
      var loadItems = [];
      loadItems = data.data.map(function(obj){
        return {
          value: obj.name.toLowerCase() + ' ' + obj.location.toLowerCase() + ' ' + obj.color.toLowerCase(),
          display: obj.name
        };
      });
      self.states = loadItems;
    });
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) > -1);
    };
  }
}]);

