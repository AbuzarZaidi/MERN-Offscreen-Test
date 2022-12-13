import React,{useState,useEffect} from 'react'
import '../style/style.css'

export const Counter = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    localStorage.setItem('number', JSON.stringify(0));
  }, [])
  
 const increHandler=()=>{
  setNumber(()=>number+1)
  localStorage.setItem('number', JSON.stringify(number+1));
 }
 const decreHandler=()=>{
  setNumber(()=>number-1)
  localStorage.setItem('number', JSON.stringify(number-1));
 }
  return (
    <div className="Box1">
    <div className="val1">
      <div>
        <button className="btn" onClick={increHandler}>
          +
        </button>
      </div>
      <div>
        {" "}
        <p>{number}</p>
      
      
      </div>
      <div>
        {" "}
        <button className="btn" onClick={decreHandler}>
          -
        </button>
   
      </div>
    </div>
  </div>
  )
}

export var currentCount = 0;