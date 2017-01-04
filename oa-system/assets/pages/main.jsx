import React from 'react';
import NavController from './Level-two-nav.jsx';
import LevelOneNav from './Level-one-nav.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: null,
            levelOneMenuId: 0
        };
        this.levelOneMenuId = 0;
    }

    componentWillMount() {
        let server = H.server;
        //获取菜单;
        server.user_navigate({}, (res)=>{
            if(res.code == 0) {
                this.setState({res: res.data});
            }else if(res.code == 10106){
                H.overdue();
            }else {
                H.Modal(res.message);
            }
        });
    }

    setLevelOneMenuId(id) {
        this.setState({levelOneMenuId: id});
    }

    render(){
        return (
            <div>
                <LevelOneNav menu={this.state.res} handler={this.setLevelOneMenuId.bind(this)} />
                <NavController menu={this.state.res} menuId={this.state.levelOneMenuId} />
            </div>
        );
    }
}

export default Main;

