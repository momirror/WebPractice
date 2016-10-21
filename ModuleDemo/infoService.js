/**
 * Created by msp on 2016/10/21.
 */
var services = angular.module('myApp.service');

services.service('infoService',function() {
    this.myFunc = function (x) {
        return 'info  ' + x;
    }
});