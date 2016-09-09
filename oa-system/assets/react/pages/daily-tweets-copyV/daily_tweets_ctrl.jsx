import React from 'react';
import ReceiveUserList from './receive_user_list.jsx';
import DailyNewsLog from './daily_news_log.jsx';
import TodayArticle from './today_article.jsx';

class DailyTweetsCtrl extends React.Component{

    constructor(){
        super();
        this.state = {
            showState: 2, //当前的页面
            usersData: [], //用户的数据
            logsData: {}, //日志数据
            areaData: [], //地区数据
            currentArea: 2, //当前的数据
            page: 1, //分页中页面数
            articleType: []
        };
        this.createTag = this.createTag.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.getPageNum = this.getPageNum.bind(this);
        this.getTweetsLog = this.getTweetsLog.bind(this);
        this.getDataList = this.getDataList.bind(this);
        this.getArticle = this.getArticle.bind(this);
    }

    componentWillMount(){
        this.getAreaData();
        this.getDataList();
    }

    //获得地区的参数
    getAreaData(){
        H.server.other_customArea_list(null, (res) => {
            this.setState({
                areaData: res.data
            });
        });
    }


    //根据状态获得合适的数据
    getDataList(){
        switch (this.state.showState){
            case 1:
                this.getArticle();
                break;
            case 2:
                this.getUserInfo();
                break;
            case 3:
                this.getTweetsLog();
                break;
        }
    }

    getArticle(){
        H.server.other_todayArticle_type(null, (res) =>{
            this.setState({
                articleType: res.data
            });
        });
    }

    //返回的对象是一个数组
    getUserInfo(){
        let para = {
            area_id: this.state.currentArea,
            page: this.state.page,
            size: 10
        };
        H.server.operate_dailyNews_receiveUser_list(para, (res) => {
            if(res.code == 0){
                this.setState({
                    usersData:res.data.user_info
                });
            }
        });
    }

    //返回的data是一个对象
    getTweetsLog(){
        H.server.operate_dailyNews_log_list(null, (res) =>{
           this.setState({
               logsData: res.data
           });
        });
    }

    //创建标签页面
    createTag(){
        let xml = null;
        switch(this.state.showState){
            case 1:
                xml = <TodayArticle currentArea = {this.state.currentArea} type = {this.state.articleType}/>;
                break;
            case 2:
                xml = <ReceiveUserList users = {this.state.usersData} getPageNum = {this.getPageNum} />;
                break;
            case 3:
                xml = <DailyNewsLog dates = {this.state.logsData}/>;
                break;
        }
        return xml;
    }

    switchArea(data){
        this.setState({
            currentArea: data.area_id
        }, this.getDataList);
    }

    switchTag(index){
        this.setState({
            showState: index
        }, this.getDataList);
    }

    //获得分页
    getPageNum(num){
        this.setState({
            page: num
        }, this.getDataList);
    }

    render(){
        return(
            <div className="section-warp">
                <div className="section-filter">
                    <form className="form-inline">
                        <div className="filter-row">
                            <div className="btn-group">
                                <btn className={ this.state.showState === 1 ? 'btn btn-lg btn-default' : 'btn btn-lg'} onClick={this.switchTag.bind(this, 1)}>
                                    今日推文</btn>
                                <btn className={ this.state.showState === 2 ? 'btn btn-lg btn-default' : 'btn btn-lg'} onClick={this.switchTag.bind(this, 2)}>
                                    可推用户名单</btn>
                                <btn className={ this.state.showState === 3 ? 'btn btn-lg btn-default' : 'btn btn-lg'} onClick={this.switchTag.bind(this, 3)}>
                                    推文日志</btn>
                            </div>
                        </div>

                        <div className="filter-row">
                            <div className="btn-group">
                                {
                                    this.state.areaData.map((data, index) => {
                                        return (
                                            <btn key={index}
                                                 className={data.area_id === this.state.currentArea ? 'btn btn-sm btn-default' : 'btn btn-sm'}
                                                 onClick={this.switchArea.bind(this, data)}
                                            >{data.area_name}</btn>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </form>
                </div>

                <div className="section-table">
                    {this.createTag()}
                </div>
            </div>
        );
    }
}
export default DailyTweetsCtrl;