angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {

    var deferObj = $q.defer();

    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      var parsedResponse = response.data.data;
      for(var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf';
      }
      deferObj.resolve(parsedResponse);
    });

    return deferObj.promise;

  };

});
