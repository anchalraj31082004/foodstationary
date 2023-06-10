import React from 'react'
import FoodCard from './FoodCard'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
      <section className='flex flex-col h-screen items-center text-center pt-10 '>
        <div className='flex flex-col gap-5'> 
          <div className='bg-[url(/assets/blogBg.png)] bg-no-repeat bg-center bg-contain h-auto w-auto'>
              <h2 className=' text-3xl font-bold text-[--primary-dark]'>BLOG</h2>
          </div>
          <div>
              <p className=' font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis <br /> maiores alias eveniet hic reprehenderit.</p>
          </div>
        </div>
        <div className='flex justify-evenly gap-20 pb-20 pt-24'>
            <FoodCard img={`Lblog.png`}/>
            <BlogCard/>
            <FoodCard img={`Rblog.png`}/>
        </div>
      </section>
    )
  }

export default Blog
