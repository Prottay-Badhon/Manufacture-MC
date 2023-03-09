import React from 'react'
import { BeakerIcon,FlagIcon } from '@heroicons/react/24/outline'

const Summary = ({children,quantity,label}) => {
  return (
    <div className='flex flex-col items-center gap-y-3'>
      {
        children
      }
      <h1 className='text-4xl font-bold'>{quantity}+</h1>
      <h3 className='text-xl text-accent font-bold'>{label}</h3>
    </div>
  )
}

export default Summary
