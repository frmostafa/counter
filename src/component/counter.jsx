import React, { Component } from 'react';

class Counter extends React.Component {

   

    render() { 
        return (
        <div className="mt-3">
            <span className={this.getBadgeClasse()}>{this.handlecount()}</span>
            <button type="button" onClick={() => {this.props.onIncrement(this.props.counter)}} className="btn btn-secondary m-2">+</button>
            
            <button type="button" disabled={this.props.counter.value == 0 ? "disabled" : ""} onClick={() => {this.props.onDecrement(this.props.counter)}} className="btn btn-secondary m-2">-</button>
            <button onClick={() => {this.props.onDelete(this.props.counter.id)}} className="btn btn-danger btn-sm m-2">X</button>
        </div>);
    };  

    

     
    getBadgeClasse(){
        let classes = 'm-2 badge bg-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes ;
    };

handlecount(){
    const {value} = this.props.counter;

    return value === 0 ? 'zero' : value ;
}
}
 
export default Counter;