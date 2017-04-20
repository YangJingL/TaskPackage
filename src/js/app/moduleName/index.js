/**
 * @version:	 		 2016.01.01
 * @creatTime: 	 	    2016.06.11
 * @updateTime: 		2016.06.11
 * @author:			    wuwg
 * @name:  				moduleName
 * @description         模块的入口
 */
require( ['app','bootstrap','global','config'],
    /**
     * @param app  应用程序模块
     * @param bootstrap  启动程序
     * @param global  全局对象
     * @param config  配置文件
     */
    function (app,bootstrap,global,config
    ) {
    // 父级作用域，全部放到  rootScope 对象中，不要拆分，用面向对象的思想
    app.run(function ($rootScope) {
        $rootScope.rootScope={

        }
    });
    // 启动程序
    bootstrap.start();
});
