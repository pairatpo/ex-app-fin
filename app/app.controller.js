(function () {
    'use strict';

    angular
        .module('ex-app')
        .controller('appController', controller);

    function controller($scope, $state, $window) {

        var _self = this;

        _self.navItems = [
            { text: 'Dashboard', value: 'dashboard' },
            { text: 'About', value: 'about' },
            //{ text: 'Test', value: 'test' }
        ];

        _self.theme = 'base';
        _self.getNavSelectedCssClass = function (value) {
            if (_self.selectedNavItem === value) { return 'active'; }
            return '';
        };

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            _self.selectedNavItem = toState.name;
        })
    };
})();