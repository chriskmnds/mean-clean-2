angular.module('myapp')
.controller('BaseCtrl', function($scope, $state) {
  'use strict';
  $scope.ctrlName = 'BaseCtrl';
  $scope.state = $state;
  $scope.pageTitle = "STARTUP APP"
});
