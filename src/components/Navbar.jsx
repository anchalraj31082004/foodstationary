import {FiSearch} from 'react-icons/fi'
import {FcLike} from 'react-icons/fc'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='flex flex-col'>
      <div className='flex justify-between px-10 py-3 bg-[--primary-dark] items-center text-white'>
        <div className='flex justify-between border-b-2'>
            <input type="text" placeholder='Search here' className='bg-[--primary-dark] text-lg'/>
            <FiSearch className='text-3xl '/>
        </div>
        <div>
            <img src="/assets/logo.png" alt="" />
        </div>
        <div className='flex justify-between gap-10 text-2xl '>
            Register/Login
            <FcLike className='text-3xl'/>
            <AiOutlineShoppingCart className='text-3xl' />
        </div>
      </div>
      <div className='text-[--primary-dark] font-bold'>
        <ul className='flex justify-between items-center text-center bg-[#ffffff] px-80 py-5'>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
