(function(){
	"use strict";

	angular.module('public')
	.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['MenuService', 'DataService'];

	function SignUpController(MenuService, DataService){
		var signUpCtrl = this;
		signUpCtrl.completed = false;
		signUpCtrl.validMenu = false;
		signUpCtrl.saved = false;

		signUpCtrl.submit = function(){
			MenuService.getFavoriteItem(signUpCtrl.user.short_name)
			.then(function(response){
				signUpCtrl.completed = true;
				signUpCtrl.validMenu = true;
				signUpCtrl.user.menuItem = response;
				DataService.saveRegistration(signUpCtrl.user);
				signUpCtrl.saved = true;
			})
			.catch(function(error){
				signUpCtrl.completed = true;
				signUpCtrl.validMenu = false;
				signUpCtrl.saved = false;
			})
		};
	}

})();