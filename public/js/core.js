(function(ang) {
  'use strict';

  var PureMunky = ang.module('PureMunky', ['ngResource']);


  /*
  PureMunky.service('Twitch', ['$resource', function ($resource) {
    return $resource('https://api.twitch.tv/kraken/streams/:userName', {}, {
      query: {method:'GET'}
    });
  }]);
  */

  PureMunky.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.twitchName = 'puremunky';

    $scope.twitchLive = function () {
      return false;
    };

  }]);

})(angular);
