/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @moduleName              模块名字  app+moduleName+directive   应用+模块名+指令（防止冲突）
 * @description             appIndexDirective.js ,该模块独立指令
 ***/
define('appIndexDirective',['app','config'],function(app,config){
    app.directive('test', function () {
        return {
            restrict: 'EA',
            replace: false,
            template:'<div  style="border:1px solid blue;padding:5px;">这是首页的指令</div>',
            //templateUrl:'url',
            scope: {

            },
            controller: function ($scope) {

            },
            link: function ($scope,$element,$attr,$controller) {

            }
        }
    })
});
