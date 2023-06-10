import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={`px-8 py-3 bg-[--primary-dark] text-white rounded-tl-2xl rounded-br-2xl`}>{props.text}</button>
    </div>
  )
}

export default Button
