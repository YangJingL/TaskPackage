/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @moduleName              模块名字  app+moduleName+filter   应用+模块名+路由（防止冲突）
 * @description             appModuleNameRoute.js ,通用的指令，各个模块都可以用的指令
 *                           moduleName 是你自己的模块名字，自己取名， 如  details,index等就属于模块
 ***/
define('appModuleNameRoute',['angular','app','config'], function (angular,app,config) {
    /**
     * @description   get  project  view  url。
     */
    var  getProjectViewUrl= config.dirHtmlPath+'view/moduleName/';
    // 配置
    app.config(function ($routeProvider){
        $routeProvider

            .when('/*1', {  //* 代表自己取名字
                controller: '',
                templateUrl: getProjectViewUrl+ 'view-*1.html'  //  * 代表自己取名字
            })

            .when('/*2', {
                controller: '',
                templateUrl: getProjectViewUrl+ 'view-*2.html'
            })
            // 详情模块
            .otherwise({
                redirectTo:'/*1' //redirectToRoute
            });
    });

});
