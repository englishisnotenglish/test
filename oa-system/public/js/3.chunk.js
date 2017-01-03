webpackJsonp([3,4],{

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

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(245);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _paging = __webpack_require__(239);
	
	var _paging2 = _interopRequireDefault(_paging);
	
	var _tables = __webpack_require__(247);
	
	var _tables2 = _interopRequireDefault(_tables);
	
	var _goods_page = __webpack_require__(248);
	
	var _goods_page2 = _interopRequireDefault(_goods_page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AccessLog = function (_React$Component) {
	    _inherits(AccessLog, _React$Component);
	
	    function AccessLog() {
	        _classCallCheck(this, AccessLog);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	        var dateTemp = H.Date;
	        var date = {
	            year: dateTemp.getFullYear(),
	            month: dateTemp.getMonth(),
	            day: dateTemp.getDate() - 1
	        };
	        var dateFormat = date.year + '-' + date.month + '-' + date.day;
	        _this.state = {
	            areaData: [],
	
	            //都是要提交的参数
	            pageNo: 1, //页面的页数
	            size: 20, //一页的数据
	            currentShopType: 5, //选择商店类型
	            currentArea: 2, //当前地区
	            currentPage: 1, //所在哪个页面
	            aboveTableResult: {}, //表格上面的数据
	            result: '', //查询出来的数据
	            time: { //起止时间对象
	                start: dateFormat,
	                end: dateFormat
	            },
	            order: 'viewed_person', //排序方式
	
	            detailedResult: [] //商品详细访问日志
	
	        };
	        _this.createSelectArea = _this.createSelectArea.bind(_this);
	        _this.createRow = _this.createRow.bind(_this);
	        _this.createTable = _this.createTable.bind(_this);
	        _this.setPageNum = _this.setPageNum.bind(_this);
	        return _this;
	    }
	
	    //获得数据 还需要添加出错的判断（）
	
	
	    AccessLog.prototype.componentWillMount = function componentWillMount() {
	        var _this2 = this;
	
	        H.server.other_customArea_list({}, function (res) {
	            if (res.code == 0) {
	                _this2.setState({
	                    areaData: res.data
	                }, _this2.freshData);
	            }
	        });
	    };
	
	    //获取表格上面的数据 (总情况的说明数据)
	
	
	    AccessLog.prototype.getDataAboveTable = function getDataAboveTable() {
	        var _this3 = this;
	
	        var paraShop = {
	            divide_id: this.state.currentArea,
	            page_type: this.state.currentPage,
	            query_time: this.state.time.start,
	            end_time: this.state.time.end,
	            shop_type: this.state.currentShopType
	        };
	        if (this.state.currentPage == 6) {
	            var paraGoods = {
	                divide_id: this.state.currentArea,
	                page_type: this.state.currentPage,
	                query_time: this.state.time.start,
	                end_time: this.state.time.end
	            };
	            H.server.statistic_goods_all(paraGoods, function (res) {
	                if (res.code == 0) {
	                    _this3.setState({
	                        aboveTableResult: res.data
	                    });
	                } else {
	                    console.log(res.message);
	                }
	            });
	        } else {
	            H.server.statistic_page_all(paraShop, function (res) {
	                if (res.code == 0) {
	                    _this3.setState({
	                        aboveTableResult: res.data
	                    });
	                } else {
	                    console.log(res.message);
	                }
	            });
	        }
	    };
	
	    //获取我们的筛选出来的数据
	
	
	    AccessLog.prototype.getResult = function getResult() {
	        var _this4 = this;
	
	        var paraShop = {
	            divide_id: this.state.currentArea,
	            page_type: this.state.currentPage,
	            query_time: this.state.time.start,
	            end_time: this.state.time.end,
	            shop_type: this.state.currentShopType,
	            orderby: this.state.order,
	            page: this.state.pageNo,
	            size: 20
	        };
	        if (this.state.currentPage == 6) {
	            var paraGoods = {
	                divide_id: this.state.currentArea,
	                page_type: this.state.currentPage,
	                query_time: this.state.time.start,
	                end_time: this.state.time.end,
	                orderby: this.state.order,
	                page: this.state.pageNo,
	                size: 20
	            };
	            H.server.statistic_goods_detail(paraGoods, function (res) {
	                if (res.code == 0) {
	                    _this4.setState({
	                        result: res.data
	                    });
	                } else {
	                    console.log(res.message);
	                }
	            });
	        } else {
	            H.server.statistic_page_detail(paraShop, function (res) {
	                if (res.code == 0) {
	                    _this4.setState({
	                        result: res.data
	                    });
	                }
	            });
	        }
	    };
	
	    //刷新数据
	
	
	    AccessLog.prototype.freshData = function freshData() {
	        this.getDataAboveTable();
	        this.getResult();
	    };
	    //切换地区
	
	
	    AccessLog.prototype.toggleArea = function toggleArea(e) {
	        var index = e.target.dataset.index;
	        this.setState({
	            currentArea: index,
	            pageNo: 1
	        }, this.freshData);
	    };
	
	    //切换页面
	
	
	    AccessLog.prototype.togglePage = function togglePage(index) {
	        if (index == 6) {
	            $('.filter-row:eq(3)').css({ 'display': 'none' });
	        } else {
	            $('.filter-row:eq(3)').css({ 'display': 'block' });
	        }
	        this.setState({
	            currentPage: index,
	            pageNo: 1
	        }, this.freshData);
	    };
	
	    //切换批次
	
	
	    AccessLog.prototype.toggleType = function toggleType(index) {
	        this.setState({
	            currentShopType: index,
	            pageNo: 1
	        }, this.freshData);
	    };
	
	    //setPageNum表格下面的分页
	
	
	    AccessLog.prototype.setPageNum = function setPageNum(page) {
	        this.setState({
	            pageNo: page.page
	        }, this.getResult);
	    };
	
	    //将初始化时间赋值给输入框
	
	
	    AccessLog.prototype.componentDidMount = function componentDidMount() {
	        $('#transfer_order_buyer_startTime').val(this.state.time.start);
	        $('#transfer_order_buyer_endTime').val(this.state.time.end);
	    };
	
	    //searchEvent点击筛选按钮
	
	
	    AccessLog.prototype.searchEvent = function searchEvent() {
	        var timeStart = $('#transfer_order_buyer_startTime').val();
	        var timeEnd = $('#transfer_order_buyer_endTime').val();
	        this.setState({
	            time: {
	                start: timeStart,
	                end: timeEnd
	            },
	            pageNo: 1
	        }, this.freshData);
	    };
	
	    //创建可以选择的区域(filter)
	
	
	    AccessLog.prototype.createSelectArea = function createSelectArea() {
	        var _this5 = this;
	
	        return _react2.default.createElement(
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
	                        this.state.areaData.map(function (data, index) {
	                            return _react2.default.createElement(
	                                'btn',
	                                { key: index,
	                                    className: data.area_id == _this5.state.currentArea ? 'btn btn-sm btn-default' : 'btn btn-sm',
	                                    'data-index': data.area_id,
	                                    onClick: _this5.toggleArea.bind(_this5)
	                                },
	                                data.area_name
	                            );
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'filter-row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'btn-group' },
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentPage == 1 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.togglePage.bind(this, 1) },
	                            '\u56E2\u8D2D\u9875'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentPage == 2 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.togglePage.bind(this, 2) },
	                            '\u65B0\u54C1\u9875'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentPage == 3 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.togglePage.bind(this, 3) },
	                            '\u70ED\u9500\u9875'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentPage == 4 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.togglePage.bind(this, 4) },
	                            '\u6DA8\u8DCC\u9875'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentPage == 6 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.togglePage.bind(this, 6) },
	                            '\u5546\u54C1\u9875'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'filter-row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'btn-group' },
	                        _react2.default.createElement(
	                            'btn',
	                            { className: 'btn btn-sm btn-default' },
	                            '\u6628\u65E5'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: 'btn btn-lg', style: { marginRight: '40px' } },
	                            '\u65E5\u671F\u9009\u62E9'
	                        ),
	                        _react2.default.createElement(_index2.default, { prefix: 'transfer_order_buyer_', title: '\u65F6\u95F4\u7B5B\u9009', searchEvt: this.searchEvent.bind(this) })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'filter-row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'btn-group' },
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentShopType == 5 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.toggleType.bind(this, 5) },
	                            '\u5168\u90E8'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentShopType == 1 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.toggleType.bind(this, 1) },
	                            '\u4E00\u6279'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentShopType == 2 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.toggleType.bind(this, 2) },
	                            '\u4E8C\u6279'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentShopType == 3 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.toggleType.bind(this, 3) },
	                            '\u7EC8\u7AEF'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentShopType == 4 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.toggleType.bind(this, 4) },
	                            '\u5176\u4ED6'
	                        ),
	                        _react2.default.createElement(
	                            'btn',
	                            { className: this.state.currentShopType == 0 ? 'btn btn-sm btn-default' : 'btn btn-sm', onClick: this.toggleType.bind(this, 0) },
	                            '\u672A\u6CE8\u518C'
	                        )
	                    )
	                )
	            )
	        );
	    };
	
	    //创建数据行
	
	
	    AccessLog.prototype.createRow = function createRow(data, index) {
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
	                data.shop_name
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.phone_number
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.wechat_name
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.shop_type
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.viewed_times
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.share_times
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.start_time
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.stop_time
	            )
	        );
	    };
	
	    //创建内容表格 for testing
	
	
	    AccessLog.prototype.createTable = function createTable() {
	        var _this6 = this;
	
	        var aboveTableResult = {
	            'total_person': this.state.aboveTableResult.total_person,
	            'total_view': this.state.aboveTableResult.total_view,
	            'total_share': this.state.aboveTableResult.total_share,
	            'total_goods': this.state.aboveTableResult.total_goods
	        };
	        var total = this.state.result.total;
	        var tableTile = ['用户ID', '店铺名', '手机号', '微信名', '类型', '浏览次数', '主动分享次数', '时间起', '时间止'];
	        var rows = [];
	        console.log(this.props.result);
	        this.state.result.detail.map(function (data, index) {
	            rows.push(_this6.createRow(data, index));
	        });
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h4',
	                null,
	                '\u5F53\u524D\u7ED3\u679C\uFF1A\u5171',
	                aboveTableResult.total_person,
	                '\u4EBA\uFF0C \u6D4F\u89C8\u6B21\u6570\uFF1A',
	                aboveTableResult.total_view,
	                '\uFF0C \u5206\u4EAB\u6B21\u6570\uFF1A',
	                aboveTableResult.total_share
	            ),
	            _react2.default.createElement(
	                _tables2.default,
	                { titles: tableTile },
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    rows
	                )
	            ),
	            _react2.default.createElement(_paging2.default, { key: this.state.currentPage, maxPage: total % 20 == 0 ? total / 20 : total / 20 + 1, clickCallback: this.setPageNum.bind(this) })
	        );
	    };
	
	    AccessLog.prototype.render = function render() {
	        if (!this.state.result) return null;
	        var para = {
	            query_time: this.state.time.start,
	            end_time: this.state.time.end,
	            orderby: this.state.order,
	            page: this.state.pageNo,
	            size: 20
	        };
	        return _react2.default.createElement(
	            'div',
	            { className: 'section-warp' },
	            this.createSelectArea(),
	            _react2.default.createElement(
	                'div',
	                { className: 'section-table' },
	                this.state.currentPage == 6 ? _react2.default.createElement(_goods_page2.default, { aboveTableResult: this.state.aboveTableResult, result: this.state.result, para: para,
	                    setPageNum: this.setPageNum.bind(this) }) : this.createTable()
	            )
	        );
	    };
	
	    return AccessLog;
	}(_react2.default.Component);
	
	module.exports = AccessLog;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _btn = __webpack_require__(246);
	
	var _btn2 = _interopRequireDefault(_btn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import "./jquery-ui.less";
	
	
	var datePicker = function (_React$Component) {
		_inherits(datePicker, _React$Component);
	
		function datePicker() {
			_classCallCheck(this, datePicker);
	
			return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
		}
	
		datePicker.prototype.componentDidMount = function componentDidMount() {
			$.datepicker.regional["zh-CN"] = {
				closeText: "关闭",
				prevText: "&#x3C;上月",
				nextText: "下月&#x3E;",
				currentText: "今天",
				monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
				monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
				dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
				dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
				dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
				weekHeader: "周",
				dateFormat: "yy-mm-dd",
				firstDay: 1,
				isRTL: false,
				showMonthAfterYear: true,
				yearSuffix: "年"
			};
			var startTimeId = (this.props.prefix ? this.props.prefix : "") + "startTime",
			    endTimeId = (this.props.prefix ? this.props.prefix : "") + "endTime";
			var $dateInputF = $('#' + startTimeId),
			    $dateInputT = $('#' + endTimeId);
			$.datepicker.setDefaults($.datepicker.regional["zh-CN"]);
	
			$dateInputF.datepicker({
				dateFormat: 'yy-mm-dd',
				changeMonth: true,
				changeYear: true,
				onClose: function onClose(selectDate) {
					$dateInputT.datepicker("option", "minDate", selectDate);
				}
			});
	
			$dateInputT.datepicker({
				dateFormat: 'yy-mm-dd',
				changeMonth: true,
				changeYear: true,
				onClose: function onClose(selectDate) {
					$dateInputF.datepicker("option", "maxDate", selectDate);
				}
			});
	
			$dateInputT.val(H.Date.getFullYear() + '-' + H.Date.getMonth() + '-' + H.Date.getDate());
			$dateInputF.val(H.getSouroundDate(7));
		};
	
		datePicker.prototype.searchHandler = function searchHandler(e) {
			e.preventDefault();
			this.props.searchEvt();
		};
	
		datePicker.prototype.render = function render() {
			return _react2.default.createElement(
				"div",
				{ className: "time-search-w" },
				_react2.default.createElement("input", { type: "text", className: "form-control", id: (this.props.prefix ? this.props.prefix : "") + "startTime", placeholder: "\u8D77\u59CB\u65E5\u671F" }),
				"\u4E00",
				_react2.default.createElement("input", { type: "text", className: "form-control", id: (this.props.prefix ? this.props.prefix : "") + "endTime", placeholder: "\u7ED3\u675F\u65E5\u671F" }),
				_react2.default.createElement(_btn2.default, { name: "\u7B5B\u9009", btnEvent: this.searchHandler })
			);
		};
	
		return datePicker;
	}(_react2.default.Component);
	
	exports.default = datePicker;
	module.exports = exports["default"];

/***/ },

/***/ 246:
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
	var Btn = function (_React$Component) {
	    _inherits(Btn, _React$Component);
	
	    function Btn() {
	        _classCallCheck(this, Btn);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    Btn.prototype.render = function render() {
	        return _react2.default.createElement(
	            "button",
	            { className: "btn btn-default " + this.props.otherClass, onClick: this.props.btnEvent },
	            this.props.name
	        );
	    };
	
	    return Btn;
	}(_react2.default.Component);
	
	exports.default = Btn;
	module.exports = exports["default"];

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2016/1/29.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 表格组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param headTextArr = ['收款ID','订单ID','付款人','实收金额','订单金额','优惠金额','付款方式','确认人','资金位置','付款确认时间','操作']
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/*表格头*/
	var TableHead = function (_React$Component) {
	    _inherits(TableHead, _React$Component);
	
	    function TableHead() {
	        _classCallCheck(this, TableHead);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    TableHead.prototype.render = function render() {
	        return _react2.default.createElement(
	            "tr",
	            null,
	            this.props.tableTile.map(function (title, index) {
	                return _react2.default.createElement(
	                    "th",
	                    { key: index },
	                    title
	                );
	            })
	        );
	    };
	
	    return TableHead;
	}(_react2.default.Component);
	
	/*整个表*/
	
	
	var Table = function (_React$Component2) {
	    _inherits(Table, _React$Component2);
	
	    function Table() {
	        _classCallCheck(this, Table);
	
	        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	    }
	
	    Table.prototype.render = function render() {
	        var headTextArr = this.props.titles,
	            data = this.props.res;
	        return _react2.default.createElement(
	            "table",
	            { className: "table table-bordered table-hover table-responsive" },
	            _react2.default.createElement(
	                "thead",
	                null,
	                _react2.default.createElement(TableHead, { tableTile: headTextArr })
	            ),
	            this.props.children
	        );
	    };
	
	    return Table;
	}(_react2.default.Component);
	
	exports.default = Table;
	module.exports = exports["default"];

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tables = __webpack_require__(247);
	
	var _tables2 = _interopRequireDefault(_tables);
	
	var _paging = __webpack_require__(239);
	
	var _paging2 = _interopRequireDefault(_paging);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GoodsPage = function (_React$Component) {
	    _inherits(GoodsPage, _React$Component);
	
	    function GoodsPage() {
	        _classCallCheck(this, GoodsPage);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	        _this.state = {
	            infoPanel: {
	                isShow: false,
	                infoPanelTitle: ''
	            },
	            goodsDetail: '',
	            pageNo: 1
	        };
	        return _this;
	    }
	
	    //创建数据行
	
	
	    GoodsPage.prototype.createRow = function createRow(data, index) {
	        return _react2.default.createElement(
	            'tr',
	            { key: index },
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
	                data.supplier
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.viewed_person,
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:;', onClick: this.handleInfoPanel.bind(this, data.goods_id), style: { color: 'blue' } },
	                    '\u660E\u7EC6'
	                )
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.viewed_times
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.share_times
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.start_time
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                data.stop_time
	            )
	        );
	    };
	
	    GoodsPage.prototype.setParentPageNum = function setParentPageNum(page) {
	        this.props.setPageNum(page);
	    };
	    // create a new table
	
	
	    GoodsPage.prototype.createTable = function createTable() {
	        var _this2 = this;
	
	        var tableTile = ['商品ID', '商品名', '供应商', '浏览人数', '浏览次数', '分享次数', '时间起', '时间止'];
	        var rows = [];
	        var total = this.props.result.total;
	        this.props.result.detail.map(function (data, index) {
	            rows.push(_this2.createRow(data, index));
	        });
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                _tables2.default,
	                { titles: tableTile },
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    rows
	                )
	            ),
	            _react2.default.createElement(_paging2.default, { maxPage: total % 20 == 0 ? total / 20 : total / 20 + 1, clickCallback: this.setParentPageNum.bind(this) })
	        );
	    };
	
	    /*
	    弹出面板
	    */
	    //弹出项
	
	
	    GoodsPage.prototype.createPanelItem = function createPanelItem(goods, index) {
	        return _react2.default.createElement(
	            'tr',
	            { className: 'item', key: index },
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.user_id
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.shop_name
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.phone_number
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.wechat_name
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.shop_type
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.viewed_times
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.share_times
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.start_time
	            ),
	            _react2.default.createElement(
	                'td',
	                null,
	                goods.stop_time
	            )
	        );
	    };
	
	    //获得商品详情数据
	
	
	    GoodsPage.prototype.getGoodsDetailData = function getGoodsDetailData(goodsId) {
	        var _this3 = this;
	
	        var para = {
	            goods_id: goodsId,
	            query_time: this.props.para.query_time,
	            end_time: this.props.para.end_time,
	            orderby: this.props.para.orderby,
	            page: this.state.pageNo,
	            size: this.props.para.size
	        };
	        H.server.statistic_goodsSpecific_detail(para, function (res) {
	            if (res.code == 0) {
	                _this3.setState({
	                    goodsDetail: res.data
	                });
	            }
	        });
	    };
	
	    //处理弹出面板的显示
	
	
	    GoodsPage.prototype.handleInfoPanel = function handleInfoPanel(goodsId) {
	        var bool = this.state.infoPanel.isShow; //是否显示
	        if (!bool) {
	            this.getGoodsDetailData(goodsId);
	        }
	        this.setState({
	            infoPanel: {
	                isShow: !bool
	            },
	            pageNo: 1
	        });
	    };
	
	    GoodsPage.prototype.setPageNum = function setPageNum(page) {
	        this.setState({
	            pageNo: page.page
	        }, this.getGoodsDetailData);
	    };
	
	    //弹出面板
	
	
	    GoodsPage.prototype.infoPanel = function infoPanel() {
	        var _this4 = this;
	
	        if (!this.state.goodsDetail) return null;
	        var items = [];
	        var total = this.state.goodsDetail.total;
	        this.state.goodsDetail.detail.map(function (goods, index) {
	            items.push(_this4.createPanelItem(goods, index));
	        });
	        return _react2.default.createElement(
	            'div',
	            { className: this.state.infoPanel.isShow ? 'section-tr-info show' : 'section-tr-info' },
	            _react2.default.createElement(
	                'i',
	                { className: 'info-close-btn', title: '\u70B9\u51FB\u9690\u85CF\u5F39\u51FA\u5C42', onClick: this.handleInfoPanel.bind(this) },
	                'close'
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'info-w' },
	                _react2.default.createElement(
	                    'h3',
	                    { className: 'info-title' },
	                    this.state.infoPanel.infoPanelTitle
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'info-main-w' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'infoPanel-form' },
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
	                                        '\u5E97\u94FA\u540D'
	                                    ),
	                                    _react2.default.createElement(
	                                        'th',
	                                        null,
	                                        '\u624B\u673A\u53F7'
	                                    ),
	                                    _react2.default.createElement(
	                                        'th',
	                                        null,
	                                        '\u5FAE\u4FE1\u540D'
	                                    ),
	                                    _react2.default.createElement(
	                                        'th',
	                                        null,
	                                        '\u7C7B\u578B'
	                                    ),
	                                    _react2.default.createElement(
	                                        'th',
	                                        null,
	                                        '\u6D4F\u89C8\u6B21\u6570'
	                                    ),
	                                    _react2.default.createElement(
	                                        'th',
	                                        null,
	                                        '\u4E3B\u52A8\u5206\u4EAB\u6B21\u6570'
	                                    ),
	                                    _react2.default.createElement(
	                                        'th',
	                                        null,
	                                        '\u65F6\u95F4\u8D77'
	                                    ),
	                                    _react2.default.createElement(
	                                        'th',
	                                        null,
	                                        '\u65F6\u95F4\u6B62'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tbody',
	                                null,
	                                this.state.goodsDetail ? items : null
	                            )
	                        ),
	                        _react2.default.createElement(_paging2.default, { maxPage: total % 20 == 0 ? total / 20 : total / 20 + 1, clickCallback: this.setPageNum.bind(this) })
	                    )
	                )
	            )
	        );
	    };
	
	    GoodsPage.prototype.render = function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h4',
	                null,
	                '\u5F53\u524D\u7ED3\u679C\uFF1A\u5171',
	                this.props.aboveTableResult.total_goods,
	                '\u4EF6\u5546\u54C1\uFF0C \u603B\u6D4F\u89C8\u4EBA\u6570\uFF1A',
	                this.props.aboveTableResult.total_person,
	                '\u4EBA\uFF0C \u603B\u6D4F\u89C8\u6B21\u6570\uFF1A',
	                this.props.aboveTableResult.total_view,
	                '\uFF0C \u603B\u5206\u4EAB\u6B21\u6570\uFF1A',
	                this.props.aboveTableResult.total_share
	            ),
	            this.createTable(),
	            this.infoPanel()
	        );
	    };
	
	    return GoodsPage;
	}(_react2.default.Component);
	
	exports.default = GoodsPage;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYWdlL3BhZ2luZy5qcz8zYTNhIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy9yb3V0ZXJzL29wZXJhdGlvbi1tYW5hZ2VtZW50L2FjY2Vzcy1sb2cvY29tcG9uZW50cy9hY2Nlc3NfbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9kYXRlUGlja2VyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9idG4vYnRuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3RhYmxlL3RhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvcm91dGVycy9vcGVyYXRpb24tbWFuYWdlbWVudC9hY2Nlc3MtbG9nL2NvbXBvbmVudHMvZ29vZHNfcGFnZS5qc3giXSwibmFtZXMiOlsiUGFnZUxpIiwicHJvcHMiLCJnZXRQYWdlIiwiYmluZCIsImNsaWNrRXYiLCJudW0iLCJyZW5kZXIiLCJzdHIiLCJjbGFzc04iLCJDb21wb25lbnQiLCJQYWdlQ3RybEJhciIsInN0YXRlIiwicGFnZU51bSIsIl9tYXhQYWdlIiwibnVtQXJyIiwic2V0UGFnZURhdGEiLCJjYWxjdWxhdGVQYWdlIiwibiIsImNsaWNrQ2FsbGJhY2siLCJwYWdlIiwibWF4IiwiY2FsbGJhY2siLCJhcnIiLCJpIiwicHVzaCIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbE1vdW50IiwibWF4UGFnZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJmaXJzdERpc2FibGUiLCJsYXN0RGlzYWJsZSIsInRoaXNQYWdlIiwiZm9yRWFjaCIsImluZGV4IiwiQWNjZXNzTG9nIiwiZGF0ZVRlbXAiLCJIIiwiRGF0ZSIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImRhdGVGb3JtYXQiLCJhcmVhRGF0YSIsInBhZ2VObyIsInNpemUiLCJjdXJyZW50U2hvcFR5cGUiLCJjdXJyZW50QXJlYSIsImN1cnJlbnRQYWdlIiwiYWJvdmVUYWJsZVJlc3VsdCIsInJlc3VsdCIsInRpbWUiLCJzdGFydCIsImVuZCIsIm9yZGVyIiwiZGV0YWlsZWRSZXN1bHQiLCJjcmVhdGVTZWxlY3RBcmVhIiwiY3JlYXRlUm93IiwiY3JlYXRlVGFibGUiLCJzZXRQYWdlTnVtIiwic2VydmVyIiwib3RoZXJfY3VzdG9tQXJlYV9saXN0IiwicmVzIiwiY29kZSIsImRhdGEiLCJmcmVzaERhdGEiLCJnZXREYXRhQWJvdmVUYWJsZSIsInBhcmFTaG9wIiwiZGl2aWRlX2lkIiwicGFnZV90eXBlIiwicXVlcnlfdGltZSIsImVuZF90aW1lIiwic2hvcF90eXBlIiwicGFyYUdvb2RzIiwic3RhdGlzdGljX2dvb2RzX2FsbCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic3RhdGlzdGljX3BhZ2VfYWxsIiwiZ2V0UmVzdWx0Iiwib3JkZXJieSIsInN0YXRpc3RpY19nb29kc19kZXRhaWwiLCJzdGF0aXN0aWNfcGFnZV9kZXRhaWwiLCJ0b2dnbGVBcmVhIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJ0b2dnbGVQYWdlIiwiJCIsImNzcyIsInRvZ2dsZVR5cGUiLCJjb21wb25lbnREaWRNb3VudCIsInZhbCIsInNlYXJjaEV2ZW50IiwidGltZVN0YXJ0IiwidGltZUVuZCIsIm1hcCIsImFyZWFfaWQiLCJhcmVhX25hbWUiLCJtYXJnaW5SaWdodCIsInVzZXJfaWQiLCJzaG9wX25hbWUiLCJwaG9uZV9udW1iZXIiLCJ3ZWNoYXRfbmFtZSIsInZpZXdlZF90aW1lcyIsInNoYXJlX3RpbWVzIiwic3RhcnRfdGltZSIsInN0b3BfdGltZSIsInRvdGFsX3BlcnNvbiIsInRvdGFsX3ZpZXciLCJ0b3RhbF9zaGFyZSIsInRvdGFsX2dvb2RzIiwidG90YWwiLCJ0YWJsZVRpbGUiLCJyb3dzIiwiZGV0YWlsIiwicGFyYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkYXRlUGlja2VyIiwiZGF0ZXBpY2tlciIsInJlZ2lvbmFsIiwiY2xvc2VUZXh0IiwicHJldlRleHQiLCJuZXh0VGV4dCIsImN1cnJlbnRUZXh0IiwibW9udGhOYW1lcyIsIm1vbnRoTmFtZXNTaG9ydCIsImRheU5hbWVzIiwiZGF5TmFtZXNTaG9ydCIsImRheU5hbWVzTWluIiwid2Vla0hlYWRlciIsImZpcnN0RGF5IiwiaXNSVEwiLCJzaG93TW9udGhBZnRlclllYXIiLCJ5ZWFyU3VmZml4Iiwic3RhcnRUaW1lSWQiLCJwcmVmaXgiLCJlbmRUaW1lSWQiLCIkZGF0ZUlucHV0RiIsIiRkYXRlSW5wdXRUIiwic2V0RGVmYXVsdHMiLCJjaGFuZ2VNb250aCIsImNoYW5nZVllYXIiLCJvbkNsb3NlIiwic2VsZWN0RGF0ZSIsImdldFNvdXJvdW5kRGF0ZSIsInNlYXJjaEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaEV2dCIsIkJ0biIsIm90aGVyQ2xhc3MiLCJidG5FdmVudCIsIm5hbWUiLCJUYWJsZUhlYWQiLCJ0aXRsZSIsIlRhYmxlIiwiaGVhZFRleHRBcnIiLCJ0aXRsZXMiLCJjaGlsZHJlbiIsIkdvb2RzUGFnZSIsImluZm9QYW5lbCIsImlzU2hvdyIsImluZm9QYW5lbFRpdGxlIiwiZ29vZHNEZXRhaWwiLCJnb29kc19pZCIsImdvb2RzX25hbWUiLCJzdXBwbGllciIsInZpZXdlZF9wZXJzb24iLCJoYW5kbGVJbmZvUGFuZWwiLCJjb2xvciIsInNldFBhcmVudFBhZ2VOdW0iLCJjcmVhdGVQYW5lbEl0ZW0iLCJnb29kcyIsImdldEdvb2RzRGV0YWlsRGF0YSIsImdvb2RzSWQiLCJzdGF0aXN0aWNfZ29vZHNTcGVjaWZpY19kZXRhaWwiLCJib29sIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBOzs7Ozs7Ozs7O2dmQUxBOzs7Ozs7O0tBT01BLE07OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0RBQ2YsNEJBQU1BLEtBQU4s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WCxDQUE0QjhELFdBQXZDO0FBQUE7QUFDVyxzQkFBS2xILEtBQUwsQ0FBV29ELGdCQUFYLENBQTRCMkQsWUFEdkM7QUFBQTtBQUVXLHNCQUFLL0csS0FBTCxDQUFXb0QsZ0JBQVgsQ0FBNEI0RCxVQUZ2QztBQUFBO0FBR1csc0JBQUtoSCxLQUFMLENBQVdvRCxnQkFBWCxDQUE0QjZEO0FBSHZDLGNBREo7QUFPSyxrQkFBS3BELFdBQUwsRUFQTDtBQVNLLGtCQUFLdUcsU0FBTDtBQVRMLFVBREo7QUFhSCxNOzs7R0ExS21CLGdCQUFNNUosUzs7bUJBNEtmMkosUyIsImZpbGUiOiIzLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzEvMjkuXHJcbiAqIOWIhumhteagj1xyXG4gKiBIdSBYaWFvWXVcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQYWdlTGkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYWdlID0gdGhpcy5nZXRQYWdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmNsaWNrRXYodGhpcy5wcm9wcy5udW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc3RyID0gJyc7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGFzc04gPT0gJ2FjdGl2ZScpe1xyXG4gICAgICAgICAgICBzdHIgPSAnYWN0aXZlJztcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHJ9IG9uQ2xpY2s9e3RoaXMuZ2V0UGFnZX0gPlxyXG4gICAgICAgICAgICAgICAgPGE+e3RoaXMucHJvcHMubnVtfTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUGFnZUN0cmxCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgICAgICAgIF9tYXhQYWdlOiAxOCxcclxuICAgICAgICAgICAgbnVtQXJyOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRQYWdlRGF0YSA9IHRoaXMuc2V0UGFnZURhdGEuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBhZ2UgPSB0aGlzLmNhbGN1bGF0ZVBhZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVQYWdlKG4pIHtcclxuICAgICAgICBpZihuID09IHRoaXMuc3RhdGUucGFnZU51bSkgcmV0dXJuOyAvL+WmguaenOaYr+esrOS4gOmhteWSjOacgOWQjuS4gOmhteaXtuS4jeaJp+ihjOS7peS4i+aTjeS9nDtcclxuICAgICAgICBpZihuIDwgMSl7XHJcbiAgICAgICAgICAgIG49MTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNlIGlmKG4gPiB0aGlzLnN0YXRlLl9tYXhQYWdlKXtcclxuICAgICAgICAgICAgbj10aGlzLnN0YXRlLl9tYXhQYWdlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAvL1RPRE8g6L+Z5qC35YaZ57qv5bGe5peg5aWI77yM5ZCO57ut5YaN55yL6IO95LiN6IO95LyY5YyWO1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZURhdGEobiwgdGhpcy5zdGF0ZS5fbWF4UGFnZSwgKG4pPT57XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tDYWxsYmFjayAmJiB0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2soe3BhZ2U6IG59KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZURhdGEobiwgbWF4LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBtYXggPSBtYXggfHwgMTtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgaWYobWF4ID49IDkpe1xyXG4gICAgICAgICAgICBpZihuIDw9IDUpe1xyXG4gICAgICAgICAgICAgICAgYXJyID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihuID4gNSAmJiBuIDwgbWF4LTQpe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gKG4tNCk7aSA8PSAobis0KSA7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYobiA+PSBtYXgtNCl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSBtYXgtODtpIDw9IG1heCA7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMSA7IGkgPD0gbWF4IDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYWdlTnVtOiBuLFxyXG4gICAgICAgICAgICBfbWF4UGFnZTogbWF4LFxyXG4gICAgICAgICAgICBudW1BcnI6IGFyclxyXG4gICAgICAgIH0sICgpPT57XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFBhZ2VEYXRhKHRoaXMuc3RhdGUucGFnZU51bSwgdGhpcy5wcm9wcy5tYXhQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGxldCBwYWdlTnVtID0gMTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnBhZ2VOdW0pe1xyXG4gICAgICAgICAgICBwYWdlTnVtID0gdGhpcy5wcm9wcy5wYWdlTnVtO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcGFnZU51bSA9IHRoaXMuc3RhdGUucGFnZU51bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQYWdlRGF0YShwYWdlTnVtLCBuZXh0UHJvcHMubWF4UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBmaXJzdERpc2FibGUgPSAnJztcclxuICAgICAgICB2YXIgbGFzdERpc2FibGUgPSAnJztcclxuICAgICAgICB2YXIgc3RyID0gW107XHJcbiAgICAgICAgdmFyIHRoaXNQYWdlID0gdGhpcy5zdGF0ZS5wYWdlTnVtO1xyXG4gICAgICAgIHZhciBjbGlja0V2ID0gdGhpcy5jYWxjdWxhdGVQYWdlO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGFnZU51bSA9PSAxKXtcclxuICAgICAgICAgICAgZmlyc3REaXNhYmxlID0gJ2Rpc2FibGVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5wYWdlTnVtID09IHRoaXMuc3RhdGUuX21heFBhZ2Upe1xyXG4gICAgICAgICAgICBsYXN0RGlzYWJsZSA9ICdkaXNhYmxlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUubnVtQXJyLmZvckVhY2goZnVuY3Rpb24obiwgaW5kZXgpe1xyXG4gICAgICAgICAgICBpZih0aGlzUGFnZSA9PSBuKXtcclxuICAgICAgICAgICAgICAgIHN0ci5wdXNoKDxQYWdlTGkga2V5PXtpbmRleH0gbnVtPXtufSBjbGlja0V2PXtjbGlja0V2fSBjbGFzc049XCJhY3RpdmVcIiAvPik7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0ci5wdXNoKDxQYWdlTGkga2V5PXtpbmRleH0gbnVtPXtufSBjbGlja0V2PXtjbGlja0V2fSAvPik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Zmlyc3REaXNhYmxlfSBvbkNsaWNrPXt0aGlzLmNhbGN1bGF0ZVBhZ2UuYmluZCh0aGlzLCAxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6aaW6aG1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2ZpcnN0RGlzYWJsZX0gb25DbGljaz17dGhpcy5jYWxjdWxhdGVQYWdlLmJpbmQodGhpcywgdGhpcy5zdGF0ZS5wYWdlTnVtLTEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3N0cn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGFzdERpc2FibGV9IG9uQ2xpY2s9e3RoaXMuY2FsY3VsYXRlUGFnZS5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGFnZU51bSsxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XCJOZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mcmFxdW87PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsYXN0RGlzYWJsZX0gb25DbGljaz17dGhpcy5jYWxjdWxhdGVQYWdlLmJpbmQodGhpcywgdGhpcy5zdGF0ZS5fbWF4UGFnZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+5bC+6aG1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUN0cmxCYXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9jb21wb25lbnRzL3BhZ2UvcGFnaW5nLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXRlUGlja2VyL2luZGV4LmpzeCc7XHJcbmltcG9ydCBQYWdpbmcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlL3BhZ2luZy5qcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlcy5qcyc7XHJcbmltcG9ydCBHb29kc1BhZ2UgZnJvbSAnLi9nb29kc19wYWdlLmpzeCc7XHJcblxyXG5jbGFzcyBBY2Nlc3NMb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCBkYXRlVGVtcCA9IEguRGF0ZTtcclxuICAgICAgICBsZXQgZGF0ZSA9IHtcclxuICAgICAgICAgICAgeWVhcjogZGF0ZVRlbXAuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgbW9udGg6IGRhdGVUZW1wLmdldE1vbnRoKCksXHJcbiAgICAgICAgICAgIGRheTogZGF0ZVRlbXAuZ2V0RGF0ZSgpIC0gMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGRhdGVGb3JtYXQgPSBkYXRlLnllYXIgKyAnLScgK2RhdGUubW9udGggKyAnLScgK2RhdGUuZGF5O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFyZWFEYXRhOiBbXSxcclxuXHJcbiAgICAgICAgICAgIC8v6YO95piv6KaB5o+Q5Lqk55qE5Y+C5pWwXHJcbiAgICAgICAgICAgIHBhZ2VObzogMSwgLy/pobXpnaLnmoTpobXmlbBcclxuICAgICAgICAgICAgc2l6ZTogMjAsICAvL+S4gOmhteeahOaVsOaNrlxyXG4gICAgICAgICAgICBjdXJyZW50U2hvcFR5cGU6IDUsIC8v6YCJ5oup5ZWG5bqX57G75Z6LXHJcbiAgICAgICAgICAgIGN1cnJlbnRBcmVhOiAyLCAvL+W9k+WJjeWcsOWMulxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMSwgLy/miYDlnKjlk6rkuKrpobXpnaJcclxuICAgICAgICAgICAgYWJvdmVUYWJsZVJlc3VsdDoge30sIC8v6KGo5qC85LiK6Z2i55qE5pWw5o2uXHJcbiAgICAgICAgICAgIHJlc3VsdDogJycsIC8v5p+l6K+i5Ye65p2l55qE5pWw5o2uXHJcbiAgICAgICAgICAgIHRpbWU6IHsgICAvL+i1t+atouaXtumXtOWvueixoVxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IGRhdGVGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IGRhdGVGb3JtYXRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JkZXI6ICd2aWV3ZWRfcGVyc29uJywgLy/mjpLluo/mlrnlvI9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRldGFpbGVkUmVzdWx0OiBbXSAvL+WVhuWTgeivpue7huiuv+mXruaXpeW/l1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNlbGVjdEFyZWEgPSB0aGlzLmNyZWF0ZVNlbGVjdEFyZWEuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvdyA9IHRoaXMuY3JlYXRlUm93LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUYWJsZSA9IHRoaXMuY3JlYXRlVGFibGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldFBhZ2VOdW0gPSB0aGlzLnNldFBhZ2VOdW0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+W+l+aVsOaNriDov5jpnIDopoHmt7vliqDlh7rplJnnmoTliKTmlq3vvIjvvIlcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICAgIEguc2VydmVyLm90aGVyX2N1c3RvbUFyZWFfbGlzdCh7fSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhcmVhRGF0YTogcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuZnJlc2hEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluihqOagvOS4iumdoueahOaVsOaNriAo5oC75oOF5Ya155qE6K+05piO5pWw5o2uKVxyXG4gICAgZ2V0RGF0YUFib3ZlVGFibGUoKXtcclxuICAgICAgICBsZXQgcGFyYVNob3AgPSB7XHJcbiAgICAgICAgICAgIGRpdmlkZV9pZDogdGhpcy5zdGF0ZS5jdXJyZW50QXJlYSxcclxuICAgICAgICAgICAgcGFnZV90eXBlOiB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICBxdWVyeV90aW1lOiB0aGlzLnN0YXRlLnRpbWUuc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZF90aW1lOiB0aGlzLnN0YXRlLnRpbWUuZW5kLFxyXG4gICAgICAgICAgICBzaG9wX3R5cGU6IHRoaXMuc3RhdGUuY3VycmVudFNob3BUeXBlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09IDYpe1xyXG4gICAgICAgICAgICBsZXQgcGFyYUdvb2RzID0ge1xyXG4gICAgICAgICAgICAgICAgZGl2aWRlX2lkOiB0aGlzLnN0YXRlLmN1cnJlbnRBcmVhLFxyXG4gICAgICAgICAgICAgICAgcGFnZV90eXBlOiB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICAgICAgcXVlcnlfdGltZTogdGhpcy5zdGF0ZS50aW1lLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZW5kX3RpbWU6IHRoaXMuc3RhdGUudGltZS5lbmRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgSC5zZXJ2ZXIuc3RhdGlzdGljX2dvb2RzX2FsbChwYXJhR29vZHMsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYm92ZVRhYmxlUmVzdWx0OiByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgSC5zZXJ2ZXIuc3RhdGlzdGljX3BhZ2VfYWxsKHBhcmFTaG9wLCAocmVzKSA9PntcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhYm92ZVRhYmxlUmVzdWx0OiByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bmiJHku6znmoTnrZvpgInlh7rmnaXnmoTmlbDmja5cclxuICAgIGdldFJlc3VsdCgpe1xyXG4gICAgICAgIGxldCBwYXJhU2hvcCA9IHtcclxuICAgICAgICAgICAgZGl2aWRlX2lkOiB0aGlzLnN0YXRlLmN1cnJlbnRBcmVhLFxyXG4gICAgICAgICAgICBwYWdlX3R5cGU6IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgIHF1ZXJ5X3RpbWU6IHRoaXMuc3RhdGUudGltZS5zdGFydCxcclxuICAgICAgICAgICAgZW5kX3RpbWU6IHRoaXMuc3RhdGUudGltZS5lbmQsXHJcbiAgICAgICAgICAgIHNob3BfdHlwZTogdGhpcy5zdGF0ZS5jdXJyZW50U2hvcFR5cGUsXHJcbiAgICAgICAgICAgIG9yZGVyYnk6IHRoaXMuc3RhdGUub3JkZXIsXHJcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuc3RhdGUucGFnZU5vLFxyXG4gICAgICAgICAgICBzaXplOiAyMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PSA2KXtcclxuICAgICAgICAgICAgbGV0IHBhcmFHb29kcyA9IHtcclxuICAgICAgICAgICAgICAgIGRpdmlkZV9pZDogdGhpcy5zdGF0ZS5jdXJyZW50QXJlYSxcclxuICAgICAgICAgICAgICAgIHBhZ2VfdHlwZTogdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5X3RpbWU6IHRoaXMuc3RhdGUudGltZS5zdGFydCxcclxuICAgICAgICAgICAgICAgIGVuZF90aW1lOiB0aGlzLnN0YXRlLnRpbWUuZW5kLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJieTogdGhpcy5zdGF0ZS5vcmRlcixcclxuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMuc3RhdGUucGFnZU5vLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMjBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgSC5zZXJ2ZXIuc3RhdGlzdGljX2dvb2RzX2RldGFpbChwYXJhR29vZHMsIChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgSC5zZXJ2ZXIuc3RhdGlzdGljX3BhZ2VfZGV0YWlsKHBhcmFTaG9wLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yi35paw5pWw5o2uXHJcbiAgICBmcmVzaERhdGEoKXtcclxuICAgICAgICB0aGlzLmdldERhdGFBYm92ZVRhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRSZXN1bHQoKTtcclxuICAgIH1cclxuICAgIC8v5YiH5o2i5Zyw5Yy6XHJcbiAgICB0b2dnbGVBcmVhKGUpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRBcmVhOiBpbmRleCxcclxuICAgICAgICAgICAgcGFnZU5vOiAxXHJcbiAgICAgICAgfSwgdGhpcy5mcmVzaERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YiH5o2i6aG16Z2iXHJcbiAgICB0b2dnbGVQYWdlKGluZGV4KXtcclxuICAgICAgICBpZihpbmRleCA9PSA2KXtcclxuICAgICAgICAgICAgJCgnLmZpbHRlci1yb3c6ZXEoMyknKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLmZpbHRlci1yb3c6ZXEoMyknKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogaW5kZXgsXHJcbiAgICAgICAgICAgIHBhZ2VObzogMVxyXG4gICAgICAgIH0sIHRoaXMuZnJlc2hEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIh+aNouaJueasoVxyXG4gICAgdG9nZ2xlVHlwZShpbmRleCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTaG9wVHlwZTogaW5kZXgsXHJcbiAgICAgICAgICAgIHBhZ2VObzogMVxyXG4gICAgICAgIH0sIHRoaXMuZnJlc2hEYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXRQYWdlTnVt6KGo5qC85LiL6Z2i55qE5YiG6aG1XHJcbiAgICBzZXRQYWdlTnVtKHBhZ2Upe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwYWdlTm86IHBhZ2UucGFnZVxyXG4gICAgICAgIH0sIHRoaXMuZ2V0UmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WwhuWIneWni+WMluaXtumXtOi1i+WAvOe7mei+k+WFpeahhlxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKCcjdHJhbnNmZXJfb3JkZXJfYnV5ZXJfc3RhcnRUaW1lJykudmFsKHRoaXMuc3RhdGUudGltZS5zdGFydCk7XHJcbiAgICAgICAgJCgnI3RyYW5zZmVyX29yZGVyX2J1eWVyX2VuZFRpbWUnKS52YWwodGhpcy5zdGF0ZS50aW1lLmVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZWFyY2hFdmVudOeCueWHu+etm+mAieaMiemSrlxyXG4gICAgc2VhcmNoRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gJCgnI3RyYW5zZmVyX29yZGVyX2J1eWVyX3N0YXJ0VGltZScpLnZhbCgpO1xyXG4gICAgICAgIGxldCB0aW1lRW5kID0gJCgnI3RyYW5zZmVyX29yZGVyX2J1eWVyX2VuZFRpbWUnKS52YWwoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGltZTp7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogdGltZVN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiB0aW1lRW5kXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2VObzogMVxyXG4gICAgICAgIH0sIHRoaXMuZnJlc2hEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIm+W7uuWPr+S7pemAieaLqeeahOWMuuWfnyhmaWx0ZXIpXHJcbiAgICBjcmVhdGVTZWxlY3RBcmVhKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXJlYURhdGEubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2RhdGEuYXJlYV9pZCA9PSB0aGlzLnN0YXRlLmN1cnJlbnRBcmVhID8gJ2J0biBidG4tc20gYnRuLWRlZmF1bHQnIDogJ2J0biBidG4tc20nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXtkYXRhLmFyZWFfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQXJlYS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntkYXRhLmFyZWFfbmFtZX08L2J0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PSAxID8gJ2J0biBidG4tc20gYnRuLWRlZmF1bHQnIDogJ2J0biBidG4tc20nfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVBhZ2UuYmluZCh0aGlzLCAxKX0gPuWboui0remhtTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT0gMiA/ICdidG4gYnRuLXNtIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLXNtJ30gb25DbGljaz17dGhpcy50b2dnbGVQYWdlLmJpbmQodGhpcywgMil9PuaWsOWTgemhtTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT0gMyA/ICdidG4gYnRuLXNtIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLXNtJ30gb25DbGljaz17dGhpcy50b2dnbGVQYWdlLmJpbmQodGhpcywgMyl9PueDremUgOmhtTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT0gNCA/ICdidG4gYnRuLXNtIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLXNtJ30gb25DbGljaz17dGhpcy50b2dnbGVQYWdlLmJpbmQodGhpcywgNCl9Pua2qOi3jOmhtTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT0gNiA/ICdidG4gYnRuLXNtIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLXNtJ30gb25DbGljaz17dGhpcy50b2dnbGVQYWdlLmJpbmQodGhpcywgNil9PuWVhuWTgemhtTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiPuaYqOaXpTwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9XCJidG4gYnRuLWxnXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzQwcHgnfX0+5pel5pyf6YCJ5oupPC9idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBwcmVmaXg9XCJ0cmFuc2Zlcl9vcmRlcl9idXllcl9cIiB0aXRsZT1cIuaXtumXtOetm+mAiVwiIHNlYXJjaEV2dD17dGhpcy5zZWFyY2hFdmVudC5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmN1cnJlbnRTaG9wVHlwZSA9PSA1ID8gJ2J0biBidG4tc20gYnRuLWRlZmF1bHQnIDogJ2J0biBidG4tc20nfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVR5cGUuYmluZCh0aGlzLCA1KX0gPuWFqOmDqDwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3VycmVudFNob3BUeXBlID09IDEgPyAnYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCcgOiAnYnRuIGJ0bi1zbSd9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlVHlwZS5iaW5kKHRoaXMsIDEpfSA+5LiA5om5PC9idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50U2hvcFR5cGUgPT0gMiA/ICdidG4gYnRuLXNtIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLXNtJ30gb25DbGljaz17dGhpcy50b2dnbGVUeXBlLmJpbmQodGhpcywgMil9ID7kuozmibk8L2J0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmN1cnJlbnRTaG9wVHlwZSA9PSAzID8gJ2J0biBidG4tc20gYnRuLWRlZmF1bHQnIDogJ2J0biBidG4tc20nfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVR5cGUuYmluZCh0aGlzLCAzKX0gPue7iOerrzwvYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ0biBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3VycmVudFNob3BUeXBlID09IDQgPyAnYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCcgOiAnYnRuIGJ0bi1zbSd9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlVHlwZS5iaW5kKHRoaXMsIDQpfSA+5YW25LuWPC9idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50U2hvcFR5cGUgPT0gMCA/ICdidG4gYnRuLXNtIGJ0bi1kZWZhdWx0JyA6ICdidG4gYnRuLXNtJ30gb25DbGljaz17dGhpcy50b2dnbGVUeXBlLmJpbmQodGhpcywgMCl9ID7mnKrms6jlhow8L2J0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJvlu7rmlbDmja7ooYxcclxuICAgIGNyZWF0ZVJvdyhkYXRhLCBpbmRleCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEudXNlcl9pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnNob3BfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnBob25lX251bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLndlY2hhdF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuc2hvcF90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEudmlld2VkX3RpbWVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuc2hhcmVfdGltZXN9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5zdGFydF90aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuc3RvcF90aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIm+W7uuWGheWuueihqOagvCBmb3IgdGVzdGluZ1xyXG4gICAgY3JlYXRlVGFibGUoKXtcclxuICAgICAgICBsZXQgYWJvdmVUYWJsZVJlc3VsdCA9IHtcclxuICAgICAgICAgICAgJ3RvdGFsX3BlcnNvbic6IHRoaXMuc3RhdGUuYWJvdmVUYWJsZVJlc3VsdC50b3RhbF9wZXJzb24sXHJcbiAgICAgICAgICAgICd0b3RhbF92aWV3JzogdGhpcy5zdGF0ZS5hYm92ZVRhYmxlUmVzdWx0LnRvdGFsX3ZpZXcsXHJcbiAgICAgICAgICAgICd0b3RhbF9zaGFyZSc6IHRoaXMuc3RhdGUuYWJvdmVUYWJsZVJlc3VsdC50b3RhbF9zaGFyZSxcclxuICAgICAgICAgICAgJ3RvdGFsX2dvb2RzJzogdGhpcy5zdGF0ZS5hYm92ZVRhYmxlUmVzdWx0LnRvdGFsX2dvb2RzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLnN0YXRlLnJlc3VsdC50b3RhbDtcclxuICAgICAgICBsZXQgdGFibGVUaWxlID0gWyfnlKjmiLdJRCcsICflupfpk7rlkI0nLCAn5omL5py65Y+3JywgJ+W+ruS/oeWQjScsICfnsbvlnosnLCAn5rWP6KeI5qyh5pWwJywgJ+S4u+WKqOWIhuS6q+asoeaVsCcsICfml7bpl7TotbcnLCAn5pe26Ze05q2iJ107XHJcbiAgICAgICAgbGV0IHJvd3MgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yZXN1bHQuZGV0YWlsLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcm93cy5wdXNoKHRoaXMuY3JlYXRlUm93KGRhdGEsIGluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0PuW9k+WJjee7k+aenO+8muWFsXthYm92ZVRhYmxlUmVzdWx0LnRvdGFsX3BlcnNvbn3kurrvvIxcclxuICAgICAgICAgICAgICAgICAgICDmtY/op4jmrKHmlbDvvJp7YWJvdmVUYWJsZVJlc3VsdC50b3RhbF92aWV3fe+8jFxyXG4gICAgICAgICAgICAgICAgICAgIOWIhuS6q+asoeaVsO+8mnthYm92ZVRhYmxlUmVzdWx0LnRvdGFsX3NoYXJlfVxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFibGUgdGl0bGVzPXt0YWJsZVRpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5nIGtleT17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZX0gbWF4UGFnZT17dG90YWwlMjAgPT0gMCA/IHRvdGFsLzIwIDogdG90YWwvMjArMX0gY2xpY2tDYWxsYmFjaz17dGhpcy5zZXRQYWdlTnVtLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUucmVzdWx0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgcGFyYSA9IHtcclxuICAgICAgICAgICAgcXVlcnlfdGltZTogdGhpcy5zdGF0ZS50aW1lLnN0YXJ0LFxyXG4gICAgICAgICAgICBlbmRfdGltZTogdGhpcy5zdGF0ZS50aW1lLmVuZCxcclxuICAgICAgICAgICAgb3JkZXJieTogdGhpcy5zdGF0ZS5vcmRlcixcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlTm8sXHJcbiAgICAgICAgICAgIHNpemU6IDIwXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi13YXJwXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVTZWxlY3RBcmVhKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PSA2ID8gPEdvb2RzUGFnZSBhYm92ZVRhYmxlUmVzdWx0PXt0aGlzLnN0YXRlLmFib3ZlVGFibGVSZXN1bHR9IHJlc3VsdD17dGhpcy5zdGF0ZS5yZXN1bHR9IHBhcmE9e3BhcmF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlTnVtPXt0aGlzLnNldFBhZ2VOdW0uYmluZCh0aGlzKX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFibGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQWNjZXNzTG9nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9wYWdlcy9yb3V0ZXJzL29wZXJhdGlvbi1tYW5hZ2VtZW50L2FjY2Vzcy1sb2cvY29tcG9uZW50cy9hY2Nlc3NfbG9nLmpzeCIsImltcG9ydCBSZWFjdCAsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG4vL2ltcG9ydCBcIi4vanF1ZXJ5LXVpLmxlc3NcIjtcclxuaW1wb3J0IEJ0biBmcm9tIFwiLi4vYnRuL2J0bi5qc1wiO1xyXG5cclxuY2xhc3MgZGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIFx0JC5kYXRlcGlja2VyLnJlZ2lvbmFsWyBcInpoLUNOXCIgXSA9IHtcclxuXHRcdFx0XHRjbG9zZVRleHQ6IFwi5YWz6ZetXCIsXHJcblx0XHRcdFx0cHJldlRleHQ6IFwiJiN4M0M75LiK5pyIXCIsXHJcblx0XHRcdFx0bmV4dFRleHQ6IFwi5LiL5pyIJiN4M0U7XCIsXHJcblx0XHRcdFx0Y3VycmVudFRleHQ6IFwi5LuK5aSpXCIsXHJcblx0XHRcdFx0bW9udGhOYW1lczogWyBcIuS4gOaciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcclxuXHRcdFx0XHRcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Y2B5LiA5pyIXCIsXCLljYHkuozmnIhcIiBdLFxyXG5cdFx0XHRcdG1vbnRoTmFtZXNTaG9ydDogWyBcIuS4gOaciFwiLFwi5LqM5pyIXCIsXCLkuInmnIhcIixcIuWbm+aciFwiLFwi5LqU5pyIXCIsXCLlha3mnIhcIixcclxuXHRcdFx0XHRcIuS4g+aciFwiLFwi5YWr5pyIXCIsXCLkuZ3mnIhcIixcIuWNgeaciFwiLFwi5Y2B5LiA5pyIXCIsXCLljYHkuozmnIhcIiBdLFxyXG5cdFx0XHRcdGRheU5hbWVzOiBbIFwi5pif5pyf5pelXCIsXCLmmJ/mnJ/kuIBcIixcIuaYn+acn+S6jFwiLFwi5pif5pyf5LiJXCIsXCLmmJ/mnJ/lm5tcIixcIuaYn+acn+S6lFwiLFwi5pif5pyf5YWtXCIgXSxcclxuXHRcdFx0XHRkYXlOYW1lc1Nob3J0OiBbIFwi5ZGo5pelXCIsXCLlkajkuIBcIixcIuWRqOS6jFwiLFwi5ZGo5LiJXCIsXCLlkajlm5tcIixcIuWRqOS6lFwiLFwi5ZGo5YWtXCIgXSxcclxuXHRcdFx0XHRkYXlOYW1lc01pbjogWyBcIuaXpVwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiIF0sXHJcblx0XHRcdFx0d2Vla0hlYWRlcjogXCLlkahcIixcclxuXHRcdFx0XHRkYXRlRm9ybWF0OiBcInl5LW1tLWRkXCIsXHJcblx0XHRcdFx0Zmlyc3REYXk6IDEsXHJcblx0XHRcdFx0aXNSVEw6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dNb250aEFmdGVyWWVhcjogdHJ1ZSxcclxuXHRcdFx0XHR5ZWFyU3VmZml4OiBcIuW5tFwiIFxyXG5cdFx0fTtcclxuXHRsZXQgc3RhcnRUaW1lSWQgPSAodGhpcy5wcm9wcy5wcmVmaXggPyB0aGlzLnByb3BzLnByZWZpeCA6IFwiXCIpICsgXCJzdGFydFRpbWVcIixcclxuXHQgICAgZW5kVGltZUlkID0gKHRoaXMucHJvcHMucHJlZml4ID8gdGhpcy5wcm9wcy5wcmVmaXggOiBcIlwiKSArIFwiZW5kVGltZVwiO1xyXG5cdGxldCAkZGF0ZUlucHV0RiA9ICQoJyMnK3N0YXJ0VGltZUlkKSxcclxuXHQgICAgJGRhdGVJbnB1dFQgPSAkKCcjJytlbmRUaW1lSWQpO1xyXG5cdCAgICAkLmRhdGVwaWNrZXIuc2V0RGVmYXVsdHMoICQuZGF0ZXBpY2tlci5yZWdpb25hbFsgXCJ6aC1DTlwiIF0gKTtcclxuXHQgICAgXHJcblx0ICAgICRkYXRlSW5wdXRGLmRhdGVwaWNrZXIoe1xyXG5cdFx0XHRkYXRlRm9ybWF0OiAneXktbW0tZGQnLFxyXG5cdFx0XHRjaGFuZ2VNb250aDogdHJ1ZSxcclxuXHRcdFx0Y2hhbmdlWWVhcjogdHJ1ZSxcclxuXHRcdFx0b25DbG9zZTogZnVuY3Rpb24oc2VsZWN0RGF0ZSl7XHJcblx0XHRcdFx0JGRhdGVJbnB1dFQuZGF0ZXBpY2tlciggXCJvcHRpb25cIiwgXCJtaW5EYXRlXCIsIHNlbGVjdERhdGUgKTtcclxuXHRcdFx0fVxyXG5cdCAgICB9KTtcclxuXHRcdFxyXG5cdCAgICAkZGF0ZUlucHV0VC5kYXRlcGlja2VyKHtcclxuXHRcdFx0ZGF0ZUZvcm1hdDogJ3l5LW1tLWRkJyxcclxuXHRcdFx0Y2hhbmdlTW9udGg6IHRydWUsXHJcblx0XHRcdGNoYW5nZVllYXI6IHRydWUsXHJcblx0XHRcdG9uQ2xvc2U6IGZ1bmN0aW9uKHNlbGVjdERhdGUpe1xyXG5cdFx0XHRcdCRkYXRlSW5wdXRGLmRhdGVwaWNrZXIoIFwib3B0aW9uXCIsIFwibWF4RGF0ZVwiLCBzZWxlY3REYXRlICk7XHJcblx0XHRcdH1cclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAkZGF0ZUlucHV0VC52YWwoSC5EYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBILkRhdGUuZ2V0TW9udGgoKSArICctJyArIEguRGF0ZS5nZXREYXRlKCkpO1xyXG5cdCAgICAkZGF0ZUlucHV0Ri52YWwoSC5nZXRTb3Vyb3VuZERhdGUoNykpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hIYW5kbGVyKGUpe1xyXG4gICAgXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcdHRoaXMucHJvcHMuc2VhcmNoRXZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICBcdHJldHVybihcclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2VhcmNoLXdcIj5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17KHRoaXMucHJvcHMucHJlZml4ID8gdGhpcy5wcm9wcy5wcmVmaXggOiBcIlwiKSArIFwic3RhcnRUaW1lXCJ9IHBsYWNlaG9sZGVyPVwi6LW35aeL5pel5pyfXCIvPlxyXG5cdFx0XHRcdOS4gFxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPXsodGhpcy5wcm9wcy5wcmVmaXg/dGhpcy5wcm9wcy5wcmVmaXg6XCJcIikgKyBcImVuZFRpbWVcIn0gcGxhY2Vob2xkZXI9XCLnu5PmnZ/ml6XmnJ9cIi8+XHJcblx0XHRcdFx0PEJ0biBuYW1lPVwi562b6YCJXCIgYnRuRXZlbnQ9e3RoaXMuc2VhcmNoSGFuZGxlcn0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgIFx0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0ZVBpY2tlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9pbmRleC5qc3giLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTYvMi8xLlxyXG4gKiDmjInpkq5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vKuaMiemSrue7hOS7tjsqL1xyXG5jbGFzcyBCdG4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gYnRuLWRlZmF1bHQgXCIgKyB0aGlzLnByb3BzLm90aGVyQ2xhc3N9IG9uQ2xpY2s9e3RoaXMucHJvcHMuYnRuRXZlbnR9ID57dGhpcy5wcm9wcy5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnRuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9jb21wb25lbnRzL2J0bi9idG4uanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTYvMS8yOS5cclxuICog6KGo5qC857uE5Lu2XHJcbiAqIEBwYXJhbSBoZWFkVGV4dEFyciA9IFsn5pS25qy+SUQnLCforqLljZVJRCcsJ+S7mOasvuS6uicsJ+WunuaUtumHkeminScsJ+iuouWNlemHkeminScsJ+S8mOaDoOmHkeminScsJ+S7mOasvuaWueW8jycsJ+ehruiupOS6uicsJ+i1hOmHkeS9jee9ricsJ+S7mOasvuehruiupOaXtumXtCcsJ+aTjeS9nCddXHJcbiAqXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8q6KGo5qC85aS0Ki9cclxuY2xhc3MgVGFibGVIZWFkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWJsZVRpbGUubWFwKGZ1bmN0aW9uICh0aXRsZSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleT17aW5kZXh9Pnt0aXRsZX08L3RoPiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbi8q5pW05Liq6KGoKi9cclxuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBoZWFkVGV4dEFyciA9IHRoaXMucHJvcHMudGl0bGVzLFxyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5wcm9wcy5yZXM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD48VGFibGVIZWFkIHRhYmxlVGlsZT17aGVhZFRleHRBcnJ9IC8+PC90aGVhZD5cclxuICAgICAgICAgICAgICAgIHsvKjxUYWJsZUJvZHkgZGF0YT17ZGF0YX0gdHlwZXM9e3RoaXMucHJvcHMudHlwZXN9IC8+Ki99XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9jb21wb25lbnRzL3RhYmxlL3RhYmxlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlcy5qcyc7XHJcbmltcG9ydCBQYWdpbmcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlL3BhZ2luZy5qcyc7XHJcblxyXG5jbGFzcyBHb29kc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGluZm9QYW5lbDoge1xyXG4gICAgICAgICAgICAgICAgaXNTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZm9QYW5lbFRpdGxlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnb29kc0RldGFpbDogJycsXHJcbiAgICAgICAgICAgIHBhZ2VObzogMVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJvlu7rmlbDmja7ooYxcclxuICAgIGNyZWF0ZVJvdyhkYXRhLCBpbmRleCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZ29vZHNfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5nb29kc19uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuc3VwcGxpZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS52aWV3ZWRfcGVyc29ufTxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUluZm9QYW5lbC5iaW5kKHRoaXMsIGRhdGEuZ29vZHNfaWQpfSBzdHlsZT17e2NvbG9yOiAnYmx1ZSd9fT7mmI7nu4Y8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS52aWV3ZWRfdGltZXN9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5zaGFyZV90aW1lc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntkYXRhLnN0YXJ0X3RpbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5zdG9wX3RpbWV9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhcmVudFBhZ2VOdW0ocGFnZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYWdlTnVtKHBhZ2UpO1xyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlIGEgbmV3IHRhYmxlXHJcbiAgICBjcmVhdGVUYWJsZSgpe1xyXG4gICAgICAgIGxldCB0YWJsZVRpbGUgPSBbJ+WVhuWTgUlEJywgJ+WVhuWTgeWQjScsICfkvpvlupTllYYnLCAn5rWP6KeI5Lq65pWwJywgJ+a1j+iniOasoeaVsCcsICfliIbkuqvmrKHmlbAnLCAn5pe26Ze06LW3JywgJ+aXtumXtOatoiddO1xyXG4gICAgICAgIGxldCByb3dzID0gW107XHJcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5wcm9wcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXN1bHQuZGV0YWlsLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcm93cy5wdXNoKHRoaXMuY3JlYXRlUm93KGRhdGEsIGluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHRpdGxlcz17dGFibGVUaWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5nIG1heFBhZ2U9e3RvdGFsJTIwID09IDAgPyB0b3RhbC8yMCA6IHRvdGFsLzIwKzF9IGNsaWNrQ2FsbGJhY2s9e3RoaXMuc2V0UGFyZW50UGFnZU51bS5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICDlvLnlh7rpnaLmnb9cclxuICAgICovXHJcbiAgICAvL+W8ueWHuumhuVxyXG4gICAgY3JlYXRlUGFuZWxJdGVtKGdvb2RzLCBpbmRleCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntnb29kcy51c2VyX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2dvb2RzLnNob3BfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntnb29kcy5waG9uZV9udW1iZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57Z29vZHMud2VjaGF0X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57Z29vZHMuc2hvcF90eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2dvb2RzLnZpZXdlZF90aW1lc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntnb29kcy5zaGFyZV90aW1lc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntnb29kcy5zdGFydF90aW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2dvb2RzLnN0b3BfdGltZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflvpfllYblk4Hor6bmg4XmlbDmja5cclxuICAgIGdldEdvb2RzRGV0YWlsRGF0YShnb29kc0lkKXtcclxuICAgICAgICBsZXQgcGFyYSA9IHtcclxuICAgICAgICAgICAgZ29vZHNfaWQ6IGdvb2RzSWQsXHJcbiAgICAgICAgICAgIHF1ZXJ5X3RpbWU6IHRoaXMucHJvcHMucGFyYS5xdWVyeV90aW1lLFxyXG4gICAgICAgICAgICBlbmRfdGltZTogdGhpcy5wcm9wcy5wYXJhLmVuZF90aW1lLFxyXG4gICAgICAgICAgICBvcmRlcmJ5OiB0aGlzLnByb3BzLnBhcmEub3JkZXJieSxcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlTm8sXHJcbiAgICAgICAgICAgIHNpemU6IHRoaXMucHJvcHMucGFyYS5zaXplXHJcbiAgICAgICAgfTtcclxuICAgICAgICBILnNlcnZlci5zdGF0aXN0aWNfZ29vZHNTcGVjaWZpY19kZXRhaWwocGFyYSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGdvb2RzRGV0YWlsOiByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WkhOeQhuW8ueWHuumdouadv+eahOaYvuekulxyXG4gICAgaGFuZGxlSW5mb1BhbmVsKGdvb2RzSWQpe1xyXG4gICAgICAgIGxldCBib29sID0gdGhpcy5zdGF0ZS5pbmZvUGFuZWwuaXNTaG93OyAvL+aYr+WQpuaYvuekulxyXG4gICAgICAgIGlmKCFib29sKXtcclxuICAgICAgICAgICB0aGlzLmdldEdvb2RzRGV0YWlsRGF0YShnb29kc0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGluZm9QYW5lbDp7XHJcbiAgICAgICAgICAgICAgICBpc1Nob3c6ICFib29sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2VObzogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhZ2VOdW0ocGFnZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhZ2VObzogcGFnZS5wYWdlXHJcbiAgICAgICAgfSwgdGhpcy5nZXRHb29kc0RldGFpbERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5by55Ye66Z2i5p2/XHJcbiAgICBpbmZvUGFuZWwoKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5nb29kc0RldGFpbCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5zdGF0ZS5nb29kc0RldGFpbC50b3RhbDtcclxuICAgICAgICB0aGlzLnN0YXRlLmdvb2RzRGV0YWlsLmRldGFpbC5tYXAoKGdvb2RzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlUGFuZWxJdGVtKGdvb2RzLCBpbmRleCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGlzLnN0YXRlLmluZm9QYW5lbC5pc1Nob3cgPyAnc2VjdGlvbi10ci1pbmZvIHNob3cnIDogJ3NlY3Rpb24tdHItaW5mbycgfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImluZm8tY2xvc2UtYnRuXCIgdGl0bGU9XCLngrnlh7vpmpDol4/lvLnlh7rlsYJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUluZm9QYW5lbC5iaW5kKHRoaXMpfT5jbG9zZTwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby13XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImluZm8tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5mb1BhbmVsLmluZm9QYW5lbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLW1haW4td1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9QYW5lbC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXIgdGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nlKjmiLdJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lupfpk7rlkI08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5omL5py65Y+3PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW+ruS/oeWQjTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nsbvlnos8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5rWP6KeI5qyh5pWwPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS4u+WKqOWIhuS6q+asoeaVsDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ml7bpl7Totbc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pe26Ze05q2iPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZ29vZHNEZXRhaWwgPyBpdGVtcyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5nIG1heFBhZ2U9e3RvdGFsJTIwID09IDAgPyB0b3RhbC8yMCA6IHRvdGFsLzIwKzF9IGNsaWNrQ2FsbGJhY2s9e3RoaXMuc2V0UGFnZU51bS5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQ+5b2T5YmN57uT5p6c77ya5YWxe3RoaXMucHJvcHMuYWJvdmVUYWJsZVJlc3VsdC50b3RhbF9nb29kc33ku7bllYblk4HvvIxcclxuICAgICAgICAgICAgICAgICAgICDmgLvmtY/op4jkurrmlbDvvJp7dGhpcy5wcm9wcy5hYm92ZVRhYmxlUmVzdWx0LnRvdGFsX3BlcnNvbn3kurrvvIxcclxuICAgICAgICAgICAgICAgICAgICDmgLvmtY/op4jmrKHmlbDvvJp7dGhpcy5wcm9wcy5hYm92ZVRhYmxlUmVzdWx0LnRvdGFsX3ZpZXd977yMXHJcbiAgICAgICAgICAgICAgICAgICAg5oC75YiG5Lqr5qyh5pWw77yae3RoaXMucHJvcHMuYWJvdmVUYWJsZVJlc3VsdC50b3RhbF9zaGFyZX1cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlVGFibGUoKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5pbmZvUGFuZWwoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHb29kc1BhZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3BhZ2VzL3JvdXRlcnMvb3BlcmF0aW9uLW1hbmFnZW1lbnQvYWNjZXNzLWxvZy9jb21wb25lbnRzL2dvb2RzX3BhZ2UuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==