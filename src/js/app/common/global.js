/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @description             global.js ,这里放的是全局的方法，禁止写其他代码
 ***/
define(['jquery'], function () {
    "user strict";
   var  _global= {
        getLocalPath : function (isAbsUrl) {
            var curWwwPath = window.location.href;
            var pathName = window.location.pathname;
            var pos = curWwwPath.indexOf(pathName);
            var localhostPath = curWwwPath.substring(0, pos);
            var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
           return  isAbsUrl?(localhostPath + projectName + '/'):'';
        },
       /**
        * @time 2019-09-24  新增=> 为了统一管理日志
        * @param showLog   是否输出日志
        * @param name      名称
        * @param method  请求方式  post,get,
        * @param url   请求的url
        * @param requestData   请求的数据
        */
       consoleLogRequest:function(showLog,name,method,url,requestData){
           if(showLog){
               console.log(name?name:'');
               console.log('[[前台]]==>请求方式是');
               console.log(method?method:'');
               console.log('[[前台]]==>请求的url是');
               console.log(url?url:'');
               console.log('[[前台]]==>请求的数据是');
               console.log(requestData?requestData:'');
           }
       },
       /**
        * @time 2019-09-24  新增=> 为了统一管理日志
        * @param showLog    是否输出日志
        * @param name   名称
        * @param responseData 后台返回的数据
        */
       consoleLogResponse:function(showLog,name,responseData){
           if(showLog){
               console.log(name?name:'');
               console.log('(后台)==>返回的数据是');
               console.log(responseData?responseData:'');
           }
       },
       //  正在加载页面
       loading:function(){
           $('body').append('<div id="js-fd-loading-init"  class="fd-loading-init" ><span>数据加载中...</span></div>');
       },
       // 移除正在加载页面
       removeLoading:function(){
           if($('#js-fd-loading-init').length > 0) {
               $('#js-fd-loading-init').remove();
               //  文档加载完成后，那么添加一个ajax 方法
               _global.ajaxLoading();
           }
       },
       //  ajax 加载
       ajaxLoading: function () {
           // 加载
           $(['<div class="fd-loading-contain fd-hide" id="js-loading" >',
               ' <div class="fd-loading-mask"> </div>',
               ' <img  class="fd-lo" src="../images/loading.gif" alt="正在加载的图片"/>',
               '</div>'].join("")).appendTo('body');
           $(document).ajaxStart(function() {
               _global.ajaxStartLoading();
               if(globalFd.ajaxTimer){
                   clearTimeout(globalFd.ajaxTimer);
               }
               globalFd.ajaxTimer =setTimeout(function(){
                   _global.removeLoading();
               },globalFd.ajaxTimeout);
           });
           $(document).ajaxStop(function() {
               setTimeout(function(){
                   _global.ajaxStopLoading();
               },300);
           });
       },
       // 显示转圈的小图片
       ajaxStartLoading:function(){
           if(	$('#js-loading').hasClass('fd-hide')){
               $('#js-loading').removeClass('fd-hide');
           }
       },
       // 隐藏转圈的小图片
       ajaxStopLoading:function(){
           if(	!$('#js-loading').hasClass('fd-hide')){
               $('#js-loading').addClass('fd-hide');
           }
       },

       // 请求数据报错
       requestError:function(data, textStatus, errorThrown){
           // 2016-09-29 ，ie会直接弹窗报错，所用 try{}catch(e){}
           try{
               console.error('请求数据发生了错误');
               console.error(data);
           }catch(e){
               //console.log(e);
           }
       },

       // localStorage
       // 储存storage
       saveLocalStorage : function (name, value) {
           localStorage.setItem(name, value);
       },

       // 查找storage
       findLocalStorage : function (str) {
           var requestStr = localStorage.getItem(str);
           return requestStr;
       },

       // 删除storage
       deleteLocalStorage : function (str) {
            localStorage.removeItem(str);
       },

       //sessionStorage
       // 储存storage
       saveSessionStorage : function (name, value) {
           sessionStorage.setItem(name, value);
       },

       // 查找storage
       findSessionStorage : function (str) {
           var requestStr = sessionStorage.getItem(str);
           return requestStr;
       },

       // 删除storage
       deleteSessionStorage : function (str) {
           sessionStorage.removeItem(str);
       }

   };
    return  _global;
});