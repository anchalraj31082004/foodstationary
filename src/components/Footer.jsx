import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex justify-between text-white bg-[--primary-dark] py-12 '>
      <div>
        <img className='pt-40 px-20 ' src="/assets/tri.png" alt="" />
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <div><img src="/assets/logo.png" alt="" /></div>
        <div className='flex flex-col gap-2 items-center'>
            <h2 className='text-3xl font-bold'>AMERICAN FOOD </h2>
            <h4  className='text-xl  font-medium'>The Best Taste Food</h4>
        </div>
        <div className='flex justify-normal gap-8 text-3xl items-center'>
            <FaFacebook />
            <FaInstagram/>
            <FaTwitter/>
            <FaWhatsapp/>
        </div>
        <div>
            <h4 className='text-xl font-medium'>FoodWebsite.com</h4>
        </div>
      </div>
      <div>
        <img className='pr-40 pt-10' src="/assets/circle.png" alt="" />
      </div>
    </footer>
  )
}

export default Footer
