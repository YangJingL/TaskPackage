/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @description             appControllerDetailsSffx.js ,  详情模块下的司法分析
 * @rules                   命名规则  app+controller+moduleName+name
 */
define('appControllerDetailsSffx',['config','global'],function(config,global){
    return  function(app){
        app.controller('appControllerDetailsSffx', function ($scope) {
            $scope.scope={
                name:'司法分析',
                content:'这是司法分析的内容，这是司法分析的内容,这是司法分析的内容,这是司法分析的内容,这是司法分析的内容',
                // 请求数据的url
                serverUrl:config.url.details.sffx,
                // 发送到后台服务器的data数据
                serverData: function () {
                    return  {

                    }
                },
                data:{},// 获取的数据
                emptyData:false,//  是否是空数据
                /**
                 *
                 * @param isAgainSearch  boolean  是否进行二次搜索
                 * @description   请求数据的方法
                 */
                request: function (isAgainSearch) {
                    $.ajax({
                        type : config.methodGet,
                        url : $scope.scope.serverUrl,
                        dataType : "json",
                        data : $scope.scope.serverData(),
                        success : function(data) {
                            if(data.success){
                                // 数据更新
                                $scope.scope.data=data.data;
                                //  激活angular 程序
                                $scope.$apply();
                            }
                            //输出日志
                            global.consoleLogResponse(config.showLog,$scope.scope.name,data)
                        },
                        //  第一次请求失败
                        error : function(data, textStatus, errorThrown) {
                            //  报错信息
                            global.requestError(data, textStatus, errorThrown);
                            if(!!isAgainSearch){
                                $scope.scope.secondRequest();
                            }
                        }
                    });
                    //输出日志
                    global.consoleLogRequest( config.showLog, $scope.scope.name , config.methodGet , $scope.scope.serverUrl,
                        $scope.scope.serverData());
                },
                // 第一次请求
                firstRequest:function () {
                     $scope.scope.request(true);
                },
                // 出错进行第二次请求
                secondRequest: function () {
                    $scope.scope.request();
                },
                // 初始化方法
                init: function () {
                    // 请求数据
                    $scope.scope.firstRequest();
                }
            };
            // 执行初始化的方法
            $scope.scope.init();
        });
    }
});