(function () {
    angular
        .module('ex-app-dashboard')
        .directive('exDivContent', divContent);

    function divContent() {

        var drtvObj = function () { };
        //drtvObj.prototype = new baseDirective();

        drtvObj.prototype.restrict = 'EA';
        drtvObj.prototype.replace = true;
        drtvObj.prototype.scope = {
            title: '@'
        };
        drtvObj.prototype.template = [
            '<div class="" style="">',
                '<span>directive : div content 1</span><br>',
                '<span>country : {{::title}}</span>',
            '</div>'
        ].join('');
        drtvObj.prototype.link = {

            pre: function (scope, element, attrs) {
                console.log('################### DIV CONTENT 1');
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
