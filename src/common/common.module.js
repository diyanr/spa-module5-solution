(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://dsr-course5-app.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
