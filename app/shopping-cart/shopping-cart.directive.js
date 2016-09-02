'use strict';

angular.
  module('shoppingCart').
  directive("shoppingCartDirective", function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
          key: '=',
          value: '=',
          locationsParam: '=',
          sessions: '=',
          accept: "&",
          removeSession: "&"
      },
      templateUrl: 'shopping-cart/shopping-cart.template.html',
      controller: function($scope, $element, $attrs) {
        // Controles desde el shopping-cart
        //$scope.sessions
        //$scope.locations = 
        $scope.title = "Tituloooo";
        $scope.save= function() {
          console.log('from directive', $scope.key, $scope.value);    
          $scope.accept()
        };
        $scope.remove = function(session) {
          $scope.removeSession(session);
        }
      }
    };
  }).
  controller('shoppingCartController', ['$scope', function($scope) {
    // Controles desde el listado
    var self = this;
    $scope.locations = [];
    console.log("controller");
    console.log($scope.sessions);

    $scope.keyA = 'AA';
    $scope.valueA = 'BB';
    $scope.blabla = function(msg) { 
      console.log('from controller', $scope.keyA, $scope.valueA);  
      console.log('hello ' + msg);
    };

    $scope.removeSessionCtrl = function(session) {
      console.log("removeSessionCtrl");
    }

    $scope.pushLocation = function pushLocation(index,length) {
      if ($scope.locations[index] < length) {
        $scope.locations[index]++;
        $scope.sessionsA = $scope.locations[index];
      }

    };
    $scope.popLocation = function popLocation(index) {
      if ($scope.locations[index] > 0) {
        $scope.locations[index]--;
        if ($scope.locations[index] == 0) {
          $scope.sessionsA = null;
        } else {
          $scope.sessionsA = $scope.locations[index];
        }
      }
    };

  }]);