import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
function App() {
 const [data,setdata]=useState();
 useEffect(()=>{

  async  function fetchdata(){
    try{
      const response=await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      const data=await response.data;
      console.log(data)
      setdata(data);
  
    }catch(err){
       throw new Error("Something went wrong");
    }
  }
  fetchdata();
 
  
 },[])
function handleclick(){
if(!data?.completed){
  alert("Not working")
}
}
console.log(data)
  return (
   <div>
    <h1>{data?.title}</h1>
     <p>{data?.userId}</p>
 {!data.completed && alert("Not working")
 }
   </div>
  )
}

export default App
