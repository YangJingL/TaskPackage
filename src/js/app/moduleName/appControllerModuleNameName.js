/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @description             appControllerModuleNameName.js ,  首页模块下的司法分析
 * @rules                   命名规则  app+controller+moduleName+name
 */
define('appControllerModuleNameName',['config','global'],function(config,global){
    return  function(app){
        app.controller('appControllerModuleNameName', function ($scope) {
            $scope.scope={
                name:'模块名字',
                // 请求数据的url
                serverUrl:config.url.moduleName.name,
                // 发送到后台服务器的data数据
                serverData: function () {
                    return  {

                    }
                },
                data:{},// 获取的数据
                request: function () {

                },
                // 第一次请求
                firstRequest: function () {

                },
                // 出错进行第二次请求
                secondRequest: function () {

                },
                // 初始化方法
                init: function () {

                }
            };
            //  初始化启动程序
            $scope.scope.init();
        });
    }
});