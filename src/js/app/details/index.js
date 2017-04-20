/**
 * @version:	 		 2016.01.01
 * @creatTime: 	 	    2016.06.11
 * @updateTime: 		2016.06.11
 * @author:			    wuwg
 * @name:  				details
 * @description         详情模块的入口
 */


require( ['app','bootstrap','global','config', 'appDetailsDirective','appDetailsFilter','appDetailsRoute',
        'appControllerDetailsSffx','appControllerDetailsSsdsr'
    ],
    /**
     * @param app  应用程序模块
     * @param bootstrap  启动程序
     * @param global  全局对象
     * @param config  配置文件
     * @param appDetailsDirective  该模块的指令
     * @param appDetailsFilter   该模块的过滤器
     * @param appDetailsRoute  该模块的路由
     * @param appControllerDetailsSffx  该模块下司法分析的控制器
     * @param appControllerDetailsSsdsr 该模块下诉讼当事人的控制器
     */
    function (app,bootstrap,global,config, appDetailsDirective,appDetailsFilter,appDetailsRoute,
              appControllerDetailsSffx,appControllerDetailsSsdsr
    ) {
        // 父级作用域，全部放到  rootScope 对象中，不要拆分，用面向对象的思想
        app.run(function ($rootScope) {
            $rootScope.rootScope={

            }
        });
        //该模块下司法分析的控制器
        appControllerDetailsSffx(app);
        // 该模块下诉讼当事人的控制器
        appControllerDetailsSsdsr(app);
        // 启动程序
        bootstrap.start();
    });

