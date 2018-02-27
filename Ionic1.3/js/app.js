  var app = angular.module('myApp', ['ionic']);
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('tab', {
        url: '/tab',
        templateUrl: 'template/tab.html'
      })
      .state('tab.tab1', {
        url: '/tab1',
        views: {
          'tab1': {
            templateUrl: 'template/tab1.html'
          }
        }
      })
      .state('tab.tab2', {
        url: '/tab2',
        views: {
          'tab2': {
            templateUrl: 'template/tab2.html'
          }
        }
      })
      .state('tab.tab3', {
        url: '/tab3',
        views: {
          'tab3': {
            templateUrl: 'template/tab3.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/tab/tab1');
  })
  app.controller('myCtrl', function($scope, $state) {
    // $state.go('./tab/tab1');
  });