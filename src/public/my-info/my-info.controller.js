(function(){
	"use strict";

	angular.module('public')
	.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['DataService', 'ApiPath'];

	function MyInfoController(DataService, ApiPath){
		var myInfoCtrl = this;
		myInfoCtrl.basePath = ApiPath;
		myInfoCtrl.user = DataService.getRegistration();
	}

})();