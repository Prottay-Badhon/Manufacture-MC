import React, { useEffect, useState } from 'react'
import Tool from './Tool'
import useTools from '../../Hooks/useTools'

const Tools = () => {
  const [tools,setTools]= useTools();
//  console.log(tools);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-10  px-5 lg:px-20 my-20'>
      {tools.map(tool => <Tool tool={tool} key={tool._id}></Tool>)}
    </div>
  )
}

export default Tools
