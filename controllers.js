'use strict';

/* Controllers */

var rosheeApp = angular.module('rosheeApp', []);

rosheeApp.controller('DealListCtrl', function($scope) {
    $scope.deals = data;
    $scope.deals.forEach(function(deal) {
        deal.lastUpdatedString = (new Date(deal.last_updated)).toDateString();
        deal.typeString = (deal.type) ? "Request" : "Deal";
    });

    $scope.remove = function(deal) {
        $scope.deals.splice($scope.deals.indexOf(deal), 1);
    };
    $scope.orderProp = 'title';
});
