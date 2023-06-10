import React from 'react'
import Button from './Button'

import {AiOutlineArrowLeft} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='bg-[url(/assets/hero.png)] h-[calc(100vh-145px)] bg-center bg-no-repeat bg-cover text-[--primary-dark] flex flex-col gap-5'>
      <div className='max-w-xl pt-44 pl-20 flex flex-col gap-4'>
        <h1 className='text-5xl font-bold'>AMERICAN FOOD</h1>
        <h2 className='text-4xl border-b-4 border-[--primary-dark] max-w-fit font-medium pb-2 '>The Best Taste Food</h2>
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum architecto, mollitia consequatur sint porro. Cupiditate quasi eligendi nulla maxime commodi accusamus. Dolor, architecto blanditiis.</p>
      </div>
      <div className='ml-20 flex justify-normal gap-5'>
      <Button text="Order Now" />
      <Button  text={<AiOutlineArrowLeft className='text-2xl' />} />
      </div>
    </div>
  )
}

export default Hero
