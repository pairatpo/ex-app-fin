(function () {
    'use strict';

    angular
        .module('ex-app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {

        var states = [];

        states.push({
            name: 'dashboard',
            url: '/dashboard',
            controller: 'dashboardController as pageCtrl',
            templateUrl: 'app/components/dashboard/dashboard.template.html'
        });

        states.push({
            name: 'about',
            url: '/about',
            controller: 'aboutController as pageCtrl',
            templateUrl: 'app/components/about/about.template.html'
        });

        // assign state objects to provider
        for (var i = 0; i < states.length; i++) { $stateProvider.state(states[i]); }

        // assign url routing
        $urlRouterProvider.otherwise('/dashboard');
    };
})();