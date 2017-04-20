/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @moduleName              模块名字  app+moduleName+filter   应用+模块名+过滤器（防止冲突）
 * @description             appDetailsFilter.js ,通用的指令，各个模块都可以用的指令
 ***/
define('appDetailsFilter',['app','config'],function(app,config){
    /**
     * @author  wuwg
     * @time 2016-11-23
     * @returns string
     * @description 代码表一一转换中文字符串
     */
    app.filter('test', function () {
        return function (input,param) {
            return  input+'首页模块的指令test'
        }
    });
});