/**
 * Created by msp on 2016/10/21.
 */
var services = angular.module('myApp.service',[]);

services.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(10);
    }
});