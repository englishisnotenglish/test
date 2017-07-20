import React from 'react';
import GoodsInfo from './goodsInfo.jsx';

/*
* goodsList: [], 商品列表
* type: 商品类型
* */

class GoodsList extends React.Component {
    constructor(props) {
        super(props);
    }

    createCells(){
        let goodsList = [],
            fontStyle = {
                head: 'head',
                body: 'body',
                foot: 'foot'
            };
        this.props.goodsList.map((goods)=>{
                goodsList.push(
                    <GoodsInfo goods={goods} fontStyle={fontStyle}/>
                );
        });
        return goodsList;
    }

    render() {
        return (
            <div className="cells-column">
                <p>{this.props.type}</p>
                {this.createCells()}
            </div>
        );
    }
}
export default GoodsList;