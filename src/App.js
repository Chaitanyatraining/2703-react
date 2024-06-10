import Header from "./Components/Header"
import ClassComp from "./Components/ClassComp"
import './App.css'
import CounterComp from "./Components/CounterComp"
import Stylings from "./Components/Stylings/Stylings"
import Routing from "./Components/Routing/Routing"
import Home from "./Components/Home"

const App = () => {
  const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routing />
      {/* <ClassComp title="ReactJs" personDetails={person} /> */}
      {/* <CounterComp /> */}
      {/* <Stylings />  */}
    </div>
  )
}

export default App