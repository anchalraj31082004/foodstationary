import {BsYoutube} from 'react-icons/bs'
import Button from './Button'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const AboutCard = (props) => {
  return (
    <section className={`flex justify-between text-start mt-14 gap-56 ${props.fDirection}`}>
      <div className='flex flex-col gap-5'>
        <h3 className=' text-4xl font-bold text-[--primary-dark]'>Let food be thy medicine <br /> medicine be thy food </h3>
        <p className=' font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, blanditiis <br /> nostrum debitis provident adipisci repudiandae expedita dolore deleniti, <br /> velit maiores quod est? Doloribus, ratione voluptatibus?</p>
        <p className=' font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio <br /> delectus necessitatibus vitae veniam ab quae!</p>
        <div className=' flex justify-normal gap-5'>
            <Button text="Order Now" />
            <Button  text={<AiOutlineArrowLeft className='text-2xl' />} />
        </div>
      </div>
      <div className='bg-[url(/assets/flex-row.png)] bg-[--primary-dark] bg-blend-soft-light w-[380px] h-[350px] bg-contain text-center pt-36'>
        <BsYoutube className='text-6xl text-red-600 ml-40'/>
      </div>
    </section>
  )
}

export default AboutCard
