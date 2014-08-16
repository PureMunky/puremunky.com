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

    $scope.twitch = {
      live: false
    };

    $scope.twitchLive = function () {
      return $scope.twitch.live;
    };

  }]);

})(angular);
