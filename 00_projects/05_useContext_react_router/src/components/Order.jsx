import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order() {
    const navigateBack = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
    <div className='text-3xl font-bold text-center p-4 text-whit '>
      Order Submitted!
    </div>

    <button onClick={() => navigateBack(-1)} className='bg-blue-500 text-white p-4 rounded hover:bg-blue-600 active:bg-blue-700'>Go Back</button>
    </div>
  )
}

export default Order
