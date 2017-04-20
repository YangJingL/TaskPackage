/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @moduleName              模块名字  app+moduleName+directive   应用+模块名+指令（防止冲突）
 * @description             appModuleNameDirective.js ,该模块独立指令
 *                          moduleName 是你自己的模块名字，自己取名， 如  details,index等就属于模块
 ***/
define('appModuleNameDirective',['app','config'],function(app,config){
    app.directive('test', function () {
        return {
            restrict: 'EA',
            replace: false,
            template:'<div  style="border:1px solid blue;padding:5px;">这是（模块）的指令</div>',
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
