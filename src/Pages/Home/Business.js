import React from 'react'
import Summary from './Summary'
import {FlagIcon,UserGroupIcon,HeartIcon,ArrowPathIcon } from '@heroicons/react/24/outline'

const Business = () => {
  return (
    <div className='my-20'>
       <h1 className='text-4xl uppercase text-primary text-center font-bold my-5'>Millions Business trust us</h1>
       <h2 className='text-xl uppercase text-accent text-center font-bold'>Try to understand the expectation</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:px-20 my-10">
        <Summary quantity={70} label="Countries">
          <FlagIcon className='h-14 w-14 text-primary'></FlagIcon>
        </Summary>
       <Summary quantity={550} label="Happy clients">
        <UserGroupIcon className='h-14 w-14 text-primary'></UserGroupIcon>
       </Summary>
       <Summary quantity={235} label="Complete Projects">
          <ArrowPathIcon className='h-14 w-14 text-primary'></ArrowPathIcon>
       </Summary>
       <Summary quantity={642} label="Feedbacks">
        <HeartIcon className='h-14 w-14 text-primary'></HeartIcon>
       </Summary>
        </div>

    </div>
  )
}

export default Business
