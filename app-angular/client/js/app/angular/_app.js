(function() {
  'use strict';

  angular.module('myapp', ['ui.router', 'ngSanitize', 'Configuration'])
    
  .config(function($locationProvider, $stateProvider, $urlRouterProvider, CONFIG) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/404');
    
    $stateProvider
      
      .state('main', {
        url: '/',
        templateUrl: '/' + CONFIG.appVersion + '/templates/main.html',
        controller: 'MainCtrl',
        resolve: {
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: '/' + CONFIG.appVersion + '/templates/main.html',
        controller: 'MainCtrl',
        resolve: {
        }
      })
      .state('404', {
        url: '/404?err',
        templateUrl: '/' + CONFIG.appVersion + '/templates/404.html',
        controller: 'ErrorCtrl'
      })
      .state('500', {
        url: '/500?err',
        templateUrl: '/' + CONFIG.appVersion + '/templates/500.html',
        controller: 'ErrorCtrl'
      });
  })
  
  .run(function($state, $rootScope, $window, $location) {
    $rootScope.doingResolve = true;
  });
  
})();
