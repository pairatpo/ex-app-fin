(function () {
    'use strict';

    angular
        .module('ex-app-dashboard')
        .directive('exDivNoBase', divNoBase);

    function divNoBase() {

        return {
            restrict: 'EA',
            replace: true,
            template: [
              '<div class="">',
                '<h1>Directive with no Inheritance</h1>',
              '</div>'
            ].join('')
        };
    };
})();

