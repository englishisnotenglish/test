import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    increment(){
        this.props.increment();
    }

    decrement(){
        this.props.decrement();
    }



    render() {
        const {value} = this.props;
        return (
            <div>
                <p>{value}</p>
                <a href="javascript:;" onClick={this.increment}>增加</a>
                <a href="javascript:;" onClick={this.decrement}>减少</a>
            </div>
        );
    }
}
export default Counter;