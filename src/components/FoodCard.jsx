import React from 'react'

const FoodCard = (props) => {
  return (
    <section>
      <div><img src={`/assets/${props.img}`} alt="" /></div>
    </section>
  )
}

export default FoodCard
