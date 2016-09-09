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
        H.Calendar.init(date.getYear() + '/' + date.getMonth() + '/' + date.getDay() +' 00:00:00');
        $('#calendar').html(H.Calendar.getCalendar(this.props.dates));
    }

    createLogPage(){

    }

    render(){

        return(
            <div id="calendar">
                {this.initCalendar()}
            </div>
        );

    }
}

export default DailyNewsLog;