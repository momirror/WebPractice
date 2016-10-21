/**
 * Created by msp on 2016/10/21.
 */
var services = angular.module('service2',[]);

services.service('sayHello',function() {
    this.myFunc = function (x) {
        return 'hello ' + x;
    }
});