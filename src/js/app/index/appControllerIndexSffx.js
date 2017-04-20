/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @description             appControllerIndexSffx.js ,  首页模块下的司法分析
 * @rules                   命名规则  app+controller+moduleName+name
 */
define('appControllerIndexSffx',['config','global'],function(config,global){
    return  function(app){
        app.controller('appControllerIndexSffx', function ($scope) {
            $scope.scope={
                name:'司法分析',
                content:'这是司法分析的内容，这是司法分析的内容,这是司法分析的内容,这是司法分析的内容,这是司法分析的内容',
                // 请求数据的url
                serverUrl:config.url.index.sffx,
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