import React, {Component} from 'react';
import  {Router, Link} from 'react-router';

const LinkWrapper = (props) => {
    const Component = props.to ? Link : 'a';
    return (
        <Component {...props}>
            { props.children }
        </Component>
    )}

class Main extends Component{
    render(){
        return (this.props.children ||
        <LinkWrapper to={'old'} className="item">
            sb
        </LinkWrapper>);
    }
}
export default Main;