//运营管理-每日推文;
import DailyTweets from './daily-tweets/tweets_ctrl.jsx';

class OperationManagementRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router  history={hashHistory} >
                <Route path="/OperationManagement" component={null}>
                    <Route path="/OperationManagement/DailyTweets" component={DailyTweets}>

                    </Route>
                </Route>
            </Router>
        );
    }
}
export default OperationManagementRouter;




