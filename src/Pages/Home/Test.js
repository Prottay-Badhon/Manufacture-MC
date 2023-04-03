import React, { useEffect, useState } from 'react'

const Test = () => {
    const [tools,setTools]=useState([])
    useEffect( ()=>{
        fetch("http://localhost:3000/tools.json")
        .then(res=>res.json())
        .then(data => setTools(data))
    },[])
    console.log(tools)
  return (
    <div>
      {tools.length}
    </div>
  )
}

export default Test
