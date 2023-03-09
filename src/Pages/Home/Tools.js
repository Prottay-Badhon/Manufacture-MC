import React, { useEffect, useState } from 'react'
import Tool from './Tool'

const Tools = () => {
  const [tools,setTools]= useState([])
  useEffect(()=>{
    fetch('tools.json')
    .then(res=> res.json())
    .then(data => setTools(data))
  },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-10  px-5 lg:px-20 my-20'>
      {tools.map(tool => <Tool tool={tool}></Tool>)}
    </div>
  )
}

export default Tools
