import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={`px-8 py-3 bg-[--primary-dark] hover:scale-110 hover:text-sky-400 cursor-pointer text-white rounded-tl-2xl rounded-br-2xl`}>{props.text}</button>
    </div>
  )
}

export default Button
