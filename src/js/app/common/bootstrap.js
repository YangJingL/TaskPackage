/**
 * version:	 		    2016.01.01
 * creatTime: 	 		2016.06.11
 * updateTime: 			2016.06.11
 * author:				wuwg
 * name:  				bootstrap
 */
define(["angular",'global'], function(angular,global) {
	return {
		start:function(module){
			module?(angular.bootstrap(document, [module])):(angular.bootstrap(document, ['myApp']));
            //  show body and  add animate  effect
			//  显示body 增加动画类名
			$('body').addClass('fd-body-animate').
				find('#js-page-init').css({
					visibility : 'visible',
					opacity:1
				});
			// 移除正在加载
			global.removeLoading();
		}		
	};
});