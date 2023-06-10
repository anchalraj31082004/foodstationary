import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
      <section className='flex flex-col items-center text-center pt-10 '>
        <div className='flex flex-col gap-5'> 
          <div className='bg-[url(/assets/serviceBg.png)] bg-no-repeat bg-center bg-contain h-auto w-auto'>
              <h2 className=' text-3xl font-bold text-[--primary-dark]'>SERVICE</h2>
          </div>
          <div>
              <p className=' font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis <br /> maiores alias eveniet hic reprehenderit.</p>
          </div>
        </div>
        <div className='flex flex-col gap-10 pb-20'>
          <ServiceCard text="Peanut Butter" img={`card1.png`} num="$45" />
          <ServiceCard text="Pumpkin Pie" img={`card2.png`} num="$35" />
          <ServiceCard text="Jambalaya" img={`card3.png`} num="$50" />
        </div>
      </section>
    )
  }

export default Services
