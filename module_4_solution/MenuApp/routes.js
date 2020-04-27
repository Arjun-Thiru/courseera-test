(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
     
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.template.html'
      })
    
      .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.template.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          category: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
    
      .state('itemDetail', {
        url: '/itemShortName-{itemShortName}',
        templateUrl: 'templates/item-detail.template.html',
        controller: 'ItemDetailController as itemDetailCtrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService',
                function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.itemShortName);
                }]
        }
      });
    }
    
    })();
    