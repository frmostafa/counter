import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
   
   
    render() { 
        const { onReset , counters , onDecrement , onIncrement , onDelete} = this.props;

        return (<div>
            <button onClick={onReset} className="btn btn-primary m-2">Reset</button>
            {counters.map(counter => <Counter onIncrement={()=>{onIncrement(counter)}} onDecrement={() => {onDecrement(counter)}} onDelete={()=>{onDelete(counter.id)}} key={counter.id} counter={counter} />)}
        </div>);
    }
}
 
export default Counters;