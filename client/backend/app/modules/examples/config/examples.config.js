(function(){
  'use strict';
  angular
    .module('com.module.examples')
    .run(function($rootScope){
      $rootScope.addMenu('Examples', 'app.examples', 'fa-calendar-o', [
        { name: 'list', sref: 'app.examples.list' }
      ]);
    })
})();
