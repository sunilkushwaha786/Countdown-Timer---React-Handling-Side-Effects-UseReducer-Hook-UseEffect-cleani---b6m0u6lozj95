import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [timer, setTimer] = useState(0);

  const changeCouter = (e)=>{
    if(e.key === "Enter"){
      if(isNaN(e.target.value)){
      setTimer(0);
    }else{
      setTimer(parseInt(e.target.value));
    }
  }
};

useEffect(()=>{
  const i = setInterval(()=>{
    if(timer === 0){
      setTimer(0);
    }
    if (timer !== 0){
      setTimer(timer - 1);
    }
  }, 1000);

  return()=>{
    clearInterval(i);
  };
},[timer]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={changeCouter} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  )
}


export default App;
