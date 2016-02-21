(function(){
	'use strict';
	angular
		.module('com.module.core')
		.run(function ($rootScope) {
			//设置标题
			$rootScope.title = "EXE全景直播";

			//左侧导航菜单
			$rootScope.menu = [];

			$rootScope.addMenu = function (name, uisref, icon, subMenus) {
				$rootScope.menu.push({
					name: name,
					sref: uisref,
					icon: icon,
					subMenus: subMenus
				})
			}
		})
})();
