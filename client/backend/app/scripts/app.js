(function(){
	'use strict';
	angular
		.module('backendApp', [
			'ngCookies',
			'lbServices',
			'formly',
			'formlyBootstrap',
			'ui.router',
			'com.module.core',
			'com.module.users',
			'com.module.examples'
		]);
})();
