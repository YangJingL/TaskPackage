/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @moduleName              ģ������  app+moduleName+directive   Ӧ��+ģ����+ָ���ֹ��ͻ��
 * @description             appModuleNameDirective.js ,��ģ�����ָ��
 *                          moduleName �����Լ���ģ�����֣��Լ�ȡ���� ��  details,index�Ⱦ�����ģ��
 ***/
define('appModuleNameDirective',['app','config'],function(app,config){
    app.directive('test', function () {
        return {
            restrict: 'EA',
            replace: false,
            template:'<div  style="border:1px solid blue;padding:5px;">���ǣ�ģ�飩��ָ��</div>',
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
