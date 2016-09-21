import React from 'react';

class DailyNewsLog extends React.Component{

    constructor(){
        super();
    }

    componentDidMount(){
        this.initCalendar();
    }

    initCalendar(){
        let date = new Date();
        H.Calendar.init(date.getTime());
    }

    getDate(e){
        console.log($(e.target).text());
    }

    createLogPage(){

    }

    render(){

        return(
            <div id="calendar" onClick={this.getDate.bind(this)}>
                {this.initCalendar()}
            </div>
        );

    }
}

export default DailyNewsLog;