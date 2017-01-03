webpackJsonp([2,4],{

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _refresh = __webpack_require__(237);
	
	var _refresh2 = _interopRequireDefault(_refresh);
	
	var _receive_user_list = __webpack_require__(238);
	
	var _receive_user_list2 = _interopRequireDefault(_receive_user_list);
	
	var _daily_news_log = __webpack_require__(240);
	
	var _daily_news_log2 = _interopRequireDefault(_daily_news_log);
	
	var _today_article = __webpack_require__(241);
	
	var _today_article2 = _interopRequireDefault(_today_article);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DepartmentManagementCtrl = function (_React$Component) {
	    _inherits(DepartmentManagementCtrl, _React$Component);
	
	    function DepartmentManagementCtrl(props) {
	        _classCallCheck(this, DepartmentManagementCtrl);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.state = {
	            data: [], //用户列表数据;
	            privilege: null, //当前用户的所有权限;
	            infoPanel: { //附体部分状态及标题;
	                infoPanelIsShow: false,
	                infoPanelTitle: ''
	            },
	            pageStatus: 1, //当前页面，1：今日推文，2：可推用户名单，3：推文日志;
	            areaData: [], //区域的数据;
	            currentArea: null //当前区域;
	        };
	        _this.hideInfoPanel = _this.hideInfoPanel.bind(_this);
	        _this.changePage = _this.changePage.bind(_this);
	        _this.refresh = _this.refresh.bind(_this);
	        _this.isHavePrivilege = _this.isHavePrivilege.bind(_this);
	        _this.createPage = _this.createPage.bind(_this);
	        console.log('in');
	        return _this;
	    }
	
	    DepartmentManagementCtrl.prototype.componentDidMount = function componentDidMount() {
	        var _this2 = this;
	
	        //当前用户的所有权限获取;
	        var tabData = this.props.currentTabData,
	            userNavigate = this.props.userNavigate;
	        if (this.props.userNavigate && this.props.userNavigate != '') {
	            if (userNavigate[tabData.parentId] && userNavigate[tabData.parentId][tabData.id]) {
	                this.setState({ privilege: this.props.userNavigate[tabData.parentId][tabData.id] });
	            }
	        }
	
	        H.server.other_customArea_list({}, function (res) {
	            if (res.code == 0) {
	                _this2.setState({
	                    areaData: res.data,
	                    currentArea: res.data[0]
	                });
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	        });
	    };
	
	    //隐藏附体部分;
	
	
	    DepartmentManagementCtrl.prototype.hideInfoPanel = function hideInfoPanel() {
	        this.setState({
	            infoPanel: { infoPanelIsShow: false, infoPanelTitle: '' }
	        });
	    };
	
	    //对当前页面的设置;
	
	
	    DepartmentManagementCtrl.prototype.changePage = function changePage(n) {
	        var _this3 = this;
	
	        var param = this.state.defaultParam,
	            newParam = Object.assign(param, n);
	        this.setState({ defaultParam: newParam }, function () {
	            _this3.getDataList();
	        });
	    };
	
	    //刷新;
	
	
	    DepartmentManagementCtrl.prototype.refresh = function refresh() {
	        this.setPageStatus(1);
	    };
	
	    //判断是否有这个功能;
	
	
	    DepartmentManagementCtrl.prototype.isHavePrivilege = function isHavePrivilege(name) {
	        var privilege = this.state.privilege;
	        for (var i in privilege) {
	            if (privilege[i].name == name) {
	                return true;
	            }
	        }
	        return false;
	    };
	
	    //设置页面类型,如明日推文，可推用户名单，推文日志;
	
	
	    DepartmentManagementCtrl.prototype.setPageStatus = function setPageStatus(status) {
	        this.setState({
	            pageStatus: status,
	            currentArea: this.state.areaData[0]
	        });
	    };
	
	    //判断应该显示哪个页面;
	
	
	    DepartmentManagementCtrl.prototype.createPage = function createPage() {
	        if (!this.state.currentArea) return '';
	        var xml = '';
	        switch (this.state.pageStatus) {
	            case 1:
	                xml = _react2.default.createElement(_today_article2.default, { currentArea: this.state.currentArea, currentTabData: this.props.currentTabData, userNavigate: this.props.userNavigate }); //显示明日推文页面;
	                break;
	            case 2:
	                xml = _react2.default.createElement(_receive_user_list2.default, { currentArea: this.state.currentArea }); //显示可推用户名单;
	                break;
	            case 3:
	                xml = _react2.default.createElement(_daily_news_log2.default, { currentArea: this.state.currentArea }); //推文日志;
	                break;
	        }
	        return xml;
	    };
	
	    //切换地区;
	
	
	    DepartmentManagementCtrl.prototype.switchArea = function switchArea(areaData) {
	        this.setState({ currentArea: areaData });
	    };
	
	    DepartmentManagementCtrl.prototype.render = function render() {
	        var _this4 = this;
	
	        return _react2.default.createElement(
	            'div',
	            { className: 'section-warp' },
	            _react2.default.createElement(
	                'div',
	                { className: 'section-filter' },
	                _react2.default.createElement(_refresh2.default, { refreshEv: this.refresh }),
	                _react2.default.createElement(
	                    'form',
	                    { className: 'form-inline' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'filter-row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'btn-group' },
	                            _react2.default.createElement(
	                                'btn',
	                                { className: this.state.pageStatus == 1 ? 'btn btn-lg btn-default' : 'btn btn-lg', onClick: this.setPageStatus.bind(this, 1) },
	                                '\u4ECA\u65E5\u63A8\u6587'
	                            ),
	                            _react2.default.createElement(
	                                'btn',
	                                { className: this.state.pageStatus == 2 ? 'btn btn-lg btn-default' : 'btn btn-lg', onClick: this.setPageStatus.bind(this, 2) },
	                                '\u53EF\u63A8\u7528\u6237\u540D\u5355'
	                            ),
	                            _react2.default.createElement(
	                                'btn',
	                                { className: this.state.pageStatus == 3 ? 'btn btn-lg btn-default' : 'btn btn-lg', onClick: this.setPageStatus.bind(this, 3) },
	                                '\u63A8\u6587\u65E5\u5FD7'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'filter-row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'btn-group' },
	                            this.state.areaData.map(function (data, index) {
	                                return _react2.default.createElement(
	                                    'btn',
	                                    { key: index,
	                                        className: data == _this4.state.currentArea ? 'btn btn-sm btn-default' : 'btn btn-sm',
	                                        onClick: _this4.switchArea.bind(_this4, data)
	                                    },
	                                    data.area_name
	                                );
	                            })
	                        )
	                    )
	                )
	            ),
	            this.createPage()
	        );
	    };
	
	    return DepartmentManagementCtrl;
	}(_react2.default.Component);
	
	module.exports = DepartmentManagementCtrl;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2016/2/1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 按钮
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/*按钮组件;*/
	var Refresh = function (_React$Component) {
	    _inherits(Refresh, _React$Component);
	
	    function Refresh(props) {
	        _classCallCheck(this, Refresh);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.handler = _this.handler.bind(_this);
	        return _this;
	    }
	
	    Refresh.prototype.handler = function handler(e) {
	        e.preventDefault();
	        this.props.refreshEv && this.props.refreshEv();
	    };
	
	    Refresh.prototype.render = function render() {
	        return _react2.default.createElement(
	            "a",
	            { id: "refreshBtn", className: "refresh-btn", onClick: this.handler },
	            _react2.default.createElement("i", { className: "glyphicon glyphicon-refresh" }),
	            "\u5237\u65B0"
	        );
	    };
	
	    return Refresh;
	}(_react2.default.Component);
	
	exports.default = Refresh;
	module.exports = exports["default"];

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _paging = __webpack_require__(239);
	
	var _paging2 = _interopRequireDefault(_paging);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 可推送用户名单*/
	
	
	var ReceiveUserList = function (_React$Component) {
	    _inherits(ReceiveUserList, _React$Component);
	
	    function ReceiveUserList(props) {
	        _classCallCheck(this, ReceiveUserList);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.state = {
	            defaultParam: { //获取列表提交的参数;
	                page: 1,
	                size: 40
	            },
	            totalPage: 1, //总页数;
	            AreaData: null,
	            list: [] //数据列表;
	        };
	        _this.getDataList = _this.getDataList.bind(_this);
	        _this.changePage = _this.changePage.bind(_this);
	        return _this;
	    }
	
	    ReceiveUserList.prototype.componentWillMount = function componentWillMount() {
	        this.getDataList();
	    };
	
	    ReceiveUserList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this2 = this;
	
	        if (nextProps.currentArea != this.state.AreaData) {
	            this.setState({
	                AreaData: nextProps.currentArea,
	                defaultParam: { //获取列表提交的参数;
	                    page: 1,
	                    size: 40
	                }
	            }, function () {
	                _this2.getDataList();
	            });
	        }
	    };
	
	    ReceiveUserList.prototype.getDataList = function getDataList() {
	        var _this3 = this;
	
	        var param = {
	            area_id: this.props.currentArea.area_id,
	            page: this.state.defaultParam.page,
	            size: this.state.defaultParam.size
	        };
	        H.server.operate_dailyNews_receiveUser_list(param, function (res) {
	            if (res.code == 0) {
	                _this3.setState({
	                    totalPage: Math.ceil(res.data.total / param.size),
	                    list: res.data.user_info
	                });
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	        });
	    };
	
	    //对当前页面的设置;
	
	
	    ReceiveUserList.prototype.changePage = function changePage(n) {
	        var _this4 = this;
	
	        var param = this.state.defaultParam,
	            newParam = Object.assign(param, n);
	        this.setState({ defaultParam: newParam }, function () {
	            _this4.getDataList();
	        });
	    };
	
	    ReceiveUserList.prototype.render = function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'section-table' },
	            _react2.default.createElement(
	                'table',
	                { className: 'table table-bordered table-hover table-responsive' },
	                _react2.default.createElement(
	                    'thead',
	                    null,
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            '\u7528\u6237ID'
	                        ),
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            '\u624B\u673A\u53F7'
	                        ),
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            'OpenID'
	                        ),
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            '\u5FAE\u4FE1\u540D'
	                        ),
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            '\u5E97\u94FA\u540D'
	                        ),
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            '\u7C7B\u578B'
	                        ),
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            '\u8BB0\u5F55\u65F6\u95F4'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    this.state.list.map(function (data, index) {
	                        return _react2.default.createElement(
	                            'tr',
	                            { key: index },
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                data.user_id
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                data.user_tel
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                data.wechat_openid
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                data.wechat_name
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                data.shop_name
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                data.shop_type
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                data.interact_time
	                            )
	                        );
	                    })
	                )
	            ),
	            _react2.default.createElement(_paging2.default, { pageNum: this.state.defaultParam.page, maxPage: this.state.totalPage, clickCallback: this.changePage })
	        );
	    };
	
	    return ReceiveUserList;
	}(_react2.default.Component);
	
	exports.default = ReceiveUserList;
	module.exports = exports['default'];

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2016/1/29.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 分页栏
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Hu XiaoYu
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var PageLi = function (_React$Component) {
	    _inherits(PageLi, _React$Component);
	
	    function PageLi(props) {
	        _classCallCheck(this, PageLi);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.getPage = _this.getPage.bind(_this);
	        return _this;
	    }
	
	    PageLi.prototype.getPage = function getPage() {
	        this.props.clickEv(this.props.num);
	    };
	
	    PageLi.prototype.render = function render() {
	        var str = '';
	        if (this.props.classN == 'active') {
	            str = 'active';
	        } else {
	            str = '';
	        }
	        return _react2.default.createElement(
	            'li',
	            { className: str, onClick: this.getPage },
	            _react2.default.createElement(
	                'a',
	                null,
	                this.props.num
	            )
	        );
	    };
	
	    return PageLi;
	}(_react2.default.Component);
	
	var PageCtrlBar = function (_React$Component2) {
	    _inherits(PageCtrlBar, _React$Component2);
	
	    function PageCtrlBar(props) {
	        _classCallCheck(this, PageCtrlBar);
	
	        var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));
	
	        _this2.state = {
	            pageNum: 1,
	            _maxPage: 18,
	            numArr: []
	        };
	        _this2.setPageData = _this2.setPageData.bind(_this2);
	        _this2.calculatePage = _this2.calculatePage.bind(_this2);
	        return _this2;
	    }
	
	    PageCtrlBar.prototype.calculatePage = function calculatePage(n) {
	        var _this3 = this;
	
	        if (n == this.state.pageNum) return; //如果是第一页和最后一页时不执行以下操作;
	        if (n < 1) {
	            n = 1;
	            return;
	        } else if (n > this.state._maxPage) {
	            n = this.state._maxPage;
	            return;
	        }
	        //TODO 这样写纯属无奈，后续再看能不能优化;
	        this.setPageData(n, this.state._maxPage, function (n) {
	            _this3.props.clickCallback && _this3.props.clickCallback({ page: n });
	        });
	    };
	
	    PageCtrlBar.prototype.setPageData = function setPageData(n, max, callback) {
	        var max = max || 1;
	        var arr = [];
	        if (max >= 9) {
	            if (n <= 5) {
	                arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	            } else if (n > 5 && n < max - 4) {
	                for (var i = n - 4; i <= n + 4; i++) {
	                    arr.push(i);
	                }
	            } else if (n >= max - 4) {
	                for (var i = max - 8; i <= max; i++) {
	                    arr.push(i);
	                }
	            }
	        } else {
	            for (var i = 1; i <= max; i++) {
	                arr.push(i);
	            }
	        }
	        this.setState({
	            pageNum: n,
	            _maxPage: max,
	            numArr: arr
	        }, function () {
	            callback && callback(n);
	        });
	    };
	
	    PageCtrlBar.prototype.componentWillMount = function componentWillMount() {
	        this.setPageData(this.state.pageNum, this.props.maxPage);
	    };
	
	    PageCtrlBar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var pageNum = 1;
	        if (this.props.pageNum) {
	            pageNum = this.props.pageNum;
	        } else {
	            pageNum = this.state.pageNum;
	        }
	        this.setPageData(pageNum, nextProps.maxPage);
	    };
	
	    PageCtrlBar.prototype.render = function render() {
	        var firstDisable = '';
	        var lastDisable = '';
	        var str = [];
	        var thisPage = this.state.pageNum;
	        var clickEv = this.calculatePage;
	        if (this.state.pageNum == 1) {
	            firstDisable = 'disabled';
	        }
	        if (this.state.pageNum == this.state._maxPage) {
	            lastDisable = 'disabled';
	        }
	        this.state.numArr.forEach(function (n, index) {
	            if (thisPage == n) {
	                str.push(_react2.default.createElement(PageLi, { key: index, num: n, clickEv: clickEv, classN: 'active' }));
	            } else {
	                str.push(_react2.default.createElement(PageLi, { key: index, num: n, clickEv: clickEv }));
	            }
	        });
	        return _react2.default.createElement(
	            'nav',
	            null,
	            _react2.default.createElement(
	                'ul',
	                { className: 'pagination' },
	                _react2.default.createElement(
	                    'li',
	                    { className: firstDisable, onClick: this.calculatePage.bind(this, 1) },
	                    _react2.default.createElement(
	                        'a',
	                        { 'aria-label': 'Previous' },
	                        '\u9996\u9875'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    { className: firstDisable, onClick: this.calculatePage.bind(this, this.state.pageNum - 1) },
	                    _react2.default.createElement(
	                        'a',
	                        { 'aria-label': 'Previous' },
	                        _react2.default.createElement(
	                            'span',
	                            { 'aria-hidden': 'true' },
	                            '\xAB'
	                        )
	                    )
	                ),
	                str,
	                _react2.default.createElement(
	                    'li',
	                    { className: lastDisable, onClick: this.calculatePage.bind(this, this.state.pageNum + 1) },
	                    _react2.default.createElement(
	                        'a',
	                        { 'aria-label': 'Next' },
	                        _react2.default.createElement(
	                            'span',
	                            { 'aria-hidden': 'true' },
	                            '\xBB'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    { className: lastDisable, onClick: this.calculatePage.bind(this, this.state._maxPage) },
	                    _react2.default.createElement(
	                        'a',
	                        { 'aria-label': 'Next' },
	                        _react2.default.createElement(
	                            'span',
	                            { 'aria-hidden': 'true' },
	                            '\u5C3E\u9875'
	                        )
	                    )
	                )
	            )
	        );
	    };
	
	    return PageCtrlBar;
	}(_react2.default.Component);
	
	exports.default = PageCtrlBar;
	module.exports = exports['default'];

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 推文日志*/
	
	
	var DailyNewsLog = function (_React$Component) {
	    _inherits(DailyNewsLog, _React$Component);
	
	    function DailyNewsLog(props) {
	        _classCallCheck(this, DailyNewsLog);
	
	        var _this2 = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this2.state = {
	            data: null, //查询某月的推文发送日志;
	            year: H.Date.getFullYear(), //本年;
	            month: H.Date.getMonth(), //本月;
	            day: H.Date.getDate(), //当天;
	            AreaData: null, //当前地区;
	            dateArr: [] //本月对应数组;
	        };
	        _this2.getData = _this2.getData.bind(_this2);
	        _this2.showInfo = _this2.showInfo.bind(_this2);
	        return _this2;
	    }
	
	    DailyNewsLog.prototype.componentDidMount = function componentDidMount() {
	        var _this3 = this;
	
	        this.setState({ AreaData: this.props.currentArea }, function () {
	            _this3.getData();
	        });
	    };
	
	    DailyNewsLog.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this4 = this;
	
	        if (nextProps.currentArea != this.state.AreaData) {
	            this.setState({
	                AreaData: nextProps.currentArea
	            }, function () {
	                _this4.getData();
	            });
	        }
	    };
	
	    DailyNewsLog.prototype.getData = function getData() {
	        var _this5 = this;
	
	        var param = {
	            area_id: this.state.AreaData.area_id,
	            date: this.state.year + '-' + this.state.month
	        };
	        H.server.operate_dailyNews_log_list(param, function (res) {
	            if (res.code == 0) {
	                _this5.setState({ data: res.data }, function () {
	                    H.Calendar.init(_this5.state.year + '/' + _this5.state.month + '/' + _this5.state.day + ' 00:00:00');
	                    $('#calendar').html(H.Calendar.getCalendar(Object.keys(res.data)));
	                    _this5.showInfo();
	                });
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	        });
	    };
	
	    DailyNewsLog.prototype.showInfo = function showInfo() {
	        var arr = $('#calendar .red_tbg'),
	            _this = this;
	        for (var i in arr) {
	            arr.eq(i).hover(function () {
	                var num = $(this).data('num'),
	                    data = _this.state.data;
	                $(this).find('.tbg_num').html('送达数量:' + data[num].delivery_number);
	                $(this).find('.tbg_num').slideDown();
	            }, function () {
	                $(this).find('.tbg_num').html('');
	                $(this).find('.tbg_num').slideUp();
	            });
	        }
	    };
	
	    //上一个月;
	
	
	    DailyNewsLog.prototype.prevMonth = function prevMonth() {
	        var _this6 = this;
	
	        var data = H.Calendar.previousMonth();
	        this.setState({
	            year: data.year,
	            month: data.month
	        }, function () {
	            _this6.getData();
	        });
	    };
	
	    //下一个月;
	
	
	    DailyNewsLog.prototype.nextMonth = function nextMonth() {
	        var _this7 = this;
	
	        if (this.state.year == H.Date.getFullYear() && this.state.month == H.Date.getMonth()) return;
	        var data = H.Calendar.nextMonth();
	        this.setState({
	            year: data.year,
	            month: data.month
	        }, function () {
	            _this7.getData();
	        });
	    };
	
	    DailyNewsLog.prototype.render = function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'section-table' },
	            _react2.default.createElement(
	                'h4',
	                { className: 'calendar' },
	                _react2.default.createElement('span', { className: 'prev-month', onClick: this.prevMonth.bind(this) }),
	                this.state.year,
	                '\u5E74',
	                this.state.month,
	                '\u6708',
	                _react2.default.createElement('span', {
	                    className: this.state.year == H.Date.getFullYear() && this.state.month == H.Date.getMonth() ? 'next-month disabled' : 'next-month',
	                    onClick: this.nextMonth.bind(this) })
	            ),
	            _react2.default.createElement('div', { id: 'calendar' })
	        );
	    };
	
	    return DailyNewsLog;
	}(_react2.default.Component);
	
	exports.default = DailyNewsLog;
	module.exports = exports['default'];

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _goods_info = __webpack_require__(242);
	
	var _goods_info2 = _interopRequireDefault(_goods_info);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 明日推文*/
	
	
	var TodayArticle = function (_React$Component) {
	    _inherits(TodayArticle, _React$Component);
	
	    function TodayArticle(props) {
	        _classCallCheck(this, TodayArticle);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.state = {
	            todayArticleList: [], //今日推文列表;
	            todayArticleType: [], //推文类型;
	            AreaData: null //当前地区;
	        };
	        _this.getTodayArticle = _this.getTodayArticle.bind(_this);
	        return _this;
	    }
	
	    TodayArticle.prototype.componentWillMount = function componentWillMount() {
	        var _this2 = this;
	
	        this.getTodayArticle();
	        //推文类型获取;
	        H.server.other_todayArticle_type({}, function (res) {
	            if (res.code == 0) {
	                _this2.setState({ todayArticleType: res.data });
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	        });
	
	        if ($('#mybase64').length <= 0) {
	            var scriptStr = '<script id="mybase64" src="/js/mybase64.js"></script>';
	            $('body').append(scriptStr);
	        }
	    };
	
	    TodayArticle.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this3 = this;
	
	        if (nextProps.currentArea != this.state.AreaData) {
	            this.setState({
	                AreaData: nextProps.currentArea
	            }, function () {
	                _this3.getTodayArticle();
	            });
	        }
	    };
	
	    //今日推文列表获取;
	
	
	    TodayArticle.prototype.getTodayArticle = function getTodayArticle() {
	        var _this4 = this;
	
	        var param = {
	            area_id: this.props.currentArea.area_id
	        };
	        H.server.operate_todayArticle_list(param, function (res) {
	            if (res.code == 0) {
	                _this4.setState({ todayArticleList: res.data });
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	            H.editSave = false;
	        });
	    };
	
	    //改变文章类型;
	
	
	    TodayArticle.prototype.changeArticleType = function changeArticleType(index, e) {
	        var data = this.state.todayArticleList,
	            val = e.target.value;
	        for (var i in data) {
	            if (data[i].article_type == val) {
	                H.Modal('每一条的类型不能重复');
	                return;
	            }
	        }
	        data[index].article_type = val;
	        this.setState({ todayArticleList: data });
	    };
	
	    //修改文章标题;
	
	
	    TodayArticle.prototype.changeArticleTitle = function changeArticleTitle(index, e) {
	        var data = this.state.todayArticleList,
	            val = e.target.value;
	        data[index].article_title = val;
	        this.setState({ todayArticleList: data });
	    };
	
	    //推文置顶;
	
	
	    TodayArticle.prototype.placedTop = function placedTop(index) {
	        var data = this.state.todayArticleList;
	        var thisItemData = data[index];
	        data.splice(index, 1);
	        data.unshift(thisItemData);
	        this.setState({ todayArticleList: data });
	    };
	
	    //删除推文;
	
	
	    TodayArticle.prototype.tweetsDel = function tweetsDel(articleId, index) {
	        var _this5 = this;
	
	        if (H.editSave) return;
	        H.editSave = true;
	        if (articleId == 0) {
	            var data = this.state.todayArticleList;
	            data.splice(index, 1);
	            this.setState({ todayArticleList: data });
	            return;
	        }
	        H.server.operate_todayArticle_delete({ article_id: articleId }, function (res) {
	            if (res.code == 0) {
	                var _data = _this5.state.todayArticleList;
	                _data.splice(index, 1);
	                _this5.setState({ todayArticleList: _data });
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	            H.editSave = false;
	        });
	    };
	
	    //添加推文;
	
	
	    TodayArticle.prototype.addArticle = function addArticle() {
	        var data = this.state.todayArticleList,
	            type = this.state.todayArticleType;
	        if (data.length == type.length) {
	            H.Modal('最多' + this.state.todayArticleType.length + '条，每一条的类型不能重复');
	            return;
	        }
	
	        var newArticle = {
	            'area_id': this.props.currentArea.area_id,
	            'article_id': 0,
	            'article_type': 0,
	            'article_title': '',
	            'article_image': 'Public/Uploads/oa-article/default-article.png'
	        };
	        data.push(newArticle);
	        this.setState({ todayArticleList: data });
	    };
	
	    //保存推文;
	
	
	    TodayArticle.prototype.saveArticle = function saveArticle() {
	        var _this6 = this;
	
	        if (H.editSave) return;
	        H.editSave = true;
	        var param = {
	            data: JSON.stringify(this.state.todayArticleList)
	        };
	        H.server.operate_todayArticle_edit(param, function (res) {
	            if (res.code == 0) {
	                H.Modal('保存成功');
	                _this6.getTodayArticle();
	            } else if (res.code == 10106) {
	                H.overdue();
	                H.editSave = false;
	            } else {
	                H.Modal(res.message);
	                H.editSave = false;
	            }
	        });
	    };
	
	    //上传文件的input=[type=file] change事件;
	
	
	    TodayArticle.prototype.fileChange = function fileChange(index, e) {
	        var _this7 = this;
	
	        var url = e.target.files[0];
	        var extention = url.name.substring(url.name.lastIndexOf('.') + 1).toLowerCase(); // 获取选中照片后缀
	        var allowExtention = '.jpg,.bmp,.gif,.png,.jpe';
	        var key = 'Public/Uploads/oa-article/' + new Date().getTime() + '' + Math.floor(Math.random() * 10) + '.' + extention; //file.name + (new Date).getTime() + '-';
	        if (allowExtention.indexOf(extention) == -1) {
	            H.Modal('仅支持' + allowExtention + '为后缀名的文件!');
	            return;
	        }
	        var POLICY_JSON = {
	            'expiration': '2120-12-01T12:00:00.000Z',
	            'conditions': [['starts-with', key, ''], { 'bucket': 'idongpin' }, ['starts-with', url.type, ''], ['content-length-range', 0, 104857600]]
	        };
	        var policyBase64 = Base64.encode(JSON.stringify(POLICY_JSON));
	
	        H.server.other_oss_signature({ signature_data: policyBase64 }, function (res) {
	            if (res.code == 0) {
	                var signature = res.data.signature;
	                H.server.other_oss_identity_data({}, function (res) {
	                    if (res.code == 0) {
	                        var access_id = res.data.access_id;
	                        var fd = new FormData();
	                        //alert(file.type);
	                        fd.append('key', key); //上传到的路径信息;
	                        fd.append('Content-Type', url.type); //文件类型;
	                        fd.append('Content-Length', Math.round(url.size * 100 / 1024) / 100); //文件大小KB;
	                        fd.append('Content-Encoding', 'compress'); //压缩方式，这里为无压缩;
	                        fd.append('OSSAccessKeyId', access_id);
	                        fd.append('policy', policyBase64); //参与签名的头信息;
	                        fd.append('signature', signature); //签名;
	                        fd.append('file', url); //需上传的文件对像;
	
	                        var xhr = new XMLHttpRequest();
	                        //上传百分比的计算，目前没有用，因为OSS没有返回上传过程的数据;
	                        //xhr.upload.addEventListener("progress", uploadProgress, false);
	                        //完成后的请求
	                        xhr.addEventListener('load', function () {
	                            var data = _this7.state.todayArticleList;
	                            data[index].article_image = key;
	                            _this7.setState({ todayArticleList: data });
	                        }, false);
	                        //请求error
	                        xhr.addEventListener('error', function () {
	                            H.Modal('上传出现错误，您可以重新点击上传');
	                        }, false);
	                        //请求中断
	                        xhr.addEventListener('abort', function () {
	                            H.Modal('上传中断，请检查网络后重新上传');
	                        }, false);
	                        //发送请求
	                        xhr.open('POST', 'http://oss-cn-qingdao.aliyuncs.com/idongpin', true);
	                        xhr.send(fd);
	                    } else if (res.code == 10106) {
	                        H.overdue();
	                    } else {
	                        H.Modal(res.message);
	                    }
	                });
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	        });
	    };
	
	    TodayArticle.prototype.render = function render() {
	        var _this8 = this;
	
	        return _react2.default.createElement(
	            'div',
	            { className: 'section-table' },
	            _react2.default.createElement(
	                'div',
	                { className: 'tweets-edit' },
	                _react2.default.createElement(
	                    'h1',
	                    { className: 'tweets-edit-title' },
	                    '\u63A8\u6587\u7F16\u8F91\u533A'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'tweets-edit-wrap' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'tweets-edit-ul-wrap' },
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'tweets-edit-ul' },
	                            this.state.todayArticleList.map(function (data, index) {
	                                if (index == 0) {
	                                    return _react2.default.createElement(
	                                        'li',
	                                        { key: index },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'first-tweets-img-wrap' },
	                                            _react2.default.createElement('img', { className: 'first-tweets-img', src: 'http://img.idongpin.com/' + data.article_image, width: '100%', height: '162' }),
	                                            _react2.default.createElement('input', { className: 'up-img', type: 'file', onChange: _this8.fileChange.bind(_this8, index) })
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'first-input-wrap' },
	                                            _react2.default.createElement('input', { type: 'text', className: 'first-input', value: data.article_title, onChange: _this8.changeArticleTitle.bind(_this8, index) })
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'article-type' },
	                                            _react2.default.createElement(
	                                                'select',
	                                                { className: 'form-control', value: data.article_type, onChange: _this8.changeArticleType.bind(_this8, index) },
	                                                _react2.default.createElement(
	                                                    'option',
	                                                    { key: '0', value: '0' },
	                                                    '\u8BF7\u9009\u62E9'
	                                                ),
	                                                _this8.state.todayArticleType.map(function (val, index1) {
	                                                    return _react2.default.createElement(
	                                                        'option',
	                                                        { key: data.article_id + '_' + index1, value: val.id },
	                                                        val.name
	                                                    );
	                                                })
	                                            )
	                                        ),
	                                        _react2.default.createElement('i', { className: 'tweets-del glyphicon glyphicon-minus', onClick: _this8.tweetsDel.bind(_this8, data.article_id, index) })
	                                    );
	                                } else {
	                                    return _react2.default.createElement(
	                                        'li',
	                                        { key: index },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'tweets-input-trap' },
	                                            _react2.default.createElement('textarea', { className: 'tweets-input', rows: '2', value: data.article_title, onChange: _this8.changeArticleTitle.bind(_this8, index) })
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'tweets-img-wrap' },
	                                            _react2.default.createElement('img', { className: 'tweets-img', src: 'http://img.idongpin.com/' + data.article_image, width: '55px', height: '55px' }),
	                                            _react2.default.createElement('input', { className: 'up-img', type: 'file', onChange: _this8.fileChange.bind(_this8, index) })
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'article-type' },
	                                            _react2.default.createElement(
	                                                'select',
	                                                { className: 'form-control', value: data.article_type, onChange: _this8.changeArticleType.bind(_this8, index) },
	                                                _react2.default.createElement(
	                                                    'option',
	                                                    { key: '0', value: '0' },
	                                                    '\u8BF7\u9009\u62E9'
	                                                ),
	                                                _this8.state.todayArticleType.map(function (val, index1) {
	                                                    return _react2.default.createElement(
	                                                        'option',
	                                                        { key: data.article_id + '_' + index1, value: val.id },
	                                                        val.name
	                                                    );
	                                                })
	                                            )
	                                        ),
	                                        _react2.default.createElement('i', { className: 'placed-top glyphicon glyphicon-circle-arrow-up', onClick: _this8.placedTop.bind(_this8, index) }),
	                                        _react2.default.createElement('i', { className: 'tweets-del glyphicon glyphicon-minus', onClick: _this8.tweetsDel.bind(_this8, data.article_id, index) })
	                                    );
	                                }
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'btn',
	                        { className: 'tweets-save-btn', onClick: this.saveArticle.bind(this) },
	                        '\u4FDD\u5B58'
	                    ),
	                    _react2.default.createElement(
	                        'btn',
	                        { className: 'tweets-add-btn', onClick: this.addArticle.bind(this) },
	                        '\u6DFB\u52A0'
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'daily-tweets-goods' },
	                _react2.default.createElement(
	                    'h1',
	                    { className: 'tweets-edit-title' },
	                    '\u5546\u54C1\u64CD\u4F5C\u533A'
	                ),
	                this.state.todayArticleType.length > 0 ? _react2.default.createElement(_goods_info2.default, { todayArticleType: this.state.todayArticleType, AreaData: this.props.currentArea }) : ''
	            )
	        );
	    };
	
	    return TodayArticle;
	}(_react2.default.Component);
	
	exports.default = TodayArticle;
	module.exports = exports['default'];

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _paging = __webpack_require__(239);
	
	var _paging2 = _interopRequireDefault(_paging);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GoodsInfo = function (_React$Component) {
	    _inherits(GoodsInfo, _React$Component);
	
	    function GoodsInfo(props) {
	        _classCallCheck(this, GoodsInfo);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.state = {
	            data: [], //用户列表数据;
	            totalPage: 1, //总页数;
	            defaultParam: { //获取列表提交的参数;
	                page: 1,
	                size: 30
	            },
	            articleType: null, //当前推文类型;
	            privilege: null, //当前用户的所有权限;
	            priceChange: 'rise', //价格变化 涨='rise' 跌='decline' 涨跌榜查询必须;
	            AreaData: null //当前地区;
	        };
	        _this.getDataList = _this.getDataList.bind(_this);
	        _this.changePage = _this.changePage.bind(_this);
	        return _this;
	    }
	
	    GoodsInfo.prototype.componentDidMount = function componentDidMount() {
	        var _this2 = this;
	
	        this.setState({ articleType: this.props.todayArticleType[0] }, function () {
	            _this2.getDataList();
	        });
	
	        //当前用户的所有权限获取;
	        var tabData = this.props.currentTabData,
	            userNavigate = this.props.userNavigate;
	        if (this.props.userNavigate && this.props.userNavigate != '') {
	            if (userNavigate[tabData.parentId] && userNavigate[tabData.parentId][tabData.id]) {
	                this.setState({ privilege: this.props.userNavigate[tabData.parentId][tabData.id] });
	            }
	        }
	    };
	
	    GoodsInfo.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this3 = this;
	
	        if (nextProps.AreaData != this.state.AreaData) {
	            this.setState({
	                AreaData: nextProps.AreaData,
	                articleType: this.props.todayArticleType[0]
	            }, function () {
	                _this3.getDataList();
	            });
	        }
	    };
	
	    //获取数据列表;
	
	
	    GoodsInfo.prototype.getDataList = function getDataList() {
	        var _this4 = this;
	
	        var server = H.server,
	            param = {
	            area_id: this.props.AreaData.area_id,
	            article_type_id: this.state.articleType.id,
	            price_change: this.state.priceChange, //价格变化 涨='rise' 跌='decline' 涨跌榜查询必须
	            page: this.state.defaultParam.page,
	            size: this.state.defaultParam.size
	        };
	        server.operate_dailyNews_goods_list(param, function (res) {
	            if (res.code == 0) {
	                _this4.setState({
	                    data: res.data.goods_info,
	                    totalPage: Math.ceil(res.data.total / param.size)
	                });
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	        });
	    };
	
	    //对当前页面的设置;
	
	
	    GoodsInfo.prototype.changePage = function changePage(n) {
	        var _this5 = this;
	
	        var param = this.state.defaultParam,
	            newParam = Object.assign(param, n);
	        this.setState({ defaultParam: newParam }, function () {
	            _this5.getDataList();
	        });
	    };
	
	    //判断是否有这个功能;
	
	
	    GoodsInfo.prototype.isHavePrivilege = function isHavePrivilege(name) {
	        var privilege = this.state.privilege;
	        for (var i in privilege) {
	            if (privilege[i].name == name) {
	                return true;
	            }
	        }
	        return false;
	    };
	
	    //切换推文类型查询对应列表;
	
	
	    GoodsInfo.prototype.changeArticleType = function changeArticleType(data) {
	        var _this6 = this;
	
	        this.setState({
	            articleType: data,
	            defaultParam: {
	                page: 1,
	                size: 30
	            }
	        }, function () {
	            _this6.getDataList();
	        });
	    };
	
	    //商品列表中修改涨价降价;
	
	
	    GoodsInfo.prototype.riseAndFall = function riseAndFall(str) {
	        var _this7 = this;
	
	        this.setState({ priceChange: str }, function () {
	            _this7.getDataList();
	        });
	    };
	
	    //推文商品屏蔽操作;
	
	
	    GoodsInfo.prototype.shielding = function shielding(id, goodsId, status) {
	        var _this8 = this;
	
	        var param = {
	            id: id,
	            goods_id: goodsId,
	            article_type_id: this.state.articleType.id,
	            price_change: this.state.priceChange,
	            shield_status: status
	        };
	
	        H.server.operate_dailyNews_goods_shield(param, function (res) {
	            if (res.code == 0) {
	                H.Modal('操作成功');
	                _this8.getDataList();
	            } else if (res.code == 10106) {
	                H.overdue();
	            } else {
	                H.Modal(res.message);
	            }
	        });
	    };
	
	    //添加推荐商品;
	
	
	    GoodsInfo.prototype.addRecommended = function addRecommended() {
	        var _this9 = this;
	
	        var M = H.Modal({
	            title: '新增推荐',
	            content: '<p>商品ID：<input id="recommendedGid" type="text"></p>',
	            cancel: true,
	            okText: '保存',
	            autoClose: false,
	            cancelText: '取消',
	            okCallback: function okCallback() {
	                var param = { goods_id: $('#recommendedGid').val() };
	                if (param.goods_id == '' || !param.goods_id) {
	                    $('#recommendedGid')[0].focus();
	                    return;
	                }
	                M.destroy();
	                H.server.operate_dailyNews_goods_recommend(param, function (res) {
	                    if (res.code == 0) {
	                        H.Modal('成功添加');
	                        _this9.getDataList();
	                    } else if (res.code == 10106) {
	                        H.overdue();
	                    } else {
	                        H.Modal(res.message);
	                    }
	                });
	            },
	            cancelCallback: function cancelCallback() {
	                M.destroy();
	            }
	        });
	    };
	
	    //清空推荐列表;
	
	
	    GoodsInfo.prototype.cleanRecommended = function cleanRecommended() {
	        var _this10 = this;
	
	        H.Modal({
	            title: '清空推荐',
	            content: '<p>确认全部清空吗？</p>',
	            cancel: true,
	            okText: '确认',
	            okCallback: function okCallback() {
	                H.server.operate_dailyNews_recommend_goods_removeAll({}, function (res) {
	                    if (res.code == 0) {
	                        H.Modal('成功清除');
	                        _this10.setState({
	                            defaultParam: {
	                                page: 1,
	                                size: 30
	                            }
	                        }, function () {
	                            _this10.getDataList();
	                        });
	                    } else if (res.code == 10106) {
	                        H.overdue();
	                    } else {
	                        H.Modal(res.message);
	                    }
	                });
	            }
	        });
	    };
	
	    //移出推荐商品;
	
	
	    GoodsInfo.prototype.removeRecommended = function removeRecommended(id, gid) {
	        var _this11 = this;
	
	        var param = {
	            id: id
	        };
	        H.Modal({
	            title: '移除推荐商品',
	            height: '229',
	            content: '<p>当前推荐ID：' + id + '</p><p>商品ID：' + gid + '</p><p>移出后，随时可以重新推荐</p>',
	            ok: true,
	            okText: '确认',
	            okCallback: function okCallback() {
	                H.server.operate_dailyNews_recommend_goods_remove(param, function (res) {
	                    if (res.code == 0) {
	                        H.Modal('成功移出');
	                        _this11.getDataList();
	                    } else if (res.code == 10106) {
	                        H.overdue();
	                    } else {
	                        H.Modal(res.message);
	                    }
	                });
	            }
	        });
	    };
	
	    //推荐商品排序
	
	
	    GoodsInfo.prototype.sortingRecommended = function sortingRecommended(id, gid) {
	        var _this12 = this;
	
	        var M = H.Modal({
	            title: '排序',
	            height: '285',
	            content: '<p>当前推荐ID：' + id + '</p><p>商品ID：' + gid + '</p><p>推荐ID：<input id="nextId" type="text"></p><p style="color:#888888;">排在谁上面就填谁的推荐ID，不能和当前推荐ID相同</p>',
	            cancel: true,
	            autoClose: false,
	            okText: '保存',
	            okCallback: function okCallback() {
	                var param = {
	                    current_id: id,
	                    next_id: $('#nextId').val()
	                };
	                if (param.next_id == '' || !param.next_id || param.current_id == param.next_id) {
	                    $('#nextId')[0].focus();
	                    return;
	                }
	                M.destroy();
	                H.server.operate_dailyNews_recommend_goods_sort(param, function (res) {
	                    if (res.code == 0) {
	                        H.Modal('成功排序');
	                        _this12.getDataList();
	                    } else if (res.code == 10106) {
	                        H.overdue();
	                    } else {
	                        H.Modal(res.message);
	                    }
	                });
	            },
	            cancelCallback: function cancelCallback() {
	                M.destroy();
	            }
	        });
	    };
	
	    GoodsInfo.prototype.render = function render() {
	        var _this13 = this;
	
	        var tHead = _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	                'th',
	                null,
	                '\u5E8F\u53F7'
	            ),
	            _react2.default.createElement(
	                'th',
	                null,
	                '\u5546\u54C1ID'
	            ),
	            _react2.default.createElement(
	                'th',
	                null,
	                '\u54C1\u540D'
	            ),
	            _react2.default.createElement(
	                'th',
	                null,
	                '\u6628\u65E5\u9500\u91CF'
	            ),
	            _react2.default.createElement(
	                'th',
	                null,
	                '\u5F53\u524D\u4EF7\u683C'
	            ),
	            _react2.default.createElement(
	                'th',
	                null,
	                '\u4F9B\u5E94\u5546'
	            ),
	            _react2.default.createElement(
	                'th',
	                null,
	                '\u64CD\u4F5C'
	            )
	        );
	        if (this.state.articleType) {
	            if (this.state.articleType.id == 4) {
	                tHead = _react2.default.createElement(
	                    'tr',
	                    null,
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u5E8F\u53F7'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u5546\u54C1ID'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u54C1\u540D'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u6628\u65E5\u9500\u91CF'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u5F53\u524D\u4EF7\u683C'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u6628\u65E5\u4EF7\u683C'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u4F9B\u5E94\u5546'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u64CD\u4F5C'
	                    )
	                );
	            } else if (this.state.articleType.id == 6) {
	                tHead = _react2.default.createElement(
	                    'tr',
	                    null,
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u5E8F\u53F7'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u63A8\u8350ID'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u5546\u54C1ID'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u54C1\u540D'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u6628\u65E5\u9500\u91CF'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u4EF7\u683C'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u4F9B\u5E94\u5546'
	                    ),
	                    _react2.default.createElement(
	                        'th',
	                        null,
	                        '\u64CD\u4F5C'
	                    )
	                );
	            }
	        }
	        return _react2.default.createElement(
	            'div',
	            { className: 'section-warp' },
	            _react2.default.createElement(
	                'div',
	                { className: 'section-filter' },
	                _react2.default.createElement(
	                    'form',
	                    { className: 'form-inline' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'filter-row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'btn-group' },
	                            this.props.todayArticleType.map(function (data, index) {
	                                return _react2.default.createElement(
	                                    'btn',
	                                    { key: index,
	                                        className: data == _this13.state.articleType ? 'btn btn-sm btn-default' : 'btn btn-sm',
	                                        onClick: _this13.changeArticleType.bind(_this13, data)
	                                    },
	                                    data.name
	                                );
	                            })
	                        )
	                    ),
	                    this.state.articleType && this.state.articleType.id == 4 ? _react2.default.createElement(
	                        'div',
	                        { className: 'filter-row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'btn-group' },
	                            _react2.default.createElement(
	                                'btn',
	                                { className: this.state.priceChange == 'rise' ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.riseAndFall.bind(this, 'rise') },
	                                '\u6DA8\u4EF7'
	                            ),
	                            _react2.default.createElement(
	                                'btn',
	                                { className: this.state.priceChange == 'decline' ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.riseAndFall.bind(this, 'decline') },
	                                '\u964D\u4EF7'
	                            )
	                        )
	                    ) : '',
	                    this.state.articleType && this.state.articleType.id == 6 ? _react2.default.createElement(
	                        'div',
	                        { className: 'filter-row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'btn-group' },
	                            _react2.default.createElement(
	                                'btn',
	                                { className: 'btn btn-sm', onClick: this.cleanRecommended.bind(this) },
	                                '\u6E05\u7A7A'
	                            ),
	                            _react2.default.createElement(
	                                'btn',
	                                { className: 'btn btn-lg', onClick: this.addRecommended.bind(this) },
	                                '\u65B0\u589E\u63A8\u8350'
	                            )
	                        )
	                    ) : ''
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'section-table' },
	                _react2.default.createElement(
	                    'table',
	                    { className: 'table table-bordered table-hover table-responsive' },
	                    _react2.default.createElement(
	                        'thead',
	                        null,
	                        tHead
	                    ),
	                    _react2.default.createElement(
	                        'tbody',
	                        null,
	                        this.state.data.map(function (data, index) {
	                            if (_this13.state.articleType && _this13.state.articleType.id == 4) {
	                                return _react2.default.createElement(
	                                    'tr',
	                                    { key: index },
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.id
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_id
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_name
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.yesterday_sales_num
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_price,
	                                        '/\u4EF6'
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.yesterday_price,
	                                        '/\u4EF6'
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.sell_shop_name
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.shield_status == 1 ? _react2.default.createElement(
	                                            'a',
	                                            { onClick: _this13.shielding.bind(_this13, data.id, data.goods_id, 2) },
	                                            '\u672C\u6B21\u5C4F\u853D'
	                                        ) : _react2.default.createElement(
	                                            'a',
	                                            { onClick: _this13.shielding.bind(_this13, data.id, data.goods_id, 1) },
	                                            '\u53D6\u6D88\u5C4F\u853D'
	                                        )
	                                    )
	                                );
	                            } else if (_this13.state.articleType && _this13.state.articleType.id == 6) {
	                                return _react2.default.createElement(
	                                    'tr',
	                                    { key: index },
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        (_this13.state.defaultParam.page - 1) * _this13.state.defaultParam.size + (index + 1)
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.id
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_id
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_name
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.yesterday_sales_num
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_price,
	                                        '/\u4EF6'
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.sell_shop_name
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        _react2.default.createElement(
	                                            'a',
	                                            { onClick: _this13.removeRecommended.bind(_this13, data.id, data.goods_id) },
	                                            '\u79FB\u51FA'
	                                        ),
	                                        _react2.default.createElement(
	                                            'a',
	                                            { onClick: _this13.sortingRecommended.bind(_this13, data.id, data.goods_id) },
	                                            '\u6392\u5E8F'
	                                        )
	                                    )
	                                );
	                            } else {
	                                return _react2.default.createElement(
	                                    'tr',
	                                    { key: index },
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.id
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_id
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_name
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.yesterday_sales_num
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.goods_price,
	                                        '/\u4EF6'
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.sell_shop_name
	                                    ),
	                                    _react2.default.createElement(
	                                        'td',
	                                        null,
	                                        data.shield_status == 1 ? _react2.default.createElement(
	                                            'a',
	                                            { onClick: _this13.shielding.bind(_this13, data.id, data.goods_id, 2) },
	                                            '\u672C\u6B21\u5C4F\u853D'
	                                        ) : _react2.default.createElement(
	                                            'a',
	                                            { onClick: _this13.shielding.bind(_this13, data.id, data.goods_id, 1) },
	                                            '\u53D6\u6D88\u5C4F\u853D'
	                                        )
	                                    )
	                                );
	                            }
	                        })
	                    )
	                ),
	                _react2.default.createElement(_paging2.default, { pageNum: this.state.defaultParam.page, maxPage: this.state.totalPage, clickCallback: this.changePage })
	            )
	        );
	    };
	
	    return GoodsInfo;
	}(_react2.default.Component);
	
	exports.default = GoodsInfo;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvcm91dGVycy9vcGVyYXRpb24tbWFuYWdlbWVudC9kYWlseS10d2VldHMvY29tcG9uZW50cy90d2VldHNfY3RybC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9yZWZyZXNoL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL3JvdXRlcnMvb3BlcmF0aW9uLW1hbmFnZW1lbnQvZGFpbHktdHdlZXRzL2NvbXBvbmVudHMvcmVjZWl2ZV91c2VyX2xpc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2UvcGFnaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9yb3V0ZXJzL29wZXJhdGlvbi1tYW5hZ2VtZW50L2RhaWx5LXR3ZWV0cy9jb21wb25lbnRzL2RhaWx5X25ld3NfbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvcm91dGVycy9vcGVyYXRpb24tbWFuYWdlbWVudC9kYWlseS10d2VldHMvY29tcG9uZW50cy90b2RheV9hcnRpY2xlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvcm91dGVycy9vcGVyYXRpb24tbWFuYWdlbWVudC9kYWlseS10d2VldHMvY29tcG9uZW50cy9nb29kc19pbmZvLmpzeCJdLCJuYW1lcyI6WyJEZXBhcnRtZW50TWFuYWdlbWVudEN0cmwiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsInByaXZpbGVnZSIsImluZm9QYW5lbCIsImluZm9QYW5lbElzU2hvdyIsImluZm9QYW5lbFRpdGxlIiwicGFnZVN0YXR1cyIsImFyZWFEYXRhIiwiY3VycmVudEFyZWEiLCJoaWRlSW5mb1BhbmVsIiwiYmluZCIsImNoYW5nZVBhZ2UiLCJyZWZyZXNoIiwiaXNIYXZlUHJpdmlsZWdlIiwiY3JlYXRlUGFnZSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnREaWRNb3VudCIsInRhYkRhdGEiLCJjdXJyZW50VGFiRGF0YSIsInVzZXJOYXZpZ2F0ZSIsInBhcmVudElkIiwiaWQiLCJzZXRTdGF0ZSIsIkgiLCJzZXJ2ZXIiLCJvdGhlcl9jdXN0b21BcmVhX2xpc3QiLCJyZXMiLCJjb2RlIiwib3ZlcmR1ZSIsIk1vZGFsIiwibWVzc2FnZSIsIm4iLCJwYXJhbSIsImRlZmF1bHRQYXJhbSIsIm5ld1BhcmFtIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0RGF0YUxpc3QiLCJzZXRQYWdlU3RhdHVzIiwibmFtZSIsImkiLCJzdGF0dXMiLCJ4bWwiLCJzd2l0Y2hBcmVhIiwicmVuZGVyIiwibWFwIiwiaW5kZXgiLCJhcmVhX25hbWUiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVmcmVzaCIsImhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWZyZXNoRXYiLCJSZWNlaXZlVXNlckxpc3QiLCJwYWdlIiwic2l6ZSIsInRvdGFsUGFnZSIsIkFyZWFEYXRhIiwibGlzdCIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJhcmVhX2lkIiwib3BlcmF0ZV9kYWlseU5ld3NfcmVjZWl2ZVVzZXJfbGlzdCIsIk1hdGgiLCJjZWlsIiwidG90YWwiLCJ1c2VyX2luZm8iLCJ1c2VyX2lkIiwidXNlcl90ZWwiLCJ3ZWNoYXRfb3BlbmlkIiwid2VjaGF0X25hbWUiLCJzaG9wX25hbWUiLCJzaG9wX3R5cGUiLCJpbnRlcmFjdF90aW1lIiwiUGFnZUxpIiwiZ2V0UGFnZSIsImNsaWNrRXYiLCJudW0iLCJzdHIiLCJjbGFzc04iLCJQYWdlQ3RybEJhciIsInBhZ2VOdW0iLCJfbWF4UGFnZSIsIm51bUFyciIsInNldFBhZ2VEYXRhIiwiY2FsY3VsYXRlUGFnZSIsImNsaWNrQ2FsbGJhY2siLCJtYXgiLCJjYWxsYmFjayIsImFyciIsInB1c2giLCJtYXhQYWdlIiwiZmlyc3REaXNhYmxlIiwibGFzdERpc2FibGUiLCJ0aGlzUGFnZSIsImZvckVhY2giLCJEYWlseU5ld3NMb2ciLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJkYXRlQXJyIiwiZ2V0RGF0YSIsInNob3dJbmZvIiwiZGF0ZSIsIm9wZXJhdGVfZGFpbHlOZXdzX2xvZ19saXN0IiwiQ2FsZW5kYXIiLCJpbml0IiwiJCIsImh0bWwiLCJnZXRDYWxlbmRhciIsImtleXMiLCJfdGhpcyIsImVxIiwiaG92ZXIiLCJmaW5kIiwiZGVsaXZlcnlfbnVtYmVyIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInByZXZNb250aCIsInByZXZpb3VzTW9udGgiLCJuZXh0TW9udGgiLCJUb2RheUFydGljbGUiLCJ0b2RheUFydGljbGVMaXN0IiwidG9kYXlBcnRpY2xlVHlwZSIsImdldFRvZGF5QXJ0aWNsZSIsIm90aGVyX3RvZGF5QXJ0aWNsZV90eXBlIiwibGVuZ3RoIiwic2NyaXB0U3RyIiwiYXBwZW5kIiwib3BlcmF0ZV90b2RheUFydGljbGVfbGlzdCIsImVkaXRTYXZlIiwiY2hhbmdlQXJ0aWNsZVR5cGUiLCJ2YWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFydGljbGVfdHlwZSIsImNoYW5nZUFydGljbGVUaXRsZSIsImFydGljbGVfdGl0bGUiLCJwbGFjZWRUb3AiLCJ0aGlzSXRlbURhdGEiLCJzcGxpY2UiLCJ1bnNoaWZ0IiwidHdlZXRzRGVsIiwiYXJ0aWNsZUlkIiwib3BlcmF0ZV90b2RheUFydGljbGVfZGVsZXRlIiwiYXJ0aWNsZV9pZCIsImFkZEFydGljbGUiLCJ0eXBlIiwibmV3QXJ0aWNsZSIsInNhdmVBcnRpY2xlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wZXJhdGVfdG9kYXlBcnRpY2xlX2VkaXQiLCJmaWxlQ2hhbmdlIiwidXJsIiwiZmlsZXMiLCJleHRlbnRpb24iLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRvTG93ZXJDYXNlIiwiYWxsb3dFeHRlbnRpb24iLCJrZXkiLCJnZXRUaW1lIiwiZmxvb3IiLCJyYW5kb20iLCJpbmRleE9mIiwiUE9MSUNZX0pTT04iLCJwb2xpY3lCYXNlNjQiLCJCYXNlNjQiLCJlbmNvZGUiLCJvdGhlcl9vc3Nfc2lnbmF0dXJlIiwic2lnbmF0dXJlX2RhdGEiLCJzaWduYXR1cmUiLCJvdGhlcl9vc3NfaWRlbnRpdHlfZGF0YSIsImFjY2Vzc19pZCIsImZkIiwiRm9ybURhdGEiLCJyb3VuZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFydGljbGVfaW1hZ2UiLCJvcGVuIiwic2VuZCIsImluZGV4MSIsIkdvb2RzSW5mbyIsImFydGljbGVUeXBlIiwicHJpY2VDaGFuZ2UiLCJhcnRpY2xlX3R5cGVfaWQiLCJwcmljZV9jaGFuZ2UiLCJvcGVyYXRlX2RhaWx5TmV3c19nb29kc19saXN0IiwiZ29vZHNfaW5mbyIsInJpc2VBbmRGYWxsIiwic2hpZWxkaW5nIiwiZ29vZHNJZCIsImdvb2RzX2lkIiwic2hpZWxkX3N0YXR1cyIsIm9wZXJhdGVfZGFpbHlOZXdzX2dvb2RzX3NoaWVsZCIsImFkZFJlY29tbWVuZGVkIiwiTSIsInRpdGxlIiwiY29udGVudCIsImNhbmNlbCIsIm9rVGV4dCIsImF1dG9DbG9zZSIsImNhbmNlbFRleHQiLCJva0NhbGxiYWNrIiwiZm9jdXMiLCJkZXN0cm95Iiwib3BlcmF0ZV9kYWlseU5ld3NfZ29vZHNfcmVjb21tZW5kIiwiY2FuY2VsQ2FsbGJhY2siLCJjbGVhblJlY29tbWVuZGVkIiwib3BlcmF0ZV9kYWlseU5ld3NfcmVjb21tZW5kX2dvb2RzX3JlbW92ZUFsbCIsInJlbW92ZVJlY29tbWVuZGVkIiwiZ2lkIiwiaGVpZ2h0Iiwib2siLCJvcGVyYXRlX2RhaWx5TmV3c19yZWNvbW1lbmRfZ29vZHNfcmVtb3ZlIiwic29ydGluZ1JlY29tbWVuZGVkIiwiY3VycmVudF9pZCIsIm5leHRfaWQiLCJvcGVyYXRlX2RhaWx5TmV3c19yZWNvbW1lbmRfZ29vZHNfc29ydCIsInRIZWFkIiwiZ29vZHNfbmFtZSIsInllc3RlcmRheV9z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QUEwQlQsS0FBS3FCLEVBQS9CLEVBQW1DckIsS0FBSzJNLFFBQXhDLEVBQWtELENBQWxELENBQVo7QUFBQTtBQUFBO0FBSFI7QUFQSixrQ0FESjtBQWVIO0FBQ0osMEJBbkREO0FBRlI7QUFKSixrQkFESjtBQThESSxtRUFBYSxTQUFTLEtBQUs1TSxLQUFMLENBQVdrQyxZQUFYLENBQXdCd0IsSUFBOUMsRUFBcUQsU0FBUyxLQUFLMUQsS0FBTCxDQUFXNEQsU0FBekUsRUFBb0YsZUFBZSxLQUFLakQsVUFBeEc7QUE5REo7QUFyQ0osVUFESjtBQXdHSCxNOzs7R0FqWm1CLGdCQUFNc0MsUzs7bUJBb1pmaUosUyIsImZpbGUiOiIyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlZnJlc2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yZWZyZXNoL3JlZnJlc2guanMnO1xyXG5pbXBvcnQgUmVjZWl2ZVVzZXJMaXN0IGZyb20gJy4vcmVjZWl2ZV91c2VyX2xpc3QuanN4JztcclxuaW1wb3J0IERhaWx5TmV3c0xvZyBmcm9tICcuL2RhaWx5X25ld3NfbG9nLmpzeCc7XHJcbmltcG9ydCBUb2RheUFydGljbGUgZnJvbSAnLi90b2RheV9hcnRpY2xlLmpzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNsYXNzIERlcGFydG1lbnRNYW5hZ2VtZW50Q3RybCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBbXSwgICAvL+eUqOaIt+WIl+ihqOaVsOaNrjtcclxuICAgICAgICAgICAgcHJpdmlsZWdlOiBudWxsLCAgLy/lvZPliY3nlKjmiLfnmoTmiYDmnInmnYPpmZA7XHJcbiAgICAgICAgICAgIGluZm9QYW5lbDogeyAgICAvL+mZhOS9k+mDqOWIhueKtuaAgeWPiuagh+mimDtcclxuICAgICAgICAgICAgICAgIGluZm9QYW5lbElzU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZvUGFuZWxUaXRsZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnZVN0YXR1czogMSwgICAvL+W9k+WJjemhtemdou+8jDHvvJrku4rml6XmjqjmlofvvIwy77ya5Y+v5o6o55So5oi35ZCN5Y2V77yMM++8muaOqOaWh+aXpeW/lztcclxuICAgICAgICAgICAgYXJlYURhdGE6IFtdLCAgICAgLy/ljLrln5/nmoTmlbDmja47XHJcbiAgICAgICAgICAgIGN1cnJlbnRBcmVhOiBudWxsICAgLy/lvZPliY3ljLrln587XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhpZGVJbmZvUGFuZWwgPSB0aGlzLmhpZGVJbmZvUGFuZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UgPSB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2ggPSB0aGlzLnJlZnJlc2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmlzSGF2ZVByaXZpbGVnZSA9IHRoaXMuaXNIYXZlUHJpdmlsZWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYWdlID0gdGhpcy5jcmVhdGVQYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIC8v5b2T5YmN55So5oi355qE5omA5pyJ5p2D6ZmQ6I635Y+WO1xyXG4gICAgICAgIGxldCB0YWJEYXRhID0gdGhpcy5wcm9wcy5jdXJyZW50VGFiRGF0YSxcclxuICAgICAgICAgICAgdXNlck5hdmlnYXRlID0gdGhpcy5wcm9wcy51c2VyTmF2aWdhdGU7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy51c2VyTmF2aWdhdGUgJiYgdGhpcy5wcm9wcy51c2VyTmF2aWdhdGUgIT0gJycpIHtcclxuICAgICAgICAgICAgaWYodXNlck5hdmlnYXRlW3RhYkRhdGEucGFyZW50SWRdICYmIHVzZXJOYXZpZ2F0ZVt0YWJEYXRhLnBhcmVudElkXVt0YWJEYXRhLmlkXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcml2aWxlZ2U6IHRoaXMucHJvcHMudXNlck5hdmlnYXRlW3RhYkRhdGEucGFyZW50SWRdW3RhYkRhdGEuaWRdfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEguc2VydmVyLm90aGVyX2N1c3RvbUFyZWFfbGlzdCh7fSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhcmVhRGF0YTogcmVzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZWE6IHJlcy5kYXRhWzBdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzLmNvZGUgPT0gMTAxMDYpIHtcclxuICAgICAgICAgICAgICAgIEgub3ZlcmR1ZSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBILk1vZGFsKHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6ZqQ6JeP6ZmE5L2T6YOo5YiGO1xyXG4gICAgaGlkZUluZm9QYW5lbCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbmZvUGFuZWw6IHtpbmZvUGFuZWxJc1Nob3c6IGZhbHNlLCBpbmZvUGFuZWxUaXRsZTogJyd9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lr7nlvZPliY3pobXpnaLnmoTorr7nva47XHJcbiAgICBjaGFuZ2VQYWdlKG4pIHtcclxuICAgICAgICBsZXQgcGFyYW0gPSB0aGlzLnN0YXRlLmRlZmF1bHRQYXJhbSxcclxuICAgICAgICAgICAgbmV3UGFyYW0gPSBPYmplY3QuYXNzaWduKHBhcmFtLCBuKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZWZhdWx0UGFyYW06IG5ld1BhcmFtfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liLfmlrA7XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZVN0YXR1cygxKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIpOaWreaYr+WQpuaciei/meS4quWKn+iDvTtcclxuICAgIGlzSGF2ZVByaXZpbGVnZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IHByaXZpbGVnZSA9IHRoaXMuc3RhdGUucHJpdmlsZWdlO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gcHJpdmlsZWdlKSB7XHJcbiAgICAgICAgICAgIGlmKHByaXZpbGVnZVtpXS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iuvue9rumhtemdouexu+WeiyzlpoLmmI7ml6XmjqjmlofvvIzlj6/mjqjnlKjmiLflkI3ljZXvvIzmjqjmlofml6Xlv5c7XHJcbiAgICBzZXRQYWdlU3RhdHVzKHN0YXR1cykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYWdlU3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgIGN1cnJlbnRBcmVhOiB0aGlzLnN0YXRlLmFyZWFEYXRhWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liKTmlq3lupTor6XmmL7npLrlk6rkuKrpobXpnaI7XHJcbiAgICBjcmVhdGVQYWdlKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmN1cnJlbnRBcmVhKSByZXR1cm4gJyc7XHJcbiAgICAgICAgbGV0IHhtbCA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5wYWdlU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHhtbCA9ICg8VG9kYXlBcnRpY2xlIGN1cnJlbnRBcmVhPXt0aGlzLnN0YXRlLmN1cnJlbnRBcmVhfSBjdXJyZW50VGFiRGF0YT17dGhpcy5wcm9wcy5jdXJyZW50VGFiRGF0YX0gdXNlck5hdmlnYXRlPXt0aGlzLnByb3BzLnVzZXJOYXZpZ2F0ZX0vPik7ICAgLy/mmL7npLrmmI7ml6XmjqjmlofpobXpnaI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgeG1sID0gKDxSZWNlaXZlVXNlckxpc3QgY3VycmVudEFyZWE9e3RoaXMuc3RhdGUuY3VycmVudEFyZWF9IC8+KTsgICAvL+aYvuekuuWPr+aOqOeUqOaIt+WQjeWNlTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB4bWwgPSAoPERhaWx5TmV3c0xvZyBjdXJyZW50QXJlYT17dGhpcy5zdGF0ZS5jdXJyZW50QXJlYX0gLz4pOyAgICAvL+aOqOaWh+aXpeW/lztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geG1sO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YiH5o2i5Zyw5Yy6O1xyXG4gICAgc3dpdGNoQXJlYShhcmVhRGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRBcmVhOiBhcmVhRGF0YX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24td2FycFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWZpbHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWZyZXNoIHJlZnJlc2hFdj17dGhpcy5yZWZyZXNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnBhZ2VTdGF0dXMgPT0gMSA/ICdidG4gYnRuLWxnIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLWxnJ30gb25DbGljaz17dGhpcy5zZXRQYWdlU3RhdHVzLmJpbmQodGhpcywgMSl9PuS7iuaXpeaOqOaWhzwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnBhZ2VTdGF0dXMgPT0gMiA/ICdidG4gYnRuLWxnIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLWxnJ30gb25DbGljaz17dGhpcy5zZXRQYWdlU3RhdHVzLmJpbmQodGhpcywgMil9PuWPr+aOqOeUqOaIt+WQjeWNlTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnBhZ2VTdGF0dXMgPT0gMyA/ICdidG4gYnRuLWxnIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLWxnJ30gb25DbGljaz17dGhpcy5zZXRQYWdlU3RhdHVzLmJpbmQodGhpcywgMyl9PuaOqOaWh+aXpeW/lzwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFyZWFEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkYXRhID09IHRoaXMuc3RhdGUuY3VycmVudEFyZWEgPyAnYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCcgOiAnYnRuIGJ0bi1zbSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN3aXRjaEFyZWEuYmluZCh0aGlzLCBkYXRhKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2RhdGEuYXJlYV9uYW1lfTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlUGFnZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gRGVwYXJ0bWVudE1hbmFnZW1lbnRDdHJsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9wYWdlcy9yb3V0ZXJzL29wZXJhdGlvbi1tYW5hZ2VtZW50L2RhaWx5LXR3ZWV0cy9jb21wb25lbnRzL3R3ZWV0c19jdHJsLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzIvMS5cclxuICog5oyJ6ZKuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8q5oyJ6ZKu57uE5Lu2OyovXHJcbmNsYXNzIFJlZnJlc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gdGhpcy5oYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVmcmVzaEV2ICYmIHRoaXMucHJvcHMucmVmcmVzaEV2KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIGlkPVwicmVmcmVzaEJ0blwiIGNsYXNzTmFtZT1cInJlZnJlc2gtYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaFwiPjwvaT7liLfmlrBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmcmVzaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvY29tcG9uZW50cy9yZWZyZXNoL3JlZnJlc2guanMiLCIvKlxyXG4qIOWPr+aOqOmAgeeUqOaIt+WQjeWNlSovXHJcbmltcG9ydCBQYWdlQ3RybEJhciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhZ2UvcGFnaW5nLmpzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY2xhc3MgUmVjZWl2ZVVzZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRQYXJhbTogeyAgLy/ojrflj5bliJfooajmj5DkuqTnmoTlj4LmlbA7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogNDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG90YWxQYWdlOiAxLCAgIC8v5oC76aG15pWwO1xyXG4gICAgICAgICAgICBBcmVhRGF0YTogbnVsbCxcclxuICAgICAgICAgICAgbGlzdDogW10gICAvL+aVsOaNruWIl+ihqDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YUxpc3QgPSB0aGlzLmdldERhdGFMaXN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlID0gdGhpcy5jaGFuZ2VQYWdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmKG5leHRQcm9wcy5jdXJyZW50QXJlYSAhPSB0aGlzLnN0YXRlLkFyZWFEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgQXJlYURhdGE6IG5leHRQcm9wcy5jdXJyZW50QXJlYSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRQYXJhbTogeyAgLy/ojrflj5bliJfooajmj5DkuqTnmoTlj4LmlbA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiA0MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhTGlzdCgpIHtcclxuICAgICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIGFyZWFfaWQ6IHRoaXMucHJvcHMuY3VycmVudEFyZWEuYXJlYV9pZCxcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5zdGF0ZS5kZWZhdWx0UGFyYW0ucGFnZSxcclxuICAgICAgICAgICAgc2l6ZTogdGhpcy5zdGF0ZS5kZWZhdWx0UGFyYW0uc2l6ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV9kYWlseU5ld3NfcmVjZWl2ZVVzZXJfbGlzdChwYXJhbSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFBhZ2U6IE1hdGguY2VpbChyZXMuZGF0YS50b3RhbC9wYXJhbS5zaXplKSxcclxuICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXMuZGF0YS51c2VyX2luZm9cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXMuY29kZSA9PSAxMDEwNikge1xyXG4gICAgICAgICAgICAgICAgSC5vdmVyZHVlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIEguTW9kYWwocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lr7nlvZPliY3pobXpnaLnmoTorr7nva47XHJcbiAgICBjaGFuZ2VQYWdlKG4pIHtcclxuICAgICAgICBsZXQgcGFyYW0gPSB0aGlzLnN0YXRlLmRlZmF1bHRQYXJhbSxcclxuICAgICAgICAgICAgbmV3UGFyYW0gPSBPYmplY3QuYXNzaWduKHBhcmFtLCBuKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZWZhdWx0UGFyYW06IG5ld1BhcmFtfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55So5oi3SUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5omL5py65Y+3PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk9wZW5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lvq7kv6HlkI08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5bqX6ZO65ZCNPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuexu+WeizwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7orrDlvZXml7bpl7Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpc3QubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS51c2VyX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS51c2VyX3RlbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEud2VjaGF0X29wZW5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEud2VjaGF0X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLnNob3BfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuc2hvcF90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5pbnRlcmFjdF90aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2VDdHJsQmFyIHBhZ2VOdW09e3RoaXMuc3RhdGUuZGVmYXVsdFBhcmFtLnBhZ2V9ICBtYXhQYWdlPXt0aGlzLnN0YXRlLnRvdGFsUGFnZX0gY2xpY2tDYWxsYmFjaz17dGhpcy5jaGFuZ2VQYWdlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2VpdmVVc2VyTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvcGFnZXMvcm91dGVycy9vcGVyYXRpb24tbWFuYWdlbWVudC9kYWlseS10d2VldHMvY29tcG9uZW50cy9yZWNlaXZlX3VzZXJfbGlzdC5qc3giLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTYvMS8yOS5cclxuICog5YiG6aG15qCPXHJcbiAqIEh1IFhpYW9ZdVxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBhZ2VMaSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmdldFBhZ2UgPSB0aGlzLmdldFBhZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xpY2tFdih0aGlzLnByb3BzLm51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzdHIgPSAnJztcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNsYXNzTiA9PSAnYWN0aXZlJyl7XHJcbiAgICAgICAgICAgIHN0ciA9ICdhY3RpdmUnO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0cn0gb25DbGljaz17dGhpcy5nZXRQYWdlfSA+XHJcbiAgICAgICAgICAgICAgICA8YT57dGhpcy5wcm9wcy5udW19PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jbGFzcyBQYWdlQ3RybEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZU51bTogMSxcclxuICAgICAgICAgICAgX21heFBhZ2U6IDE4LFxyXG4gICAgICAgICAgICBudW1BcnI6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFBhZ2VEYXRhID0gdGhpcy5zZXRQYWdlRGF0YS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGFnZSA9IHRoaXMuY2FsY3VsYXRlUGFnZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVBhZ2Uobikge1xyXG4gICAgICAgIGlmKG4gPT0gdGhpcy5zdGF0ZS5wYWdlTnVtKSByZXR1cm47IC8v5aaC5p6c5piv56ys5LiA6aG15ZKM5pyA5ZCO5LiA6aG15pe25LiN5omn6KGM5Lul5LiL5pON5L2cO1xyXG4gICAgICAgIGlmKG4gPCAxKXtcclxuICAgICAgICAgICAgbj0xO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2UgaWYobiA+IHRoaXMuc3RhdGUuX21heFBhZ2Upe1xyXG4gICAgICAgICAgICBuPXRoaXMuc3RhdGUuX21heFBhZ2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgIC8vVE9ETyDov5nmoLflhpnnuq/lsZ7ml6DlpYjvvIzlkI7nu63lho3nnIvog73kuI3og73kvJjljJY7XHJcbiAgICAgICAgdGhpcy5zZXRQYWdlRGF0YShuLCB0aGlzLnN0YXRlLl9tYXhQYWdlLCAobik9PntcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrICYmIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjayh7cGFnZTogbn0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlRGF0YShuLCBtYXgsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIG1heCA9IG1heCB8fCAxO1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBpZihtYXggPj0gOSl7XHJcbiAgICAgICAgICAgIGlmKG4gPD0gNSl7XHJcbiAgICAgICAgICAgICAgICBhcnIgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG4gPiA1ICYmIG4gPCBtYXgtNCl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAobi00KTtpIDw9IChuKzQpIDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihuID49IG1heC00KXtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IG1heC04O2kgPD0gbWF4IDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAxIDsgaSA8PSBtYXggOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhZ2VOdW06IG4sXHJcbiAgICAgICAgICAgIF9tYXhQYWdlOiBtYXgsXHJcbiAgICAgICAgICAgIG51bUFycjogYXJyXHJcbiAgICAgICAgfSwgKCk9PntcclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZURhdGEodGhpcy5zdGF0ZS5wYWdlTnVtLCB0aGlzLnByb3BzLm1heFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgbGV0IHBhZ2VOdW0gPSAxO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMucGFnZU51bSl7XHJcbiAgICAgICAgICAgIHBhZ2VOdW0gPSB0aGlzLnByb3BzLnBhZ2VOdW07XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBwYWdlTnVtID0gdGhpcy5zdGF0ZS5wYWdlTnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFBhZ2VEYXRhKHBhZ2VOdW0sIG5leHRQcm9wcy5tYXhQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0RGlzYWJsZSA9ICcnO1xyXG4gICAgICAgIHZhciBsYXN0RGlzYWJsZSA9ICcnO1xyXG4gICAgICAgIHZhciBzdHIgPSBbXTtcclxuICAgICAgICB2YXIgdGhpc1BhZ2UgPSB0aGlzLnN0YXRlLnBhZ2VOdW07XHJcbiAgICAgICAgdmFyIGNsaWNrRXYgPSB0aGlzLmNhbGN1bGF0ZVBhZ2U7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5wYWdlTnVtID09IDEpe1xyXG4gICAgICAgICAgICBmaXJzdERpc2FibGUgPSAnZGlzYWJsZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0YXRlLnBhZ2VOdW0gPT0gdGhpcy5zdGF0ZS5fbWF4UGFnZSl7XHJcbiAgICAgICAgICAgIGxhc3REaXNhYmxlID0gJ2Rpc2FibGVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5udW1BcnIuZm9yRWFjaChmdW5jdGlvbihuLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXNQYWdlID09IG4pe1xyXG4gICAgICAgICAgICAgICAgc3RyLnB1c2goPFBhZ2VMaSBrZXk9e2luZGV4fSBudW09e259IGNsaWNrRXY9e2NsaWNrRXZ9IGNsYXNzTj1cImFjdGl2ZVwiIC8+KTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RyLnB1c2goPFBhZ2VMaSBrZXk9e2luZGV4fSBudW09e259IGNsaWNrRXY9e2NsaWNrRXZ9IC8+KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiID5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtmaXJzdERpc2FibGV9IG9uQ2xpY2s9e3RoaXMuY2FsY3VsYXRlUGFnZS5iaW5kKHRoaXMsIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDpppbpobVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Zmlyc3REaXNhYmxlfSBvbkNsaWNrPXt0aGlzLmNhbGN1bGF0ZVBhZ2UuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBhZ2VOdW0tMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsYXF1bzs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7c3RyfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsYXN0RGlzYWJsZX0gb25DbGljaz17dGhpcy5jYWxjdWxhdGVQYWdlLmJpbmQodGhpcywgdGhpcy5zdGF0ZS5wYWdlTnVtKzEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD1cIk5leHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xhc3REaXNhYmxlfSBvbkNsaWNrPXt0aGlzLmNhbGN1bGF0ZVBhZ2UuYmluZCh0aGlzLCB0aGlzLnN0YXRlLl9tYXhQYWdlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XCJOZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7lsL7pobU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlQ3RybEJhcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2NvbXBvbmVudHMvcGFnZS9wYWdpbmcuanMiLCIvKlxyXG4qIOaOqOaWh+aXpeW/lyovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNsYXNzIERhaWx5TmV3c0xvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBudWxsLCAgIC8v5p+l6K+i5p+Q5pyI55qE5o6o5paH5Y+R6YCB5pel5b+XO1xyXG4gICAgICAgICAgICB5ZWFyOiBILkRhdGUuZ2V0RnVsbFllYXIoKSwgIC8v5pys5bm0O1xyXG4gICAgICAgICAgICBtb250aDogSC5EYXRlLmdldE1vbnRoKCksIC8v5pys5pyIO1xyXG4gICAgICAgICAgICBkYXk6IEguRGF0ZS5nZXREYXRlKCksIC8v5b2T5aSpO1xyXG4gICAgICAgICAgICBBcmVhRGF0YTogbnVsbCwgIC8v5b2T5YmN5Zyw5Yy6O1xyXG4gICAgICAgICAgICBkYXRlQXJyOiBbXSAgLy/mnKzmnIjlr7nlupTmlbDnu4Q7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldERhdGEgPSB0aGlzLmdldERhdGEuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3dJbmZvID0gdGhpcy5zaG93SW5mby5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe0FyZWFEYXRhOiB0aGlzLnByb3BzLmN1cnJlbnRBcmVhfSwgKCkgPT57XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYobmV4dFByb3BzLmN1cnJlbnRBcmVhICE9IHRoaXMuc3RhdGUuQXJlYURhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBBcmVhRGF0YTogbmV4dFByb3BzLmN1cnJlbnRBcmVhXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIGFyZWFfaWQ6IHRoaXMuc3RhdGUuQXJlYURhdGEuYXJlYV9pZCxcclxuICAgICAgICAgICAgZGF0ZTogdGhpcy5zdGF0ZS55ZWFyICsgJy0nICsgdGhpcy5zdGF0ZS5tb250aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV9kYWlseU5ld3NfbG9nX2xpc3QocGFyYW0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzLmRhdGF9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSC5DYWxlbmRhci5pbml0KHRoaXMuc3RhdGUueWVhciArICcvJyArIHRoaXMuc3RhdGUubW9udGggKyAnLycgKyB0aGlzLnN0YXRlLmRheSArJyAwMDowMDowMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjYWxlbmRhcicpLmh0bWwoSC5DYWxlbmRhci5nZXRDYWxlbmRhcihPYmplY3Qua2V5cyhyZXMuZGF0YSkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzLmNvZGUgPT0gMTAxMDYpIHtcclxuICAgICAgICAgICAgICAgIEgub3ZlcmR1ZSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBILk1vZGFsKHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0luZm8oKSB7XHJcbiAgICAgICAgbGV0IGFyciA9ICQoJyNjYWxlbmRhciAucmVkX3RiZycpLFxyXG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIGFycikge1xyXG4gICAgICAgICAgICBhcnIuZXEoaSkuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSAkKHRoaXMpLmRhdGEoJ251bScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfdGhpcy5zdGF0ZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcudGJnX251bScpLmh0bWwoJ+mAgei+vuaVsOmHjzonICsgZGF0YVtudW1dLmRlbGl2ZXJ5X251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy50YmdfbnVtJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy50YmdfbnVtJykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy50YmdfbnVtJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuIrkuIDkuKrmnIg7XHJcbiAgICBwcmV2TW9udGgoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBILkNhbGVuZGFyLnByZXZpb3VzTW9udGgoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgeWVhcjogZGF0YS55ZWFyLFxyXG4gICAgICAgICAgICBtb250aDogZGF0YS5tb250aFxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuIvkuIDkuKrmnIg7XHJcbiAgICBuZXh0TW9udGgoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS55ZWFyID09IEguRGF0ZS5nZXRGdWxsWWVhcigpICYmIHRoaXMuc3RhdGUubW9udGggPT0gSC5EYXRlLmdldE1vbnRoKCkpIHJldHVybjtcclxuICAgICAgICBsZXQgZGF0YSA9IEguQ2FsZW5kYXIubmV4dE1vbnRoKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHllYXI6IGRhdGEueWVhcixcclxuICAgICAgICAgICAgbW9udGg6IGRhdGEubW9udGhcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYWxlbmRhclwiPjxzcGFuIGNsYXNzTmFtZT1cInByZXYtbW9udGhcIiBvbkNsaWNrPXt0aGlzLnByZXZNb250aC5iaW5kKHRoaXMpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUueWVhcn3lubR7dGhpcy5zdGF0ZS5tb250aH3mnIhcclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUueWVhciA9PSBILkRhdGUuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLnN0YXRlLm1vbnRoID09IEguRGF0ZS5nZXRNb250aCgpID8gJ25leHQtbW9udGggZGlzYWJsZWQnIDogJ25leHQtbW9udGgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhbGVuZGFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhaWx5TmV3c0xvZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvcGFnZXMvcm91dGVycy9vcGVyYXRpb24tbWFuYWdlbWVudC9kYWlseS10d2VldHMvY29tcG9uZW50cy9kYWlseV9uZXdzX2xvZy5qc3giLCIvKlxyXG4qIOaYjuaXpeaOqOaWhyovXHJcbmltcG9ydCBHb29kc0luZm8gZnJvbSAnLi9nb29kc19pbmZvLmpzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNsYXNzIFRvZGF5QXJ0aWNsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b2RheUFydGljbGVMaXN0OiBbXSwgICAvL+S7iuaXpeaOqOaWh+WIl+ihqDtcclxuICAgICAgICAgICAgdG9kYXlBcnRpY2xlVHlwZTogW10sICAgLy/mjqjmlofnsbvlnos7XHJcbiAgICAgICAgICAgIEFyZWFEYXRhOiBudWxsICAvL+W9k+WJjeWcsOWMujtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0VG9kYXlBcnRpY2xlID0gdGhpcy5nZXRUb2RheUFydGljbGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRUb2RheUFydGljbGUoKTtcclxuICAgICAgICAvL+aOqOaWh+exu+Wei+iOt+WPljtcclxuICAgICAgICBILnNlcnZlci5vdGhlcl90b2RheUFydGljbGVfdHlwZSh7fSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b2RheUFydGljbGVUeXBlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXMuY29kZSA9PSAxMDEwNikge1xyXG4gICAgICAgICAgICAgICAgSC5vdmVyZHVlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIEguTW9kYWwocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKCQoJyNteWJhc2U2NCcpLmxlbmd0aCA8PSAwKXtcclxuICAgICAgICAgICAgbGV0IHNjcmlwdFN0ciA9ICc8c2NyaXB0IGlkPVwibXliYXNlNjRcIiBzcmM9XCIvanMvbXliYXNlNjQuanNcIj48L3NjcmlwdD4nO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKHNjcmlwdFN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYobmV4dFByb3BzLmN1cnJlbnRBcmVhICE9IHRoaXMuc3RhdGUuQXJlYURhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBBcmVhRGF0YTogbmV4dFByb3BzLmN1cnJlbnRBcmVhXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9kYXlBcnRpY2xlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S7iuaXpeaOqOaWh+WIl+ihqOiOt+WPljtcclxuICAgIGdldFRvZGF5QXJ0aWNsZSgpIHtcclxuICAgICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIGFyZWFfaWQ6IHRoaXMucHJvcHMuY3VycmVudEFyZWEuYXJlYV9pZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV90b2RheUFydGljbGVfbGlzdChwYXJhbSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b2RheUFydGljbGVMaXN0OiByZXMuZGF0YX0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXMuY29kZSA9PSAxMDEwNikge1xyXG4gICAgICAgICAgICAgICAgSC5vdmVyZHVlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIEguTW9kYWwocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEguZWRpdFNhdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aUueWPmOaWh+eroOexu+WeiztcclxuICAgIGNoYW5nZUFydGljbGVUeXBlKGluZGV4LCBlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLnRvZGF5QXJ0aWNsZUxpc3QsXHJcbiAgICAgICAgICAgIHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmKGRhdGFbaV0uYXJ0aWNsZV90eXBlID09IHZhbCl7XHJcbiAgICAgICAgICAgICAgICBILk1vZGFsKCfmr4/kuIDmnaHnmoTnsbvlnovkuI3og73ph43lpI0nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhW2luZGV4XS5hcnRpY2xlX3R5cGUgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9kYXlBcnRpY2xlTGlzdDogZGF0YX0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5L+u5pS55paH56ug5qCH6aKYO1xyXG4gICAgY2hhbmdlQXJ0aWNsZVRpdGxlKGluZGV4LCBlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLnRvZGF5QXJ0aWNsZUxpc3QsXHJcbiAgICAgICAgICAgIHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGRhdGFbaW5kZXhdLmFydGljbGVfdGl0bGUgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9kYXlBcnRpY2xlTGlzdDogZGF0YX0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5o6o5paH572u6aG2O1xyXG4gICAgcGxhY2VkVG9wKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLnRvZGF5QXJ0aWNsZUxpc3Q7XHJcbiAgICAgICAgbGV0IHRoaXNJdGVtRGF0YSA9IGRhdGFbaW5kZXhdO1xyXG4gICAgICAgIGRhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBkYXRhLnVuc2hpZnQodGhpc0l0ZW1EYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b2RheUFydGljbGVMaXN0OiBkYXRhfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liKDpmaTmjqjmloc7XHJcbiAgICB0d2VldHNEZWwoYXJ0aWNsZUlkLCBpbmRleCkge1xyXG4gICAgICAgIGlmKEguZWRpdFNhdmUpIHJldHVybjtcclxuICAgICAgICBILmVkaXRTYXZlID0gdHJ1ZTtcclxuICAgICAgICBpZihhcnRpY2xlSWQgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUudG9kYXlBcnRpY2xlTGlzdDtcclxuICAgICAgICAgICAgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b2RheUFydGljbGVMaXN0OiBkYXRhfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV90b2RheUFydGljbGVfZGVsZXRlKHthcnRpY2xlX2lkOiBhcnRpY2xlSWR9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZS50b2RheUFydGljbGVMaXN0O1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9kYXlBcnRpY2xlTGlzdDogZGF0YX0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXMuY29kZSA9PSAxMDEwNikge1xyXG4gICAgICAgICAgICAgICAgSC5vdmVyZHVlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIEguTW9kYWwocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEguZWRpdFNhdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a3u+WKoOaOqOaWhztcclxuICAgIGFkZEFydGljbGUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLnRvZGF5QXJ0aWNsZUxpc3QsXHJcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLnN0YXRlLnRvZGF5QXJ0aWNsZVR5cGU7XHJcbiAgICAgICAgaWYoZGF0YS5sZW5ndGggPT0gdHlwZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgSC5Nb2RhbCgn5pyA5aSaJyt0aGlzLnN0YXRlLnRvZGF5QXJ0aWNsZVR5cGUubGVuZ3RoKyfmnaHvvIzmr4/kuIDmnaHnmoTnsbvlnovkuI3og73ph43lpI0nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld0FydGljbGUgPSB7XHJcbiAgICAgICAgICAgICAgICAnYXJlYV9pZCc6IHRoaXMucHJvcHMuY3VycmVudEFyZWEuYXJlYV9pZCxcclxuICAgICAgICAgICAgICAgICdhcnRpY2xlX2lkJzogMCxcclxuICAgICAgICAgICAgICAgICdhcnRpY2xlX3R5cGUnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ2FydGljbGVfdGl0bGUnOiAnJyxcclxuICAgICAgICAgICAgICAgICdhcnRpY2xlX2ltYWdlJzogJ1B1YmxpYy9VcGxvYWRzL29hLWFydGljbGUvZGVmYXVsdC1hcnRpY2xlLnBuZydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkYXRhLnB1c2gobmV3QXJ0aWNsZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9kYXlBcnRpY2xlTGlzdDogZGF0YX0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5L+d5a2Y5o6o5paHO1xyXG4gICAgc2F2ZUFydGljbGUoKSB7XHJcbiAgICAgICAgaWYoSC5lZGl0U2F2ZSkgcmV0dXJuO1xyXG4gICAgICAgIEguZWRpdFNhdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS50b2RheUFydGljbGVMaXN0KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV90b2RheUFydGljbGVfZWRpdChwYXJhbSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBILk1vZGFsKCfkv53lrZjmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9kYXlBcnRpY2xlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5jb2RlID09IDEwMTA2KSB7XHJcbiAgICAgICAgICAgICAgICBILm92ZXJkdWUoKTtcclxuICAgICAgICAgICAgICAgIEguZWRpdFNhdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgSC5Nb2RhbChyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBILmVkaXRTYXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+S4iuS8oOaWh+S7tueahGlucHV0PVt0eXBlPWZpbGVdIGNoYW5nZeS6i+S7tjtcclxuICAgIGZpbGVDaGFuZ2UoaW5kZXgsIGUpIHtcclxuICAgICAgICB2YXIgdXJsID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgdmFyIGV4dGVudGlvbiA9IHVybC5uYW1lLnN1YnN0cmluZyh1cmwubmFtZS5sYXN0SW5kZXhPZignLicpKzEpLnRvTG93ZXJDYXNlKCk7ICAgIC8vIOiOt+WPlumAieS4reeFp+eJh+WQjue8gFxyXG4gICAgICAgIHZhciBhbGxvd0V4dGVudGlvbiA9ICcuanBnLC5ibXAsLmdpZiwucG5nLC5qcGUnO1xyXG4gICAgICAgIHZhciBrZXkgPSAnUHVibGljL1VwbG9hZHMvb2EtYXJ0aWNsZS8nKyAobmV3IERhdGUpLmdldFRpbWUoKSArJycrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKSsnLicrIGV4dGVudGlvbjsgLy9maWxlLm5hbWUgKyAobmV3IERhdGUpLmdldFRpbWUoKSArICctJztcclxuICAgICAgICBpZihhbGxvd0V4dGVudGlvbi5pbmRleE9mKGV4dGVudGlvbikgPT0gLTEpIHtcclxuICAgICAgICAgICAgSC5Nb2RhbCgn5LuF5pSv5oyBJythbGxvd0V4dGVudGlvbisn5Li65ZCO57yA5ZCN55qE5paH5Lu2IScpO1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgUE9MSUNZX0pTT04gPSB7XHJcbiAgICAgICAgICAgICdleHBpcmF0aW9uJzogJzIxMjAtMTItMDFUMTI6MDA6MDAuMDAwWicsXHJcbiAgICAgICAgICAgICdjb25kaXRpb25zJzogW1xyXG4gICAgICAgICAgICAgICAgWydzdGFydHMtd2l0aCcsIGtleSwgJyddLFxyXG4gICAgICAgICAgICAgICAgeydidWNrZXQnOiAnaWRvbmdwaW4nfSxcclxuICAgICAgICAgICAgICAgIFsnc3RhcnRzLXdpdGgnLCB1cmwudHlwZSwgJyddLFxyXG4gICAgICAgICAgICAgICAgWydjb250ZW50LWxlbmd0aC1yYW5nZScsIDAsIDEwNDg1NzYwMF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHBvbGljeUJhc2U2NCA9IEJhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkoUE9MSUNZX0pTT04pKTtcclxuXHJcbiAgICAgICAgSC5zZXJ2ZXIub3RoZXJfb3NzX3NpZ25hdHVyZSh7c2lnbmF0dXJlX2RhdGE6IHBvbGljeUJhc2U2NH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpZ25hdHVyZSA9IHJlcy5kYXRhLnNpZ25hdHVyZTtcclxuICAgICAgICAgICAgICAgIEguc2VydmVyLm90aGVyX29zc19pZGVudGl0eV9kYXRhKHt9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWNjZXNzX2lkID0gcmVzLmRhdGEuYWNjZXNzX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hbGVydChmaWxlLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2tleScsIGtleSk7ICAvL+S4iuS8oOWIsOeahOi3r+W+hOS/oeaBrztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdDb250ZW50LVR5cGUnLCB1cmwudHlwZSk7ICAvL+aWh+S7tuexu+WeiztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdDb250ZW50LUxlbmd0aCcsIE1hdGgucm91bmQodXJsLnNpemUgKiAxMDAgLyAxMDI0KSAvIDEwMCk7ICAvL+aWh+S7tuWkp+Wwj0tCO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ0NvbnRlbnQtRW5jb2RpbmcnLCAnY29tcHJlc3MnKTsgIC8v5Y6L57yp5pa55byP77yM6L+Z6YeM5Li65peg5Y6L57ypO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ09TU0FjY2Vzc0tleUlkJywgYWNjZXNzX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKCdwb2xpY3knLCBwb2xpY3lCYXNlNjQpOyAgLy/lj4LkuI7nrb7lkI3nmoTlpLTkv6Hmga87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgnc2lnbmF0dXJlJywgc2lnbmF0dXJlKTsgIC8v562+5ZCNO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ2ZpbGUnLCB1cmwpOyAgLy/pnIDkuIrkvKDnmoTmlofku7blr7nlg487XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5LiK5Lyg55m+5YiG5q+U55qE6K6h566X77yM55uu5YmN5rKh5pyJ55So77yM5Zug5Li6T1NT5rKh5pyJ6L+U5Zue5LiK5Lyg6L+H56iL55qE5pWw5o2uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3hoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHVwbG9hZFByb2dyZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a6M5oiQ5ZCO55qE6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLnRvZGF5QXJ0aWNsZUxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XS5hcnRpY2xlX2ltYWdlID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9kYXlBcnRpY2xlTGlzdDogZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6K+35rGCZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBILk1vZGFsKCfkuIrkvKDlh7rnjrDplJnor6/vvIzmgqjlj6/ku6Xph43mlrDngrnlh7vkuIrkvKAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+ivt+axguS4reaWrVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEguTW9kYWwoJ+S4iuS8oOS4reaWre+8jOivt+ajgOafpee9kee7nOWQjumHjeaWsOS4iuS8oCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y+R6YCB6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgJ2h0dHA6Ly9vc3MtY24tcWluZ2Rhby5hbGl5dW5jcy5jb20vaWRvbmdwaW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoZmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5jb2RlID09IDEwMTA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEgub3ZlcmR1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSC5Nb2RhbChyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5jb2RlID09IDEwMTA2KSB7XHJcbiAgICAgICAgICAgICAgICBILm92ZXJkdWUoKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgSC5Nb2RhbChyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdlZXRzLWVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidHdlZXRzLWVkaXQtdGl0bGVcIj7mjqjmlofnvJbovpHljLo8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdlZXRzLWVkaXQtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3ZWV0cy1lZGl0LXVsLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0d2VldHMtZWRpdC11bFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9kYXlBcnRpY2xlTGlzdC5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC10d2VldHMtaW1nLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpcnN0LXR3ZWV0cy1pbWdcIiBzcmM9eydodHRwOi8vaW1nLmlkb25ncGluLmNvbS8nICsgZGF0YS5hcnRpY2xlX2ltYWdlfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxNjJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ1cC1pbWdcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLmZpbGVDaGFuZ2UuYmluZCh0aGlzLCBpbmRleCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1pbnB1dC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZmlyc3QtaW5wdXRcIiB2YWx1ZT17ZGF0YS5hcnRpY2xlX3RpdGxlfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VBcnRpY2xlVGl0bGUuYmluZCh0aGlzLCBpbmRleCl9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2RhdGEuYXJ0aWNsZV90eXBlfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VBcnRpY2xlVHlwZS5iaW5kKHRoaXMsIGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PScwJyB2YWx1ZT0nMCc+6K+36YCJ5oupPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9kYXlBcnRpY2xlVHlwZS5tYXAoKHZhbCwgaW5kZXgxKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8b3B0aW9uIGtleT17ZGF0YS5hcnRpY2xlX2lkICsgJ18nICsgaW5kZXgxfSB2YWx1ZT17dmFsLmlkfT57dmFsLm5hbWV9PC9vcHRpb24+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidHdlZXRzLWRlbCBnbHlwaGljb24gZ2x5cGhpY29uLW1pbnVzXCIgb25DbGljaz17dGhpcy50d2VldHNEZWwuYmluZCh0aGlzLCBkYXRhLmFydGljbGVfaWQsIGluZGV4KX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VldHMtaW5wdXQtdHJhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0d2VldHMtaW5wdXRcIiByb3dzPVwiMlwiIHZhbHVlPXtkYXRhLmFydGljbGVfdGl0bGV9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUFydGljbGVUaXRsZS5iaW5kKHRoaXMsIGluZGV4KX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VldHMtaW1nLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInR3ZWV0cy1pbWdcIiBzcmM9eydodHRwOi8vaW1nLmlkb25ncGluLmNvbS8nICsgZGF0YS5hcnRpY2xlX2ltYWdlfSB3aWR0aD1cIjU1cHhcIiBoZWlnaHQ9XCI1NXB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidXAtaW1nXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5maWxlQ2hhbmdlLmJpbmQodGhpcywgaW5kZXgpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS10eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZGF0YS5hcnRpY2xlX3R5cGV9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUFydGljbGVUeXBlLmJpbmQodGhpcywgaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9JzAnIHZhbHVlPScwJz7or7fpgInmi6k8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b2RheUFydGljbGVUeXBlLm1hcCgodmFsLCBpbmRleDEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxvcHRpb24ga2V5PXtkYXRhLmFydGljbGVfaWQgKyAnXycgKyBpbmRleDF9IHZhbHVlPXt2YWwuaWR9Pnt2YWwubmFtZX08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwbGFjZWQtdG9wIGdseXBoaWNvbiBnbHlwaGljb24tY2lyY2xlLWFycm93LXVwXCIgb25DbGljaz17dGhpcy5wbGFjZWRUb3AuYmluZCh0aGlzLCBpbmRleCl9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInR3ZWV0cy1kZWwgZ2x5cGhpY29uIGdseXBoaWNvbi1taW51c1wiIG9uQ2xpY2s9e3RoaXMudHdlZXRzRGVsLmJpbmQodGhpcywgZGF0YS5hcnRpY2xlX2lkLCBpbmRleCl9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT1cInR3ZWV0cy1zYXZlLWJ0blwiIG9uQ2xpY2s9e3RoaXMuc2F2ZUFydGljbGUuYmluZCh0aGlzKX0+5L+d5a2YPC9idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwidHdlZXRzLWFkZC1idG5cIiBvbkNsaWNrPXt0aGlzLmFkZEFydGljbGUuYmluZCh0aGlzKX0+5re75YqgPC9idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFpbHktdHdlZXRzLWdvb2RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInR3ZWV0cy1lZGl0LXRpdGxlXCI+5ZWG5ZOB5pON5L2c5Yy6PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9kYXlBcnRpY2xlVHlwZS5sZW5ndGggPiAwID8gPEdvb2RzSW5mbyB0b2RheUFydGljbGVUeXBlPXt0aGlzLnN0YXRlLnRvZGF5QXJ0aWNsZVR5cGV9IEFyZWFEYXRhPXt0aGlzLnByb3BzLmN1cnJlbnRBcmVhfSAvPiA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZGF5QXJ0aWNsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvcGFnZXMvcm91dGVycy9vcGVyYXRpb24tbWFuYWdlbWVudC9kYWlseS10d2VldHMvY29tcG9uZW50cy90b2RheV9hcnRpY2xlLmpzeCIsImltcG9ydCBQYWdlQ3RybEJhciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhZ2UvcGFnaW5nLmpzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY2xhc3MgR29vZHNJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IFtdLCAgIC8v55So5oi35YiX6KGo5pWw5o2uO1xyXG4gICAgICAgICAgICB0b3RhbFBhZ2U6IDEsICAgLy/mgLvpobXmlbA7XHJcbiAgICAgICAgICAgIGRlZmF1bHRQYXJhbTogeyAgLy/ojrflj5bliJfooajmj5DkuqTnmoTlj4LmlbA7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMzBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXJ0aWNsZVR5cGU6IG51bGwsICAvL+W9k+WJjeaOqOaWh+exu+WeiztcclxuICAgICAgICAgICAgcHJpdmlsZWdlOiBudWxsLCAgLy/lvZPliY3nlKjmiLfnmoTmiYDmnInmnYPpmZA7XHJcbiAgICAgICAgICAgIHByaWNlQ2hhbmdlOiAncmlzZScsICAvL+S7t+agvOWPmOWMliDmtqg9J3Jpc2UnIOi3jD0nZGVjbGluZScg5rao6LeM5qac5p+l6K+i5b+F6aG7O1xyXG4gICAgICAgICAgICBBcmVhRGF0YTogbnVsbCAgIC8v5b2T5YmN5Zyw5Yy6O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXREYXRhTGlzdCA9IHRoaXMuZ2V0RGF0YUxpc3QuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UgPSB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthcnRpY2xlVHlwZTogdGhpcy5wcm9wcy50b2RheUFydGljbGVUeXBlWzBdfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8v5b2T5YmN55So5oi355qE5omA5pyJ5p2D6ZmQ6I635Y+WO1xyXG4gICAgICAgIGxldCB0YWJEYXRhID0gdGhpcy5wcm9wcy5jdXJyZW50VGFiRGF0YSxcclxuICAgICAgICAgICAgdXNlck5hdmlnYXRlID0gdGhpcy5wcm9wcy51c2VyTmF2aWdhdGU7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy51c2VyTmF2aWdhdGUgJiYgdGhpcy5wcm9wcy51c2VyTmF2aWdhdGUgIT0gJycpIHtcclxuICAgICAgICAgICAgaWYodXNlck5hdmlnYXRlW3RhYkRhdGEucGFyZW50SWRdICYmIHVzZXJOYXZpZ2F0ZVt0YWJEYXRhLnBhcmVudElkXVt0YWJEYXRhLmlkXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcml2aWxlZ2U6IHRoaXMucHJvcHMudXNlck5hdmlnYXRlW3RhYkRhdGEucGFyZW50SWRdW3RhYkRhdGEuaWRdfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZihuZXh0UHJvcHMuQXJlYURhdGEgIT0gdGhpcy5zdGF0ZS5BcmVhRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIEFyZWFEYXRhOiBuZXh0UHJvcHMuQXJlYURhdGEsXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlVHlwZTogdGhpcy5wcm9wcy50b2RheUFydGljbGVUeXBlWzBdXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5pWw5o2u5YiX6KGoO1xyXG4gICAgZ2V0RGF0YUxpc3QoKSB7XHJcbiAgICAgICAgbGV0IHNlcnZlciA9IEguc2VydmVyLFxyXG4gICAgICAgICAgICBwYXJhbSA9IHtcclxuICAgICAgICAgICAgICAgIGFyZWFfaWQ6IHRoaXMucHJvcHMuQXJlYURhdGEuYXJlYV9pZCxcclxuICAgICAgICAgICAgICAgIGFydGljbGVfdHlwZV9pZDogdGhpcy5zdGF0ZS5hcnRpY2xlVHlwZS5pZCxcclxuICAgICAgICAgICAgICAgIHByaWNlX2NoYW5nZTogdGhpcy5zdGF0ZS5wcmljZUNoYW5nZSwgIC8v5Lu35qC85Y+Y5YyWIOa2qD0ncmlzZScg6LeMPSdkZWNsaW5lJyDmtqjot4zmppzmn6Xor6Llv4XpobtcclxuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMuc3RhdGUuZGVmYXVsdFBhcmFtLnBhZ2UsXHJcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLnN0YXRlLmRlZmF1bHRQYXJhbS5zaXplXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgc2VydmVyLm9wZXJhdGVfZGFpbHlOZXdzX2dvb2RzX2xpc3QocGFyYW0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEuZ29vZHNfaW5mbyxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFBhZ2U6IE1hdGguY2VpbChyZXMuZGF0YS50b3RhbC9wYXJhbS5zaXplKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5jb2RlID09IDEwMTA2KSB7XHJcbiAgICAgICAgICAgICAgICBILm92ZXJkdWUoKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgSC5Nb2RhbChyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WvueW9k+WJjemhtemdoueahOiuvue9rjtcclxuICAgIGNoYW5nZVBhZ2Uobikge1xyXG4gICAgICAgIGxldCBwYXJhbSA9IHRoaXMuc3RhdGUuZGVmYXVsdFBhcmFtLFxyXG4gICAgICAgICAgICBuZXdQYXJhbSA9IE9iamVjdC5hc3NpZ24ocGFyYW0sIG4pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlZmF1bHRQYXJhbTogbmV3UGFyYW19LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUxpc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIpOaWreaYr+WQpuaciei/meS4quWKn+iDvTtcclxuICAgIGlzSGF2ZVByaXZpbGVnZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IHByaXZpbGVnZSA9IHRoaXMuc3RhdGUucHJpdmlsZWdlO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gcHJpdmlsZWdlKSB7XHJcbiAgICAgICAgICAgIGlmKHByaXZpbGVnZVtpXS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIh+aNouaOqOaWh+exu+Wei+afpeivouWvueW6lOWIl+ihqDtcclxuICAgIGNoYW5nZUFydGljbGVUeXBlKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYXJ0aWNsZVR5cGU6IGRhdGEsXHJcbiAgICAgICAgICAgIGRlZmF1bHRQYXJhbToge1xyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIHNpemU6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUxpc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WVhuWTgeWIl+ihqOS4reS/ruaUuea2qOS7t+mZjeS7tztcclxuICAgIHJpc2VBbmRGYWxsKHN0cikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ByaWNlQ2hhbmdlOiBzdHJ9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUxpc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aOqOaWh+WVhuWTgeWxj+iUveaTjeS9nDtcclxuICAgIHNoaWVsZGluZyhpZCwgZ29vZHNJZCwgc3RhdHVzKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIGdvb2RzX2lkOiBnb29kc0lkLFxyXG4gICAgICAgICAgICBhcnRpY2xlX3R5cGVfaWQ6IHRoaXMuc3RhdGUuYXJ0aWNsZVR5cGUuaWQsXHJcbiAgICAgICAgICAgIHByaWNlX2NoYW5nZTogdGhpcy5zdGF0ZS5wcmljZUNoYW5nZSxcclxuICAgICAgICAgICAgc2hpZWxkX3N0YXR1czogc3RhdHVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV9kYWlseU5ld3NfZ29vZHNfc2hpZWxkKHBhcmFtLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIEguTW9kYWwoJ+aTjeS9nOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXMuY29kZSA9PSAxMDEwNikge1xyXG4gICAgICAgICAgICAgICAgSC5vdmVyZHVlKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIEguTW9kYWwocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mt7vliqDmjqjojZDllYblk4E7XHJcbiAgICBhZGRSZWNvbW1lbmRlZCgpIHtcclxuICAgICAgICBsZXQgTSA9IEguTW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aWsOWinuaOqOiNkCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICc8cD7llYblk4FJRO+8mjxpbnB1dCBpZD1cInJlY29tbWVuZGVkR2lkXCIgdHlwZT1cInRleHRcIj48L3A+JyxcclxuICAgICAgICAgICAgY2FuY2VsOiB0cnVlLFxyXG4gICAgICAgICAgICBva1RleHQ6ICfkv53lrZgnLFxyXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJyxcclxuICAgICAgICAgICAgb2tDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtID0ge2dvb2RzX2lkOiAkKCcjcmVjb21tZW5kZWRHaWQnKS52YWwoKX07XHJcbiAgICAgICAgICAgICAgICBpZihwYXJhbS5nb29kc19pZCA9PSAnJyB8fCAhcGFyYW0uZ29vZHNfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjcmVjb21tZW5kZWRHaWQnKVswXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV9kYWlseU5ld3NfZ29vZHNfcmVjb21tZW5kKHBhcmFtLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBILk1vZGFsKCfmiJDlip/mt7vliqAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5jb2RlID09IDEwMTA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEgub3ZlcmR1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSC5Nb2RhbChyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBNLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5riF56m65o6o6I2Q5YiX6KGoO1xyXG4gICAgY2xlYW5SZWNvbW1lbmRlZCgpIHtcclxuICAgICAgICBILk1vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmuIXnqbrmjqjojZAnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnPHA+56Gu6K6k5YWo6YOo5riF56m65ZCX77yfPC9wPicsXHJcbiAgICAgICAgICAgIGNhbmNlbDogdHJ1ZSxcclxuICAgICAgICAgICAgb2tUZXh0OiAn56Gu6K6kJyxcclxuICAgICAgICAgICAgb2tDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV9kYWlseU5ld3NfcmVjb21tZW5kX2dvb2RzX3JlbW92ZUFsbCh7fSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSC5Nb2RhbCgn5oiQ5Yqf5riF6ZmkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhcmFtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5jb2RlID09IDEwMTA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEgub3ZlcmR1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSC5Nb2RhbChyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/np7vlh7rmjqjojZDllYblk4E7XHJcbiAgICByZW1vdmVSZWNvbW1lbmRlZChpZCwgZ2lkKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIEguTW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+enu+mZpOaOqOiNkOWVhuWTgScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzIyOScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICc8cD7lvZPliY3mjqjojZBJRO+8micraWQrJzwvcD48cD7llYblk4FJRO+8micrZ2lkKyc8L3A+PHA+56e75Ye65ZCO77yM6ZqP5pe25Y+v5Lul6YeN5paw5o6o6I2QPC9wPicsXHJcbiAgICAgICAgICAgIG9rOiB0cnVlLFxyXG4gICAgICAgICAgICBva1RleHQ6ICfnoa7orqQnLFxyXG4gICAgICAgICAgICBva0NhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBILnNlcnZlci5vcGVyYXRlX2RhaWx5TmV3c19yZWNvbW1lbmRfZ29vZHNfcmVtb3ZlKHBhcmFtLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBILk1vZGFsKCfmiJDlip/np7vlh7onKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5jb2RlID09IDEwMTA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEgub3ZlcmR1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSC5Nb2RhbChyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aOqOiNkOWVhuWTgeaOkuW6j1xyXG4gICAgc29ydGluZ1JlY29tbWVuZGVkKGlkLCBnaWQpIHtcclxuICAgICAgICBsZXQgTSA9IEguTW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aOkuW6jycsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzI4NScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICc8cD7lvZPliY3mjqjojZBJRO+8micraWQrJzwvcD48cD7llYblk4FJRO+8micrZ2lkKyc8L3A+PHA+5o6o6I2QSUTvvJo8aW5wdXQgaWQ9XCJuZXh0SWRcIiB0eXBlPVwidGV4dFwiPjwvcD48cCBzdHlsZT1cImNvbG9yOiM4ODg4ODg7XCI+5o6S5Zyo6LCB5LiK6Z2i5bCx5aGr6LCB55qE5o6o6I2QSUTvvIzkuI3og73lkozlvZPliY3mjqjojZBJROebuOWQjDwvcD4nLFxyXG4gICAgICAgICAgICBjYW5jZWw6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG9rVGV4dDogJ+S/neWtmCcsXHJcbiAgICAgICAgICAgIG9rQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2lkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0X2lkOiAkKCcjbmV4dElkJykudmFsKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZihwYXJhbS5uZXh0X2lkID09ICcnIHx8ICFwYXJhbS5uZXh0X2lkIHx8IHBhcmFtLmN1cnJlbnRfaWQgPT0gcGFyYW0ubmV4dF9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNuZXh0SWQnKVswXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgSC5zZXJ2ZXIub3BlcmF0ZV9kYWlseU5ld3NfcmVjb21tZW5kX2dvb2RzX3NvcnQocGFyYW0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEguTW9kYWwoJ+aIkOWKn+aOkuW6jycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzLmNvZGUgPT0gMTAxMDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSC5vdmVyZHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBILk1vZGFsKHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIE0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB0SGVhZCA9IChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPuW6j+WPtzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+5ZWG5ZOBSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPuWTgeWQjTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+5pio5pel6ZSA6YePPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD7lvZPliY3ku7fmoLw8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPuS+m+W6lOWVhjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYXJ0aWNsZVR5cGUpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5hcnRpY2xlVHlwZS5pZCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0SGVhZCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7luo/lj7c8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5ZWG5ZOBSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5ZOB5ZCNPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaYqOaXpemUgOmHjzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lvZPliY3ku7fmoLw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pio5pel5Lu35qC8PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS+m+W6lOWVhjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLmFydGljbGVUeXBlLmlkID09IDYpIHtcclxuICAgICAgICAgICAgICAgIHRIZWFkID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW6j+WPtzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mjqjojZBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7llYblk4FJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lk4HlkI08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pio5pel6ZSA6YePPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS7t+agvDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7kvpvlupTllYY8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24td2FycFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWZpbHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9kYXlBcnRpY2xlVHlwZS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4ga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZGF0YSA9PSB0aGlzLnN0YXRlLmFydGljbGVUeXBlID8gJ2J0biBidG4tc20gYnRuLWRlZmF1bHQnIDogJ2J0biBidG4tc20nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VBcnRpY2xlVHlwZS5iaW5kKHRoaXMsIGRhdGEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57ZGF0YS5uYW1lfTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZVR5cGUgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlVHlwZS5pZCA9PSA0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnByaWNlQ2hhbmdlID09ICdyaXNlJyA/ICdidG4gYnRuLXNtIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLXNtJ30gb25DbGljaz17dGhpcy5yaXNlQW5kRmFsbC5iaW5kKHRoaXMsICdyaXNlJyl9Pua2qOS7tzwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMuc3RhdGUucHJpY2VDaGFuZ2UgPT0gJ2RlY2xpbmUnID8gJ2J0biBidG4tc20gYnRuLWRlZmF1bHQnIDogJ2J0biBidG4tc20nfSBvbkNsaWNrPXt0aGlzLnJpc2VBbmRGYWxsLmJpbmQodGhpcywgJ2RlY2xpbmUnKX0+6ZmN5Lu3PC9idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcnRpY2xlVHlwZSAmJiB0aGlzLnN0YXRlLmFydGljbGVUeXBlLmlkID09IDYgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9J2J0biBidG4tc20nIG9uQ2xpY2s9e3RoaXMuY2xlYW5SZWNvbW1lbmRlZC5iaW5kKHRoaXMpfT7muIXnqbo8L2J0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPSdidG4gYnRuLWxnJyBvbkNsaWNrPXt0aGlzLmFkZFJlY29tbWVuZGVkLmJpbmQodGhpcyl9PuaWsOWinuaOqOiNkDwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXIgdGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0SGVhZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuYXJ0aWNsZVR5cGUgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlVHlwZS5pZCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5nb29kc19pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZ29vZHNfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEueWVzdGVyZGF5X3NhbGVzX251bX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZ29vZHNfcHJpY2V9L+S7tjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS55ZXN0ZXJkYXlfcHJpY2V9L+S7tjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5zZWxsX3Nob3BfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zaGllbGRfc3RhdHVzID09IDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2hpZWxkaW5nLmJpbmQodGhpcywgZGF0YS5pZCwgZGF0YS5nb29kc19pZCwgMil9PuacrOasoeWxj+iUvTwvYT4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2hpZWxkaW5nLmJpbmQodGhpcywgZGF0YS5pZCwgZGF0YS5nb29kc19pZCwgMSl9PuWPlua2iOWxj+iUvTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuYXJ0aWNsZVR5cGUgJiYgdGhpcy5zdGF0ZS5hcnRpY2xlVHlwZS5pZCA9PSA2KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyh0aGlzLnN0YXRlLmRlZmF1bHRQYXJhbS5wYWdlLTEpICogdGhpcy5zdGF0ZS5kZWZhdWx0UGFyYW0uc2l6ZSArIChpbmRleCArIDEpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZ29vZHNfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmdvb2RzX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLnllc3RlcmRheV9zYWxlc19udW19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmdvb2RzX3ByaWNlfS/ku7Y8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuc2VsbF9zaG9wX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5yZW1vdmVSZWNvbW1lbmRlZC5iaW5kKHRoaXMsIGRhdGEuaWQsIGRhdGEuZ29vZHNfaWQpfT7np7vlh7o8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNvcnRpbmdSZWNvbW1lbmRlZC5iaW5kKHRoaXMsIGRhdGEuaWQsIGRhdGEuZ29vZHNfaWQpfT7mjpLluo88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmdvb2RzX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5nb29kc19uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS55ZXN0ZXJkYXlfc2FsZXNfbnVtfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5nb29kc19wcmljZX0v5Lu2PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLnNlbGxfc2hvcF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnNoaWVsZF9zdGF0dXMgPT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zaGllbGRpbmcuYmluZCh0aGlzLCBkYXRhLmlkLCBkYXRhLmdvb2RzX2lkLCAyKX0+5pys5qyh5bGP6JS9PC9hPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zaGllbGRpbmcuYmluZCh0aGlzLCBkYXRhLmlkLCBkYXRhLmdvb2RzX2lkLCAxKX0+5Y+W5raI5bGP6JS9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZUN0cmxCYXIgcGFnZU51bT17dGhpcy5zdGF0ZS5kZWZhdWx0UGFyYW0ucGFnZX0gIG1heFBhZ2U9e3RoaXMuc3RhdGUudG90YWxQYWdlfSBjbGlja0NhbGxiYWNrPXt0aGlzLmNoYW5nZVBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29kc0luZm87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3BhZ2VzL3JvdXRlcnMvb3BlcmF0aW9uLW1hbmFnZW1lbnQvZGFpbHktdHdlZXRzL2NvbXBvbmVudHMvZ29vZHNfaW5mby5qc3giXSwic291cmNlUm9vdCI6IiJ9