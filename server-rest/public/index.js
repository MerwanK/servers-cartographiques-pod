angular.module('dashboardApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
  self.merwans = ['a', 'b', 'c'];
  }])

  .factory('APIService', ['$resource', function($resource) {
    return $resource('/api/bears/:id');
  }])
  
  .factory('RestfulAPIService', ['$http', function($http) {
    return {
      query: function() {
        return $http.get('/api/bears');
      }
    }
  }]);