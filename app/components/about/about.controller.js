(function () {
    'use strict';

    angular
        .module('ex-app-about')
        .controller('aboutController', ctrl);

    function ctrl($scope, $state, $window) {

        var _self = this;

        //_self.prototype = new baseController();

        console.log('-- new baseController');
        console.log(_self);

        _self.pageType = 'aboutController';
    }
    //ctrl.prototype = new baseController();
})();
