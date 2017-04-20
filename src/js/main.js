/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @description             main.js ,所有js入口文件
 */
(function () {
    //  js 的路径=>所有模块的查找根路径
    var  baseUrl='../js/';
    // 防止浏览器缓存main.js，所用用时间戳加载 version.js
    require([baseUrl+'version.js'+'?'+new Date().getTime()],function (version) {

        //  require 配置文件
        require.config({
            urlArgs:'version='+version.version,
            baseUrl:baseUrl,
            paths:{
                /**
                 * lib
                 */
                //  dom 操作库=>jquery
                jquery:'lib/jquery/jQuery.v1.11.1.min', //  jquery采用的amd 模块命名， jquery这个名字不可更改

                //  mvvm 库  => angular
                angular:'lib/angular/angular.min',
                ngRoute:'lib/angular/angular.route.min',
                ngSanitize:'lib/angular/sanitize',
                //  svg 操作库=>snap(ie9+)， raphael（ie9-）
                snap:'lib/snap/snap.svg-min',
                raphael:'lib/raphael/raphael',

                //  图标操作库=>echarts
                echarts:'lib/echarts/echarts-all',

                // 插件加载
                // 树
                'tree': 'lib/plugin/tree.min',			//树js文件
                /**
                 * app
                 */
                setHtml:'app/common/setHtml',
                global:'app/common/global',
                app:'app/common/app',
                bootstrap:'app/common/bootstrap',

                 //  下面通用的模块名字不要修改，后期合并会有用
                 /**
                 *前台代码值对应表
                 */
                 fdDataTable:'app/dataTable/fdDataTable',
                 /**
                 *通用过滤器
                 */
                 fdFilter:'app/filter/fdFilter',
                 /**
                 *通用指令
                 */
                 fdDirective:'app/directive/fdDirective',

                /**
                 * 各个模块 js
                 * //模块划分
                 */
                // 首页模块

                // 详情模块
                appDetailsDirective:'app/details/appDetailsDirective',  //  单独的指令
                appDetailsFilter:'app/details/appDetailsFilter',    //  单独的过滤器
                appDetailsRoute:'app/details/appDetailsRoute',  // 单独的路由
                appControllerDetailsSffx:'app/details/appControllerDetailsSffx',  // 详情模块=> 司法分析的控制器
                appControllerDetailsSsdsr:'app/details/appControllerDetailsSsdsr',  //  详情模块=> 当事人的控制器

                // 首页模块
                appIndexDirective:'app/index/appIndexDirective',  //  单独的指令
                appIndexFilter:'app/index/appIndexFilter',    //  单独的过滤器
                appIndexRoute:'app/index/appIndexRoute',  // 单独的路由
                appControllerIndexSffx:'app/index/appControllerIndexSffx',  // 详情模块=> 司法分析的控制器
                appControllerIndexSsdsr:'app/index/appControllerIndexSsdsr'  //  详情模块=> 当事人的控制器

                //  可以自己仿照添加其他模块

            },
            //为那些没有使用define()来声明依赖关系
            shim:{
                'angular' : {
                    deps : ['jquery'],
                    exports : 'angular'
                },
                // angular  路由
                'ngRoute' : {
                    deps : ['angular'], // 依赖的模块
                    exports : 'ngRoute' // 导出名
                },
                // angular  sanitize
                'ngSanitize' : {
                    deps : ['angular'], // 依赖的模块
                    exports : 'ngSanitize' // 导出名
                },
                // angular  fdFilter   自定义的通用filter模块
                'fdFilter' : {
                    deps : ['angular'] // 依赖的模块
                },
                // angular  fdDirective   自定义的通用directive模块
                'fdDirective' : {
                    deps : ['angular'] // 依赖的模块
                },
                // angular  fdDirective   自定义的通用directive模块
                'tree' : {
                    deps : ['jquery'] // 依赖的模块
                }
            },
            //在map中支持“*”，意思是“对于所有的模块加载，使用本map配置”。
            // 如果还有更细化的map配置，会优先于“*”配置。示例：
            map: {
                '*': {
                    'jquery': 'lib/jquery/jQuery.v1.11.1.min'
                },

                // 除了 oldModule 外的所有模块会会用 jQuery.v1.11.1.min，而 oldmodule 会用 jQuery.v1.1.7.min
                'oldmodule': {
                    'jquery': 'lib/jquery/jQuery.v1.1.7.min'
                }
            },
            waitSeconds:0  //加载超时问题的一个解决方法0表示不设置超时，默认是7s
        });


        // 模块的入口
        require(['global','config'], function (global,config) {
            // 设置一个全局对象 global+ fd
            window.globalFd={
                // ajax超时加载
                ajaxTimer:null,
                // 超时时间
                ajaxTimeout:5000
            };
            // 正在加载数据
            global.loading();
            // 获取js路径
            var url = config.dirJsPath,jsurl = $('body').data('js');
            //如果存在js路径，那么就加载该js
            if (jsurl) {
                require([url + jsurl]);
            }
        });

    });
})();

