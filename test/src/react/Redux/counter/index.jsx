import Counter from './component/counter.jsx';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Counter
                value={this.props.store.getState()}
                onIncrement={() => this.props.store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => this.props.store.dispatch({ type: 'DECREMENT' })}
            />
        );
    }
}
export default Index;