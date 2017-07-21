import React, {Component} from 'react'

class Button extends Component{
    constructor(){
        super();
        this.config = {
            angle: Math.PI /6,
            Ox: 200,
            Oy: 200,
            Ro: 50,
            Ri: 30
        } ;
    }

    //update
    //update
    createButtons(){
        const {angle, Ox, Oy, Ro, Ri} = this.config,
                arr = [];
        let lastLeft = {
            x: Ox + Ri,
            y: Oy
        }, lastRight ={
            x: Ox + Ro,
            y: Oy
        },
        curAngle = 0,
        newLeft, newRight, path;
        do{
            curAngle += angle;
            newLeft = {
                x: Ox + Math.cos(curAngle) * Ri,
                y: Oy + Math.sin(curAngle) * Ri
            };
            newRight = {
                x: Ox + Math.cos(curAngle) * Ro,
                y: Oy + Math.sin(curAngle) * Ro
            };
            path = `M ${lastLeft.x} ${lastLeft.y} L ${lastRight.x} ${lastRight.y} C ${newRight.x} ${newRight.y} L ${newLeft.x} ${newLeft.y} C ${lastLeft.x} ${lastLeft.y} Z`;
            console.log(path);
            arr.push(<path key={Math.random} d={path} style={{fill:'white', stroke: 'red', strokeWidth: 2}} />);
            lastLeft = newLeft;
            lastRight = newRight;
        }while(curAngle >= Math.PI);
        return arr;
    }

    render(){
        return <svg width="100%" height="100%" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">{this.createButtons()}</svg>;
    }
}
export default Button;