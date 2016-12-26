//系统设置-账户管理;
import AccountManagement from './account-management/account_ctrl.jsx';
//系统设置-部门管理;
import DepartmentManagement from './department-management/department_ctrl.jsx';
//系统设置-每日推文设置;
import  SetDailyTweets from './set-daily-tweets/set_daily_tweets.jsx';

class SystemSettingRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router  history={hashHistory} >
                <Route path="/systemSetting" component={null}>
                    <Route path="AccountManagement" component={AccountManagement}>

                    </Route>
                    <Route path="DepartmentManagement" component={DepartmentManagement}>

                    </Route>
                    <Route path="SetDailyTweets" component={SetDailyTweets}>

                    </Route>
                </Route>
            </Router>
        );
    }
}
export default SystemSettingRouter;