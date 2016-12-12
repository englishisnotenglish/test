import IconButton from '../icon-button/icon_button.jsx';
/*
 * 图标按钮组
 * id : []    父类的id 区别操作
 * margin: [] 上间距
 * clickCallback: fn  单击后的回调
 * iconStyles: [] 图标样式
 * href: []      超链接
 * btnStyles: []  按钮样式
 * btnNames:  []  按钮名字
 * operate: []  给按钮绑定的操作
 * para: []     给按钮绑定的参数
 * */
/*
 btnNames = ['上架', '上架', '下架架'],
 iconStyles = ['test', 'test', 'test'],
 btnStyles = ['btn-primary', 'btn-primary', 'btn-primary'],
 margin = [{marginTop:'10px'}, {marginTop:'10px'}, {marginTop:'10px'}];
 <div>
     <IconBtnGroup btnNames={btnNames} iconStyles={iconStyles}
     btnStyles={btnStyles} margin={margin} boxStyle={{padding: '15px', border: '1px solid'}}/>
 </div>
 */

class IconBtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.slider = this.slider.bind(this);
    }

    static defaultProps = {
        para: [0, 1, 2, 3, 4, 5, 6]
    };

    componentWillMount(){
        let props = this.props,
            width = document.body.clientWidth;
        props.rate = (width - 30) / 3;
    }

    //创建按钮
    createButton(){
        let btnNames = this.props.btnNames,
            margin = this.props.margin,
            iconStyles = this.props.iconStyles,
            btnStyles = this.props.btnStyles,
            operate = this.props.operate,
            para = this.props.para,
            buttons = new Array(btnNames.length);
        btnNames.map((btnName, index) => {
            buttons[index] = <IconButton key={index} iconStyle={iconStyles[index]} buttonStyle={btnStyles[index]}
                         btnName={btnName} margin={margin?margin[index]:null} operate={operate?operate[index]:null} para={para?para[index]:null}  />;
        });
        return buttons;
    }

    slider(e){
        if(this.props.slider){
            let refs = this.refs,
                index = $(e.target).parents('.cell-column').data('para'),
                rate = this.props.rate;
            let offset = index * rate;
            refs.slider.style.webkitTransition = 'all 300ms ease';
            refs.slider.style.webkitTransform = 'translate3d('+ offset +'px, 0, 0)';
        }
    }

    //处理点击事件
    handleClick(e){
        this.slider(e);
        this.props.clickCallback && this.props.clickCallback();
    }

    render() {
        return (
            <div className="cells-row" style={this.props.boxStyle || {padding: '10px 15px'}} onClick={this.handleClick.bind(this)}>
                {this.createButton()}
                <div style={{position: 'absolute', bottom: '0'}}>
                    <span ref="slider" className={this.props.slider} style={{width: this.props.rate}} >{null}</span>
                </div>
            </div>
        );
    }
}
export default IconBtnGroup;