import React from  'react';

//首页;
import Home from  './pages/home/main.jsx';

//系统设置-账户管理;
import AccountManagement from './pages/account_management/account_ctrl.jsx';

//系统设置-部门管理;
import DepartmentManagement from './pages/department_management/department_ctrl.jsx';

//商贸系统-商贸公司;
import TradeCompany from './pages/trade_company/trade_ctrl.jsx';

//运营管理-每日推文;
import DailyTweets from './pages/daily-tweets/tweets_ctrl.jsx';

//系统设置-每日推文设置;
import  SetDailyTweets from './pages/set-daily-tweets/set_daily_tweets.jsx';

//import DepositMain from  './pages/deposit/home.jsx';
//import WithDrawMain from  './pages/withdraw/home.jsx';
//import MoneyCheck from  './pages/moneycheck/home.jsx';

//权限管理(只有root用户还会有);
import PrivilegeManagement from  './pages/privilege_management/privilege_ctrl.jsx';
//import Refund from  './pages/refund/home.jsx';

class TabContentControl extends React.Component {
    render(){
        return (
            <div className="tab-content" id="tab-content">
                {

                    this.props.tabMenuArr.map((el, index) => {
                        let tid = 'tid_' + el.parentId + '_' + el.id,
                            isActive = el.selected ? 'tab-pane active' : 'tab-pane';
                        let url = el.url,
                            panelContent = null;
                        if (el.id == -1 && el.parentId == -1) {
                            //个人信息设置;
                            panelContent = <PrivilegeManagement />;
                        } else if (el.id == 0 && el.parentId == 0) {
                            //首页;
                            panelContent = <Home userInfo={this.props.userInfo} />;
                        } else if (url.indexOf('trade-company') != -1) {
                            //商贸系统-商贸公司
                            panelContent = <TradeCompany currentTabData={el} userNavigate={this.props.userNavigate.execute_privilege} />;
                        } else if (url.indexOf('account-management') != -1 ) {
                            //系统设置-账户管理
                            panelContent = <AccountManagement currentTabData={el} userNavigate={this.props.userNavigate.execute_privilege} />;
                        } else if (url.indexOf('department-management') != -1 ) {
                            //系统设置-部门管理
                            panelContent = <DepartmentManagement currentTabData={el} userNavigate={this.props.userNavigate.execute_privilege} />;
                        }else if(url.indexOf('set-daily-tweets') !=-1 ){
                            panelContent = <SetDailyTweets />;
                        } else if (url.indexOf('daily-tweets') != -1 ) {
                            //panelContent = <MessControl currentTabData={el}/>;
                            panelContent = <DailyTweets currentTabData={el} userNavigate={this.props.userNavigate.execute_privilege} />;
                        }
                        return (
                            <div key={index} className={isActive} id={tid}>
                                {panelContent}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default TabContentControl;