/*
* 图标按钮
* id : ''    父类的id 区别操作
* margin: '' 上间距
* clickCallback: fn  单击后的回调
* iconStyle: '' 图标样式
* href: ''      超链接
* btnStyle: ''  按钮样式
* btnName:  ''  按钮名字
* */
/*
*  <IconButton  id='test' iconStyle='test' buttonStyle='btn-primary'
*     btnName='上架' margin={'10px'}/>
* */

class IconButton extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="cell-column" onClick={this.props.clickCallback} data-operate={this.props.operate} data-para={this.props.para}>
                <div className="cell-head" >
                    <i className={this.props.iconStyle} >{this.props.num}</i>
                </div>

                <div className="cell-body" style={this.props.margin || {marginTop: '5px'}} >
                    <a href='javascript:;' className={this.props.btnStyle} >{this.props.btnName}</a>
                </div>
            </div>
        );
    }
}
export default IconButton;