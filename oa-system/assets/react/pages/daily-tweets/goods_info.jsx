import React from 'react';
import PageCtrlBar from '../../../components/page/paging.js';

class GoodsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],   //用户列表数据;
            totalPage: 1,   //总页数;
            defaultParam: {  //获取列表提交的参数;
                page: 1,
                size: 30
            },
            articleType: null,  //当前推文类型;
            privilege: null,  //当前用户的所有权限;
            priceChange: 'rise',  //价格变化 涨='rise' 跌='decline' 涨跌榜查询必须;
            AreaData: null   //当前地区;
        };
        this.getDataList = this.getDataList.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.setState({articleType: this.props.todayArticleType[0]}, () => {
            this.getDataList();
        });

        //当前用户的所有权限获取;
        let tabData = this.props.currentTabData,
            userNavigate = this.props.userNavigate;
        if(this.props.userNavigate && this.props.userNavigate != '') {
            if(userNavigate[tabData.parentId] && userNavigate[tabData.parentId][tabData.id]){
                this.setState({privilege: this.props.userNavigate[tabData.parentId][tabData.id]});
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.AreaData != this.state.AreaData) {
            this.setState({
                AreaData: nextProps.AreaData,
                articleType: this.props.todayArticleType[0]
            }, () => {
                this.getDataList();
            });
        }
    }

    //获取数据列表;
    getDataList() {
        let server = H.server,
            param = {
                area_id: this.props.AreaData.area_id,
                article_type_id: this.state.articleType.id,
                price_change: this.state.priceChange,  //价格变化 涨='rise' 跌='decline' 涨跌榜查询必须
                page: this.state.defaultParam.page,
                size: this.state.defaultParam.size
            };
        server.operate_dailyNews_goods_list(param, (res) => {
            if(res.code == 0) {
                this.setState({
                    data: res.data.goods_info,
                    totalPage: Math.ceil(res.data.total/param.size)
                });
            }else if(res.code == 10106) {
                H.overdue();
            }else {
                H.Modal(res.message);
            }
        });
    }

    //对当前页面的设置;
    changePage(n) {
        let param = this.state.defaultParam,
            newParam = Object.assign(param, n);
        this.setState({defaultParam: newParam}, () => {
            this.getDataList();
        });
    }

    //判断是否有这个功能;
    isHavePrivilege(name) {
        let privilege = this.state.privilege;
        for (let i in privilege) {
            if(privilege[i].name == name) {
                return true;
            }
        }
        return false;
    }

    //切换推文类型查询对应列表;
    changeArticleType(data) {
        this.setState({articleType: data}, () => {
            this.getDataList();
        });
    }

    //商品列表中修改涨价降价;
    riseAndFall(str) {
        this.setState({priceChange: str}, () => {
            this.getDataList();
        });
    }

    //推文商品屏蔽操作;
    shielding(id, goodsId, status) {
        let param = {
            id: id,
            goods_id: goodsId,
            article_type_id: this.state.articleType.id,
            price_change: this.state.priceChange,
            shield_status: status
        };

        H.server.operate_dailyNews_goods_shield(param, (res) => {
            if(res.code == 0) {
                H.Modal('操作成功');
                this.getDataList();
            }else if(res.code == 10106) {
                H.overdue();
            }else {
                H.Modal(res.message);
            }
        });
    }

    render() {
        return (
            <div className="section-warp">
                <div className="section-filter">
                    <form className="form-inline">
                        <div className="filter-row">
                            <div className="btn-group">
                                {
                                    this.props.todayArticleType.map((data, index) => {
                                        return (
                                            <btn key={index}
                                                 className={data == this.state.articleType ? 'btn btn-sm btn-default' : 'btn btn-sm'}
                                                 onClick={this.changeArticleType.bind(this, data)}
                                            >{data.name}</btn>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        {
                            this.state.articleType && this.state.articleType.id == 4 ?
                                <div className="filter-row">
                                    <div className="btn-group">
                                        <btn className={this.state.priceChange == 'rise' ? 'btn btn-sm btn-default' : 'btn btn-sm'} onClick={this.riseAndFall.bind(this, 'rise')}>涨价</btn>
                                        <btn className={this.state.priceChange == 'decline' ? 'btn btn-sm btn-default' : 'btn btn-sm'} onClick={this.riseAndFall.bind(this, 'decline')}>降价</btn>
                                    </div>
                                </div> : ''
                        }
                    </form>
                </div>
                <div className="section-table">
                    <table className="table table-bordered table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>商品ID</th>
                                <th>品名</th>
                                <th>昨日销量</th>
                                <th>价格</th>
                                <th>供应商</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.goods_id}</td>
                                            <td>{data.goods_name}</td>
                                            <td>{data.yesterday_sales_num}</td>
                                            <td>{data.yesterday_price}</td>
                                            <td>{data.sell_shop_name}</td>
                                            <td>
                                                {data.shield_status == 1 ?
                                                    <a onClick={this.shielding.bind(this, data.id, data.goods_id, 2)}>本次屏蔽</a> :
                                                    <a onClick={this.shielding.bind(this, data.id, data.goods_id, 1)}>取消屏蔽</a>}
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <PageCtrlBar pageNum={this.state.defaultParam.page}  maxPage={this.state.totalPage} clickCallback={this.changePage}/>
                </div>
            </div>
        );
    }
}

export default GoodsInfo;