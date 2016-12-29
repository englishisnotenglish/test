webpackJsonp([3,4],{

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

	        var _this = _possibleConstructorReturn(this, (PageLi.__proto__ || Object.getPrototypeOf(PageLi)).call(this, props));

	        _this.getPage = _this.getPage.bind(_this);
	        return _this;
	    }

	    _createClass(PageLi, [{
	        key: 'getPage',
	        value: function getPage() {
	            this.props.clickEv(this.props.num);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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
	        }
	    }]);

	    return PageLi;
	}(_react2.default.Component);

	var PageCtrlBar = function (_React$Component2) {
	    _inherits(PageCtrlBar, _React$Component2);

	    function PageCtrlBar(props) {
	        _classCallCheck(this, PageCtrlBar);

	        var _this2 = _possibleConstructorReturn(this, (PageCtrlBar.__proto__ || Object.getPrototypeOf(PageCtrlBar)).call(this, props));

	        _this2.state = {
	            pageNum: 1,
	            _maxPage: 18,
	            numArr: []
	        };
	        _this2.setPageData = _this2.setPageData.bind(_this2);
	        _this2.calculatePage = _this2.calculatePage.bind(_this2);
	        return _this2;
	    }

	    _createClass(PageCtrlBar, [{
	        key: 'calculatePage',
	        value: function calculatePage(n) {
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
	        }
	    }, {
	        key: 'setPageData',
	        value: function setPageData(n, max, callback) {
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
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.setPageData(this.state.pageNum, this.props.maxPage);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var pageNum = 1;
	            if (this.props.pageNum) {
	                pageNum = this.props.pageNum;
	            } else {
	                pageNum = this.state.pageNum;
	            }
	            this.setPageData(pageNum, nextProps.maxPage);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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
	        }
	    }]);

	    return PageCtrlBar;
	}(_react2.default.Component);

	exports.default = PageCtrlBar;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _refresh = __webpack_require__(244);

	var _refresh2 = _interopRequireDefault(_refresh);

	var _receive_user_list = __webpack_require__(245);

	var _receive_user_list2 = _interopRequireDefault(_receive_user_list);

	var _daily_news_log = __webpack_require__(246);

	var _daily_news_log2 = _interopRequireDefault(_daily_news_log);

	var _today_article = __webpack_require__(247);

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

	        var _this = _possibleConstructorReturn(this, (DepartmentManagementCtrl.__proto__ || Object.getPrototypeOf(DepartmentManagementCtrl)).call(this, props));

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

	    _createClass(DepartmentManagementCtrl, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
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
	        }

	        //隐藏附体部分;

	    }, {
	        key: 'hideInfoPanel',
	        value: function hideInfoPanel() {
	            this.setState({
	                infoPanel: { infoPanelIsShow: false, infoPanelTitle: '' }
	            });
	        }

	        //对当前页面的设置;

	    }, {
	        key: 'changePage',
	        value: function changePage(n) {
	            var _this3 = this;

	            var param = this.state.defaultParam,
	                newParam = Object.assign(param, n);
	            this.setState({ defaultParam: newParam }, function () {
	                _this3.getDataList();
	            });
	        }

	        //刷新;

	    }, {
	        key: 'refresh',
	        value: function refresh() {
	            this.setPageStatus(1);
	        }

	        //判断是否有这个功能;

	    }, {
	        key: 'isHavePrivilege',
	        value: function isHavePrivilege(name) {
	            var privilege = this.state.privilege;
	            for (var i in privilege) {
	                if (privilege[i].name == name) {
	                    return true;
	                }
	            }
	            return false;
	        }

	        //设置页面类型,如明日推文，可推用户名单，推文日志;

	    }, {
	        key: 'setPageStatus',
	        value: function setPageStatus(status) {
	            this.setState({
	                pageStatus: status,
	                currentArea: this.state.areaData[0]
	            });
	        }

	        //判断应该显示哪个页面;

	    }, {
	        key: 'createPage',
	        value: function createPage() {
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
	        }

	        //切换地区;

	    }, {
	        key: 'switchArea',
	        value: function switchArea(areaData) {
	            this.setState({ currentArea: areaData });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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
	        }
	    }]);

	    return DepartmentManagementCtrl;
	}(_react2.default.Component);

	module.exports = DepartmentManagementCtrl;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

	        var _this = _possibleConstructorReturn(this, (Refresh.__proto__ || Object.getPrototypeOf(Refresh)).call(this, props));

	        _this.handler = _this.handler.bind(_this);
	        return _this;
	    }

	    _createClass(Refresh, [{
	        key: "handler",
	        value: function handler(e) {
	            e.preventDefault();
	            this.props.refreshEv && this.props.refreshEv();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "a",
	                { id: "refreshBtn", className: "refresh-btn", onClick: this.handler },
	                _react2.default.createElement("i", { className: "glyphicon glyphicon-refresh" }),
	                "\u5237\u65B0"
	            );
	        }
	    }]);

	    return Refresh;
	}(_react2.default.Component);

	exports.default = Refresh;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _paging = __webpack_require__(239);

	var _paging2 = _interopRequireDefault(_paging);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 可推送用户名单*/


	var ReceiveUserList = function (_React$Component) {
	    _inherits(ReceiveUserList, _React$Component);

	    function ReceiveUserList(props) {
	        _classCallCheck(this, ReceiveUserList);

	        var _this = _possibleConstructorReturn(this, (ReceiveUserList.__proto__ || Object.getPrototypeOf(ReceiveUserList)).call(this, props));

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

	    _createClass(ReceiveUserList, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.getDataList();
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
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
	        }
	    }, {
	        key: "getDataList",
	        value: function getDataList() {
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
	        }

	        //对当前页面的设置;

	    }, {
	        key: "changePage",
	        value: function changePage(n) {
	            var _this4 = this;

	            var param = this.state.defaultParam,
	                newParam = Object.assign(param, n);
	            this.setState({ defaultParam: newParam }, function () {
	                _this4.getDataList();
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "section-table" },
	                React.createElement(
	                    "table",
	                    { className: "table table-bordered table-hover table-responsive" },
	                    React.createElement(
	                        "thead",
	                        null,
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "th",
	                                null,
	                                "\u7528\u6237ID"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "\u624B\u673A\u53F7"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "OpenID"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "\u5FAE\u4FE1\u540D"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "\u5E97\u94FA\u540D"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "\u7C7B\u578B"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "\u8BB0\u5F55\u65F6\u95F4"
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "tbody",
	                        null,
	                        this.state.list.map(function (data, index) {
	                            return React.createElement(
	                                "tr",
	                                { key: index },
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    data.user_id
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    data.user_tel
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    data.wechat_openid
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    data.wechat_name
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    data.shop_name
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    data.shop_type
	                                ),
	                                React.createElement(
	                                    "td",
	                                    null,
	                                    data.interact_time
	                                )
	                            );
	                        })
	                    )
	                ),
	                React.createElement(_paging2.default, { pageNum: this.state.defaultParam.page, maxPage: this.state.totalPage, clickCallback: this.changePage })
	            );
	        }
	    }]);

	    return ReceiveUserList;
	}(React.Component);

	exports.default = ReceiveUserList;

/***/ },

/***/ 246:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	* 推文日志*/
	var DailyNewsLog = function (_React$Component) {
	    _inherits(DailyNewsLog, _React$Component);

	    function DailyNewsLog(props) {
	        _classCallCheck(this, DailyNewsLog);

	        var _this2 = _possibleConstructorReturn(this, (DailyNewsLog.__proto__ || Object.getPrototypeOf(DailyNewsLog)).call(this, props));

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

	    _createClass(DailyNewsLog, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            this.setState({ AreaData: this.props.currentArea }, function () {
	                _this3.getData();
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this4 = this;

	            if (nextProps.currentArea != this.state.AreaData) {
	                this.setState({
	                    AreaData: nextProps.currentArea
	                }, function () {
	                    _this4.getData();
	                });
	            }
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
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
	        }
	    }, {
	        key: 'showInfo',
	        value: function showInfo() {
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
	        }

	        //上一个月;

	    }, {
	        key: 'prevMonth',
	        value: function prevMonth() {
	            var _this6 = this;

	            var data = H.Calendar.previousMonth();
	            this.setState({
	                year: data.year,
	                month: data.month
	            }, function () {
	                _this6.getData();
	            });
	        }

	        //下一个月;

	    }, {
	        key: 'nextMonth',
	        value: function nextMonth() {
	            var _this7 = this;

	            if (this.state.year == H.Date.getFullYear() && this.state.month == H.Date.getMonth()) return;
	            var data = H.Calendar.nextMonth();
	            this.setState({
	                year: data.year,
	                month: data.month
	            }, function () {
	                _this7.getData();
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'section-table' },
	                React.createElement(
	                    'h4',
	                    { className: 'calendar' },
	                    React.createElement('span', { className: 'prev-month', onClick: this.prevMonth.bind(this) }),
	                    this.state.year,
	                    '\u5E74',
	                    this.state.month,
	                    '\u6708',
	                    React.createElement('span', {
	                        className: this.state.year == H.Date.getFullYear() && this.state.month == H.Date.getMonth() ? 'next-month disabled' : 'next-month',
	                        onClick: this.nextMonth.bind(this) })
	                ),
	                React.createElement('div', { id: 'calendar' })
	            );
	        }
	    }]);

	    return DailyNewsLog;
	}(React.Component);

	exports.default = DailyNewsLog;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _goods_info = __webpack_require__(248);

	var _goods_info2 = _interopRequireDefault(_goods_info);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 明日推文*/


	var TodayArticle = function (_React$Component) {
	    _inherits(TodayArticle, _React$Component);

	    function TodayArticle(props) {
	        _classCallCheck(this, TodayArticle);

	        var _this = _possibleConstructorReturn(this, (TodayArticle.__proto__ || Object.getPrototypeOf(TodayArticle)).call(this, props));

	        _this.state = {
	            todayArticleList: [], //今日推文列表;
	            todayArticleType: [], //推文类型;
	            AreaData: null //当前地区;
	        };
	        _this.getTodayArticle = _this.getTodayArticle.bind(_this);
	        return _this;
	    }

	    _createClass(TodayArticle, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
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
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this3 = this;

	            if (nextProps.currentArea != this.state.AreaData) {
	                this.setState({
	                    AreaData: nextProps.currentArea
	                }, function () {
	                    _this3.getTodayArticle();
	                });
	            }
	        }

	        //今日推文列表获取;

	    }, {
	        key: 'getTodayArticle',
	        value: function getTodayArticle() {
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
	        }

	        //改变文章类型;

	    }, {
	        key: 'changeArticleType',
	        value: function changeArticleType(index, e) {
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
	        }

	        //修改文章标题;

	    }, {
	        key: 'changeArticleTitle',
	        value: function changeArticleTitle(index, e) {
	            var data = this.state.todayArticleList,
	                val = e.target.value;
	            data[index].article_title = val;
	            this.setState({ todayArticleList: data });
	        }

	        //推文置顶;

	    }, {
	        key: 'placedTop',
	        value: function placedTop(index) {
	            var data = this.state.todayArticleList;
	            var thisItemData = data[index];
	            data.splice(index, 1);
	            data.unshift(thisItemData);
	            this.setState({ todayArticleList: data });
	        }

	        //删除推文;

	    }, {
	        key: 'tweetsDel',
	        value: function tweetsDel(articleId, index) {
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
	        }

	        //添加推文;

	    }, {
	        key: 'addArticle',
	        value: function addArticle() {
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
	        }

	        //保存推文;

	    }, {
	        key: 'saveArticle',
	        value: function saveArticle() {
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
	        }

	        //上传文件的input=[type=file] change事件;

	    }, {
	        key: 'fileChange',
	        value: function fileChange(index, e) {
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
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this8 = this;

	            return React.createElement(
	                'div',
	                { className: 'section-table' },
	                React.createElement(
	                    'div',
	                    { className: 'tweets-edit' },
	                    React.createElement(
	                        'h1',
	                        { className: 'tweets-edit-title' },
	                        '\u63A8\u6587\u7F16\u8F91\u533A'
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'tweets-edit-wrap' },
	                        React.createElement(
	                            'div',
	                            { className: 'tweets-edit-ul-wrap' },
	                            React.createElement(
	                                'ul',
	                                { className: 'tweets-edit-ul' },
	                                this.state.todayArticleList.map(function (data, index) {
	                                    if (index == 0) {
	                                        return React.createElement(
	                                            'li',
	                                            { key: index },
	                                            React.createElement(
	                                                'div',
	                                                { className: 'first-tweets-img-wrap' },
	                                                React.createElement('img', { className: 'first-tweets-img', src: 'http://img.idongpin.com/' + data.article_image, width: '100%', height: '162' }),
	                                                React.createElement('input', { className: 'up-img', type: 'file', onChange: _this8.fileChange.bind(_this8, index) })
	                                            ),
	                                            React.createElement(
	                                                'div',
	                                                { className: 'first-input-wrap' },
	                                                React.createElement('input', { type: 'text', className: 'first-input', value: data.article_title, onChange: _this8.changeArticleTitle.bind(_this8, index) })
	                                            ),
	                                            React.createElement(
	                                                'div',
	                                                { className: 'article-type' },
	                                                React.createElement(
	                                                    'select',
	                                                    { className: 'form-control', value: data.article_type, onChange: _this8.changeArticleType.bind(_this8, index) },
	                                                    React.createElement(
	                                                        'option',
	                                                        { key: '0', value: '0' },
	                                                        '\u8BF7\u9009\u62E9'
	                                                    ),
	                                                    _this8.state.todayArticleType.map(function (val, index1) {
	                                                        return React.createElement(
	                                                            'option',
	                                                            { key: data.article_id + '_' + index1, value: val.id },
	                                                            val.name
	                                                        );
	                                                    })
	                                                )
	                                            ),
	                                            React.createElement('i', { className: 'tweets-del glyphicon glyphicon-minus', onClick: _this8.tweetsDel.bind(_this8, data.article_id, index) })
	                                        );
	                                    } else {
	                                        return React.createElement(
	                                            'li',
	                                            { key: index },
	                                            React.createElement(
	                                                'div',
	                                                { className: 'tweets-input-trap' },
	                                                React.createElement('textarea', { className: 'tweets-input', rows: '2', value: data.article_title, onChange: _this8.changeArticleTitle.bind(_this8, index) })
	                                            ),
	                                            React.createElement(
	                                                'div',
	                                                { className: 'tweets-img-wrap' },
	                                                React.createElement('img', { className: 'tweets-img', src: 'http://img.idongpin.com/' + data.article_image, width: '55px', height: '55px' }),
	                                                React.createElement('input', { className: 'up-img', type: 'file', onChange: _this8.fileChange.bind(_this8, index) })
	                                            ),
	                                            React.createElement(
	                                                'div',
	                                                { className: 'article-type' },
	                                                React.createElement(
	                                                    'select',
	                                                    { className: 'form-control', value: data.article_type, onChange: _this8.changeArticleType.bind(_this8, index) },
	                                                    React.createElement(
	                                                        'option',
	                                                        { key: '0', value: '0' },
	                                                        '\u8BF7\u9009\u62E9'
	                                                    ),
	                                                    _this8.state.todayArticleType.map(function (val, index1) {
	                                                        return React.createElement(
	                                                            'option',
	                                                            { key: data.article_id + '_' + index1, value: val.id },
	                                                            val.name
	                                                        );
	                                                    })
	                                                )
	                                            ),
	                                            React.createElement('i', { className: 'placed-top glyphicon glyphicon-circle-arrow-up', onClick: _this8.placedTop.bind(_this8, index) }),
	                                            React.createElement('i', { className: 'tweets-del glyphicon glyphicon-minus', onClick: _this8.tweetsDel.bind(_this8, data.article_id, index) })
	                                        );
	                                    }
	                                })
	                            )
	                        ),
	                        React.createElement(
	                            'btn',
	                            { className: 'tweets-save-btn', onClick: this.saveArticle.bind(this) },
	                            '\u4FDD\u5B58'
	                        ),
	                        React.createElement(
	                            'btn',
	                            { className: 'tweets-add-btn', onClick: this.addArticle.bind(this) },
	                            '\u6DFB\u52A0'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'daily-tweets-goods' },
	                    React.createElement(
	                        'h1',
	                        { className: 'tweets-edit-title' },
	                        '\u5546\u54C1\u64CD\u4F5C\u533A'
	                    ),
	                    this.state.todayArticleType.length > 0 ? React.createElement(_goods_info2.default, { todayArticleType: this.state.todayArticleType, AreaData: this.props.currentArea }) : ''
	                )
	            );
	        }
	    }]);

	    return TodayArticle;
	}(React.Component);

	exports.default = TodayArticle;

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _paging = __webpack_require__(239);

	var _paging2 = _interopRequireDefault(_paging);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GoodsInfo = function (_React$Component) {
	    _inherits(GoodsInfo, _React$Component);

	    function GoodsInfo(props) {
	        _classCallCheck(this, GoodsInfo);

	        var _this = _possibleConstructorReturn(this, (GoodsInfo.__proto__ || Object.getPrototypeOf(GoodsInfo)).call(this, props));

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

	    _createClass(GoodsInfo, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
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
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this3 = this;

	            if (nextProps.AreaData != this.state.AreaData) {
	                this.setState({
	                    AreaData: nextProps.AreaData,
	                    articleType: this.props.todayArticleType[0]
	                }, function () {
	                    _this3.getDataList();
	                });
	            }
	        }

	        //获取数据列表;

	    }, {
	        key: 'getDataList',
	        value: function getDataList() {
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
	        }

	        //对当前页面的设置;

	    }, {
	        key: 'changePage',
	        value: function changePage(n) {
	            var _this5 = this;

	            var param = this.state.defaultParam,
	                newParam = Object.assign(param, n);
	            this.setState({ defaultParam: newParam }, function () {
	                _this5.getDataList();
	            });
	        }

	        //判断是否有这个功能;

	    }, {
	        key: 'isHavePrivilege',
	        value: function isHavePrivilege(name) {
	            var privilege = this.state.privilege;
	            for (var i in privilege) {
	                if (privilege[i].name == name) {
	                    return true;
	                }
	            }
	            return false;
	        }

	        //切换推文类型查询对应列表;

	    }, {
	        key: 'changeArticleType',
	        value: function changeArticleType(data) {
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
	        }

	        //商品列表中修改涨价降价;

	    }, {
	        key: 'riseAndFall',
	        value: function riseAndFall(str) {
	            var _this7 = this;

	            this.setState({ priceChange: str }, function () {
	                _this7.getDataList();
	            });
	        }

	        //推文商品屏蔽操作;

	    }, {
	        key: 'shielding',
	        value: function shielding(id, goodsId, status) {
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
	        }

	        //添加推荐商品;

	    }, {
	        key: 'addRecommended',
	        value: function addRecommended() {
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
	        }

	        //清空推荐列表;

	    }, {
	        key: 'cleanRecommended',
	        value: function cleanRecommended() {
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
	        }

	        //移出推荐商品;

	    }, {
	        key: 'removeRecommended',
	        value: function removeRecommended(id, gid) {
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
	        }

	        //推荐商品排序

	    }, {
	        key: 'sortingRecommended',
	        value: function sortingRecommended(id, gid) {
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
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this13 = this;

	            var tHead = React.createElement(
	                'tr',
	                null,
	                React.createElement(
	                    'th',
	                    null,
	                    '\u5E8F\u53F7'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u5546\u54C1ID'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u54C1\u540D'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u6628\u65E5\u9500\u91CF'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u5F53\u524D\u4EF7\u683C'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u4F9B\u5E94\u5546'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u64CD\u4F5C'
	                )
	            );
	            if (this.state.articleType) {
	                if (this.state.articleType.id == 4) {
	                    tHead = React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u5E8F\u53F7'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u5546\u54C1ID'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u54C1\u540D'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u6628\u65E5\u9500\u91CF'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u5F53\u524D\u4EF7\u683C'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u6628\u65E5\u4EF7\u683C'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u4F9B\u5E94\u5546'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u64CD\u4F5C'
	                        )
	                    );
	                } else if (this.state.articleType.id == 6) {
	                    tHead = React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u5E8F\u53F7'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u63A8\u8350ID'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u5546\u54C1ID'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u54C1\u540D'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u6628\u65E5\u9500\u91CF'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u4EF7\u683C'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u4F9B\u5E94\u5546'
	                        ),
	                        React.createElement(
	                            'th',
	                            null,
	                            '\u64CD\u4F5C'
	                        )
	                    );
	                }
	            }
	            return React.createElement(
	                'div',
	                { className: 'section-warp' },
	                React.createElement(
	                    'div',
	                    { className: 'section-filter' },
	                    React.createElement(
	                        'form',
	                        { className: 'form-inline' },
	                        React.createElement(
	                            'div',
	                            { className: 'filter-row' },
	                            React.createElement(
	                                'div',
	                                { className: 'btn-group' },
	                                this.props.todayArticleType.map(function (data, index) {
	                                    return React.createElement(
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
	                        this.state.articleType && this.state.articleType.id == 4 ? React.createElement(
	                            'div',
	                            { className: 'filter-row' },
	                            React.createElement(
	                                'div',
	                                { className: 'btn-group' },
	                                React.createElement(
	                                    'btn',
	                                    { className: this.state.priceChange == 'rise' ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.riseAndFall.bind(this, 'rise') },
	                                    '\u6DA8\u4EF7'
	                                ),
	                                React.createElement(
	                                    'btn',
	                                    { className: this.state.priceChange == 'decline' ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.riseAndFall.bind(this, 'decline') },
	                                    '\u964D\u4EF7'
	                                )
	                            )
	                        ) : '',
	                        this.state.articleType && this.state.articleType.id == 6 ? React.createElement(
	                            'div',
	                            { className: 'filter-row' },
	                            React.createElement(
	                                'div',
	                                { className: 'btn-group' },
	                                React.createElement(
	                                    'btn',
	                                    { className: 'btn btn-sm', onClick: this.cleanRecommended.bind(this) },
	                                    '\u6E05\u7A7A'
	                                ),
	                                React.createElement(
	                                    'btn',
	                                    { className: 'btn btn-lg', onClick: this.addRecommended.bind(this) },
	                                    '\u65B0\u589E\u63A8\u8350'
	                                )
	                            )
	                        ) : ''
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'section-table' },
	                    React.createElement(
	                        'table',
	                        { className: 'table table-bordered table-hover table-responsive' },
	                        React.createElement(
	                            'thead',
	                            null,
	                            tHead
	                        ),
	                        React.createElement(
	                            'tbody',
	                            null,
	                            this.state.data.map(function (data, index) {
	                                if (_this13.state.articleType && _this13.state.articleType.id == 4) {
	                                    return React.createElement(
	                                        'tr',
	                                        { key: index },
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.id
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_id
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_name
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.yesterday_sales_num
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_price,
	                                            '/\u4EF6'
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.yesterday_price,
	                                            '/\u4EF6'
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.sell_shop_name
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.shield_status == 1 ? React.createElement(
	                                                'a',
	                                                { onClick: _this13.shielding.bind(_this13, data.id, data.goods_id, 2) },
	                                                '\u672C\u6B21\u5C4F\u853D'
	                                            ) : React.createElement(
	                                                'a',
	                                                { onClick: _this13.shielding.bind(_this13, data.id, data.goods_id, 1) },
	                                                '\u53D6\u6D88\u5C4F\u853D'
	                                            )
	                                        )
	                                    );
	                                } else if (_this13.state.articleType && _this13.state.articleType.id == 6) {
	                                    return React.createElement(
	                                        'tr',
	                                        { key: index },
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            (_this13.state.defaultParam.page - 1) * _this13.state.defaultParam.size + (index + 1)
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.id
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_id
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_name
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.yesterday_sales_num
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_price,
	                                            '/\u4EF6'
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.sell_shop_name
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            React.createElement(
	                                                'a',
	                                                { onClick: _this13.removeRecommended.bind(_this13, data.id, data.goods_id) },
	                                                '\u79FB\u51FA'
	                                            ),
	                                            React.createElement(
	                                                'a',
	                                                { onClick: _this13.sortingRecommended.bind(_this13, data.id, data.goods_id) },
	                                                '\u6392\u5E8F'
	                                            )
	                                        )
	                                    );
	                                } else {
	                                    return React.createElement(
	                                        'tr',
	                                        { key: index },
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.id
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_id
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_name
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.yesterday_sales_num
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.goods_price,
	                                            '/\u4EF6'
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.sell_shop_name
	                                        ),
	                                        React.createElement(
	                                            'td',
	                                            null,
	                                            data.shield_status == 1 ? React.createElement(
	                                                'a',
	                                                { onClick: _this13.shielding.bind(_this13, data.id, data.goods_id, 2) },
	                                                '\u672C\u6B21\u5C4F\u853D'
	                                            ) : React.createElement(
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
	                    React.createElement(_paging2.default, { pageNum: this.state.defaultParam.page, maxPage: this.state.totalPage, clickCallback: this.changePage })
	                )
	            );
	        }
	    }]);

	    return GoodsInfo;
	}(React.Component);

	exports.default = GoodsInfo;

/***/ }

});