/**
 * Created by Administrator on 2016/2/1.
 * 下拉选择
 */
import React from "react";

/*选择下拉框,select标签;*/
class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            optionArr: []
        }
    }

    selChange() {
        if(this.props.changeEv) {
            this.props.changeEv(this.refs.selectNode.value);
        }
    }

    componentWillMount(){
        this.setState({optionArr : this.props.dropdownData});
    }

    render() {
        var val = 0,
            DomXml = '',
            dataArr = this.state.optionArr;
        if(this.props.selectVal){
            val = this.props.selectVal;
        }
        var checkData = "";
        if(this.props.checkData){
            checkData = this.props.checkData;
        }
        if(typeof dataArr == 'object') {
            let xml = [];
            val = Object.keys(dataArr)[0];
            for(var i of Object.keys(dataArr)) {
                xml.push(
                    <option value={i} key={i} >{dataArr[i].name}</option>
                );
            }

        }else if(typeof dataArr == 'array') {
            DomXml = dataArr.map((name, index) => {
                var optionVal = "";
                if(checkData[index]){
                    optionVal = checkData[index];
                }else {
                    optionVal = index;
                }
                return <option value={optionVal} key={index} >{name}</option>;
            });
        }
        return (
            <select value={val} className="form-control" onChange={this.selChange} ref="selectNode">
                {DomXml}
            </select>
        );
    }
}

export default DropDown;