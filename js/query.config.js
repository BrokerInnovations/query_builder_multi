(function() {

    'use strict';

    angular.module('query').config(configuration);

    configuration.inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

    function configuration($stateProvider, $httpProvider, $locationProvider) {
        //$urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
        $stateProvider
          .state('home', {
              url: '/',
              controller: 'HomeController',
              controllerAs: 'homeVm',
              templateUrl: '/templates/home.html'
          });
    }
})();
