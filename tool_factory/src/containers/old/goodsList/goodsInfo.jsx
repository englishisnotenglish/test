import React from 'react';
/*
* 商品信息
* goods: {} //商品信息
* footStyle: { //字体样式
*   head: '',
*   body: '',
*   foot: ''
* }
* operateStyle: { //操作的样式
*   head: '',
*   body: '',
*   foot: ''
* }
* clickCallback: fn //回调函数
* imgStyle: '' //图片样式
* */

class GoodsInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.refs.input.value = this.props.goods.price;
    }

    render() {
        let props = this.props,
            goods = props.goods,
            fontStyle = props.fontStyle,
            operateStyle = props.operateStyle;

        return (
            <div className="cell-row" style={{alignItems: 'flex-start', padding: '18px'}}>
                <div className="cell-head">
                    <img className={props.imgStyle} style={{width: '90px', height: '90px'}} src={goods.thumb} />
                </div>

                <div className="cell-body">
                    <div className="cell-column" style={{alignItems: 'flex-start', marginLeft: '15px'}}>
                        <div className="cell-head">
                            <p className={fontStyle?fontStyle.head:null}>{goods.name}</p>
                        </div>

                        <div className="cell-body">
                            <p className={fontStyle?fontStyle.body:null}>型号：{goods.xinghao}</p>
                        </div>

                        <div className="cell-foot">
                            <p className={fontStyle?fontStyle.foot:null}>价格：<input ref="input" className="input-inline"/>{goods.unit}</p>
                        </div>
                    </div>
                </div>

                <div className="cell-foot">
                    <div className="cell-column">
                        <div className="cell-head">
                            <a href="javascript:;" className={operateStyle?operateStyle.head:null} onClick={this.props.clickCallback}>删除</a>
                        </div>

                        <div className="cell-body">

                        </div>

                        <div className="cell-foot">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GoodsInfo;