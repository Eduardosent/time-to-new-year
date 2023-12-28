import {  useEffect, useState } from 'react';

function TimerCustom({newYear,setNewYear}) {

  let currentTime = new Date();
  let nextyear = currentTime.getFullYear()+1;
let pe = new Date(`Jan 1 ${nextyear} 00:00:00 `);
let seg = 10
//centroamerica GMT-0600
//let day = currentTime.setDate().setHours(14)-Sat Dec 16 2023 21:00:00 GMT-0300
/*let days = Math.floor((pe - currentTime)/(24*60*60*1000));
let hours = (Math.floor((pe - currentTime)/(60*60*1000)))-(days*24);
let minutes = (Math.floor((pe - currentTime)/(60*1000)))-(hours*60+(days*24*60));
let seconds = (Math.floor((pe - currentTime)/1000))-((days*24*60*60)+(hours*60*60)+(minutes*60));*/

let days = 0
let hours = 0
let minutes = 0
let seconds = 10

const [day,setDay] = useState(days);
const [hour,setHour] = useState(hours);
const [minute,setMinute] = useState(minutes);
const [second,setSecond] = useState(seconds);
const [active,setActive] = useState(true);

const setTime = () =>{
  if(active==true){
    setInterval(()=>{
      if(seconds==0 && seg==0){
        setActive(false)
      }
      else{
      seconds--
      seg--
      setSecond(seconds);
      if(seconds<0){
        seconds=59;
        minutes--
        setSecond(seconds)
        setMinute(minutes)
          if(minutes<0){
            minutes==59
            hours--
            setMinute(minutes)
            setHour(hours)
              if(hours<0){
                hours==23
                days--
                setHour(hours)
                setDay(days)
              }
          }
      }
      }
  },1000);
}

};
const newYears = () =>{
  if(!active){
    setNewYear(true)
  }
}
useEffect(() => {
  setTime()
}, [])
newYears()
  return (
    <div className='container'>
      <div className='clock'>
        <div>
          <p className='clock-element point'>{day.toString().padStart(2,'0')}</p>
        </div>
        <div>
          <p className='clock-element point'>{hour.toString().padStart(2,'0')}</p>
        </div>
        <div>
          <p className='clock-element point'>{minute.toString().padStart(2,'0')}</p>
        </div>
        <div>
          <p className='clock-element'>{second.toString().padStart(2,'0')}</p>
        </div>
      </div>
    </div>
  )
}

export default TimerCustom