webpackJsonp([2,4],{

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(237);

	var _index2 = _interopRequireDefault(_index);

	var _paging = __webpack_require__(239);

	var _paging2 = _interopRequireDefault(_paging);

	var _tables = __webpack_require__(240);

	var _tables2 = _interopRequireDefault(_tables);

	var _goods_page = __webpack_require__(241);

	var _goods_page2 = _interopRequireDefault(_goods_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccessLog = function (_React$Component) {
	    _inherits(AccessLog, _React$Component);

	    function AccessLog() {
	        _classCallCheck(this, AccessLog);

	        var _this = _possibleConstructorReturn(this, (AccessLog.__proto__ || Object.getPrototypeOf(AccessLog)).call(this));

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


	    _createClass(AccessLog, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            H.server.other_customArea_list({}, function (res) {
	                if (res.code == 0) {
	                    _this2.setState({
	                        areaData: res.data
	                    }, _this2.freshData);
	                }
	            });
	        }

	        //获取表格上面的数据 (总情况的说明数据)

	    }, {
	        key: 'getDataAboveTable',
	        value: function getDataAboveTable() {
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
	        }

	        //获取我们的筛选出来的数据

	    }, {
	        key: 'getResult',
	        value: function getResult() {
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
	        }

	        //刷新数据

	    }, {
	        key: 'freshData',
	        value: function freshData() {
	            this.getDataAboveTable();
	            this.getResult();
	        }
	        //切换地区

	    }, {
	        key: 'toggleArea',
	        value: function toggleArea(e) {
	            var index = e.target.dataset.index;
	            this.setState({
	                currentArea: index,
	                pageNo: 1
	            }, this.freshData);
	        }

	        //切换页面

	    }, {
	        key: 'togglePage',
	        value: function togglePage(index) {
	            if (index == 6) {
	                $('.filter-row:eq(3)').css({ 'display': 'none' });
	            } else {
	                $('.filter-row:eq(3)').css({ 'display': 'block' });
	            }
	            this.setState({
	                currentPage: index,
	                pageNo: 1
	            }, this.freshData);
	        }

	        //切换批次

	    }, {
	        key: 'toggleType',
	        value: function toggleType(index) {
	            this.setState({
	                currentShopType: index,
	                pageNo: 1
	            }, this.freshData);
	        }

	        //setPageNum表格下面的分页

	    }, {
	        key: 'setPageNum',
	        value: function setPageNum(page) {
	            this.setState({
	                pageNo: page.page
	            }, this.getResult);
	        }

	        //将初始化时间赋值给输入框

	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            $('#transfer_order_buyer_startTime').val(this.state.time.start);
	            $('#transfer_order_buyer_endTime').val(this.state.time.end);
	        }

	        //searchEvent点击筛选按钮

	    }, {
	        key: 'searchEvent',
	        value: function searchEvent() {
	            var timeStart = $('#transfer_order_buyer_startTime').val();
	            var timeEnd = $('#transfer_order_buyer_endTime').val();
	            this.setState({
	                time: {
	                    start: timeStart,
	                    end: timeEnd
	                },
	                pageNo: 1
	            }, this.freshData);
	        }

	        //创建可以选择的区域(filter)

	    }, {
	        key: 'createSelectArea',
	        value: function createSelectArea() {
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
	        }

	        //创建数据行

	    }, {
	        key: 'createRow',
	        value: function createRow(data, index) {
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
	        }

	        //创建内容表格 for testing

	    }, {
	        key: 'createTable',
	        value: function createTable() {
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
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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
	        }
	    }]);

	    return AccessLog;
	}(_react2.default.Component);

	module.exports = AccessLog;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _btn = __webpack_require__(238);

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

			return _possibleConstructorReturn(this, (datePicker.__proto__ || Object.getPrototypeOf(datePicker)).apply(this, arguments));
		}

		_createClass(datePicker, [{
			key: "componentDidMount",
			value: function componentDidMount() {
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
			}
		}, {
			key: "searchHandler",
			value: function searchHandler(e) {
				e.preventDefault();
				this.props.searchEvt();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "time-search-w" },
					_react2.default.createElement("input", { type: "text", className: "form-control", id: (this.props.prefix ? this.props.prefix : "") + "startTime", placeholder: "\u8D77\u59CB\u65E5\u671F" }),
					"\u4E00",
					_react2.default.createElement("input", { type: "text", className: "form-control", id: (this.props.prefix ? this.props.prefix : "") + "endTime", placeholder: "\u7ED3\u675F\u65E5\u671F" }),
					_react2.default.createElement(_btn2.default, { name: "\u7B5B\u9009", btnEvent: this.searchHandler })
				);
			}
		}]);

		return datePicker;
	}(_react2.default.Component);

	exports.default = datePicker;

/***/ },

/***/ 238:
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
	var Btn = function (_React$Component) {
	    _inherits(Btn, _React$Component);

	    function Btn() {
	        _classCallCheck(this, Btn);

	        return _possibleConstructorReturn(this, (Btn.__proto__ || Object.getPrototypeOf(Btn)).apply(this, arguments));
	    }

	    _createClass(Btn, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "button",
	                { className: "btn btn-default " + this.props.otherClass, onClick: this.props.btnEvent },
	                this.props.name
	            );
	        }
	    }]);

	    return Btn;
	}(_react2.default.Component);

	exports.default = Btn;

/***/ },

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

/***/ 240:
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

	        return _possibleConstructorReturn(this, (TableHead.__proto__ || Object.getPrototypeOf(TableHead)).apply(this, arguments));
	    }

	    _createClass(TableHead, [{
	        key: "render",
	        value: function render() {
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
	        }
	    }]);

	    return TableHead;
	}(_react2.default.Component);

	/*整个表*/


	var Table = function (_React$Component2) {
	    _inherits(Table, _React$Component2);

	    function Table() {
	        _classCallCheck(this, Table);

	        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	    }

	    _createClass(Table, [{
	        key: "render",
	        value: function render() {
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
	        }
	    }]);

	    return Table;
	}(_react2.default.Component);

	exports.default = Table;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _tables = __webpack_require__(240);

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

	        var _this = _possibleConstructorReturn(this, (GoodsPage.__proto__ || Object.getPrototypeOf(GoodsPage)).call(this));

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


	    _createClass(GoodsPage, [{
	        key: 'createRow',
	        value: function createRow(data, index) {
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
	        }
	    }, {
	        key: 'setParentPageNum',
	        value: function setParentPageNum(page) {
	            this.props.setPageNum(page);
	        }
	        // create a new table

	    }, {
	        key: 'createTable',
	        value: function createTable() {
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
	        }

	        /*
	        弹出面板
	        */
	        //弹出项

	    }, {
	        key: 'createPanelItem',
	        value: function createPanelItem(goods, index) {
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
	        }

	        //获得商品详情数据

	    }, {
	        key: 'getGoodsDetailData',
	        value: function getGoodsDetailData(goodsId) {
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
	        }

	        //处理弹出面板的显示

	    }, {
	        key: 'handleInfoPanel',
	        value: function handleInfoPanel(goodsId) {
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
	        }
	    }, {
	        key: 'setPageNum',
	        value: function setPageNum(page) {
	            this.setState({
	                pageNo: page.page
	            }, this.getGoodsDetailData);
	        }

	        //弹出面板

	    }, {
	        key: 'infoPanel',
	        value: function infoPanel() {
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
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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
	        }
	    }]);

	    return GoodsPage;
	}(_react2.default.Component);

	exports.default = GoodsPage;

/***/ }

});