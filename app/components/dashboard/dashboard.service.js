(function () {
    'use strict';

    angular
        .module('ex-app-dashboard')
        .factory('dashboardService', dashboardService);

    function dashboardService($http) {

        var someData_; // some internal data

        var service = {
            getDashboardData: getDashboardData,
            getHttpResponse: getHttpResponse
        };

        return service;

        function getDashboardData(index) {

            if (index === 0) {
                return [
                    { sizeX: 4, sizeY: 15, row: 0, col: 0, model: { type: 'chart' } },
                    { sizeX: 4, sizeY: 5, row: 0, col: 5, model: { type: '2' } },
                    { sizeX: 4, sizeY: 5, row: 5, col: 5, model: { type: '3' } },
                    { sizeX: 4, sizeY: 5, row: 10, col: 5, model: { type: '1' } },
                ];
            } else {
                return [
                    { sizeX: 4, sizeY: 5, row: 0, col: 0, model: { type: '3' } },
                    { sizeX: 4, sizeY: 5, row: 5, col: 0, model: { type: '1' } },
                    { sizeX: 4, sizeY: 5, row: 10, col: 0, model: { type: '2' } },
                    { sizeX: 4, sizeY: 15, row: 0, col: 5, model: { type: 'chart' } },
                ];
            }
        };
        function getHttpResponse() {

            return $http.get('http://www.w3schools.com/angular/customers.php')
                .then(getHttpDataCompleted)
                .catch(getHttpDataFailed);

            function getHttpDataCompleted(response) {
                return response.data.records;
            };

            function getHttpDataFailed(error) {
                console.log(error);
            };
        };
    };
})();

