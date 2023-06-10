import React from 'react'

const Services = () => {
    return (
      <section className='h-screen flex flex-col items-center text-center pt-10 '>
        <div className='flex flex-col gap-5'> 
          <div className='bg-[url(/assets/serviceBg.png)] bg-no-repeat bg-center bg-contain h-auto w-auto'>
              <h2 className=' text-3xl font-bold text-[--primary-dark]'>SERVICE</h2>
          </div>
          <div>
              <p className=' font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis <br /> maiores alias eveniet hic reprehenderit.</p>
          </div>
        </div>
        <div className='flex flex-col gap-20 pb-10'>
          
        </div>
      </section>
    )
  }

export default Services
