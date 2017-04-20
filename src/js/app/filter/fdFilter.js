/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @moduleName              模块名字  fd+filter   前缀+过滤器（防止冲突）
 * @description             fdFilter.js ,通用的指令，各个模块都可以用的指令
 ***/
define('fdFilter',['fdDataTable'],function(fdDataTable){
    // 这里是局部变量,模块名字叫  fdFilter
    var myFilter = angular.module('fdFilter', []);
    /**
     * @author  wuwg
     * @time 2016-11-23
     * @returns string
     * @description 代码表一一转换中文字符串
     */
    myFilter.filter('codeToString', function () {
        return function (input,param) {
            var  input=String(input).replace(/\s/g,''),
                codeCategory=String(param).replace(/\s/g,''),
                result=fdDataTable['table'+codeCategory]['table'+input];
            return  result?result:'';
        }
    });
});