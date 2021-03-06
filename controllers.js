'use strict';

/* Controllers */

//rosheeApp instantiated in modal.js
rosheeApp.controller('DealListCtrl', function($scope) {
    $scope.deals = data; //"data" is from data.jsonp
    $scope.currID = 0; //increments every time a new deal/request is made

    $scope.deals.forEach(function(deal) {
        deal.lastUpdatedString = (new Date(deal.last_updated)).toDateString();
        deal.typeString = (deal.type) ? "Request" : "Deal";
        $scope.currID = Math.max($scope.currID,deal.id); //currID starts at the highest ID
    });

    //remove a deal/request
    $scope.remove = function(deal) {
        $scope.deals.splice($scope.deals.indexOf(deal), 1);
    };

    $scope.orderProp = 'title';//what to order the table by

    $scope.createType = 0; //are we adding a Deal or Request? (0 for Deal, 1 for Request)

    //create a new deal/request from the input fields of the modal dialogue
    $scope.add = function() {
        var deal = {
            id: $scope.currID++,
            title: $('#nameInput').val(),
            description: $('#descriptionInput').val(),
            type: $scope.createType,
            last_updated: (new Date()).getTime(),
            lastUpdatedString: (new Date()).toDateString(),
            typeString: ($scope.createType) ? "Request" : "Deal"
        };
        $('#nameInput').val("");
        $('#descriptionInput').val("");
        $scope.deals.push(deal);
    };

    //for modal dialogue
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
});

//source: http://www.grobmeier.de/angular-js-the-show-on-mouseenter-hide-on-mouseleave-directive-31082012.html#.U3Bq-fldXKE
rosheeApp.directive('showonhoverparent',
   function() {
      return {
         link : function(scope, element, attrs) {
            element.parent().parent().bind('mouseenter', function() {
                element.show();
            });
            element.parent().parent().bind('mouseleave', function() {
                 element.hide();
            });
       }
   };
});
