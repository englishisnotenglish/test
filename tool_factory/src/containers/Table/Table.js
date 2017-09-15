import React, {Component} from 'react'

class Table extends Component{
  constructor(props){
    super(props);
    this.config = {
      angle: Math.PI / 6,
      Ox: 600,
      Oy: 200,
      Ro: 150,
      Ri: 75
    };

    this.state = {
      fresh: {
        ha: true
      }
    };
    this.old = null;
  }

  static defaultProps  = {
    name: '你好'
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState === this.state);
    return true;
  }

  //componentWillUpdate() {
  //  this.state.date = new Date();
  //}

  componentDidUpdate() {
    console.log(new Date() -  this.state.date);
  }

  componentWillMount() {
    this.state.date = new Date();
  }

  componentDidMount() {
    console.log(new Date() - this.state.date);
  }



  fresh = () => {
    this.setState({
      fresh: {
        ha: true
      }
    });
  };

  createTable() {
    const len = 2000,
        arr = [];
    for(var i = 0;  i < len; i++){
        arr.push(<tr key={i} className="test" style={{background: 'blue'}}><td>你好</td><td>你好</td><td>你好</td><td>你好</td><td>你好</td><td>你好</td><td>你好</td></tr>);
    }
    return <table onClick={this.fresh}>
        <tbody>{arr}</tbody>
    </table>;
  }

  render(){
    return <div>
      {this.createTable()}
    </div>;
  }
}
export default Table;