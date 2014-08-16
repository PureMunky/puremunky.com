(function(ang) {
  'use strict';

  var PureMunky = ang.module('PureMunky', []);

  PureMunky.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.twitchName = 'puremunky';

  }]);

})(angular);
