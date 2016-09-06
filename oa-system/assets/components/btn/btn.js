/**
 * Created by Administrator on 2016/2/1.
 * 按钮
 */
import React from 'react';

/*按钮组件;*/
class Btn extends React.Component {

    reader() {
        return (
            <button className={"btn btn-default " + this.props.otherClass} onClick={this.props.btnEvent} >{this.props.name}</button>
        )
    }
}

export default Btn;