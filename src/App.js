import './App.css';
import React from 'react';
import Counters from './component/counters';
import Navbar from './component/navbarComp';

class App extends React.Component {
  state = {
    counters : [
       {id : 1 , value : 0},
       {id: 2 , value :0},
       {id: 3 , value:3},
       {id: 4 , value:0}
   ]};

   handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});    
}

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}

handleReset = () => {
    const counters = this.state.counters.map(c => {c.value = 0 ; return c});
    this.setState({counters});
}

handelDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters});

}
  render() { 
    return ( 
      <React.Fragment >
        <Navbar lenth={this.state.counters.filter(c=>c.value > 0).length}/>
        <main className="Container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement}
        onDecrement={this.handelDecrement}
        onDelete={this.handleDelete}
        />
        </main>
      </React.Fragment>);
  }
}
 
export default App;

