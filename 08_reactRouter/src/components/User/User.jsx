import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()

  return (
    <div className='flex items-center justify-center py-3 px-6 text-2xl bg-zinc-700 text-zinc-400 rounded-xl w-fit mx-auto'>
      User: {userid}
    </div>
  )
}

export default User
