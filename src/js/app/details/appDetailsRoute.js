/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @moduleName              模块名字  app+moduleName+route   应用+模块名+路由（防止冲突）
 * @description             appDetailsRoute.js ,通用的指令，各个模块都可以用的指令
 ***/
define('appDetailsRoute',['angular','app','config'], function (angular,app,config) {
    /**
     * @description   get  project  view  url。
     */
    var  getProjectViewUrl= config.dirHtmlPath+'view/details/';
    // 配置
    app.config(function ($routeProvider){
        $routeProvider
            // 详情模块-司法分析
            .when('/sffx', {
                controller: 'appControllerDetailsSffx',
                templateUrl: getProjectViewUrl+ 'view-sffx.html'
            })
            // 详情模块-诉讼当事人
            .when('/ssdsr', {
                controller: 'appControllerDetailsSsdsr',
                templateUrl: getProjectViewUrl+ 'view-ssdsr.html'
            })
            // 详情模块
            .otherwise({
                redirectTo:'/sffx' //redirectToRoute
            });
    });

});
