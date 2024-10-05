import React from 'react'

function FeaturedItem() {
  return (
    <div className='w-full flex gap-4'>
      <section className='w-1/2 border rounded-lg'>
        <img src="https://wallpapercave.com/wp/wp14541133.png" alt="" />
      </section>

      <section className='w-1/2 border rounded-lg'>
        <h1 className='text-3xl text-center'>Featured</h1>
        <h2 className='text-center'>Featured Details</h2>
      </section>
    </div>
  )
}

export default FeaturedItem
