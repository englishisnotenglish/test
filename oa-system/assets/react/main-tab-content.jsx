////运营管理-访问日志
//import AccessLog from './pages/operation-management/access-log/access_log.jsx';

//权限管理(只有root用户还会有);
import PrivilegeManagement from  './pages/privilege-management/privilege_ctrl.jsx';
//import Refund from  './pages/refund/home.jsx';

class TabContentControl extends React.Component {

    constructor(props){
        super(props);
    }

    //刷新
    componentWillMount(){
        let main = require('./main.jsx');
        this.state.rootRoute = {
            childRoutes: [ {
                path: '/',
                component: require('./main.jsx'),
                childRoutes: [
                    require('./pages/operation-management/router.jsx'),
                    require('./pages/trade-system/router.jsx'),
                    require('./pages/system-setting/router.jsx')
                ]
            } ]
        }
    }

    render() {
        return (
            <Router  history={hashHistory} routers={this.state.rootRoute}>
            </Router>
        );
    }
}

export default TabContentControl;