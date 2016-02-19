(function(){
  'use strict';
  angular
    .module('com.module.shop')
    .service('StreamService', function (CoreService, LiveStream) {
      this.getLiveStream = function (streamId) {
        return LiveStream.findById({ id: streamId }).$promise;
      }

      this.upsertLiveStream = function (stream, successCb, cancelCb) {
        return LiveStream.upsert(stream).$promise.then(
          function () {
            CoreService.alertSuccess('成功！', '', successCb);
          }, function (err) {
            CoreService.alertError('失败！', '', cancelCb);
          }
        );
      }

      this.deleteLiveStream = function (streamId, successCb, cancelCb) {
        CoreService.confirm('确定删除？', '删除后将无法恢复', function(){
          LiveStream.deleteById({ id: streamId }).$promise.then(
            function () {
              CoreService.alertSuccess('删除成功！', '', successCb);
            }, function (err) {
              CoreService.alertError('删除失败！', '', cancelCb);
            })
        });
      }

      this.getFormFields = function () {
				return [
					{
						key: 'type',
						type: 'select',
						templateOptions: {
							label: '码流类型',
							required: true,
              options: [
                { name: 'm3u8', value: 'm3u8' },
                { name: 'flv', value: 'flv' }
              ]
						}
					}, {
						key: 'value',
						type: 'input',
						templateOptions: {
							label: '码流值',
							required: true
						}
					}
				]
			}
    })
})();
