////运营管理-访问日志
//import AccessLog from './pages/operation-management/access-log/access_log.jsx';

//权限管理(只有root用户还会有);
import PrivilegeManagement from  './pages/privilege-management/privilege_ctrl.jsx';
import Home from  './pages/home/main.jsx';
//import Refund from  './pages/refund/home.jsx';
//import {Router, hashHistory, Route} from 'react-router';

class TabContentControl extends React.Component {

    constructor(props){
        super(props);
    }

    //刷新
    componentWillMount(){
        console.log(ReactRouter);

    }

    componentWillReceiveProps(){
        let location = window.location,
            url;
        this.props.tabMenuArr.map((el) => {
            location.hash = el.url;
            url = el.url;
        });
        switch (url){
            case '': break;
        }
    }

    render() {
        let Router = ReactRouter.Router;
        let hashHistory = ReactRouter.hashHistory;
        let Route = ReactRouter.Route;
        return (
            <Router  history={hashHistory} >
                <Route path="/home" component={Home}>
                </Route>
            </Router>
        );
    }
}
export default TabContentControl;