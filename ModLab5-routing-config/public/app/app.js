angular.module('app', ['ngRoute']);

// Don't forget to ADD REFERENCES to the CONTROLLER FILES in index.html
angular.module('app').config([
    '$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/items/', {
            templateUrl: '/app/items/index.html',
            controller: 'ItemsController',
            controllerAs: 'vm'
        })
        .when('/contact/', {
            templateUrl: '/app/contact/index.html',
            controller: 'ContactController',
            controllerAs: 'vm'
        })
        .when('/', {
            templateUrl: '/app/home/index.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'  
        });
    
    }
]);
  
  
  
  