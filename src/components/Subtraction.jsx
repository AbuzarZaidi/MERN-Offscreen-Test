import React,{useEffect,useState} from 'react'

import '../style/style.css'
const Subtraction = () => {
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
    <p className='val'> 4-{value}</p>
    <div className='outerAnsBox'>
    <div className='ansBox'>{4-value}</div>
  
    </div>

        </div>
 </>
  )
}

export default Subtraction
