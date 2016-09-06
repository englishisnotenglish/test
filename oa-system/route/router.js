var path = require('path'),
    express = require('express'),
    router = express.Router();

// 过滤掉路径中的‘\route’
var static_root = __dirname.replace(/\\route$/,'') + '/mock';

function getOptions(){
    return {
        root: static_root,
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        } 
    }
};

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

// 登录;
router.post('/mock/user/login',function(req, res){
    console.log('登录');
    res.sendFile('/user/login.json', getOptions());
});

// 退出;
router.post('/mock/user/logout',function(req, res){
    console.log('退出');
    res.sendFile('/user/logout.json', getOptions());
});

// 导航;
router.get('/mock/user/navigate',function(req, res){
    console.log('导航');
    res.sendFile('/user/navigate.json', getOptions());
});

// 获取用户信息;
router.get('/mock/user/info',function(req, res){
    console.log('获取用户信息');
    res.sendFile('/user/info.json', getOptions());
});

/*
* 账户管理
* */

//操作员账户列表;
router.get('/mock/user/list',function(req, res){
    console.log('获取用户列表');
    res.sendFile('/user/list.json', getOptions());
});
//操作员账户信息修改;
router.post('/mock/user/info/update',function(req, res){
    console.log('操作员账户信息修改');
    res.sendFile('/user/info/update.json', getOptions());
});
//操作员添加;
router.post('/mock/user/add',function(req, res){
    console.log('操作员添加');
    res.sendFile('/user/add.json', getOptions());
});
//操作员状态更改;
router.post('/mock/user/status/update',function(req, res){
    console.log('操作员状态更改');
    res.sendFile('/user/status/update.json', getOptions());
});
//指定ID的操作员所有权限获取;
router.get('/mock/user/privilege',function(req, res){
    console.log('指定ID的操作员所有权限获取');
    res.sendFile('/user/privilege.json', getOptions());
});
//用户权限修改;
router.post('/mock/user/privilege/update',function(req, res){
    console.log('用户权限修改');
    res.sendFile('/user/privilege/update.json', getOptions());
});

/*
 * 部门管理
 * */

//部门列表;
router.get('/mock/department/list',function(req, res){
    console.log('获取部门列表');
    res.sendFile('/department/list.json', getOptions());
});
//添加部门;
router.post('/mock/department/add',function(req, res){
    console.log('添加部门');
    res.sendFile('/department/add.json', getOptions());
});
//修改部门;
router.post('/mock/department/info/update',function(req, res){
    console.log('修改部门');
    res.sendFile('/department/info/update.json', getOptions());
});
//部门状态更改（删除）;
router.post('/mock/department/status/update',function(req, res){
    console.log('部门状态更改（删除）');
    res.sendFile('/department/status/update.json', getOptions());
});

/*
 * 权限管理管理
 * */

//所有权限获取;
router.get('/mock/privilege/list',function(req, res){
    console.log('所有权限获取');
    res.sendFile('/privilege/list.json', getOptions());
});
//添加权限;
router.post('/mock/privilege/add',function(req, res){
    console.log('所有权限获取');
    res.sendFile('/privilege/add.json', getOptions());
});
//修改权限;
router.post('/mock/privilege/update',function(req, res){
    console.log('所有权限获取');
    res.sendFile('/privilege/update.json', getOptions());
});
//获取指定ID权限的详细信息;
router.get('/mock/privilege/info',function(req, res){
    console.log('获取指定ID权限的详细信息');
    res.sendFile('/privilege/info.json', getOptions());
});
//修改指定权限的状态;
router.post('/mock/privilege/status/update',function(req, res){
    console.log('修改指定权限的状态');
    res.sendFile('/privilege/status/update.json', getOptions());
});

/*
 * 商贸公司管理
 * */

//商贸公司列表;
router.get('/mock/trade/list',function(req, res){
    console.log('商贸公司列表');
    res.sendFile('/trade/list.json', getOptions());
});
//商贸公司添加;
router.post('/mock/trade/add',function(req, res){
    console.log('商贸公司添加');
    res.sendFile('/trade/add.json', getOptions());
});
//商贸公司信息获取;
router.get('/mock/trade/info',function(req, res){
    console.log('商贸公司信息获取');
    res.sendFile('/trade/info.json', getOptions());
});
//商贸公司信息修改;
router.post('/mock/trade/info/update',function(req, res){
    console.log('商贸公司信息修改');
    res.sendFile('/trade/info/update.json', getOptions());
});
//商贸公司状态修改;
router.post('/mock/trade/status/update',function(req, res){
    console.log('商贸公司状态修改');
    res.sendFile('/trade/status/update.json', getOptions());
});

/*
 * 店铺
 * */

//店铺类型获取;
router.get('/mock/shop/type/list',function(req, res){
    console.log('店铺类型获取');
    res.sendFile('/shop/type/list.json', getOptions());
});

/*
 * 省、市、区县信息获取
 * */

//省、市、区县信息获取;
router.get('/mock/other/area/list',function(req, res){
    console.log('省、市、区县信息获取');
    res.sendFile('/other/area/list.json', getOptions());
});

//地区列表获取;
router.get('/mock/other/custom-area/list',function(req, res){
    console.log('地区列表获取');
    res.sendFile('/other/custom-area/list.json', getOptions());
});

//可推送用户列表;
router.get('/mock/operate/daily-news/receive-user/list',function(req, res){
    console.log('可推送用户列表');
    res.sendFile('/operate/daily-news/receive-user/list.json', getOptions());
});

//今日推文列表;
router.get('/mock/operate/today-article/list',function(req, res){
    console.log('今日推文列表');
    res.sendFile('/operate/today-article/list.json', getOptions());
});

//今日推文列表;
router.get('/mock/other/today-article/type',function(req, res){
    console.log('今日推文列表');
    res.sendFile('/other/today-article/type.json', getOptions());
});

//今日推文编辑（添加/修改）;
router.post('/mock/operate/today-article/edit',function(req, res){
    console.log('今日推文编辑（添加/修改）');
    res.sendFile('/operate/today-article/edit.json', getOptions());
});

//今日推文删除;
router.post('/mock/operate/today-article/delete',function(req, res){
    console.log('今日推文删除');
    res.sendFile('/operate/today-article/delete.json', getOptions());
});

//推文商品列表;
router.get('/mock/operate/daily-news/goods/list',function(req, res){
    console.log('推文商品列表');
    res.sendFile('/operate/daily-news/goods/list.json', getOptions());
});

//推文商品屏蔽操作;
router.post('/mock/operate/daily-news/goods/shield',function(req, res){
    console.log('推文商品屏蔽操作');
    res.sendFile('/operate/daily-news/goods/shield.json', getOptions());
});

//前端上传数据到OSS的签名接口;
router.get('/mock/other/oss/signature',function(req, res){
    console.log('前端上传数据到OSS的签名接口');
    res.sendFile('/other/oss/signature.json', getOptions());
});

//获取前端上传数据到OSS的请求ID;
router.get('/mock/other/oss/identity/data',function(req, res){
    console.log('获取前端上传数据到OSS的请求ID');
    res.sendFile('/other/oss/identity/data.json', getOptions());
});

//推文日志列表;
router.get('/mock/operate/daily-news/log/list',function(req, res){
    console.log('获取前端上传数据到OSS的请求ID');
    res.sendFile('/operate/daily-news/log/list.json', getOptions());
});

//每日推文设置get;
router.get('/mock/operate/daily-news/manage/list',function(req, res){
    console.log('推文商品列表');
    res.sendFile('/operate/daily-news/manage/list.json', getOptions());
});

//每日推文设置post;
router.post('/mock/operate/daily-news/manage/edit',function(req, res){
    console.log('推文商品列表');
    res.sendFile('/operate/daily-news/manage/edit.json', getOptions());
});

module.exports = router;
