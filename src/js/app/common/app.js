/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @description             app.js ,angular 应用程序入口
 * 	      				    自己按照需要在这里模块中引入依赖 ，
 * 	      				    目前我是引入了以下模块  ngRoute','ngSanitize','fdDirective','fdFilter
 ***/
define(["angular",'ngRoute','ngSanitize','fdDirective','fdFilter'],
	function(angular,ngRoute,ngSanitize,fdDirective,fdFilter) {
		return angular.module("myApp", ['ngRoute','ngSanitize','fdDirective','fdFilter']);
	});