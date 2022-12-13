import React,{useEffect,useState} from 'react'
import '../style/style.css'
const Divider = () => {
  const[time,setTime]=useState(0)
  const[value,setValue]=useState(0)
  useEffect(() => {
  setInterval(() => {
    setTime(()=>time+1)
    setValue(()=>JSON.parse(localStorage.getItem('number')))
  }, 1000);
  }, [setTime,time])
  return (
    <div className='Box'>
    <p className='val'>{value}/7</p>
    <div className='outerAnsBox'>
    <div className='ansBox'>{value/7}</div>
    </div>
    
        </div>
  )
}

export default Divider