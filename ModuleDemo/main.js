/**
 * Created by msp on 2016/10/21.
 */

var app = angular.module('myApp', ['myApp.service','service2']);
app.controller('myCtrl', function($scope, hexafy,infoService,sayHello) {
    $scope.hex = hexafy.myFunc(255);
    $scope.info = infoService.myFunc('Spencer');
    $scope.hello = sayHello.myFunc('Spencer');
});