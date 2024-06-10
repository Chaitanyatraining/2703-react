import React, { Component } from 'react'

class CounterComp extends Component {
    constructor(){
        super()

        // this.state = {
        //     count: 0,
        //     status: false
        // }
    }

    state = {
        count: 0
    }
    
    // To update the state we use setState
    // never mutate the state directly

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

  render() {
    return (
      <div>
      <h4>Counter Comp</h4>
      <h4>Count: {this.state.count}</h4>
      <button className='btn btn-primary' onClick={()=>{this.handleIncrement()}}>Increment</button>
      <h2>Show this</h2>
      <button className='btn btn-info'>Show</button>
      <button className='btn btn-warning'>Hide</button>
      </div>
    )
  }
}

export default CounterComp