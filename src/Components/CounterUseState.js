import React, {useState, useEffect} from 'react'

const CounterUseState = () => {
    const [count, setCount] = useState(0)
    const [usersData, setUserData] = useState([])

    useEffect(()=>{
        //this is similar to componentDidMount
        getUserData()
    }, [])

   const getUserData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUserData(data)
        // this.setState({usersData:data})
        // console.log(data)
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }
    
    const handleDecrement = () => {
        setCount(count - 1)
    }

  return (
    <div>
        <h2>CounterUseState</h2>
        <h4>Count: {count}</h4>
        <button className='btn btn-primary me-4' onClick={()=>{handleIncrement()}}>Increment</button>
        <button className='btn btn-secondary' onClick={()=>{handleDecrement()}}>Decrement</button>
    </div>
  )
}

export default CounterUseState