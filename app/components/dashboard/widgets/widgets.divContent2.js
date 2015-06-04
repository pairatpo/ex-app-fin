(function () {
    'use strict';

    angular
        .module('ex-app-dashboard')
        .directive('exDivContent2', divContent2);

    function divContent2() {

        var drtvObj = function () { };
        //drtvObj.prototype = new baseDirective();

        drtvObj.prototype.restrict = 'EA';
        drtvObj.prototype.replace = true;
        drtvObj.prototype.scope = {};
        drtvObj.prototype.template = [
            '<div class="" style="">',
                '<span>directive : div content 2</span>',
            '</div>'
        ].join('');
        drtvObj.prototype.link = {

            pre: function (scope, element, attrs) {
                console.log('################### DIV CONTENT 2');
            },
            post: function (scope, element, attrs) {

                scope.$on('$destroy', function () {
                    console.log('destroy : ' + scope.guid);
                });
            },
        };

        return new drtvObj();
    };
})();

