import React from 'react'

const FoodCard = (props) => {
  return (
    <section className=' hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:rounded-tl-3xl hover:rounded-br-3xl'>
      <div><img src={`/assets/${props.img}`} alt="" /></div>
    </section>
  )
}

export default FoodCard
