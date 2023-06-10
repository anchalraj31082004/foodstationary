import React from 'react'
import Button from './Button'

const BlogCard = () => {
  return (
    <section className='w-[414px] h-[386px] bg-[--tertiary-gray] text-[--primary-dark] flex flex-col gap-10 p-8'>
      <h2 className='text-3xl font-bold'>Eat Food. Not Too Much Mostly Plants</h2>
      <h4 className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad nam ab veniam  Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <Button text="Read More" />
    </section>
  )
}

export default BlogCard
