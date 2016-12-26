//商贸系统-商贸公司;
import TradeCompany from './trade-company/trade_ctrl.jsx';

class TradeSystemRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router  history={hashHistory} >
                <Route path="TradeSystemRouter" component={null}>
                    <Route path="TradeCompany" component={TradeCompany}>
                    </Route>
                </Route>
            </Router>
        );
    }
}
export default TradeSystemRouter;




