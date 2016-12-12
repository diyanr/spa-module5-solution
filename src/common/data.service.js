(function () {
	"use strict";

	angular.module('common')
	.service('DataService', DataService);

	function DataService(){
		var data = this;
		var user = {};

		data.saveRegistration = function(user){
			data.user = user;
		}

		data.getRegistration = function() {
			return data.user;
		}
	}

})();
