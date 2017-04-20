/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @description             config.js ,所有的配置文件
 *                          详细说明看注释  !important
 */
define(['global'], function (global) {
    //  获取项目绝对地址，传入false，那么就是相对地址
    var  getLocalPath=global.getLocalPath(true);
    //  根目录文件夹
    var  rootFolder='src';
    var  config={
            isDebug:true,//  是否是调试模式，true 为json数据，false为服务器数据
            methodGet:'get',// ajax查询方式   get
            methodPost:'post',// ajax查询方式  post
            url:{},     //  url链接,也就是数据的地址
            showLog:true, // 是否显示日志
            dirJsPath:getLocalPath+rootFolder+'/js/app/' , //js直接路径
            dirCssPath:getLocalPath+rootFolder+'/css/' , //css直接路径
            dirJsonPath:getLocalPath+rootFolder+'/json/' , //json直接路径
            dirTemplatePath:getLocalPath+rootFolder+'/html/template/' , //模板的根路径
            dirHtmlPath:getLocalPath+rootFolder+'/html/'  //html直接路径
        };
    // json对应的路径
    var  localUrl={
              //  详情模块
               details :{
                  normal:config.dirJsonPath+'details.json',   //详情json  ---2016-11月
                  sffx:config.dirJsonPath+'details/sffx.json', //  司法分析模块的数据 ---2016-11月
                  ssdsr:config.dirJsonPath+'details/ssdsr.json' //  诉讼当事人模块的数据 ---2016-11月
              },
               // 首页模块
              index:config.dirJsonPath+'index.json'   // 首页json  ---2016-11月
         };
    // 服務器对应的路径
    var serverlUrl={
        // 详情模块
        details :{
            normal:"http://192.2.29.52:8080/fzpt/sftjLogic.do?action=forward" ,   //后端服务器详情数据 ---2016-11月
            sffx:"http://192.2.29.52:8080/fzpt/sftjLogic.do?action=forward", //  后端服务器司法分析模块的数据 ---2016-11月’
            ssdsr:"http://192.2.29.52:8080/fzpt/sftjLogic.do?action=forward" //  后端服务器诉讼当事人模块的数据 ---2016-11月
        },
        // 首页模块
        index: "http://192.2.29.52:8080/fzpt/sftjLogic.do?action=forward"  //  后端服务器首页数据 ---2016-11月
    };
     config.url= config.isDebug?localUrl:serverlUrl;
     return config;
});



