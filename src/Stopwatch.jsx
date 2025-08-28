import React, { useEffect, useState } from 'react'

function Stopwatch() {
const [time,setTime]=useState(0);
const [IsRunning,setIsRunning]=useState(false);

useEffect(()=>{
    let intervel;
    if(IsRunning){
        intervel=setInterval(()=>{
            setTime(prevTime=>prevTime+10);
        },10)
    }
    else{
        clearInterval(intervel);
    }
    return()=>clearInterval(intervel);
},[IsRunning]);

  return (
    <div>
      <h1>
        {("0"+Math.floor((time/60000)%60)).slice(-2)}:
        {("0"+Math.floor((time/1000)%60)).slice(-2)}:
        {("0"+((time/10)%100)).slice(-2)}
      </h1>
      <button onClick={()=>setIsRunning(true)}>Start</button>
      <button onClick={()=>setIsRunning(false)}>Stop</button>
      <button onClick={()=>setTime(0)}>Reset</button>
    </div>
  )
}

export default Stopwatch
