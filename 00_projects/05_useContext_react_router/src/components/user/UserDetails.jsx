import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {id} = useParams()
  return (
    <div className='text-4xl font-bold text-center p-4 text-white '>
      User Details : <span className='underline'>{id}</span>
    </div>
  )
}

export default UserDetails
