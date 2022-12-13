import React,{useState,useEffect} from 'react'
import '../style/style.css'

const Multiplication = () => {
  const[time,setTime]=useState(0)
  const[value,setValue]=useState(0)
  useEffect(() => {
  setInterval(() => {
    setTime(()=>time+1)
    setValue(()=>JSON.parse(localStorage.getItem('number')))
  }, 1000);
  }, [setTime,time])
  return (
    <>
    <div className='Box'>
    <p className='val'>  -5 *{value}</p>
    <div className='outerAnsBox'>
    <div className='ansBox'>{-5*value}</div>
    </div>
    
        </div>
  
        </>
  )
}

export default Multiplication