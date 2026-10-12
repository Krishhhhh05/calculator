import {useState,useEffect} from "react";
import './App.css';
function App(){
  const [count,setCount] = useState(0);
 
  function increaseCount(){ //log is not representative of actual value
    setCount(prev =>prev+1); 
  }
  function decreaseCount(){ //log is not representative of actual value
    const decValue=count-1;
    setCount(decValue);
  }
  
  
  useEffect(()=>{
    console.log("Count updated:",count);
  },[count]);


  return(
    <div className="counter-component">
      <div className="count">Count</div> 
      <div> {count}</div>
      <button onClick={increaseCount}>Click Me</button>  
      <button  onClick={decreaseCount}>Decrement</button>
         

      </div>
    
  )
}
export default App;
