import React from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {
    return (
      <section className='flex flex-col h-screen items-center text-center pt-10 '>
        <div className='flex flex-col gap-5'> 
          <div className='bg-[url(/assets/pricingBg.png)] bg-no-repeat bg-center bg-contain h-auto w-auto'>
              <h2 className=' text-3xl font-bold text-[--primary-dark]'>PRICING</h2>
          </div>
          <div>
              <p className=' font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis <br /> maiores alias eveniet hic reprehenderit.</p>
          </div>
        </div>
        <div className='flex justify-evenly gap-40 pb-20'>
          <PricingCard text="Basic" num="$35"/>
          <PricingCard text="Standard" num="$50" />
          <PricingCard text="Premium" num="$45"/>
        </div>
      </section>
    )
  }

export default Pricing
