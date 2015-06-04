(function () {
    'use strict';

    angular
        .module('ex-app-dashboard')
        .controller('dashboardController', ctrl);

    function ctrl($scope, $state, $window, dashboardService, _) {

        var _self = this;
        //this.prototype = new baseController();

        console.log('-- new baseController');
        console.log(_self);

        _self.pageType = 'dashboardController';

        _self.gridsterOptions = {
            margins: [2, 2],
            columns: 8,
            rowHeight: '25',
            //isMobile: true, // stacks the grid items if true
            //mobileBreakPoint: 600, // if the screen is not wider that _self, remove the grid layout and stack the items
            //mobileModeEnabled: true,
            avoid_overlapped_widgets: true,
            draggable: {
                handle: 'div.panel-heading'
            }
        };

        _self.standardItems = [];

        _self.clickCount = 0;
        _self.generateStandardItems = generateStandardItems;
        _self.generateStandardItemsByHttpData = generateStandardItemsByHttpData;
        _self.addOne = addOne;
        _self.removeAll = removeAll;

        _self.increaseCols = increaseCols;

        _self.isChartContent = isChartContent;
        _self.chartModel = {
            'options': {
                'chart': {
                    'type': 'areaspline'
                },
                'plotOptions': {
                    'series': {
                        'stacking': ''
                    }
                }
            },
            'series': [
              {
                  'name': 'Some data',
                  'data': [
                    1,
                    2,
                    4,
                    7,
                    3
                  ],
                  'id': 'series-0'
              }
            ],
            'title': {
                'text': 'Hello'
            },
            'credits': {
                'enabled': false
            },
            'loading': false,
            'size': {
                'width': '600',
                'height': '300'
            }
        };



        function generateStandardItems() {

            //if (_self.clickCount === 0) {
            //    _self.standardItems = [
            //        { sizeX: 4, sizeY: 15, row: 0, col: 0, model: { type: 'chart' } },
            //        { sizeX: 4, sizeY: 5, row: 0, col: 5, model: { type: '2' } },
            //        { sizeX: 4, sizeY: 5, row: 5, col: 5, model: { type: '3' } },
            //        { sizeX: 4, sizeY: 5, row: 10, col: 5, model: { type: '1' } },
            //    ];
            //} else if (_self.clickCount === 1) {
            //    _self.standardItems = [
            //        { sizeX: 4, sizeY: 5, row: 0, col: 0, model: { type: '3' } },
            //        { sizeX: 4, sizeY: 5, row: 5, col: 0, model: { type: '1' } },
            //        { sizeX: 4, sizeY: 5, row: 10, col: 0, model: { type: '2' } },
            //        { sizeX: 4, sizeY: 15, row: 0, col: 5, model: { type: 'chart' } },
            //    ];
            //}

            _self.standardItems = dashboardService.getDashboardData(_self.clickCount);

            _self.clickCount += 1;
            if (_self.clickCount === 2) { _self.clickCount = 0; }
        };
        function addOne() {

            _self.standardItems.push({
                sizeX: Math.floor((Math.random() * 4) + 1),
                sizeY: 8
            });
        };
        function removeAll() {

            _self.standardItems = [];
        };
        function increaseCols() {
            _self.gridsterOptions.columns += 1;
        };
        function isChartContent(item) {
            if (!item) { return false; }
            if (!item.model) { return false; }
            if (!item.model.type) { return false; }
            return item.model.type === 'chart';
        };
        function generateStandardItemsByHttpData() {

            //_self.standardItems = dashboardService.getHttpResponse().then(onGetHttpResponse);

            _self.standardItems = [];
            dashboardService.getHttpResponse().then(onGetHttpResponse);

            function onGetHttpResponse(data) {

                var index = 0;

                _.each(data, function (obj) {
                    _self.standardItems.push({
                        sizeX: 2, sizeY: 5, row: 0, col: index * 2, model: {
                            type: '1',
                            title: obj.Country
                        }
                    });

                    if (index < 3) { index++ }
                    else { index = 0; }

                });
                //console.log(data);
                //_self.standardItems = _.map(data, function (obj) {
                //    return {
                //        sizeX: 2, sizeY: 5, row: 0, col: 0, model: {
                //            type: '1',
                //            title: obj.Country
                //        }
                //    };
                //});
            };
        };
    };

    //ctrl.prototype = new baseController();


})();
