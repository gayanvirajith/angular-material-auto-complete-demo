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

    var loadItems = [];
    SearchService.get(query).success(function(data) {
      loadItems = data.data;

      var newLoad = loadItems.map(function(obj){
        return {
          value: obj.name.toLowerCase() + ' ' + obj.location.toLowerCase() + ' ' + obj.color.toLowerCase(),
          display: obj.name
        };
      });
      self.states = newLoad;
    });

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
   * Build `states` list of key/value pairs
   */
  function loadAll() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
    return allStates.split(/, +/g).map( function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      };
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

