(function(){

var server = H.namespace('server');

var contextPath = "/mock";
/**
 * 发起请求方法
 * @param type{get|post}    请求类型
 * @param api               请求地址 url
 * @param parameters        请求发布参数
 * @param success           回调方法,(错误也会调用)
 * @param async             事后异步请求
 * @returns {*}             ajax对象
 */
var send = function (type, api, parameters, success, async) {
    typeof success == 'function' || (success = function () {
    });
    var request = $.ajax({
        url: api + "?r=" + Math.random(),
        data: parameters,
        type: type,
        dataType: 'json',
        async: true,
        cache: false,
        headers: {"Cache-Control": "no-cache", "Accept": "application/json"},
        timeout: 300000,
        success: function (data, textStatus, jqXHR) {
            success.call(this, data, textStatus, jqXHR);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            //alert(jqXHR+errorThrown+textStatus);
            if (jqXHR.status == 401) {
                location.href = contextPath;
            } else {
                if (!errorThrown) {
                    return false;
                }
                var errors = {
                    101: "网络不稳定或不畅通，请检查网络设置",
                    403: "服务器禁止此操作！",
                    500: "服务器遭遇异常阻止了当前请求的执行<br/><br/><br/>"
                };

                var msg = null;
                switch (textStatus) {
                    case "timeout":
                        msg = "网络连接超时，请检查网络是否畅通！";
                        break;
                    case "error":
                        if (errors[jqXHR.status]) {
                            var data = null;
                            try {
                                data = jQuery.parseJSON(jqXHR.responseText);
                            } catch (e) {
                            }
                            if (data && data.message) {
                                msg = data.message;
                            } else {
                                msg = errors[jqXHR.status];
                            }
                        } else {
                            msg = "服务器响应异常<br/><br/>" + (jqXHR.status == 0 ? "" : jqXHR.status) + "&nbsp;" + errorThrown;
                        }
                        break;
                    case "abort":
                        msg = null;//"数据连接已被取消！";
                        break;
                    case "parsererror":
                        msg = "数据解析错误！";
                        break;
                    default:
                        msg = "出现错误:" + textStatus + "！";
                }
                if (errorThrown.code != null && errorThrown.message != null && !errors[errorThrown.code]) {
                    msg += "</br>[code:" + errorThrown.code + "][message:" + errorThrown.message + "]" + (null == errorThrown.stack ? "" : errorThrown.stack);
                }
                if (msg == null) {
                    msg = '';
                }
                success.call(this, {code: jqXHR.status, message: msg}, textStatus, jqXHR, errorThrown);
            }
        }
    });
    return request;
};

    /**
     * 登录/退出
     **/
    // 登录
    server.login = function (data, callback) {
        return send('post', contextPath + '/user/login', data, callback);
    };
    // 退出
    server.logout = function (data, callback) {
        return send('post', contextPath + '/user/logout', data ,callback);
    };

    /**
     * 导航
     * */
    server.user_navigate = function (data, callback) {
        return send('get', contextPath + '/user/navigate', data, callback);
    };

    /*
    * 获取用户信息*
    */
    server.user_info = function (data, callback) {
        return send('get', contextPath + '/user/info', data, callback);
    };

    /*
    * 账户管理;
    * */
    //获取账户列表;
    server.user_list = function (data, callback) {
        return send('get', contextPath + '/user/list', data, callback);
    };
    //操作员信息修改;
    server.user_info_update = function (data, callback) {
        return send('post', contextPath + '/user/info/update', data, callback);
    };
    //操作员添加;
    server.user_add = function (data, callback) {
        return send('post', contextPath + '/user/add', data, callback);
    };
    //操作员状态更改;
    server.user_status_update = function (data, callback) {
        return send('post', contextPath + '/user/status/update', data, callback);
    };
    //指定ID的操作员所有权限获取;
    server.user_privilege = function (data, callback) {
        return send('get', contextPath + '/user/privilege', data, callback);
    };
    //用户权限修改;
    server.user_privilege_update = function (data, callback) {
        return send('post', contextPath + '/user/privilege/update', data, callback);
    };

    /*
     * 部门管理;
     * */
    //获取部门列表;
    server.department_list = function (data, callback) {
        return send('get', contextPath + '/department/list', data, callback);
    };
    //添加部门;
    server.department_add = function (data, callback) {
        return send('post', contextPath + '/department/add', data, callback);
    };
    //修改部门;
    server.department_info_update = function (data, callback) {
        return send('post', contextPath + '/department/info/update', data, callback);
    };
    //部门状态更改（删除）;
    server.department_status_update = function (data, callback) {
        return send('post', contextPath + '/department/status/update', data, callback);
    };

    /*
     * 权限管理;
     * */
    //所有权限获取;
    server.privilege_list = function (data, callback) {
        return send('get', contextPath + '/privilege/list', data, callback);
    };
    //添加权限;
    server.privilege_add = function (data, callback) {
        return send('post', contextPath + '/privilege/add', data, callback);
    };
    //修改权限;
    server.privilege_update = function (data, callback) {
        return send('post', contextPath + '/privilege/update', data, callback);
    };
    //获取指定ID权限的详细信息;
    server.privilege_info = function (data, callback) {
        return send('get', contextPath + '/privilege/info', data, callback);
    };
    //修改指定权限的状态;
    server.privilege_status_update = function (data, callback) {
        return send('post', contextPath + '/privilege/status/update', data, callback);
    };

    /*
     * 商贸公司管理
     * */

    //商贸公司列表;
    server.trade_list = function (data, callback) {
        return send('get', contextPath + '/trade/list', data, callback);
    };
    //商贸公司添加;
    server.trade_add = function (data, callback) {
        return send('post', contextPath + '/trade/add', data, callback);
    };
    //商贸公司信息获取;
    server.trade_info = function (data, callback) {
        return send('get', contextPath + '/trade/info', data, callback);
    };
    //商贸公司信息修改;
    server.trade_info_update = function (data, callback) {
        return send('post', contextPath + '/trade/info/update', data, callback);
    };
    //商贸公司状态修改;
    server.trade_status_update = function (data, callback) {
        return send('post', contextPath + '/trade/status/update', data, callback);
    };

    /*
     * 店铺
     * */

    //店铺类型获取;
    server.shop_type_list = function (data, callback) {
        return send('get', contextPath + '/shop/type/list', data, callback);
    };

    /*
     * 省、市、区县信息获取
     * */

    //省、市、区县信息获取;
    server.other_area_list = function (data, callback) {
        return send('get', contextPath + '/other/area/list', data, callback);
    };

    //地区列表获取;
    server.other_customArea_list = function (data, callback) {
        return send('get', contextPath + '/other/custom-area/list', data, callback);
    };

    /*
    * 每日推送
    * */
    //可推送用户列表;
    server.operate_dailyNews_receiveUser_list = function (data, callback) {
        return send('get', contextPath + '/operate/daily-news/receive-user/list', data, callback);
    };

    //今日推文列表;
    server.operate_todayArticle_list = function (data, callback) {
        return send('get', contextPath + '/operate/today-article/list', data, callback);
    };

    //今日推文类型获取;
    server.other_todayArticle_type = function (data, callback) {
        return send('get', contextPath + '/other/today-article/type', data, callback);
    };

    //今日推文编辑（添加/修改）;
    server.operate_todayArticle_edit = function (data, callback) {
        return send('post', contextPath + '/operate/today-article/edit', data, callback);
    };

    //今日推文删除;
    server.operate_todayArticle_delete = function (data, callback) {
        return send('post', contextPath + '/operate/today-article/delete', data, callback);
    };

    //推文商品列表;
    server.operate_dailyNews_goods_list = function (data, callback) {
        return send('get', contextPath + '/operate/daily-news/goods/list', data, callback);
    };

    //推文商品屏蔽操作;
    server.operate_dailyNews_goods_shield = function (data, callback) {
        return send('post', contextPath + '/operate/daily-news/goods/shield', data, callback);
    };

    //前端上传数据到OSS的签名接口;
    server.other_oss_signature = function (data, callback) {
        return send('get', contextPath + '/other/oss/signature', data, callback);
    };

    //获取前端上传数据到OSS的请求ID;
    server.other_oss_identity_data = function (data, callback) {
        return send('get', contextPath + '/other/oss/identity/data', data, callback);
    };

    //推文日志列表;
    server.operate_dailyNews_log_list = function (data, callback) {
        return send('get', contextPath + '/operate/daily-news/log/list', data, callback);
    };

    //每日推文设置
    server.operate_dailyNews_manage_list = function (data, callback) {
        return send('get', contextPath + '/operate/daily-news/manage/list', data, callback);
    };

    //每日推文设置发送
    server.operate_dailyNews_manage_edit = function (data, callback) {
        return send('post', contextPath + '/operate/daily-news/manage/edit', data, callback);
    };

    /*
     * 访问日志
     * */
    //当前页面所有访问统计
    server.statistic_page_all = function (data, callback) {
        return send('get', contextPath + '/statistic/page/all', data, callback);
    };

    //店铺访问统计数据展示
    server.statistic_page_detail = function (data, callback) {
        return send('get', contextPath + '/statistic/page/detail', data, callback);
    };

    //商品当前结果统计
    server.statistic_goods_all = function (data, callback) {
        return send('get', contextPath + '/statistic/goods/all', data, callback);
    };

    //商品页面详细数据
    server.statistic_goods_detail = function (data, callback) {
        return send('get', contextPath + '/statistic/goods/detail', data, callback);
    };

    //指定商品的详细访问记录
    server.statistic_goodsSpecific_detail = function (data, callback) {
        return send('get', contextPath + '/statistic/goods-specific/detail', data, callback);
    };


    /*
     * 推荐商品
     * */
    //添加推荐榜商品;
    server.operate_dailyNews_goods_recommend = function (data, callback) {
        return send('post', contextPath + '/operate/daily-news/goods/recommend', data, callback);
    };

    //移除单个推荐榜商品;
    server.operate_dailyNews_recommend_goods_remove = function (data, callback) {
        return send('post', contextPath + '/operate/daily-news/recommend/goods/remove', data, callback);
    };

    //移除全部推荐榜商品;
    server.operate_dailyNews_recommend_goods_removeAll = function (data, callback) {
        return send('post', contextPath + '/operate/daily-news/recommend/goods/remove-all', data, callback);
    };

    //推荐榜商品排序;
    server.operate_dailyNews_recommend_goods_sort = function (data, callback) {
        return send('post', contextPath + '/operate/daily-news/recommend/goods/sort', data, callback);
    };
})();