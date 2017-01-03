import React from 'react';
class Home extends React.Component {
    constructor(props){
        super(props);
        console.log('in');
    }



    render(){
        let content = '';
        if(this.props.children){
            content = this.props.children;
        }else{
            content = (
                <div>
                    欢迎
                    <p>fasdkjfklas(asdjfdasfl）</p>
                </div>
            );
        }
        return content;
    }
}

module.exports = Home;