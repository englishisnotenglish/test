import React, {Component} from 'react'

class Button extends Component{
    constructor(){
        super();
        this.config = {
            angle: Math.PI / 6,
            Ox: 600,
            Oy: 200,
            Ro: 150,
            Ri: 75
        } ;
    }

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
                y: Oy - Math.sin(curAngle) * Ri
            };
            newRight = {
                x: Ox + Math.cos(curAngle) * Ro,
                y: Oy - Math.sin(curAngle) * Ro
            };

            path = `M ${lastLeft.x} ${lastLeft.y} L ${lastRight.x} ${lastRight.y} L ${newRight.x} ${newRight.y} L ${newLeft.x} ${newLeft.y} L ${lastLeft.x} ${lastLeft.y} Z`;
            arr.push(<path data-id={curAngle} onClick={(e)=>{console.log(e.target, e.target.getAttribute('data-id'));}} d={path} style={{fill: 'black', stroke: '#345', strokeWidth: 1.5}} />);
            lastLeft = newLeft;
            lastRight = newRight;
        }while(curAngle + angle <= Math.PI );
        return arr;
    }

    render(){
        return <svg width="100%" height="100%" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">{this.createButtons()}</svg>;
    }
}
export default Button;