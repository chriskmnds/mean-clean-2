(function() {
  'use strict';

  angular.module('myapp', ['ui.router', 'ngSanitize'])
  
  .constant('appVersion', document.querySelector('html').getAttribute('data-app-version'))
  .constant('nodeApiAddr', document.querySelector('html').getAttribute('node-api-addr'))
    
  .config(function($locationProvider, appVersion, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/404');
    
    $stateProvider
    
      .state('main', {
        url: '/',
        templateUrl: '/' + appVersion + '/templates/main.html',
        controller: 'MainCtrl',
        resolve: {
        }
      })
      .state('404', {
        url: '/404?err',
        templateUrl: '/' + appVersion + '/templates/404.html',
        controller: 'ErrorCtrl'
      })
      .state('500', {
        url: '/500?err',
        templateUrl: '/' + appVersion + '/templates/500.html',
        controller: 'ErrorCtrl'
      });
  })

  .run(function($state, $rootScope, $window, $location) {
    $rootScope.doingResolve = true;
  });
  
})();
