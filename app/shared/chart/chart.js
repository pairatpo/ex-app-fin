'use strict';

angular.module('ex-app').directive('chart', function () {
    return {
        restrict: 'E',
        scope: {

        },
        template: ['<highchart id="chart1" config="chartConfig" class="span9" ></highchart>'].join(''),
        link: {
            pre: function () { },
            post: function () { }
        }
    };
});