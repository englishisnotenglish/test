import React from 'react';

//带着area_id 去取值
class ReceiveUserList extends React.Component {

    constructor() {
        super();
        this.createRows = this.createRows.bind(this);
    }

    //生成内容行
    createRows(){
        let rows=[];
        this.props.users.map((user, index) => {
            rows.push(
                <tr key={index}>
                    <td>{user.user_id}</td>
                    <td>{user.user_tel}</td>
                    <td>{user.wechat_openid}</td>
                    <td>{user.wechat_name}</td>
                    <td>{user.shop_name}</td>
                    <td>{user.shop_type}</td>
                    <td>{user.interact_time}</td>
                </tr>
            );
        });
        return rows;
    }

    //获得分页的页数
    getPageNum(num){
        this.props.getPageNum(num);
    }

    render(){
        return(
            <div>
                <table className="table table-bordered table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>用户ID</th>
                            <th>手机号</th>
                            <th>OpenID</th>
                            <th>微信名</th>
                            <th>店铺名</th>
                            <th>类型</th>
                            <th>记录时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createRows()}
                    </tbody>
                </table>

                <ul className="pagination">
                    <li><a href="#" className="btn">&laquo;</a></li>
                    <li><a href="#" onClick = {this.getPageNum.bind(this, 1)}> 1 </a></li>
                    <li><a href="#" onClick = {this.getPageNum.bind(this, 2)}> 2 </a></li>
                    <li><a href="#" onClick = {this.getPageNum.bind(this, 3)}> 3 </a></li>
                    <li><a href="#" onClick = {this.getPageNum.bind(this, 4)}> 4 </a></li>
                    <li><a href="#" onClick = {this.getPageNum.bind(this, 5)}> 5 </a></li>
                    <li><a href="#">&raquo;</a></li>
                </ul>
            </div>
        );
    }
}


export  default ReceiveUserList;