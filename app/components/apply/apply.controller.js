(function () {
    'use strict';

    angular
        .module('ex-app-apply')
        .controller('applyController', ctrl);

    function ctrl($scope, $state, $window) {

        var _self = this;

        //_self.prototype = new baseController();

        console.log('-- new baseController');
        console.log(_self);

        _self.pageType = 'applyController';



        _self.data = { time: new Date() };

        _self.updateTime = function () {
            _self.data.time = new Date();
        }

        document.getElementById("updateTimeButton")
                .addEventListener('click', function () {
                    console.log("update time clicked");
                    _self.data.time = new Date();
                    $scope.$apply();
                });


        function watchSomething() {
            console.log('## trigger watch something outer');
            return _self.data.time;
        };
        $scope.$watch(watchSomething, function (newValue) {
        });
    }
    //ctrl.prototype = new baseController();



    angular
    .module('ex-app-apply')
    .directive('exDiv', exDiv);

    function exDiv() {

        return {
            restrict: 'EA',
            replace: true,
            template: [
                '<div style="background-color: grey">',
                    '{{data.time}}',
                    '<br />',
                    '<button ng-click="updateTime()">update time - ng-click</button>',
                    '<button id="updateTimeButton2">update apply</button>',
                    '<button id="updateTimeButton3">update digest</button>',
                '</div>',
            ].join(''),
            scope: {},
            link: link

        };

        function link(scope, element, attrs) {

            scope.data = { time: new Date() };

            scope.updateTime = function () {
                scope.data.time = new Date();
            }

            document.getElementById("updateTimeButton2")
                    .addEventListener('click', function () {
                        console.log("update time clicked");
                        scope.data.time = new Date();
                        scope.$apply();
                    });

            document.getElementById("updateTimeButton3")
                    .addEventListener('click', function () {
                        console.log("update time clicked");
                        scope.data.time = new Date();
                        scope.$digest();
                    });


            function watchSomething() {
                console.log('## trigger watch something inner');
                return scope.data.time;
            };
            scope.$watch(watchSomething, function (newValue) {
            });
        };
    };
})();
