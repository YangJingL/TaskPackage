/**
 * @version:	 		    2016.11.01
 * @createTime: 	 		2016.11.23
 * @updateTime: 			2016.11.23
 * @author:				    wuwg
 * @moduleName              模块名字  fd+directive   前缀+指令（防止冲突）
 * @description             fdDirective.js ,通用的指令，各个模块都可以用的指令
 ***/
/**
 *addClass()-为每个匹配的元素添加指定的样式类名
 after()-在匹配元素集合中的每个元素后面插入参数所指定的内容，作为其兄弟节点
 append()-在每个匹配元素里面的末尾处插入参数内容
 attr() - 获取匹配的元素集合中的第一个元素的属性的值
 bind() - 为一个元素绑定一个事件处理程序
 children() - 获得匹配元素集合中每个元素的子元素，选择器选择性筛选
 clone()-创建一个匹配的元素集合的深度拷贝副本
 contents()-获得匹配元素集合中每个元素的子元素，包括文字和注释节点
 css() - 获取匹配元素集合中的第一个元素的样式属性的值
 data()-在匹配元素上存储任意相关数据
 detach()-从DOM中去掉所有匹配的元素
 empty()-从DOM中移除集合中匹配元素的所有子节点
 eq()-减少匹配元素的集合为指定的索引的哪一个元素
 find() - 通过一个选择器，jQuery对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代
 hasClass()-确定任何一个匹配元素是否有被分配给定的（样式）类
 html()-获取集合中第一个匹配元素的HTML内容
 next() - 取得匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。如果提供一个选择器，那么只有紧跟着的兄弟元素满足选择器时，才会返回此元素
 on() - 在选定的元素上绑定一个或多个事件处理函数
 off() - 移除一个事件处理函数
 one() - 为元素的事件添加处理函数。处理函数在每个元素上每种事件类型最多执行一次
 parent() - 取得匹配元素集合中，每个元素的父元素，可以提供一个可选的选择器
 prepend()-将参数内容插入到每个匹配元素的前面（元素内部）
 prop()-获取匹配的元素集中第一个元素的属性（property）值
 ready()-当DOM准备就绪时，指定一个函数来执行
 remove()-将匹配元素集合从DOM中删除。（同时移除元素上的事件及 jQuery 数据。）
 removeAttr()-为匹配的元素集合中的每个元素中移除一个属性（attribute）
 removeClass()-移除集合中每个匹配元素上一个，多个或全部样式
 removeData()-在元素上移除绑定的数据
 replaceWith()-用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合
 text()-得到匹配元素集合中每个元素的合并文本，包括他们的后代
 toggleClass()-在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类
 triggerHandler() -为一个事件执行附加到元素的所有处理程序
 unbind() - 从元素上删除一个以前附加事件处理程序
 val()-获取匹配的元素集合中第一个元素的当前值
 wrap()-在每个匹配的元素外层包上一个html元素
 */
define('fdDirective',['config'], function (config) {
    //  获取组件的模块的直接路径
    var  getComponentPath=config.dirTemplatePath;
    // 这里是局部变量,模块名字叫  fdDirective
    var myDirective = angular.module('fdDirective', []);
    /**
     *
     * @appTurnPage  pagination  directive
     * @description
     * @example
     *  1.<pagination  ></pagination>
     *  2.  <div  pagination  ></div>
     * */
    myDirective.constant('paginationConfig', {
        visiblePageCount: 10,
        firstText: 'First',
        lastText: 'Last',
        prevText: 'Previous',
        nextText: 'Next'
    }).directive("pagination", ['paginationConfig', function (pageConfig) {
        return {
            link: function ($scope, $element, $attrs) {
                // 页面的可见数
                var visiblePageCount = angular.isDefined(attrs.visiblePageCount) ? $scope.visiblePageCount : pageConfig.visiblePageCount;
                // 按钮文本
                $scope.firstText = angular.isDefined(attrs.firstText) ? attrs.firstText : pageConfig.firstText;
                $scope.lastText = angular.isDefined(attrs.lastText) ? attrs.lastText : pageConfig.lastText;
                $scope.prevText = angular.isDefined(attrs.prevText) ? attrs.prevText : pageConfig.prevText;
                $scope.nextText = angular.isDefined(attrs.nextText) ? attrs.nextText : pageConfig.nextText;

                //  翻页转变函数
                $scope.pageChange = function (page, flag) {
                    $scope.currentPage=(page >= 1 && page <= $scope.pageCount)?page: 1
                };

                // 建立分页函数
                function build(newValue, oldValue) {
                    // 最大值，最小值，中间值
                    var low, high, middle;
                    // 翻页数组
                    scope.pagenums = [];
                    /*
                     * 1.当总是为0时，直接返回不建立分页，同时隐藏分页
                     * 2.当当前值大于总数时，那么直接默认当前为1
                     * 3. 当当前页小于等于可见数时，最低值等于1， 最高值等于页的总数
                     * 4. 当页数大于可见数时，
                     *     middle=visiblePageCount/2  ,向上取整，
                     *     low= Math.max(当前页-middle ,1)
                     *     high=Math.min(low + visiblePageCount - 1, scope.pageCount);
                     *     当 scope.pageCount-high小于middle，   low重新取值 low=high-visiblePageCount+1
                     * 5. 进
                     */
                    if (scope.pageCount == 0) {
                        return;
                    }
                    if (scope.currentPage > scope.pageCount) {
                        scope.currentPage = 1;
                    }

                    if (scope.pageCount <= visiblePageCount) {
                        low = 1;
                        high = scope.pageCount;
                    } else {
                        middle = Math.ceil(visiblePageCount / 2);
                        low = Math.max(scope.currentPage - middle, 1);
                        high = Math.min(low + visiblePageCount - 1, scope.pageCount);
                        if (scope.pageCount - high < middle) {
                            low = high - visiblePageCount + 1;
                        }
                    }

                    //  进行一次循环
                    do {
                        scope.pagenums.push(low);
                        low++;
                    } while (low <= high);

                    //  debugger;
                    // 只有两次值不一样的时候才会去调用回调函数
                    if (newValue !== oldValue) {
                        scope.pageChangeCallback();
                    }
                }

                // 及时监听当前页数和总数的变换然后重新创建分页
                scope.$watch('currentPage+pageCount', function (newValue, oldValue) {
                    build(newValue, oldValue);
                });
            },
            replace: false,
            restrict: "EA",
            // 注意这里作用域和 attr的区别
            scope: {
                pageCount: '=',       // 总页数
                currentPage: '=',    //  当前页
                pageChangeCallback: '&',// 页数变动的回调函数
                showFirstLast: '=', // 是否显示按钮 “第一页” ，“最后一页”
                showLast: '=', // 是否显示“最后一页”  2016-09-24为了解决部分性能问题部分页面不需要显示最后一页
                showPagination: '=', //  是否显示分页
                showPaginationInfo: '=', // 是否显示分页信息
                visiblePageCount: '=', // 可见页数
                itemCount: '=' // 当前页的数据条目数
            },
            templateUrl: getComponentPath + 'pagination.html'
        }
    }])
});